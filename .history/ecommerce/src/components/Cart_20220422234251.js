import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../styles/Category.style";
import CartSlider from "./CartSlider";
import {
  CartTitle,
  ProductContainer,
  Column,
  CartItemBrand,
  CartItemName,
  CartItemPrice,
  Counter,
} from "../styles/Cart.style";
import minsSign from "../images/minusSign.svg";
import plusSign from "../images/plusSign.svg";
class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { itemsAddedToCart, selectedCurrencyIndex } = this.props;
    return (
      <Container>
        <CartTitle className="flex flex-start items-center">CART</CartTitle>
        <hr />
        {itemsAddedToCart.map((product, index) => {
          return (
            <>
              <ProductContainer key={this.props.generateKey(index)} className=" flex flex-space-between">
                <Column className="flex flex-column">
                  <CartItemBrand className="font-600"> {product.brand}</CartItemBrand>
                  <CartItemName>{product.name}</CartItemName>
                  <CartItemPrice className="flex items-center font-700">
                    {product.prices[selectedCurrencyIndex].currency.symbol}
                    {product.prices[selectedCurrencyIndex].amount}
                  </CartItemPrice>
                  <div className="attributes-container">
                    {product.attributes.map((item, index) => {
                      let getId = item.id;
                      return [
                        <h2 key={this.props.generateKey(Math.floor(Math.random() * 100)
                          )} className="attribute-header">
                          {item.name + ":"}
                        </h2>,
                       <div className="flex btn-container"> {item.type !== "swatch"
                          ? item.items.map((item, index) => {
                              return (
                                <div
                                  key={this.props.generateKey(Math.floor(Math.random() * 100)
                                    )}
                                  className={`btn-outline cursor-pointer border-1 flex items-center flex-center ${
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
                                  key={this.props.generateKey(Math.floor(Math.random() * 100)
                                    )}
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
                    <div className="count-value flex flex-center items-center">{product.counter}</div>
                    <div
                      className="square"
                      onClick={() => this.props.onDecrement(product)}
                    >
                      <div className="counter-sign">
                        <img src={minsSign} alt="minus-sign" className="sign" />
                      </div>
                    </div>
                  </Counter>
                  <div className="flex flex-center">
                  <CartSlider images={product.gallery} />

                    <button
                    className="btn btn-red cursor-pointer text-upper-case"
                      onClick={() => this.props.onRemove(product)}
                    >delete</button>
                    <Link to={`/details/${product.id}${product.categoryId}`} className="btn btn-primary">
                       Details
                    </Link>
                  </div>
                </Column>
              </ProductContainer>

              <hr />
            </>
          );
        })}
      </Container>
    );
  }
}
export default Cart;
