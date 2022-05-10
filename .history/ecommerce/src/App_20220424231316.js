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
import Checkout from "./components/checkout";
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
      total:0,
      DataisLoaded: false,
      attributes: [],
      productDetailsObject: {},
      productSelected: {},
      itemsAddedToCart: JSON.parse(localStorage.getItem("itemsAddedToCart"))
        ? JSON.parse(localStorage.getItem("itemsAddedToCart"))
        : [],
      isCartClicked: false,
      selectedCurrencyIndex: 0,
      productId: "",
      categoryId: "",
      isCartIconClickToPopUpProduct: false,
    };
  }

  handleCartIconClickToPopUpProduct = () => {
    this.setState({ isCartIconClickToPopUpProduct: true });
  };
  generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}
  getTotal=()=> {
    let products = [...this.state.itemsAddedToCart];
    let tempTotal = 0;
    if(products.length){
    for(let i = 0 ; i < products.length ; i++){
       let amount=products[i].prices[this.state.selectedCurrencyIndex].amount*products[i].counter;
       tempTotal+=amount;
    }
    tempTotal = tempTotal.toFixed(2);

    tempTotal+=products[0].prices[this.state.selectedCurrencyIndex].currency.symbol;
    console.log("order")
  } 
  this.setState({total:tempTotal});

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
 
  getingCartPorduct = (product) => {
    let isFound = false;
    let products = [...this.state.itemsAddedToCart];
    let attributes = product.selectedattributes;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        isFound = { ...products[i], index: i };
        let objAttributes = products[i].selectedattributes;
        if (!objAttributes.length) {
          isFound = { ...products[i], index: i };
          break;
        } else {
          for (let j = 0; j < objAttributes.length; j++) {
            if (objAttributes[j].Itemid !== attributes[j].Itemid) {
              isFound = false;
              break;
            }
          }
        }
      } else {
        isFound = false;
      }
      if (isFound) {
        break;
      }
    }
    return isFound;
  };
  keepButtonActive = (value, id, attributes) => {
    let tempAttributes = [...attributes];
    let x = tempAttributes.find((item) => {
      return item.id === value && item.Itemid === id;
    });
    return x !== undefined;
  };
 
  handleProductIdAndCategoryId = (id, categoryId) => {
    this.setState({ productId: id, categoryId });
  };
  handleCartClicked = () => {
    let isClicked = this.state.isCartClicked;
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
  getingCartPorductindex = (product) => {
    let isFound = -1;
    let cartProduct = this.getingCartPorduct(product);
    if (cartProduct) {
      isFound = cartProduct.index;
    }
    return isFound;
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
      if (product.counter === 0) {
        this.handleRemoveFromCart(p);
      }else{
      let index = this.getingCartPorductindex(p);
      let cartProducts = [...this.state.itemsAddedToCart];
      cartProducts[index] = product;
      this.setState({ itemsAddedToCart: cartProducts });

      }
    }
  };
  /*here we get all the cart products */
  getItemsAddedToCart = (id, categoryId, attributes) => {
    let productAddedToCart = [...this.state.itemsAddedToCart];
    let product = { ...this.handleAddToCart(id, categoryId) };
    product["selectedattributes"] = [...attributes];
    product["counter"] = 1;
    product["categoryId"] = categoryId;
    let isProductExist = this.getingCartPorduct(product);

    if (isProductExist) {
      this.handlePlusCounter(product);
    } else {
      productAddedToCart.push(product);
       this.setState({ itemsAddedToCart: productAddedToCart });}
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
  // fetch = () => {
  //   client
  //     .query({
  //       query: LOAD_PRODUCTS,
  //     })
  //     .then((result) => {
  //       this.setState({
  //         items: result.data,
  //         DataisLoaded: true,
  //       });
  //     });
  // };


  fetch = async () => {
   let response = await  client
      .query({
        query: LOAD_PRODUCTS,
      })
      return await response.data
       };
  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("items"));
    console.log(this.fetch())

    if (!data) {
      if (this.fetch().isFulfilled){;

       this.fetch().then(result=>{
         console.log(result)
        this.setState({
          items: result,
          DataisLoaded: true,
          })
       });
      }
    } else {
      this.setState({ items: data, DataisLoaded: true });
    }
  }
  getObjIndex = (arr, id) => {
    let index = arr.findIndex((object) => {
      return object.id === id;
    });
    return index;
  };
  render() {
    let {
      DataisLoaded,
      items,
      total,
      productDetailsObject,
      itemsAddedToCart,
      attributes,
      isCartClicked,
      selectedCurrencyIndex,
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
        <OverLayDiv clicked={isCartClicked ? "block" : "none"} onClick={this.handleCartClicked}></OverLayDiv>
        <MiniCart
          isCartClicked={isCartClicked}
          getTotal={this.getTotal}
          generateKey={this.generateKey}
          total={total}
          cartItemsCount={itemsAddedToCart.length}
          keepButtonActive={this.keepButtonActive}
          onIncrement={this.handlePlusCounter}
          onDecrement={this.handleMinusCounter}
          selectedCurrencyIndex={selectedCurrencyIndex}
          itemsAddedToCart={itemsAddedToCart}
          onCartClick={this.handleCartClicked}
        ></MiniCart>
        <Routes>
          <Route
            path="/"
            element={
              <AllCategory
                
                attributes={this.state.attributes}
                getItemsAddedToCart={this.getItemsAddedToCart}
                getDefaultAttributesSelection={
                  this.getDefaultAttributesSelection
                }
                category={items.categories[0]}
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
               
                category={items.categories[1]}
                attributes={this.state.attributes}
                getItemsAddedToCart={this.getItemsAddedToCart}
                getDefaultAttributesSelection={
                  this.getDefaultAttributesSelection
                }
                selectedCurrencyIndex={selectedCurrencyIndex}
                handleProductIdAndCategoryId={this.handleProductIdAndCategoryId}
              />
            }
          ></Route>
          <Route
            path="/tech"
            element={
              <TechCategory
              attributes={this.state.attributes}
              getItemsAddedToCart={this.getItemsAddedToCart}
              getDefaultAttributesSelection={
                this.getDefaultAttributesSelection
              }
                category={items.categories[2]}
                selectedCurrencyIndex={selectedCurrencyIndex}
                handleProductIdAndCategoryId={this.handleProductIdAndCategoryId}
              />
            }
          ></Route>
          <Route
            path="/details/:id"
            element={
              <ProductDetails
                getSelectedProductSelectedAttributes={
                  this.getSelectedProductSelectedAttributes
                }
                getProductDetailsObject={this.handleProductDetails}
                product={productDetailsObject}
                attributes={attributes}
                keepButtonActive={this.keepButtonActive}
                getCartItemDrfaultAttributesSelection={
                  this.getCartItemDrfaultAttributesSelection
                }
                getDefaultAttributesSelection={this.getDefaultAttributesSelection}
                getItemsAddedToCart={this.getItemsAddedToCart}
                selectedCurrencyIndex={selectedCurrencyIndex}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
              generateKey={this.generateKey}
                keepButtonActive={this.keepButtonActive}
                selectedCurrencyIndex={selectedCurrencyIndex}
                itemsAddedToCart={itemsAddedToCart}
                onIncrement={this.handlePlusCounter}
                onDecrement={this.handleMinusCounter}
                onRemove={this.handleRemoveFromCart}
              />
            }
          ></Route>
          <Route path ="/checkout"element={<Checkout/>}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    );
  }
}

// #endregion

export default App;
