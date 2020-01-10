import defaultState from "./state";
import constants from "../constants";

export default (state = defaultState, action) => {
  let newState = {};
  let columns = [...state.columns];

  switch (action.type) {
    case constants.FETCH_LISTS:
      return action.payload;

    case constants.ADD_COLUMN:
      columns = [].concat(state.columns);
      columns.push({
        listTitle: action.columnName,
        cards: [
          {
            id: 0,
            createdAt: 1578631247197,
            title:
              'This is a card. Drag it onto "Tried It" to show it\'s done.',
            description: ""
          }
        ]
      });
      newState = { columns };
      break;

    case constants.ADD_CARD:
      columns[action.columnIndex].cards.push({
        createdAt: Date.now(),
        title: action.title
      });
      newState = { ...columns };
      break;

    case constants.SHIFT_CARD:
      const { srcColumnIndex, targetColumnIndex, srcCardIndex } = action;
      if (srcColumnIndex !== targetColumnIndex) {
        const card = Object.assign(
          {},
          columns[srcColumnIndex].cards[srcCardIndex]
        );
        columns[srcColumnIndex].cards.splice(srcCardIndex, 1);
        columns[targetColumnIndex].cards.push(card);
        newState = { columns };
      }
      break;
    /*
    case constants.REMOVE_CARD:
      columns[action.columnIndex].cards.splice(action.cardIndex, 1);
      newState = { columns };
      break;

    case constants.REMOVE_COLUMN:
      columns.splice(action.columnIndex, 1);
      newState = { columns };
      break; */
    case constants.SWAP_CARD:
      const { src, target } = action;
      [
        columns[src.columnIndex].cards[src.cardIndex],
        columns[target.columnIndex].cards[target.cardIndex]
      ] = [
        columns[src.columnIndex].cards[target.cardIndex],
        columns[target.columnIndex].cards[src.cardIndex]
      ];
      newState = { columns };
      break;
    default:
      newState = state;
      break;
  }
  return Object.assign({}, state, newState);
};
