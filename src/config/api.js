import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.foundid.my.id/api',
  // baseURL: 'http://192.168.192.231:8000/api',
  headers: {
    API_KEY: 'pd0LQzmv8KcKcPDNqCdkooAbV3omJnCA2K7S0mtt0j1xQZRIt6XDKbFLER2q',
    'X-CSRF-Token': 'zGOJpZQmlbc2BYPPCnF20YLAoNyq2hJMIEZ3fdW1',
  },
});

export default API;
