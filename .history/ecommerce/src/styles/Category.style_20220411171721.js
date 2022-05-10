import styled from "styled-components";
export let Container = styled.div`
 /* padding-left:6.25rem;
 padding-right:15.125rem; */
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
  /* column-gap: 2.5rem; */
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
 /* .productItem{
    background-color:var(--clr-white);
    width:fit-content;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:20%;
    height:fit-content;
    padding:2vw;

  }
  
  .picture img{
    width:20vw;
    height:30vw;
  }*/
`;
export let MiniCartContainer = styled.section`
  position: absolute;
  background-color: var(--clr-white);
  top:5rem;
  z-index: 12;
  right: 6.042vw;
  width:22.569vw;
  max-width:22.569vw;
  padding-left:1.111vw;
  display: flex;
  align-items: center;
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
`;
