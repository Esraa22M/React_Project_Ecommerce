import styled from "styled-components";
export let CartTitle = styled.h1`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 5rem;
  font-weight: 700;
  padding-bottom: 3.688rem;
  font-size: 2rem;
  line-height: 2.5rem;
`;
export let ProductContainer = styled.article`
  display: flex;
  width: 100%;
  justify-content:space-between;
    padding: 1.389vw 0;
`;
export let Column = styled.div`
  display: flex;
  flex-direction:column;

  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};

  
  .btn{
    display: inline-block;
    padding:0.5vw 0.833vw;

    background:transparent;
    font-size:1rem;
    cursor: pointer;
    line-height:1.6rem;
    text-transform:uppercase;
   
  }
  .btn-outline{
    width:4.375vw;
    height:3.125vw;
    cursor: pointer;
    border:1px solid var(--clr-black);
    margin-top:0.833vw;
  }
  .btn-container>.btn-outline:not(:first-child){
    margin-left:0.833vw;
  }
  .attributes-container>.attribute-header:not(:first-child){
    margin-top:0.883vw;
  }
  .btn-red{
    color:red;
    border:none;
    border-right:1px solid red;
  }
  .btn-red:hover, .btn-red:focus{
    background-color:red;
    color:var(--clr-white);
   }
   .btn-primary{
     color:var(--clr-primary);
    border-right:1px solid var(--clr-primary);
    text-decoration:none;
    margin-left:1vw;

   }
   
   .flex{
     display:flex;
    
   }
   .flex-center{
    justify-content:center;
     align-items:center;
   }
   .btn-primary:hover , .btn-primary:focus{
    background-color:var(--clr-primary);
    color:var(--clr-white);

   }
  
`;

export let CartItemBrand = styled.h2`
  font-weight: 600;
  font-size: 1.875rem;
  margin-bottom: 1rem;

  line-height: 1.688rem;
`;
export let CartItemName = styled.p`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.688rem;
`;
export let CartItemPrice = styled.div`
  font-weight: 700;
  font-size: var(--fs-24);
  line-height: 1.125rem;
  height: 3.194vw;
  display: flex;
  align-items: center;
  margin: 0.75rem 0;
`;
export let Counter = styled.div`
  display: flex;
  flex-direction: column;
  height:100%;

  justify-content: space-between;
  .square {
    height: 2.813rem;
    width: 2.813rem;
    border:1px solid var(--clr-black);
    width: 45px;
    height: 45px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .sign {
    left: 0.781rem;
    top: 1.25rem;
    position: absolute;
  }
  .count-value {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3vw 0;
  }
`;
export let CartSliderContainer = styled.div`
  width: 9.792vw;
  height: 12.847vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.833vw;
  position: relative;
  .next,
  .prev {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 100%;

    cursor: pointer;
  }
  .next {
    left: 0.625vw;
  }
  .prev {
    right: 0.625vw;
  }
`;
