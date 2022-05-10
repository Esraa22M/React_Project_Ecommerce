import React from "react";
import ProductItem from "./ProductItem";
import { Title, ProductList, Container } from "../styles/Category.style";
class AllCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { category } = this.props;
    return (
      <Container>
        <section>
          <Title>Category {category.name}</Title>
          <ProductList>
            {this.props.category.products.map((item, i) => {
              return (
                <ProductItem
                  product={item}
                  categoryId={0}
                  getCartItemDrfaultAttributesSelection={this.props.getCartItemDrfaultAttributesSelection}
                  getItemsAddedToCart={this.props.getItemsAddedToCart}
                  attributes={this.props.attributes}
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
        </section>
      </Container>
    );
  }
}

export default AllCategory;
