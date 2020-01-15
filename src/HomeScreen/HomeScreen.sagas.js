import { takeEvery, put, call, } from 'redux-saga/effects'
import { LOAD_CLINICS } from './HomeScreen.constants'
import { loadClinicsSuccess, loadClinicsFailed } from './HomeScreen.actions';

import mockData from './mockData';

function emulationOfApiCall() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
}

function* loadClinics() {
  try {
    const clinics = yield call(emulationOfApiCall);

    yield put(loadClinicsSuccess(clinics));
  } catch (e) {
    yield put(loadClinicsFailed(e));
  }
}

function* watchLoadClinics() {
  yield takeEvery(LOAD_CLINICS, loadClinics);
}

export default watchLoadClinics;