import axios from "axios";

export const fetchLists = () => dispatch => {
  setTimeout(() => {
    axios
      .get("./data.json")
      .then(response => {
        console.log(response.data);
        dispatch({ type: "FETCH_LISTS", payload: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }, 1000);
};
