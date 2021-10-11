import Axios from 'axios';

export const axiosService = Axios.create();

axiosService.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.config);
    }
    return Promise.reject(error);
  },
);

axiosService.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response) {
      if (error.response.status === 401) {
        // error
      }
      console.log('error.response: ', error.response);
    } else {
      console.log('error.config: ', error.config);
    }
    return Promise.reject(error);
  },
);

export default axiosService;