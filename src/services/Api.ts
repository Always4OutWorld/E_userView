import axiosService from "./axios";

const fetch_userData = () => {
  return axiosService.get("/user/sign-in", {});
};

const Api = {
    fetch_userData
};

export default Api;
