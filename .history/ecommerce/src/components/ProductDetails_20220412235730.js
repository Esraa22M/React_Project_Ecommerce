import React from "react";
import {
  ProductDetailsContainer,
  Column,
  ButtonDefault,
  AddToCartButton,
} from "../styles/Details.style";
import { Container } from "../styles/Category.style";
let idPlusCategoryIndex;
let id;
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    var url = window.location.href;
    idPlusCategoryIndex = url.substring(url.lastIndexOf("/") + 1);
    id = idPlusCategoryIndex.slice(0, -1);
    this.props.getProductDetailsObject(
      id,
      idPlusCategoryIndex.charAt(idPlusCategoryIndex.length - 1)
    );

    this.state = {
      imageIndex: 0,
    };
  }
  
   keepButtonActive = (value, id) => {
    let tempAttributes = [...this.props.attributes];
    let x = tempAttributes.find((item) => {
      return item.id === value && item.Itemid === id;
    });
    return x !== undefined;
  };
  /* change product image on image click */
  handleImageClick = (index) => {
    this.setState({
      imageIndex: index,
    });
  };
 
  componentDidUpdate() {
    this.props.getCartItemDrfaultAttributesSelection(this.props.product);
  }
  

  render() {
    let { product, selectedCurrencyIndex } = this.props;
    if (Object.keys(product).length === 0)
      return (
        <div>
          <h1> Loading.... </h1>
        </div>
      );
    return (
      <Container>
        <ProductDetailsContainer>
          <Column>
            {product.gallery.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    className="column1-img"
                    src={item}
                    onClick={() => this.handleImageClick(index)}
                  />
                </div>
              );
            })}
          </Column>
          <Column>
            <div className="product-details-main-img bg-dark">
              <img src={product.gallery[this.state.imageIndex]} alt="product-main"/>
            </div>
          </Column>
          <Column>
            <section className="column-container">
              <div>
                <h2 className="product-brand">{product.brand}</h2>
                <p className="product-name">{product.name}</p>
              </div>
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
                              key={item.id}
                              className={
                                this.keepButtonActive(getId, item.id)
                                  ? "activeButton"
                                  : ""
                              }
                              onClick={(e) =>
                                this.props.getSelectedProductSelectedAttributes({
                                  id: getId,
                                  value: item.value,
                                  Itemid: item.id,
                                })
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
                                this.keepButtonActive(getId, item.id)
                                  ? "activeSwatchButton"
                                  : ""
                              }
                              style={{
                                background: item.value,
                                borderColor: item.value,
                              }}
                              onClick={(e) =>
                                this.props.getSelectedProductSelectedAttributes({
                                  id: getId,
                                  value: item.value,
                                  Itemid: item.id,
                                })
                              }
                            ></ButtonDefault>
                          );
                        }),
                  ];
                })}
              </div>
              <div>
                <h2 className="product-price">PRICE:</h2>
                <div className="product-price-value">
                  <span>
                    {product.prices[selectedCurrencyIndex].currency.symbol}
                  </span>
                  <span>{product.prices[selectedCurrencyIndex].amount}</span>
                </div>
              </div>
              <div>
                <AddToCartButton
                  to={"/cart"}
                  product={product}
                  onClick={() =>
                    this.props.getItemsAddedToCart(
                      id,
                      idPlusCategoryIndex.charAt(
                        idPlusCategoryIndex.length - 1
                      ),
                      this.props.attributes
                    )
                  }
                >
                  ADD TO CART
                </AddToCartButton>
              </div>
              <div
                className="product-description"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </section>
          </Column>
        </ProductDetailsContainer>
      </Container>
    );
  }
}
export default ProductDetails;
