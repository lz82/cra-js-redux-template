import { createSlice } from '@reduxjs/toolkit';
import { getToken, setToken as setTokenInCookie } from '@/utils/auth';
import { appApi } from '@/services';

const initialState = {
  token: getToken(),
  errMsg: '',
  userInfo: {
    username: 'lz',
    age: 18,
    gender: 'M'
  },
  menuCollapsed: false
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers.It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = '';
    },
    setErrMsg: (state, action) => {
      state.errMsg = action.payload;
    },
    clearErrMsg: (state) => {
      state.errMsg = '';
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    toggleMenuCollapsed: (state) => {
      state.menuCollapsed = !state.menuCollapsed;
    }
  }
});

export const {
  setToken,
  clearToken,
  setErrMsg,
  clearErrMsg,
  setUserInfo,
  toggleMenuCollapsed
} = appSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const checkLogin = (data) => async (dispatch) => {
  try {
    const { token } = await appApi.checkLogin(data);
    setTokenInCookie(token);
    dispatch(setToken(token));
  } catch (err) {
    dispatch(setErrMsg(err.toString()));
  }
};

export const getUserInfo = (token) => async (dispatch) => {
  try {
    const res = await appApi.getUserInfoByToken(token);
    dispatch(setUserInfo(res));
  } catch (err) {
    dispatch(setErrMsg(err.toString()));
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectToken = (state) => state.app.token;
export const selectErrMsg = (state) => state.app.errMsg;
export const selectUserInfo = (state) => state.app.userInfo;
export const selectMenuCollapsed = (state) => state.app.menuCollapsed;

export default appSlice.reducer;
