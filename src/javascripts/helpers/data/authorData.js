import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

// API CALLS FOR AUTHORS
const dbUrl = firebaseConfig.databaseURL;
// GET AUTHORS
const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json`)
    .then((response) => {
      if (response.data) {
     const authorsArray = Object.values(response.data);
     resolve(authorsArray);
      } else {
      resolve([]);
    }
  }) .catch((error) => reject(error));
});

// document.querySelector('#authors').addEventListener
// // DELETE AUTHOR
// CREATE AUTHOR
// UPDATE AUTHOR
// SEARCH AUTHORS
export default getAuthors;
