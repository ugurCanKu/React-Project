import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Chef Ugur's App</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/form1">
                  Form Demo 1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/form1-2">
                  Form Demo 2
                </NavLink>
              </NavItem>
              <CartSummary removeFromCart={this.props.removeFromCart} cart = {this.props.cart}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
    