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
    this.state = {
      itemsAddedToCart:this.props.itemsAddedToCart
    }
  }
  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(this.props.itemsAddedToCart) !==
      JSON.stringify(prevProps.itemsAddedToCart)
    ) {
      this.props.getTotal();
    }
    if(prevProps.itemsAddedToCart !== this.props.itemsAddedToCart) {
      this.setState({itemsAddedToCart: this.props.itemsAddedToCart});
    }
  
  } 

  render() {
    let { cartItemsCount, selectedCurrencyIndex } =
      this.props;
      let {itemsAddedToCart}=this.state;

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
            
            <div className="flex-container flex-space-between total-margin">
              <p className="total">total</p>

              <p className="total-value">{this.props.total}{itemsAddedToCart[0].prices[selectedCurrencyIndex].currency.symbol}
</p>
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
          <div className="h-30 items-center flex flex-center items-center">
           
             <h3 className="text-upper-case">Cart is empty</h3>
          </div>
        )}
      </MiniCartContainer>
    );
  }
}
export default MiniCart;
