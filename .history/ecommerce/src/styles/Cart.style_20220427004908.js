import styled from "styled-components";
export let CartTitle = styled.h1`
  margin-top: 5.556vw;
  margin-bottom: 3.819vw;
  width:fit-content;
  font-size: 2rem;
  line-height: 2.5rem;
`;
export let ProductContainer = styled.article`
  width: 100%;
  padding-top: 1.667vw ;
  padding-bottom:1.111vw;
`;
export let Column = styled.div`
  background-color:red;

  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  .btn {
    display: inline-block;
    padding: 0.5vw 0.833vw;

    background: transparent;
    font-size: 1rem;
    line-height: 1.6rem;
  }
  .btn-outline {
    margin-bottom:1.111vw;
  }
  .active{
    background-color:var(--clr-white)!important;
    color:var(--clr-black) !important;
  }
  
  .btn-container > .btn-outline:not(:first-child) {
    margin-left: 0.833vw;
  }
   .attribute-header {
    margin-bottom: 0.486vw;
  }

  .btn-red {
    color: red;
    border: none;
    border-right: 1px solid red;
  }
  .btn-red:hover,
  .btn-red:focus {
    color: var(--clr-white);
  }
  .btn-primary {
    border-right: 1px solid var(--clr-primary);
    text-decoration: none;
    margin-left: 1vw;
  }

  .btn-primary:hover,
  .btn-primary:focus {
    background-color: var(--clr-primary);
    color: var(--clr-white);
  }
  .cart-item-brand ,.cart-item-name{
    font-size: 1.875rem;
    line-height: 1.688rem;

  }
  .cart-item-brand{
  margin-bottom: 1.111vw;

  }
`;


export let CartItemPrice = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin: 1.389vw 0;
`;
export let Counter = styled.div`
  height: 100%;

  .square {
    height: 2.813rem;
    width: 2.813rem;
    width: 45px;
    height: 45px;
    position: relative;
  }

  .sign {
    left: 0.781rem;
    top: 1.25rem;
    position: absolute;
  }
  .count-value {
    padding: 3vw 0;
  }
`;
export let CartSliderContainer = styled.div`
  width: 9.792vw;
  height: 12.847vw;
  margin: 0 0.833vw;
  position: relative;
  .next,
  .prev {
    position: absolute;
    width: 10%;
    height: 100%;
  }
  .next {
    left: 0.625vw;
  }
  .prev {
    right: 0.625vw;
  }
`;
