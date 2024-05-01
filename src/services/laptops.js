import axios from "./axios";

const LaptopsService = {
  getLaptops() {
    return axios.get("/laptops");
  },
  getLaptop(id) {
    return axios.get(`/laptops/${id}`);
  },
  postLaptop(data) {
    return axios.post("/laptops", data);
  },
  deleteLaptop(id) {
    return axios.delete(`/laptops/${id}`);
  },
  putLaptop(id, data) {
    return axios.put(`/laptops/${id}`, data);
  }
};

export default LaptopsService;
