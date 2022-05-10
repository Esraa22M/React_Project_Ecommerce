import React from "react";
import { MiniCartContainer } from "../styles/Category.style";
import { ProductContainer, Column } from "../styles/Cart.style";
class MiniCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { cartItemsCount, itemsAddedToCart ,selectedCurrencyIndex} = this.props;
    return (
      <MiniCartContainer clicked={this.props.isCartClicked ? "flex" : "none"}>
        <h2 className="miniCart-heading">
          my bag,{" "}
          <span className="min-cart-items-counter"> {cartItemsCount}items</span>
        </h2>
        {itemsAddedToCart.map((product, index) => {
          return (
            <ProductContainer
              key={index}
              className="mini-cart-product-margin"
            >
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
                       <div className="flex btn-container"> {item.type !== "swatch"
                          ? item.items.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`btn-outline flex flex-center ${
                                    this.props.keepButtonActive(
                                      getId,
                                      item.id,
                                      product.selectedattributes
                                    )
                                      ? "activeButton"
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
                                  className={
                                   ` btn-outline flex flex-center ${ this.props.keepButtonActive(
                                      getId,
                                      item.id,
                                      product.selectedattributes
                                    )
                                      ? "activeSwatchButton"
                                      : ""}`
                                  }
                                  style={{
                                    background: item.value,
                                    borderColor: item.value,
                                  }}
                                ></div>
                              );
                            }) }</div>,
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
                <img src={product.gallery[0]} alt="product-item" className="product-image"/>
              </div>
            </ProductContainer>
          );
        })}
      </MiniCartContainer>
    );
  }
}
export default MiniCart;
