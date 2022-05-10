import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../styles/Category.style";
import CartSlider from "./CartSlider";
import {
  CartTitle,
  ProductContainer,
  Column,
  CartItemPrice,
  Counter,
} from "../styles/Cart.style";
import { ButtonDefault } from "../styles/Details.style";
import minsSign from "../images/minusSign.svg";
import plusSign from "../images/plusSign.svg";
class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(this.props.itemsAddedToCart) !==
      JSON.stringify(prevProps.itemsAddedToCart)
    ) {
      this.props.getTax();
    }
  }
  render() {
    let { itemsAddedToCart, selectedCurrencyIndex, Tax, total, quantity } =
      this.props;
    return (
      <Container>
        <CartTitle className="flex flex-start items-center font-700">
          CART
        </CartTitle>
        <hr />
       <div> {itemsAddedToCart.map((product, index) => {
          return (
            <div key={index}>
              <ProductContainer
                key={this.props.generateKey(index)}
                className=" flex flex-space-between"
              >
                <Column className="flex flex-column">
                  <h2 className="font-600 cart-item-brand"> {product.brand}</h2>
                  <p className="cart-item-name">{product.name}</p>
                  <CartItemPrice className="flex items-center font-700">
                    {product.prices[selectedCurrencyIndex].currency.symbol}
                    {product.prices[selectedCurrencyIndex].amount}
                  </CartItemPrice>
                  <div className="attributes-container">
                    {product.attributes.map((item, index) => {
                      let getId = item.id;
                      return [
                        <h2
                          key={this.props.generateKey(
                            Math.floor(Math.random() * 100)
                          )}
                          className="attribute-header"
                        >
                          {item.name + ":"}
                        </h2>,
                        <div className="flex btn-container" key={index}>
                          {" "}
                          {item.type !== "swatch" ? (
                            item.items.map((item, index) => {
                              return (
                                <ButtonDefault
                                  key={
                                    index +
                                    getId +
                                    item.id +
                                    new Date().getMilliseconds()
                                  }
                                  className={` cursor-pointer btn-outline border-1 flex items-center flex-center attribute bg-dark text-light ${
                                    this.props.keepButtonActive(
                                      getId,
                                      item.id,
                                      product.selectedattributes
                                    )
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  {item.value}
                                </ButtonDefault>
                              );
                            })
                          ) : (
                            <div
                              className="flex "
                              key={index + new Date().getMilliseconds()}
                            >
                              {item.items.map((item, index) => {
                                return (
                                  <div
                                    className={`btn-swatch ${
                                      this.props.keepButtonActive(
                                        getId,
                                        item.id,
                                        product.selectedattributes
                                      )
                                        ? "activeSwatchButton"
                                        : ""
                                    }   cursor-pointer btn-margin p-2`}
                                    key={getId + item.id}
                                  >
                                    {" "}
                                    <ButtonDefault
                                      key={
                                        index +
                                        getId +
                                        item.id +
                                        new Date().getMilliseconds()
                                      }
                                      className="border-1 swatch-button"
                                      style={{
                                        background: item.value,
                                        borderColor: item.value,
                                      }}
                                    ></ButtonDefault>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>,
                      ];
                    })}
                  </div>
                </Column>
                <Column direction="row" className="flex flex-column">
                  <Counter className="flex flex-column flex-space-between">
                    <div
                      className="square border-1 flex items-center flex-center cursor-pointer"
                      onClick={() => this.props.onIncrement(product)}
                    >
                      <div className="counter-sign">
                        <img src={plusSign} alt="counter-sign-part-2" />
                        <img
                          src={minsSign}
                          alt="counter-sign-part1"
                          className="sign"
                        />
                      </div>
                    </div>
                    <div className="count-value flex flex-center items-center">
                      {product.counter}
                    </div>
                    <div
                      className="square  border-1 flex items-center flex-center cursor-pointer"
                      onClick={() => this.props.onDecrement(product)}
                    >
                      <div className="counter-sign">
                        <img src={minsSign} alt="minus-sign" className="sign" />
                      </div>
                    </div>
                  </Counter>
                  <div className="flex flex-center items-center">
                    <CartSlider images={product.gallery} />

                    <button
                      className="btn btn-red cursor-pointer text-upper-case"
                      onClick={() => this.props.onRemove(product)}
                    >
                      delete
                    </button>
                    <Link
                      to={`/details/${product.id}${product.categoryId}`}
                      className="btn btn-primary cursor-pointer text-upper-case text-primary"
                    >
                      Details
                    </Link>
                  </div>
                </Column>
              </ProductContainer>

              <hr />
            </div>
          );
        })}
       { itemsAddedToCart.length?<div className="info">
          <p className=" tax flex flex-space-between">
            <span>Tax&nbsp;21&#x25;:</span>
            <span className="font-700"> {
                itemsAddedToCart[0].prices[selectedCurrencyIndex].currency
                  .symbol
              }{Tax}</span>
          </p>
          <p className="quantity">
            <span>Quantity:</span>
            <span className="font-700">&nbsp;{quantity}</span>
          </p>
          <p className="total font-700">
            <span>Total:</span>
            <span>
              {
                itemsAddedToCart[0].prices[selectedCurrencyIndex].currency
                  .symbol
              }
              {total}
            </span>
          </p>  <Link
                      to="/"
                      className="order-btn  cursor-pointer text-upper-case bg-primary"
                    >
                      ORDER
                    </Link><hr/>
        </div>:<h2 className="flex flex-center text-upper-case h-30 items-center">Cart is Empty</h2>}
        </div>
      </Container>
    );
  }
}
export default Cart;
