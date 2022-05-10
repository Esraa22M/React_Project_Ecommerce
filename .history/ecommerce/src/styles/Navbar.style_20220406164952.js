import styled from "styled-components";
import { Link } from "react-router-dom";
export let Header = styled.header`
  background-color: var(--clr-white);
`;
export let Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 0;
  height: 5rem;
  width:93%;
  margin:0 auto;
`;

export let NavMenu = styled.ul`
  
  & > * {
    margin-right: 0.125rem;
  }
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .active {
    border-bottom: 2px solid var(--clr-primary);
  }
`;
export let NavItem = styled.li`
  text-align: center;
  padding-top: 1.75rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
export const NavLink = styled(Link)`
  color: var(--color-black);
  text-decoration: none;

  font-weight: 600;
  line-height: 1.2rem;
  font-size: var(--fs-16);
  cursor: pointer;
`;
export const Center = styled.div`
  display: flex;
  line-height: 18px;
  position: relative;
  height:100%;
  background-color:yellow;
  /* height: 1.789rem; */
  .circle,
  .upArrow {
    position: absolute;
  }
  .bag {
      width: 1.949rem;
;

  }
  /* .upArrow {
    width: 0.338rem;
    height: 0.199rem;
    bottom: 1.082rem;
    right: 0.429rem;
  } */
  /* .circle {
    bottom: 0.54rem;
    right: 0.571rem;
    width: 0.88rem;
    height: 0.562rem;
  } */
`;
export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export let ShoppingCartIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 1.25rem;
  height: 0.813rem;
  margin-left: 1.375rem;
  .cart-icon {
    width: 100%;
    height: 100%;
  }
  .cart-leg-1,
  .cart-leg-2 {
    position: absolute;
    width: 0.274rem;
    height: 0.262rem;
    display: inline-block;
    top: 100%;
  }
  .cart-leg-2 {
    right: 0.133rem;
  }

  /* .circle {
    position: absolute;
    display: flex;
    display:none;
    justify-content: center;
    align-items: center;
    color: var(--color-white);
    background-color: var(--color-black);
    border-radius: 100%;
    bottom: 1.5vw;
    font-weight: 700;
    font-size: 1.5vw;
    line-height: 2.28vw;
    text-align: center;
  }
  .cart-leg-1 , .cart-leg-2{
    position:absolute;
  }
  .cart-leg-1{
    top:1rem;
    right:0.1rem;
  }
  .cart-leg-2{
    top:1rem;

  } */
`;
