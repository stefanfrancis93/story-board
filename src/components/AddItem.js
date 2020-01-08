import React, { useState } from "react";

const AddItem = ({ item }) => {
  const [idle, setIdle] = useState(true);
  let handleAddItem = () => {
      setIdle(false);
    },
    handleCloseButton = () => {
      setIdle(true);
    };

  return (
    <div
      className="add-item item-wrapper"
      style={{
        ...styles.itemWrapper,
        ...styles.addItem,
        backgroundColor: idle ? "hsla(0,0%,100%,.24)" : "#ebecf0",
        cursor: idle ? "default" : "pointer",
        margin: item === "card" ? 0 : "0 4px"
      }}
    >
      <form>
        <a
          className="open-add-item js-open-add-item"
          href="#"
          style={{ textDecoration: "none" }}
          onClick={handleAddItem}
        >
          <span
            className="placeholder"
            style={{
              ...styles.placeholder,
              display: idle ? "block" : "none",
              color: item === "card" ? "#5e6c84" : "#fff"
            }}
            onClick={handleAddItem}
          >
            <span className="icon-sm icon-add"></span>
            Add another {item}
          </span>
        </a>
        <input
          className="item-name-input"
          type="text"
          name="name"
          placeholder={`Enter ${item} title...`}
          autoComplete="off"
          dir="auto"
          maxLength="512"
          style={{ ...styles.itemNameInput, display: !idle ? "block" : "none" }}
        />
        <div
          className="item-add-controls"
          style={{
            ...styles.itemAddControls,
            display: !idle ? "block" : "none"
          }}
        >
          <input
            className="item-add-button"
            type="submit"
            value={`Add ${item}`}
            style={styles.itemAddButton}
          />
          <a
            className="icon-lg icon-close dark-hover js-cancel-edit"
            href="#"
            style={styles.closeButton}
            onClick={handleCloseButton}
          >
            Close
          </a>
        </div>
      </form>
    </div>
  );
};

const styles = {
  addItem: {
    borderRadius: 3,
    height: "auto",
    minHeight: 32,
    padding: 4,
    transition:
      "background 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in"
  },
  itemWrapper: {
    maxWidth: 272,
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    display: "inline-block",
    verticalAlign: "top",
    whiteSpace: "nowrap"
  },
  placeholder: {
    padding: "6px 8px",
    transition: "color 85ms ease-in"
  },
  itemNameInput: {
    color: "#172b4d",
    boxSizing: "border-box",
    WebkitAppearance: "none",
    borderRadius: 3,
    lineHeight: "20px",
    padding: "8px 12px",
    background: "#fff",
    border: "none",
    boxShadow: "inset 0 0 0 2px #0079bf",
    transition: "margin 85ms ease-in,background 85ms ease-in",
    width: "100%",
    borderColor: "transparent",
    cursor: "pointer",
    display: "none",
    margin: 0
  },
  itemAddControls: {
    height: 32,
    transition: "margin 85ms ease-in,height 85ms ease-in",
    overflow: "hidden",
    margin: "4px 0 0"
  },
  itemAddButton: {
    borderRadius: 3,
    cursor: "pointer",
    display: "inline-block",
    fontWeight: 400,
    lineHeight: "20px",
    margin: "8px 4px 0 0",
    padding: "6px 12px",
    textAlign: "center",
    float: "left",
    minHeight: 32,
    height: 32,
    marginTop: 0,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: "#5aac44",
    boxShadow: "none",
    border: "none",
    color: "#fff"
  },
  closeButton: {
    lineHeight: "32px",
    textDecoration: "none",
    color: "#000",
    margin: "0 15px"
  },
  modAdd: {
    backgroundColor: "#ebecf0",
    borderRadius: 3,
    height: "auto",
    minHeight: 32,
    padding: 4,
    transition:
      "background 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in"
  }
};

export default AddItem;
