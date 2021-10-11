import axiosService from "./axios";

const fetch_userData = () => {
  return axiosService.get("https://randomuser.me/api/?results=10");
};

const Api = {
    fetch_userData
};

export default Api;
