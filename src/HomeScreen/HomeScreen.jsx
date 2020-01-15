import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import ClinicCard from './subComponents/ClinicCard';
import { loadClinics } from './HomeScreen.actions';
import './styles/HomeScreen.styles.css';

function HomeScreen() {
  const dispatch = useDispatch();
  // need to use memoization
  const clinics = useSelector(state => {
    const stateClinics = state.homeScreen.clinics;

    if (Array.isArray(stateClinics) && stateClinics.length > 0) {
      return stateClinics.sort((a,b) => {
        if (a.distance > b.distance) return 1;
        if (a.distance < b.distance) return -1;
        return 0
      });
    }
  });
  const isFetchingClinics = useSelector(state => state.homeScreen.isLoading);

  useEffect(() => {
    dispatch(loadClinics());
  }, [dispatch]);

  if (isFetchingClinics) {
    return <div>Loading...</div>
  }

  return (
    <div className='home-screen'>
      <div className='clinics-list'>
        {clinics && clinics.map((clinic, index) => {
          const { name, address, closeTime, rating, distance, image } = clinic;

          return (
            <div className='clinics-list__card-wrapper' key={`${name}${index}`}>
              <ClinicCard
                name={name}
                address={address}
                closeTime={closeTime}
                rating={rating}
                distance={distance}
                image={image}

              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomeScreen;