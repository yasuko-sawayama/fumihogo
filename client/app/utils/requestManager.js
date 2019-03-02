import axios from "axios";
import ReactOnRails from "react-on-rails";

export const fetchEntity = (url, id=null) => console.log("fetched") || axios({
    method: "GET",
    url: id ? `${url}/${id}`: url,
    responceType: "json",
    headers: ReactOnRails.authenticityHeaders(),
  });