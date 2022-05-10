import React from "react";
import downArrow from "../images/downArrow.svg";
class CustomDropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFliped: false,
      selectedOption: "$",
    };
  }
  handleArrowFliping = () => {
    let flip = this.state.isFliped;
    this.setState({ isFliped: !flip });
  };
  handleSelectedListItem = (e) => {
    this.props.handleCurrencyIndexSelection(parseInt(e.currentTarget.getAttribute("data-value")))
    console.log(e.currentTarget.getAttribute("data-value"))
    let text = e.currentTarget.childNodes[0].innerText;
    this.setState({ isFliped: false });

    this.setState({ selectedOption: text });
  };
  render() {
    let { isFliped, selectedOption } = this.state;

    return (
      <div className="select-wrapper">
        <div className="select">
          <div className="select__trigger">
            <div className="arrow" onClick={this.handleArrowFliping}>
              <span>{selectedOption}</span>
              <span>
                <img src={downArrow} className={isFliped ? "rotate" : ""} alt="fliping-icon"/>
              </span>
            </div>
          </div>
          <div onMouseLeave={this.handleArrowFliping} className={["custom-options bg-light", isFliped ? "show" : ""].join(" ")}>
            <div
              className="custom-option cursor-pointer"
              data-value="0"
              onClick={(e) => {this.handleSelectedListItem(e)}}
            >
              <span>$</span>
              <span>USD</span>
            </div>
            <div className="custom-option cursor-pointer" data-value="1"               onClick={(e) => {this.handleSelectedListItem(e)}}
>
              <span>£</span>
              <span>GBP</span>
            </div>
            <div className="custom-option cursor-pointer" data-value="2"              onClick={(e) => {this.handleSelectedListItem(e)}}
>
              <span>A$</span>
              <span>AUD</span>
            </div>
            <div className="custom-option cursor-pointer" data-value="3"              onClick={(e) => {this.handleSelectedListItem(e)}}
>
              <span>¥</span>
              <span>JPY</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// #endregion

export default CustomDropDownMenu;
