import styled from "styled-components";
export let CartTitle = styled.h1`
  padding-top: 5rem;
  padding-bottom: 3.688rem;
  font-size: 2rem;
  line-height: 2.5rem;
`;
export let ProductContainer = styled.article`
  width: 100%;
  padding: 1.389vw 0;
`;
export let Column = styled.div`

  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  .btn {
    display: inline-block;
    padding: 0.5vw 0.833vw;

    background: transparent;
    font-size: 1rem;
    line-height: 1.6rem;
  }
  .btn-outline {
    width: 4.375vw;
    height: 3.125vw;
    margin-top: 0.833vw;
  }
  .btn-container > .btn-outline:not(:first-child) {
    margin-left: 0.833vw;
  }
  .attributes-container > .attribute-header:not(:first-child) {
    margin-top: 0.883vw;
  }
 
  .btn-red {
    color: red;
    border: none;
    border-right: 1px solid red;
  }
  .btn-red:hover,
  .btn-red:focus {
    background-color: red;
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
`;

export let CartItemBrand = styled.h2`
  font-size: 1.875rem;
  margin-bottom: 1rem;

  line-height: 1.688rem;
`;
export let CartItemName = styled.p`
  font-size: 1.875rem;
  line-height: 1.688rem;
`;
export let CartItemPrice = styled.div`
  font-size: var(--fs-24);
  line-height: 1.125rem;
  height: 3.194vw;
  margin: 0.75rem 0;
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
