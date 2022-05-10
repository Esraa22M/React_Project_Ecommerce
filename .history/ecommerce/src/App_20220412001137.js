import React from "react";
import ProductDetails from "./components/ProductDetails";
import { LOAD_PRODUCTS } from "./graphql/queries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllCategory from "./components/AllCategory";
import ClothingCategory from "./components/ClothingCategory";
import TechCategory from "./components/TechCategory";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import MiniCart from "./components/MiniCart";
import { OverLayDiv } from "./styles/Category.style";
import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      productDetailsObject: {},
      productSelected: {},
      itemsAddedToCart: JSON.parse(localStorage.getItem("itemsAddedToCart"))
        ? JSON.parse(localStorage.getItem("itemsAddedToCart"))
        : [],
      isCartClicked: false,
      selectedCurrencyIndex: 0,
      productId: "",
      categoryId: "",
      attributes: [],

      isCartIconClickToPopUpProduct: false,
    };
  }
  handleCartIconClickToPopUpProduct = () => {
    this.setState({ isCartIconClickToPopUpProduct: true });
  };
  getingCartPorduct = (product) => {
    let isFound = false;
    let products = [...this.state.itemsAddedToCart];
    let attributes = product.selectedattributes;
    for (let i = 0; i < products.length; i++) {
      let objAttributes = products[i].selectedattributes;
      isFound = products[i];
      for (let j = 0; j < objAttributes.length; j++) {
        if (objAttributes[j].Itemid !== attributes[j].Itemid) {
          isFound = false;
          break;
        }
      }
      if (isFound) {
        break;
      }
    }
    return isFound;
  };
  getingCartPorductindex = (product) => {
    let isFound = -1;
    let products = [...this.state.itemsAddedToCart];
    let attributes = product.attributes;
    for (let i = 0; i < products.length; i++) {
      let objAttributes = products[i].attributes;
      isFound = i;
      for (let j = 0; j < objAttributes.length; j++) {
        if (objAttributes[j].Itemid !== attributes[j].Itemid) {
          isFound = -1;
          break;
        }
      }
      if (isFound) {
        break;
      }
    }
    return isFound;
  };
  checkProductIsAlreadyExistInCart = (id, product) => {
    let isFound = false;
    let obj = this.getCartProductById(id);
    if (!obj) {
      isFound = false;
    } else {
      isFound = true;
      let objAttributes = obj.attributes;
      let productAttributes = product.attributes;
      for (let i = 0; i < productAttributes.length; i++) {
        if (objAttributes[i].Itemid !== productAttributes[i].Itemid) {
          isFound = false;
          break;
        }
      }
    }
    return isFound;
  };
  handleProductIdAndCategoryId = (id, categoryId) => {
    this.setState({ productId: id, categoryId });
  };
  handleCartClicked = () => {
    let isClicked = this.state.isCartClicked;
    console.log("hi there ");
    this.setState({ isCartClicked: !isClicked });
  };
  componentDidUpdate() {
    localStorage.setItem(
      "itemsAddedToCart",
      JSON.stringify(this.state.itemsAddedToCart)
    );
    localStorage.setItem("items", JSON.stringify(this.state.items));
  }
  getProductByIdAndCategoryId = (id, categoryId) => {
    let products = [...this.state.items.categories[categoryId].products];
    let product = products.find((x) => x.id === id);
    return product;
  };

  /* get clicked product details  */
  handleProductDetails = (id, categoryId) => {
    let product = this.getProductByIdAndCategoryId(id, categoryId);
    this.setState({ productDetailsObject: product });
    return product;
  };
  /*here we get product's added to cart attributes selected*/
  getItemAddedToCartAttributes = (obj) => {
    let attributes = [];
    attributes.push(obj);
    return attributes;
  };
  /* handle user press add to cart button  get product to be added*/
  handleAddToCart = (id, categoryId) => {
    let product = this.getProductByIdAndCategoryId(id, categoryId);
    return { ...product };
  };
  handlePlusCounter = (p) => {
    let product = this.getingCartPorduct(p);
    product.counter++;
    let index = this.getingCartPorductindex(p);
    let cartProducts = [...this.state.itemsAddedToCart];
    cartProducts[index] = product;
    this.setState({ itemsAddedToCart: cartProducts });
  };
  handleMinusCounter = (p) => {
    let product = this.getingCartPorduct(p);

    if (!product.counter <= 0) {
      product.counter--;
      let index = this.getingCartPorductindex(p);
      let cartProducts = [...this.state.itemsAddedToCart];
      cartProducts[index] = product;
      this.setState({ itemsAddedToCart: cartProducts });
    }
  };
  /*here we get all the cart products */
  getItemsAddedToCart = (id, categoryId, attributes) => {
    let productAddedToCart = [...this.state.itemsAddedToCart];
    let product = { ...this.handleAddToCart(id, categoryId) };

    product["selectedattributes"] = attributes;
    product["counter"] = 1;
    product["categoryId"] = categoryId;

    console.log(product);
    let isProductExist = this.getingCartPorduct(product);
    // // let obj = this.getCartProductById(id);
    //  let isProductExist = this.getingCartPorduct( product);
    if (isProductExist) {
      this.handlePlusCounter(product);
    } else {
      productAddedToCart.push(product);
    }
    // // productAddedToCart.push(product);

    this.setState({ itemsAddedToCart: productAddedToCart });
  };
  /*get selected currency index */
  handleCurrencyIndex = (index) => {
    this.setState({ selectedCurrencyIndex: index });
  };

  /* delete cart item */
  handleRemoveFromCart = (product) => {
    let products = [...this.state.itemsAddedToCart];
    let index = this.getingCartPorductindex(product);
    products.splice(index, 1);
    this.setState({ itemsAddedToCart: products });
  };
  fetch = () => {
    client
      .query({
        query: LOAD_PRODUCTS,
      })
      .then((result) => {
        console.log(result.data);
        this.setState({
          items: result.data,
          DataisLoaded: true,
        });
      });
  };

  getCartItemDrfaultAttributesSelection = (function (attributes) {
    var executed = false;
    return function (attributes) {
      if (!executed) {
        executed = true;
        let tempAttributes = attributes
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
   keepButtonActive = (value, id) => {
    let tempAttributes = [...this.state.attributes];
    let x = tempAttributes.find((item) => {
      return item.id === value && item.Itemid === id;
    });
    return x !== undefined;
  };
 
  getObjIndex = (arr, id) => {
    let index = arr.findIndex((object) => {
      return object.id === id;
    });
    return index;
  };
 
  getSelectedProductSelectedAttributes = (obj) => {
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
  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("items"));
    if (!data) {
      this.fetch();
    } else {
      this.setState({ items: data, DataisLoaded: true });
    }
  }

  render() {
    let {
      DataisLoaded,
      items,
      productDetailsObject,
      productSelected,
      itemsAddedToCart,
      isCartIconClickToPopUpProduct,
      isCartClicked,
      selectedCurrencyIndex,
      categoryId,
      productId,
    } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Loading.... </h1>{" "}
        </div>
      );

    return (
      <Router>
        <Navbar
          onCartClick={this.handleCartClicked}
          cartItemsCount={itemsAddedToCart.length}
          handleCurrencyIndexSelection={this.handleCurrencyIndex}
        />
        <OverLayDiv clicked={isCartClicked ? "block" : "none"}></OverLayDiv>
        {/* { isCartIconClickToPopUpProduct? <ProductItemPopUp
          categoryId={categoryId}
          productId={productId}
          selectedCurrencyIndex={selectedCurrencyIndex}
          isCartIconClickToPopUpProduct={isCartIconClickToPopUpProduct}
          getProductByIdAndCategoryId={this.getProductByIdAndCategoryId}
        />:<></> } */}
        <MiniCart
          isCartClicked={isCartClicked}
          cartItemsCount={itemsAddedToCart.length}
          itemsAddedToCart={itemsAddedToCart}
          selectedCurrencyIndex={selectedCurrencyIndex}

        ></MiniCart>
        <Routes>
          <Route
            path="/"
            element={
              <AllCategory
                handleCartIconClickToPopUpProduct={
                  this.handleCartIconClickToPopUpProduct
                }
                category={items.categories[0]}
                getCartItemDrfaultAttributesSelection={this.getCartItemDrfaultAttributesSelection}
                getItemsAddedToCart={this.getItemsAddedToCart}

                selectedCurrencyIndex={selectedCurrencyIndex}
                handleProductIdAndCategoryId={this.handleProductIdAndCategoryId}
              />
            }
          >
            {" "}
          </Route>
          <Route
            path="/clothes"
            element={
              <ClothingCategory
                handleCartIconClickToPopUpProduct={
                  this.handleCartIconClickToPopUpProduct
                }
                category={items.categories[1]}
                getCartItemDrfaultAttributesSelection={this.getCartItemDrfaultAttributesSelection}
                getItemsAddedToCart={this.getItemsAddedToCart}

                selectedCurrencyIndex={selectedCurrencyIndex}
                handleProductIdAndCategoryId={this.handleProductIdAndCategoryId}
              />
            }
          ></Route>
          <Route
            path="/tech"
            element={
              <TechCategory
                handleCartIconClickToPopUpProduct={
                  this.handleCartIconClickToPopUpProduct
                }
                category={items.categories[2]}
                getCartItemDrfaultAttributesSelection={this.getCartItemDrfaultAttributesSelection}
                getItemsAddedToCart={this.getItemsAddedToCart}

                selectedCurrencyIndex={selectedCurrencyIndex}
                handleProductIdAndCategoryId={this.handleProductIdAndCategoryId}
              />
            }
          ></Route>
          <Route
            path="/details/:id"
            element={
              <ProductDetails
                getProductDetailsObject={this.handleProductDetails}
                product={productDetailsObject}
                getItemsAddedToCart={this.getItemsAddedToCart}
                selectedCurrencyIndex={selectedCurrencyIndex}
                keepButtonActive={this.keepButtonActive}
                getCartItemDrfaultAttributesSelection={this.getCartItemDrfaultAttributesSelection}
                getSelectedProductSelectedAttributes={this.getSelectedProductSelectedAttributes}
                // getProductToBeAddedToCart={this.handleAddToCart}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
              selectedCurrencyIndex={selectedCurrencyIndex}

                itemsAddedToCart={itemsAddedToCart}
                onIncrement={this.handlePlusCounter}
                onDecrement={this.handleMinusCounter}
                onRemove={this.handleRemoveFromCart}
              />
            }
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    );
  }
}

// #endregion

export default App;
