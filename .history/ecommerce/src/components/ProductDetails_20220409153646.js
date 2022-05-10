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
      attributes: [],
      isAllAttributesSelected: false,
      activeButtonIndex: -1,
      activeButtonSwatchIndex: -1,
      AttributeIndex: [false],
    };
  }
  something = (function () {
    var executed = false;
    return function () {
      if (!executed) {
        executed = true;
        let tempAttributes = this.props.product.attributes;
        for (let i = 0; i < tempAttributes.length; i++) {
          this.getSelectedProductSelectedAttributes({
            id: tempAttributes[i].id,
            value: tempAttributes[i].items[0].value,
            Itemid: tempAttributes[i].items[0].id,
          });
        }
      }
    };
  })();
  // intilizeProductAttributesArraySetDefaultSelection = () => {
  //  let tempAttributes = this.props.product.attributes;
  //    this.getSelectedProductSelectedAttributes({
  //      id:tempAttributes[0].id,
  //      value:tempAttributes[0].items[0].value,
  //      Itemid:tempAttributes[0].items[0].id
  //    })

  //  console.log("here")
  // };
  keepButtonActive = (value, id) => {
    let tempAttributes = [...this.state.attributes];
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
  getObjIndex = (arr, id) => {
    let index = arr.findIndex((object) => {
      return object.id === id;
    });
    return index;
  };
  componentDidUpdate() {
    this.something();
  }
  getSelectedProductSelectedAttributes = (obj) => {
    /* let attributesArray = [...this.state.attributes];
    console.log(this.state.attributes)

    let index = this.getObjIndex(attributesArray, obj.id);
    if (index > -1) {
      attributesArray[index] = obj;

    } else {

      attributesArray.push(obj);

    }

    this.setState({ attributes: attributesArray });*/
    this.setState((prevState) => {
      var attributesArray = [...prevState.attributes];
      let index = this.getObjIndex(attributesArray, obj.id);
      if (index > -1) {
        attributesArray[index] = obj;
      } else {
        attributesArray.push(obj);
      }
      return {
        attributes: attributesArray,
      };
    });
  };
  checkIfAllAttributesSelected = (attributes) => {
    let getAllAttributes = this.state.attributes;
    return attributes.length === getAllAttributes.length;
  };
  render() {
    let { product, selectedCurrencyIndex } = this.props;
    if (Object.keys(product).length === 0)
      return (
        <div>
          <h1> Loading.... </h1>{" "}
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
              <img src={product.gallery[this.state.imageIndex]} />
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
                              value={++i}
                              key={item.id}
                              className={
                                this.keepButtonActive(getId, item.id)
                                  ? "activeButton"
                                  : ""
                              }
                              onClick={(e) =>
                                this.getSelectedProductSelectedAttributes({
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
                                this.getSelectedProductSelectedAttributes({
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
                    {
                      product.prices[this.props.selectedCurrencyIndex].currency
                        .symbol
                    }
                  </span>
                  <span>
                    {product.prices[this.props.selectedCurrencyIndex].amount}
                  </span>
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

                      this.state.attributes
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
