import axiosService from "./axios";

const fetch_userData = () => {
  return axiosService.get("/", {});
};

const Api = {
    fetch_userData
};

export default Api;
