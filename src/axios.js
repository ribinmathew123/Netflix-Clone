import axios   from "axios";
import {baseURL} from './constant/constants'


const instance = axios.create({
    baseURL: baseURL,
  });
  export default instance