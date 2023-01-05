import axios from "axios";

const apiClient = axios.create({
  baseUrl: "https://my-json-server.typicode.com/tung13041996/api-test",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getEvents(){
    return apiClient.get("https://my-json-server.typicode.com/tung13041996/api-test/events");
  },
  getEventsDetail(id){
    return apiClient.get("https://my-json-server.typicode.com/tung13041996/api-test/events/" + id);
  }
};
