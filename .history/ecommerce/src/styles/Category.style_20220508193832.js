import styled from "styled-components";
export let Container = styled.section`
 margin: 0 6.111vw;
 height:100vh;
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
  width: 100vw;
  height: 100%;
  top:5rem;
  bottom:0;
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
    display:flex;  }
  .flex-space-between{
    justify-content:space-between;
  }
  .minus-sign{
    width:8px;
  }
  .counter-container{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    height:100%;
    margin-right:0.694vw;
  }
  .btn-font-style{
    font-weight:400;
    font-size:0.875rem;
    line-height:1.4rem;

    font-family:var(--ff-source);
  }
  .attribute-box , .counter-box{
    cursor: pointer;
    height:1.667vw;
    justify-content:center;
    align-items:center;
    border:1px solid var(--clr-black);
  }
  .plus-sign{
    position:absolute;
  }
  .counter-box{
     position:relative;
     width:1.667vw;
  }
  .attribute-box{
    min-width:1.389vw;

    padding:0 0.278vw;
  }
  .btn-disabled{
    border:1px solid var(--clr-light-grey);
    cursor: pointer;
    color:var(--clr-light-grey);
    background-color:var(--clr-blank)
  }
  .total{
    text-transform:capitalize;
    font-weight:500;
    font-family:var(--ff-robot)
  }
  .heading{
    font-size:0.8rem;
  }
  .btn-container{
    margin-top:1vw;
  }
  .attributes-container>.heading:not(:first-child){
    margin-top:1vw;
  }
  .btn-container>.attribute-box:not(:first-child), .btn-container>.counter-box:not(:first-child){
    margin-left:0.556vw;
  }
  .total-value{
    font-weight:700;
    line-height:1.6rem;
    max-width:6.597vw;
    height:1.806vw;
    text-align:right;
  }
  z-index:10;
  background-color: var(--clr-white);
  top:5rem;
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
  .view-cart-button{
    border:1px solid black;
    text-decoration:none;
    text-transform:uppercase;
    color:var(--clr-black);
    font-size:0.875rem;
    line-height:1.05rem;
    font-weight:600;
    background-color:var(--clr-white);
    padding:1.111vw 2.222vw 1.111vw 2.222vw;
  }
  .bg-primary{
    border:1px solid var(--clr-primary);
    color:var(--clr-white);
    background-color:var(--clr-primary);
  }
  .margin-20{
    margin-bottom:1.389vw;
  }
  .mini-cart-product-margin{
  margin-top:1.736vw;
  margin-bottom: 1.319vw;
}
.total-margin{
  margin-top:1.736vw;
  margin-bottom:2.431vw;
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
