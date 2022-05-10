import React from "react";
import { MiniCartContainer } from "../styles/Category.style";
import {  Column } from "../styles/Cart.style";
class MiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      total:0
    }
  }
  getTotal=(()=> {
    var executed = false;
    return () =>{
        if (!executed) {
            executed = true;
    let products = [...this.props.itemsAddedToCart];
    let tempTotal = 0;
    for(let i = 0 ; i < products.length ; i++){
       let amount=products[i].prices[this.props.selectedCurrencyIndex].amount*products[i].counter;
       tempTotal+=amount;
    }
    tempTotal = tempTotal.toFixed(2);

    tempTotal+=products[0].prices[this.props.selectedCurrencyIndex].currency.symbol
    this.setState({total:tempTotal});
      }
    };
})();
  render() {
    let { cartItemsCount, itemsAddedToCart, selectedCurrencyIndex } =
      this.props;
      this.getTotal();
    return (
      <MiniCartContainer clicked={this.props.isCartClicked ? "flex" : "none"}>
        <h2 className="miniCart-heading">
          my bag,{" "}
          <span className="min-cart-items-counter"> {cartItemsCount}items</span>
        </h2>
        {itemsAddedToCart.map((product, index) => {
          return (
            <article key={index} className="mini-cart-product-margin flex-container flex-space-between">
              <Column>
                <h3 className="mini-cart-product-heading">
                  <span>{product.brand}</span>
                  <span>{product.name}</span>
                </h3>
                <div className="product-price-value">
                  <span>
                    {product.prices[selectedCurrencyIndex].currency.symbol}
                  </span>
                  <span>{product.prices[selectedCurrencyIndex].amount}</span>
                </div>
                <div className="attributes-container">
                  {product.attributes.map((item, index) => {
                    let getId = item.id;
                    return [
                      <h2 key={index} className="attribute-header">
                        {item.name + ":"}
                      </h2>,
                      <div className="flex btn-container">
                        {" "}
                        {item.type !== "swatch"
                          ? item.items.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`attribute-box flex flex-center btn-font-style  ${
                                    !this.props.keepButtonActive(
                                      getId,
                                      item.id,
                                      product.selectedattributes
                                    )
                                      ? "btn-disabled"
                                      : ""
                                  }`}
                                >
                                  {item.value}
                                </div>
                              );
                            })
                          : item.items.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`counter-box btn-font-style flex flex-center !${
                                    this.props.keepButtonActive(
                                      getId,
                                      item.id,
                                      product.selectedattributes
                                    )
                                      ? "btn-disabled"
                                      : ""
                                  }`}
                                  style={{
                                    background: item.value,
                                    borderColor: item.value,
                                  }}
                                ></div>
                              );
                            })}
                      </div>,
                    ];
                  })}
                </div>
              </Column>
              <div className="flex-container">
                <div className="counter-container">
                  <div className="counter-box flex-container">+</div>
                  <div>{product.counter}</div>
                  <div className="counter-box flex-container">-</div>
                </div>
                <img
                  src={product.gallery[0]}
                  alt="product-item"
                  className="product-image"
                />
              </div>
            </article>
          );
        })}
        <div className="flex-container flex-space-between total-margin">
            
            <p className="total">total</p>

          <div>{this.state.total}</div>
        </div>
      </MiniCartContainer>
    );
  }
}
export default MiniCart;
