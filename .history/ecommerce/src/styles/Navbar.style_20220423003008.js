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
  text-decoration: none;

  line-height: 1.2rem;
  font-size: var(--fs-16);
  cursor: pointer;
`;
export const Center = styled.div`
  display: flex;
  position: relative;
  justify-content:center;
  height: 100%;
  /* height: 1.789rem; */
  .circle,
  .upArrow ,.top-bag-part , .bag{
    position: absolute;
  }
  width: 1.949rem;

  .bag {
    width:100%;
    z-index:10;
    top: 1.92rem;
  }
  .top-bag-part{
    z-index:5;
    width:1.693rem;
    top:1.838rem;
  }
  .upArrow {
    width: 0.338rem;
    top:2.428rem;
    z-index:20;
   right:0.429rem;
  } 
  .circle {
    top:2.607rem;
    z-index:15;
    right:0.571rem;
    width:0.88rem;
  } 
`;
export const Right = styled.div`
  display: flex;
  justify-content: center;
  height:100%;
  align-items: center;
`;

export let ShoppingCartIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 1.25rem;
  height:100%;
  margin-left: 1.375rem;
  .cart-icon {
    width: 100%;
  }
  .cart-leg-1,
  .cart-leg-2 {
    position: absolute;
    width: 0.274rem;
    /* height: 0.262rem; */
    display: inline-block;
    top: 2.999rem;
  }
  .cart-leg-2 {
    right: 0.133rem;
  }

  .badge-rounded{
    width:1.25rem;
    height:1.25rem;
    background-color:var(--clr-black);
    color:var(--clr-white);
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family:var(--ff-roboto);
    font-weight:700;
    font-size:0.875rem;
    line-height:1.026rem;
    position:absolute;
    top:1.563rem;
    left:0.813rem;
  }
`;
