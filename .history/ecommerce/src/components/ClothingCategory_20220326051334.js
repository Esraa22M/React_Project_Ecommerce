import React from "react";
import { Title, ProductList } from "../styles/Category.style";
import ProductItem from "./ProductItem";
class ClothingCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Title>Category clothes</Title>
        <ProductList>
          {this.props.products.map((item, i) => {
            return (
              <ProductItem
                product={item}
                categoryId={1}
                key={i}
                // handleCartIconClickToPopUpProduct={
                //   this.props.handleCartIconClickToPopUpProduct
                // }
                // handleProductIdAndCategoryId={
                //   this.props.handleProductIdAndCategoryId
                // }
                // selectedCurrencyIndex={this.props.selectedCurrencyIndex}
              ></ProductItem>
            );
          })}
        </ProductList>
      </>
    );
  }
}
export default ClothingCategory;
