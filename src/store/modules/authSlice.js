import { createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const initialState = {};

export const signUp = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(email, password);
    console.log(user);
  } catch (err) {
    console.log(err);
  }
};

export const login = async (email, password) => {
  await signInWithEmailAndPassword(email, password);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {},
  },
  extraReducers: {},
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
