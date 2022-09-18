import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.1.77:8000/api',
  headers: {
    API_KEY: 'pd0LQzmv8KcKcPDNqCdkooAbV3omJnCA2K7S0mtt0j1xQZRIt6XDKbFLER2q',
  },
});

export default API;
