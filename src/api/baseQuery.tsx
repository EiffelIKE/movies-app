import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE } from '../utils/const/config';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE,
});
