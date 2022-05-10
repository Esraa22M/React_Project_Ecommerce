import React from "react";
import { Title, ProductList, Container } from "../styles/Category.style";
import ProductItem from "./ProductItem";
class ClothingCategory extends React.Component {
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
                  categoryId={1}
                  selectedCurrencyIndex={this.props.selectedCurrencyIndex}
                  getDefaultAttributesSelection={
                    this.props.getDefaultAttributesSelection
                  }
                  getItemsAddedToCart={this.props.getItemsAddedToCart}
                  key={i}
                ></ProductItem>
              );
            })}
          </ProductList>
        </section>
      </Container>
    );
  }
}
export default ClothingCategory;
