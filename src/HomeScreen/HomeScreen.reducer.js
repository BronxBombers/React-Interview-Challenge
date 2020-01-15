import { LOAD_CLINICS, LOAD_CLINICS_SUCCESS, LOAD_CLINICS_FAILED } from './HomeScreen.constants';

const initialState = {
  isLoading: false,
  error: null,
  clinics: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CLINICS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_CLINICS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOAD_CLINICS_SUCCESS:
      return {
        isLoading: false,
        error: null,
        clinics: action.payload,
      };

    default:
      return state;
  }
}