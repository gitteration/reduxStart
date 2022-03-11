import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import textReducer from '../features/text/TextSlice';

/**
 * configureStore()는 reducer를 통한 state, action dispatch 등의 흐름을 크롬 확장 프로그램인 Redux DevTools를 이용하여 UI로 관리해주는 기능을 제공한다.
 * 
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
  },
});
