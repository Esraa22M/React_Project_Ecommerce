import React from "react";
import ProductItem from "./ProductItem";
import { Title, ProductList } from "../styles/Category.style";
class TechCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Title>Category all</Title>
        <ProductList>
          {this.props.products.map((item, i) => {
            return (
              <ProductItem
                product={item}
                categoryId={2}
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
export default TechCategory;
