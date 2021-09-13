import { GET_QUESTIONS_SUCCESS, GET_QUESTIONS_ERROR,
  ASSERT, SAVE_SCORE, RESET_SCORE, RIGHT_QUESTION, MISS_QUESTION } from '../actions';

const INITIAL_STATE = {
  questions: [],
  error: '',
  asserts: 0,
  score: 0,
  missSoundFx: false,
  rightSoundFx: false,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTIONS_SUCCESS:
    return {
      ...state,
      questions: action.payload,
    };
  case GET_QUESTIONS_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  case ASSERT:
    return {
      ...state,
      asserts: state.asserts + 1,
    };
  case SAVE_SCORE:
    return {
      ...state,
      score: action.payload,
    };
  case RESET_SCORE:
    return {
      ...state,
      score: 0,
      asserts: 0,
    };
  case MISS_QUESTION:
    return {
      ...state,
      missSoundFx: !state.missSoundFx,
    };
  case RIGHT_QUESTION:
    return {
      ...state,
      rightSoundFx: !state.rightSoundFx,
    };
  default:
    return state;
  }
};

export default gameReducer;
