// src/infrastructure/api/axiosInstance.ts

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_APP_API_URL}/api`, // Replace with your API
});

export default axiosInstance;
