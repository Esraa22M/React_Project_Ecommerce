import React from "react";
import { Container } from "../styles/Category.style";
import CartSlider from "./CartSlider";
import {
  CartTitle,
  ProductContainer,
  Column,
  ItemContainer,
  CartItemBrand,
  CartItemName,
  CartItemPrice,
  Counter,
} from "../styles/Cart.style";
import { AddToCartButton } from "../styles/Details.style";
import trashIcon from "../images/trash.svg";
import { ButtonDefault } from "../styles/Details.style";
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
        <CartTitle>CART</CartTitle>
        <hr />
        {itemsAddedToCart.map((product, index) => {
          return (
            <>
              
              <ProductContainer key={index}>
                  <Column>
                    <ItemContainer position="left">
                      <CartItemBrand> {product.brand}</CartItemBrand>
                      <CartItemName>{product.name}</CartItemName>
                      <CartItemPrice>
                        {product.prices[selectedCurrencyIndex].currency.symbol}
                        {product.prices[selectedCurrencyIndex].amount}
                      </CartItemPrice>
                      <div className="attributes-container">
                        {product.attributes.map((item, index) => {
                          let getId = item.id;
                          return [
                            <h2 key={index} className="attribute">
                              {item.name + ":"}
                            </h2>,
                            item.type !== "swatch"
                              ? item.items.map((item, index) => {
                                  return (
                                    <ButtonDefault
                                      key={index}
                                      className={
                                        this.props.keepButtonActive(
                                          getId,
                                          item.id,
                                          product.selectedattributes
                                        )
                                          ? "activeButton"
                                          : ""
                                      }
                                    >
                                      {item.value}
                                    </ButtonDefault>
                                  );
                                })
                              : item.items.map((item, index) => {
                                  return (
                                    <ButtonDefault
                                      key={index}
                                      className={
                                        this.props.keepButtonActive(
                                          getId,
                                          item.id,
                                          product.selectedattributes
                                        )
                                          ? "activeSwatchButton"
                                          : ""
                                      }
                                      style={{
                                        background: item.value,
                                        borderColor: item.value,
                                      }}
                                    ></ButtonDefault>
                                  );
                                }),
                          ];
                        })}
                      </div>
                    </ItemContainer>
                  </Column>
                  <Column>
                    <ItemContainer direction="row">
                      <Counter>
                        <div
                          className="square"
                          onClick={() => this.props.onIncrement(product)}
                        >
                          <div className="counter-sign"> <img src={minsSign} alt="counter-sign-part1"/>
                           <img src={plusSign} alt="counter-sign-part-2"/>
                          </div>
                        </div>
                        <div className="count-value">{product.counter}</div>
                        <div
                          className="square"
                          onClick={() => this.props.onDecrement(product)}
                        >
                          <div className="counter-sign"><img src={minusSign} alt="minus-sign"/></div>
                        </div>
                      </Counter>
                      <CartSlider images={product.gallery} />
                      {console.log(product.id, product.categoryId)}
                      <div
                        className="trash"
                        onClick={() => this.props.onRemove(product)}
                      >
                        {" "}
                        <img src={trashIcon} alt="trash" />
                      </div>
                      <div className="trash">
                        <AddToCartButton
                          to={`/details/${product.id}${product.categoryId}`}
                        >
                          Go To Details
                        </AddToCartButton>
                      </div>
                    </ItemContainer>
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
