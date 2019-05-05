import axios from "axios";

export const fetcher = async (request, success, reject) => {
  await axios(request)
    .then(response => {
      success({
        body: response.data,
        status: response.status,
        loading: false,
        error: null
      });
    })
    .catch(error => {
      reject({
        body: error.error,
        status: error.status,
        loading: false,
        error: error
      });
    });
};
