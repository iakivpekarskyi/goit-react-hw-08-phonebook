import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const response = await axios.post('/users/signup', credentials);

    return response.data;
  } catch (error) {}
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const response = await axios.post('/users/login', credentials);

    return response.data;
  } catch (error) {}
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');

    return null;
  } catch (error) {}
});
