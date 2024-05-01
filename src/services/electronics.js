import axios from "./axios";

const ElectronicsService = {
  getElectronics() {
    return axios.get("/electronics");
  },
  getElectronic(id) {
    return axios.get(`/electronics/${id}`);
  },
  postElectronic(data) {
    return axios.post("/electronics", data);
  },
  deleteElectronic(id) {
    return axios.delete(`/electronics/${id}`);
  },
  putElectronic(id, data) {
    return axios.put(`/electronics/${id}`, data);
  }
};

export default ElectronicsService;
