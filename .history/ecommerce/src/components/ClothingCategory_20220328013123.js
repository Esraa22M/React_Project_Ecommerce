import React from "react";
import { Title, ProductList } from "../styles/Category.style";
import ProductItem from "./ProductItem";
class ClothingCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    let{category}=this.props;

    return (
      <>
        <Title>Category {category.name}</Title>
        <ProductList>
          {this.props.category.products.map((item, i) => {
            return (
              <ProductItem
                product={item}
                categoryId={1}
                selectedCurrencyIndex={this.props.selectedCurrencyIndex}

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
