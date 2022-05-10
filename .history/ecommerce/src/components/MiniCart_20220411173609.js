import React from "react";
import { MiniCartContainer } from "../styles/Category.style";
import { ProductContainer ,Column} from "../styles/Cart.style";
class MiniCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { cartItemsCount } = this.props;
    return (
      <MiniCartContainer clicked={this.props.isCartClicked ? "flex" : "none"}>
        <h2 className="miniCart-heading">
          my bag,{" "}
          <span className="min-cart-items-counter"> {cartItemsCount}items</span>
        </h2>
        <ProductContainer>
            <Column>ESRAA</Column> 
            <Column>ASMAA</Column>         
        </ProductContainer>
      </MiniCartContainer>
    );
  }
}
export default MiniCart;
