import React from "react";
import ProductItem from "./ProductItem";
import { Title, ProductList, Container } from "../styles/Category.style";
class AllCategory extends React.Component {
    render() {
    let { category,getItemsAddedToCart,attributes,selectedCurrencyIndex ,getDefaultAttributesSelection} = this.props;
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
                  getDefaultAttributesSelection={getDefaultAttributesSelection}
                  getItemsAddedToCart={getItemsAddedToCart}
                  attributes={attributes}
                  selectedCurrencyIndex={selectedCurrencyIndex}
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

export default AllCategory;
