import React from "react";
import circle from "../images/halfCircle.svg";
import cart from "../images/cartIcon.svg";
import bag from "../images/logo.svg";
import topBagPart from "../images/topPartOfLogo.svg";
import cartLeg from "../images/cartLeg.svg";
import arrow from "../images/arrow.svg";
import CustomDropDownMenu from "./CustomDropDownMenu";
import {
  Nav,
  NavLink,
  NavMenu,
  NavItem,
  Center,
  ShoppingCartIcon,
} from "../styles/Navbar.style";
import { Container } from "../styles/Category.style";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.getInitalRouteValue();
    this.state = {
      links: this.getInitalRouteValue(),
    };
  }
  getInitalRouteValue = () => {
    let url = window.location.pathname;
    let index = 0;
    if (url === "/clothes") {
      index = 1;
    } else if (url === "/tech") {
      index = 2;
    } else {
      index = 0;
    }
    let tempLinks = [false];
    tempLinks[index] = true;
    return tempLinks;
  };
  handleOnLinkClick = (index) => {
    let tempLinks = [...this.state.links];
    for (var i = 0; i < tempLinks.length; i++) {
      tempLinks[i] = false;
    }

    tempLinks[index] = true;
    this.setState({ links: tempLinks });
  };
  render() {
    let links = this.state.links;

    return (
      <header className="bg-light">
        <Container>
          <Nav className="flex items-center flex-space-between text-upper-case">
          <div className="flex"> <NavMenu className="flex flex-start items-center ">
              <NavItem className={links[0] === true ? "active" : ""}>
                <NavLink
                  to="/"
                  onClick={() => this.handleOnLinkClick(0)}
                  className="text-dark font-600 cursor-pointer"
                >
                  ALL
                </NavLink>
              </NavItem>
              <NavItem className={links[1] === true ? "active" : ""}>
                <NavLink
                  className="text-dark font-600 cursor-pointer"
                  to="/clothes"
                  onClick={() => this.handleOnLinkClick(1)}
                >
                  Clothing
                </NavLink>
              </NavItem>
              <NavItem className={links[2] === true ? "active" : ""}>
                <NavLink
                  to="/tech"
                  onClick={() => this.handleOnLinkClick(2)}
                  className="text-dark font-600 cursor-pointer"
                >
                  Tech
                </NavLink>
              </NavItem>
             
            </NavMenu>
            <Center className="flex flex-center h-100 ">
              <img
                src={topBagPart}
                className="top-bag-part"
                alt="shopping-bag"
              />
              <img src={bag} className="bag" alt="shopping-bag" />
              <img src={arrow} alt="up-arrow" className="upArrow" />
              <img src={circle} alt="circle" className="circle" />
            </Center>
            </div> 
            <div className="flex  items-center h-100  ">
         
              <CustomDropDownMenu
                handleCurrencyIndexSelection={
                  this.props.handleCurrencyIndexSelection
                }
              />
              <ShoppingCartIcon
                onClick={this.props.onCartClick}
                className="flex flex-column items-center flex-center"
              >
                <img src={cart} alt="cart" className="cart-icon" />
                <img src={cartLeg} alt="cart" className="cart-leg-1 " />
                <img src={cartLeg} alt="cart" className="cart-leg-2 " />

                {/* <img src={cartLeg} alt="cart" className="cart-leg-1 " />
              <img src={cartLeg} alt="cart" className="cart-leg-2 " />
              {/* {this.props.cartItemsCount > 0 ? ( *
                <span className="circle">{this.props.cartItemsCount}</span>
              ) : (
                ""
              )} */}
                {this.props.cartItemsCount > 0 ? (
                  <span className="badge-rounded bg-dark text-light flex flex-center items-center">
                    {this.props.cartItemsCount}
                  </span>
                ) : (
                  ""
                )}
              </ShoppingCartIcon>
            </div>
          </Nav>
        </Container>
      </header>
    );
  }
}
export default Navbar;
