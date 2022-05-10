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
class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  // keepButtonActive = (value, id , item) => {
  //     let tempAttributes = item.selectedattributes;
  //     let x = tempAttributes.find((item) => {
  //       return item.id === value && item.Itemid === id;
  //     });
  //     return x !== undefined;
    
  //   //  let x = tempAttributes.find((item) => {
  //   // return item.id === value && item.Itemid === id;
  //   // });
  //   // return x !== undefined;
  // };
 
  render() {
    
    let { itemsAddedToCart } = this.props;
    return (
      <Container>
        <CartTitle>CART</CartTitle>
        <hr />
        {itemsAddedToCart.map((product, index) => {
          // {if(!product.counter){
          //   this.props.onRemove(product);
          // }}
          return (
            <>
              {
              <ProductContainer key={index}>
                <Column>
                  <ItemContainer position="left">
                    <CartItemBrand> {product.brand}</CartItemBrand>
                    <CartItemName>{product.name}</CartItemName>
                    <CartItemPrice>
                      {product.prices[0].currency.symbol}
                      {product.prices[0].amount}
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
                                      this.keepButtonActive(getId, item.id ,product)
                                        ? "activeButton"
                                        : ""
                                    }
                                    // onClick={(e) =>
                                    //   this.getSelectedProductSelectedAttributes({
                                    //     id: getId,
                                    //     value: item.value,
                                    //     Itemid: item.id,
                                    //   })
                                    // }
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
                                      this.keepButtonActive(getId, item.id,product)
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
                        <div className="counter-sign"> +</div>
                      </div>
                      <div className="count-value">{product.counter}</div>
                      <div
                        className="square"
                        onClick={() => this.props.onDecrement(product)}
                      >
                        <div className="counter-sign">-</div>
                      </div>
                    </Counter>
                    <CartSlider images={product.gallery} />
                    {console.log(product.id , product.categoryId)}
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
              </ProductContainer>}
              <hr />
            </>
          );
        })}
      </Container>
    );
  }
}
export default Cart;
