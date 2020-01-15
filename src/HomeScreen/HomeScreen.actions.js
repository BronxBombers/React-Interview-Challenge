import { LOAD_CLINICS, LOAD_CLINICS_FAILED, LOAD_CLINICS_SUCCESS } from './HomeScreen.constants'

export const loadClinics = () => ({
  type: LOAD_CLINICS,
});

export const loadClinicsSuccess = clinics => ({
  type: LOAD_CLINICS_SUCCESS,
  payload: clinics,
});

export const loadClinicsFailed = error => ({
  type: LOAD_CLINICS_FAILED,
  payload: error,
});