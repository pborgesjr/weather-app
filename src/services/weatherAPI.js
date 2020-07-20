import axios from 'axios';

import {baseURL} from '../config/weatherAPI';

const weatherAPI = axios.create({
  baseURL,
});

export default weatherAPI;
