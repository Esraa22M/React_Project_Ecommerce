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
  intilizeProductAttributesArraySetDefaultSelection = () => {
   let tempAttributes = this.props.product.attributes;
   for(let i = 0 ; i < tempAttributes.length ; i++){
     this.getSelectedProductSelectedAttributes({
       id:tempAttributes[i].id,
       value:tempAttributes[i].items[0].value,
       Itemid:tempAttributes[i].items[0].id
     })
   }
   console.log("here")
  };
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
componentDidMount(){
    if (Object.keys(this.props.product).length !== 0)

   this.intilizeProductAttributesArraySetDefaultSelection()
  }
  getSelectedProductSelectedAttributes = (obj) => {
    let attributesArray = [...this.state.attributes];
    let index = this.getObjIndex(attributesArray, obj.id);
    if (index > -1) {
      attributesArray[index] = obj;
    } else {
      attributesArray.push(obj);
    }
   

    this.setState({ attributes: attributesArray });
  };
  checkIfAllAttributesSelected = (attributes) => {
    let getAllAttributes = this.state.attributes;
    return attributes.length === getAllAttributes.length;
  };
  render() {
    let i = -1;
    let { product, selectedCurrencyIndex } = this.props;
    //let result = this.keepButtonActive("40");
    //console.log(result)
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
                          // if(item.index ===0){
                          //   this.getSelectedProductSelectedAttributes(
                          //     {
                          //       id: getId,
                          //       value: item.value,
                          //       index: index,
                          //       itemIndex: item.index,
                          //       topIndex: getTopIndex,
                          //       Itemid: item.id,
                          //     }

                          //   )
                          // }
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
                                this.getSelectedProductSelectedAttributes(
                                  {
                                    id: getId,
                                    value: item.value,
                                    Itemid: item.id,
                                  }
                                  
                                )
                              }
                            >
                              {item.value}
                            </ButtonDefault>
                          );
                        })
                      : item.items.map((item, index) => {
                          // if(item.index ===0){
                          //   this.getSelectedProductSelectedAttributes(
                          //     {
                          //       id: getId,
                          //       value: item.value,
                          //       index: index,
                          //       itemIndex: item.index,
                          //       topIndex: getTopIndex,
                          //       Itemid: item.id,
                          //     }

                          //   )
                          // }
                          return (
                            <ButtonDefault
                              key={index}
                              // className={
                              //   this.state.activeButtonSwatchIndex === index &&
                              //   this.state.AttributeIndex === getTopIndex
                              //     ? "activeSwatchButton"
                              //     : ""
                              // }
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
                                this.getSelectedProductSelectedAttributes(
                                  {
                                    id: getId,
                                    value: item.value,
                                    Itemid: item.id,
                                  }
                                  
                                )
                              }
                            >
                            </ButtonDefault>
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
                {product.inCart ? (
                  <AddToCartButton to={"/cart"} product={product}>
                    GO TO CART
                  </AddToCartButton>
                ) : (
                  <AddToCartButton
                    to={
                      this.checkIfAllAttributesSelected(product.attributes)
                        ? "/cart"
                        : `/details/${idPlusCategoryIndex}`
                    }
                    product={product}
                    onClick={
                      this.checkIfAllAttributesSelected(product.attributes)
                        ? () =>
                            this.props.getItemsAddedToCart(
                              id,
                              idPlusCategoryIndex.charAt(
                                idPlusCategoryIndex.length - 1
                              ),

                              this.state.attributes
                            )
                        : () => {}
                    }
                  >
                    ADD TO CART
                  </AddToCartButton>
                )}
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
