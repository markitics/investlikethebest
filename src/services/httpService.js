import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.withCredentials = true;
// That's required so that axios requests DO send cookies
// Django needs these cookies so we can access request.user in Django
// https://codewithhugo.com/pass-cookies-axios-fetch-requests

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("An unexpected error occured, client-side.");
    // Alternative usage:
    // toast("Message"); // multi-coloured bar
    // toast.info("Message");
    // toast.success("Message");
    // toast.warning("Message");
  }
  return Promise.reject(error);
});

// Usage: when importing, write
// import httpService from '/services/httpService'
// then replace axios.get(url) with httpService.get(url)
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
