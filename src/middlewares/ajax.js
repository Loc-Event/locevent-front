import axios from 'axios';

// set the baseURl
const api = axios.create({
  baseURL: 'http://localhost:8080',
  // baseURL: 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public',
});

const ajax = (store) => (next) => (action) => {

  switch(action.type) {
    // Define every params for the LOG_USER's case
    default:
      next(action);
    break;
  }
 
};

export default ajax;
