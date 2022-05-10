import React from "react";
import { MiniCartContainer } from "../styles/Category.style";
import { Column } from "../styles/Cart.style";
import { Link } from "react-router-dom";
import minsSign from "../images/minMinus.svg";
import plusSign from "../images/minPlus.svg";

class MiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.props.getTotal();

    this.state = {};
  }
  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(this.props.itemsAddedToCart) !==
      JSON.stringify(prevProps.itemsAddedToCart)
    ) {
      this.props.getTotal();
    }
  }

  render() {
    let { cartItemsCount, itemsAddedToCart, selectedCurrencyIndex } =
      this.props;

    return (
      <MiniCartContainer clicked={this.props.isCartClicked ? "flex" : "none"}>
        {itemsAddedToCart.length ? (
          <>
            <h2 className="miniCart-heading">
              my bag,{" "}
              <span className="min-cart-items-counter">
                {" "}
                {cartItemsCount}items
              </span>
            </h2>
            {itemsAddedToCart.map((product, index) => {
              return (
                <article
                  key={this.props.generateKey(new Date().getMilliseconds())}
                  className="mini-cart-product-margin flex-container flex-space-between"
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
                      <span>
                        {product.prices[selectedCurrencyIndex].amount}
                      </span>
                    </div>
                    <div className="attributes-container">
                      {product.attributes.map((item, index) => {
                        let getId = item.id;
                        return [
                          <h2
                            key={
                              this.props.generateKey(Math.random() * 100) +
                              item.id
                            }
                            className="total heading"
                          >
                            {item.name + ":"}
                          </h2>,
                          <div className="flex btn-container">
                            {" "}
                            {item.type !== "swatch"
                              ? item.items.map((item, index) => {
                                  return (
                                    <div
                                      key={
                                        this.props.generateKey(
                                          Math.floor(Math.random() * 100)
                                        ) + item.id
                                      }
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
                                      key={this.props.generateKey(
                                        Math.floor(Math.random() * 100) +
                                          item.id
                                      )}
                                      className={`counter-box  flex flex-center ${
                                        this.props.keepButtonActive(
                                          getId,
                                          item.id,
                                          product.selectedattributes
                                        )
                                          ? "activeSwatchButton"
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
                      <div
                        className="counter-box flex-container"
                        onClick={() => this.props.onIncrement(product)}
                      >
                        <img
                          src={plusSign}
                          alt="counter-sign-part-2"
                          className="plus-sign"
                        />
                        <img src={minsSign} alt="counter-sign-part1" />
                      </div>
                      <div>{product.counter}</div>
                      <div
                        className="counter-box flex-container"
                        onClick={() => this.props.onDecrement(product)}
                      >
                        {" "}
                        <img
                          src={minsSign}
                          className="minus-sign"
                          alt="counter-sign-part1"
                        />
                      </div>
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

              <p className="total-value">{this.props.total}</p>
            </div>
            <div className="flex-container flex-space-between margin-20">
              <Link
                to="/cart"
                className="view-cart-button"
                onClick={this.props.onCartClick}
              >
                View bag
              </Link>
              <Link
                to="/checkout"
                className="view-cart-button bg-primary"
                onClick={this.props.onCartClick}
              >
                CHECK OUT
              </Link>
            </div>
          </>
        ) : (
          <>
            <h3 className="mini-cart-product-heading ">Cart is empty</h3>
          </>
        )}
      </MiniCartContainer>
    );
  }
}
export default MiniCart;
