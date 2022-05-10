import styled from "styled-components";
import { Link } from "react-router-dom";
export let ProductDetailsContainer = styled.section`
  margin-top: 4.524rem;
  column-gap: 2.083vw;
`;
export let Column = styled.div`
  height: fit-content;
  margin-bottom:5vw;
  .column-container {
    margin-left: 2.083vw;
    padding-left: 2.778vw;
  }
  flex-wrap: wrap;
 
  .product-brand,
  .product-name {
    font-size:1.875rem;
    line-height: 1.688rem;
  }
  
  .product-name {
    margin-top: 1rem;
  }
 .attribute-header{
  font-family: var(--ff-roboto);
  background-color:red;

  font-size:1.125rem;
 }
  .attribute {
    font-family:var(--ff-source);
    letter-spacing:5%;
  }
  
  .attributes-container {
    margin-top: 2.688rem;
  }
  /* .attributes-container>.attribute:not(:first-child){
    margin-top:0.833vw;
  } */
  .column1-img {
    max-width: 5.486vw;
    width: 5.486vw;
    margin-bottom: 2.024rem;
    display: inline-block;
    padding: 0 0.694vw;
  }

  .product-details-main-img img {
    max-width: 42.361vw;
    width: 42.361vw;
  }
  .product-price {
    font-family: var(--ff-roboto);
    margin-top:1.667vw;
    font-size: var(--fs-18);
    line-height: 1.125rem;
  }
  .product-price-value {
    margin-top: 0.625rem;
    font-size: var(--fs-24);
    line-height: 1.125rem;
  }
  .product-description {
    font-family: var(--ff-roboto);
    line-height: 1.599rem;
    margin-top:2.778vw;
    max-width: 20.278vw;
    width:20.278vw;
  }
  .btn-margin{
       margin-right: 0.75rem; 

  }
`;
export let ButtonDefault = styled.button`
  letter-spacing: 0.05em;
  margin-top: 0.5rem;
  margin-bottom: 0.833vw;
  font-family: "Source Sans Pro", sans-serif;
  width: 3.938rem;
  padding-top: 0.813rem;
  padding-bottom: 0.875rem;
  line-height: 1.125rem;
.swatch{
}
`;

export let AddToCartButton = styled(Link)`
  display: inline-block;
  padding: 1.111vw 0;
  max-width: 20.278vw;
  width: 20.278vw;
  text-decoration: none;
  line-height: 1.2rem;
  margin-top: 1.25rem;
`;
