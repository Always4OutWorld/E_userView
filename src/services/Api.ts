import axiosService from "./axios";

const fetch_userData = ({ count = 20 }: any) => {
  return axiosService.get(`https://randomuser.me/api/?results=${count}`);
};

const Api = {
    fetch_userData
};

export default Api;
