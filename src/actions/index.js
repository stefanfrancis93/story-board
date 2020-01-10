import axios from "axios";
import constants from "../constants";

export const fetchLists = () => dispatch => {
  setTimeout(() => {
    axios
      .get("./data.json")
      .then(response => {
        dispatch({ type: "FETCH_LISTS", payload: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }, 1000);
};

export function addCard(title, columnIndex) {
  return {
    type: constants.ADD_CARD,
    title,
    columnIndex
  };
}

export function addColumn(columnName) {
  return {
    type: constants.ADD_COLUMN,
    columnName
  };
}

export const shiftCard = (src, target) => {
  return {
    type: constants.SHIFT_CARD,
    targetColumnIndex: target.index,
    srcColumnIndex: src.index,
    srcCardIndex: src.cardIndex
  };
};

export function swapCard(src, target) {
  return {
    type: constants.SWAP_CARD,
    src,
    target
  };
}

export function removeCard(cardIndex, columnIndex) {
  return {
    type: constants.REMOVE_CARD,
    cardIndex,
    columnIndex
  };
}

export function swapList(src, target) {
  return {
    type: constants.SWAP_LIST,
    src,
    target
  };
}
