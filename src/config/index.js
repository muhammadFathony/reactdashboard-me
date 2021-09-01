import Axios from 'axios';

const apiURL = process.env.REACT_APP_BASE_URL;
export const apolloInstance = Axios.create({
    baseURL: `${apiURL}wsrstugu/app_rs/absensi`
});

export const sivicoInstance = Axios.create({
    baseURL: ''
});

export const asetInstance = Axios.create({
    baseURL: `${apiURL}aset-tugurejo/`
})
// apolloInstance.interceptors.request.use(
//     (config) => {
//       let token = localStorage.getItem('user_token');
//       if (token) {
//         config.headers['Authorization'] = 'Bearer ' + token;
//       }
//       return config;
//     },
//     (error) => {
//       Promise.reject(error);
//     }
//   );
  
//   apolloInstance.interceptors.response.use(
//     function (response) {
//       // console.log(response.data);
//       return response.data;
//     },
//     function (error) {
//       const originalRequest = error.config;
//       // console.log("orireq: ", originalRequest);
//       if (
//         error.response.status === 401 &&
//         originalRequest.url === '/patient/auth/refresh'
//       ) {
//         localStorage.clear();
//         window.location.href = '/login';
//         return Promise.reject(error);
//       }
  
//       if (error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;
//         // let refreshToken = localStorage.getItem('user_token');
//         return apolloInstance
//           .post('/patient/auth/refresh')
//           .then((res) => {
//             if (res.status === 201) {
//               localStorage.setItem('user_token', res.data);
//               apolloInstance.defaults.headers.common['Authorization'] =
//                 'Bearer ' + localStorage.getItem('user_token');
//               return apolloInstance(originalRequest);
//             }
//           })
//           .catch(() => {
//             localStorage.clear();
//             window.location.href = '/login';
//             return Promise.reject(error);
//           });
//       }
//       return Promise.reject(error);
//     }
//   );
  