import axios from "./axios";

const SmartphoneService = {
  getSmartphones() {
    return axios.get("/smartphones");
  },
  getSmartphone(id) {
    return axios.get(`/smartphones/${id}`);
  },
  postSmartphone(data) {
    return axios.post("/smartphones", data);
  },
  deleteSmartphone(id) {
    return axios.delete(`/smartphones/${id}`);
  },
  putSmartphone(id, data) {
    return axios.put(`/smartphones/${id}`, data);
  }
};

export default SmartphoneService;
