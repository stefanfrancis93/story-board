import React from "react";

class Popup extends React.Component {
  render() {
    return (
      this.props.show && (
        <div className="popup" style={styles.popupWrapper}>
          {this.props.children}

          <div
            className="list-card"
            style={{ ...styles.listCard, ...styles.popupCard }}
          >
            <div className="list-card-details" style={styles.listCardDetails}>
              <div className="field-wrapper" style={{ margin: "10px 0" }}>
                <span
                  className="title-label"
                  style={{ display: "block", fontSize: 20 }}
                >
                  Title:
                </span>
                <span className="list-card-title">{this.props.card.title}</span>
              </div>
              {this.props.card.description && (
                <div className="field-wrapper" style={{ margin: "10px 0" }}>
                  <span
                    className="desc-label"
                    style={{ display: "block", fontSize: 20 }}
                  >
                    Description:
                  </span>
                  <span className="list-card-description">
                    {this.props.card.description}
                  </span>
                </div>
              )}
            </div>
            <span
              className="close"
              onClick={this.props.close}
              style={{ position: "absolute", top: 10, right: 10, zIndex: 999 }}
            >
              Close
            </span>
          </div>
        </div>
      )
    );
  }
}

const styles = {
  popupWrapper: {
    zIndex: 9999,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.5)"
  },
  listCard: {
    backgroundColor: "#fff",
    borderRadius: 3,
    boxShadow: "0 1px 0 rgba(9,30,66,.25)",
    cursor: "pointer",
    display: "block",
    marginBottom: 8,
    maxWidth: 500,
    minHeight: 20,
    position: "relative",
    textDecoration: "none",
    zIndex: 0
  },
  popupCard: {
    top: "calc(50% - 125px)",
    height: 250,
    left: 0,
    right: 0,
    margin: "auto"
  },
  listCardDetails: {
    overflow: "hidden",
    padding: "20px",
    position: "relative",
    zIndex: 10,
    top: "50%",
    WebkitTransform: "translateY(-50%)",
    MsTransform: "translateY(-50%)",
    transform: "translateY(-50%)"
  }
};

export default Popup;
