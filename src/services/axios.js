import axios from "axios"
// import { getItem } from "@/helpers/persistaneStorage"

axios.defaults.baseURL = 'http://localhost:3000'   // local

// axios.interceptors.request.use(
//   config => {
//     const token = getItem("token")
//     const authorization = token ? `Token ${token}` : ""
//     config.headers.Authorization = authorization
//     return config
//   }
// )

export default axios
