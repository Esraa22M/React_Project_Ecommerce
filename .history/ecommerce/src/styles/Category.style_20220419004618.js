import styled from "styled-components";
export let Container = styled.section`
 margin: 0 6.111vw;
`;
export let Title = styled.h2`
  font-weight:400;
  font-size: 2.625rem;
  line-height: 4.2rem;
  margin-top:5rem;
`;
export let ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap:2.917vw;
`;
export let OverLayDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top:5rem;
  background: rgba(57, 55, 72, 0.22);
  display: ${props => props.clicked ==="none" ? "none" : "flex"};
  justify-content:center;
  z-index: 10;
 `;
export let MiniCartContainer = styled.section`
  position: absolute;
  .product-image{
    width:7.292vw;
    height:9.514vw;
  }
  .flex-container{
    display:flex;
   background-color:blue;
  }
  .counter-container{
    display:flex;
    flex-direction:column;
    background-color:red;
    height:100%;
  }
  background-color: var(--clr-white);
  top:5rem;
  z-index: 12;
  right: 6.042vw;
  width:22.569vw;
  max-width:22.569vw;
  padding:0 1.111vw ;
  display: flex;
  justify-content: center;
  flex-direction:column;
  display: ${props => props.clicked ==="none" ? "none" : "flex"};
  .miniCart-heading {
    font-weight:700;
    line-height:1.6rem;
    margin-top:0.556vw;
    text-transform:capitalize;
  }
  .miniCart-heading .min-cart-items-counter{
    font-weight:500;
    text-transform:lowercase;
  }
  .mini-cart-product-margin{
  margin-top:1.736vw;
  margin-bottom: 1.319vw;
}
.mini-cart-product-heading{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mini-cart-product-heading span{
  font-weight: 300;
  line-height:1.6rem;

}
.product-price-value{
  font-weight:500;
  line-height:1.6rem;
  margin-top:0.347vw;
  margin-bottom:1.875vw;
}
`;
