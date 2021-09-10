import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class CartList extends Component {
  state = { totalPrice: 0 };

  componentDidMount() {
    this.add();
  }

  addToPrice = (price) => {
    this.setState({ totalPrice: price });
  };

  add = () => {
    let totalPrice = 0;
    let quantity = 0;
    this.props.cart.map(
      (cartItem) => (
        (totalPrice += parseInt(cartItem.product.unitPrice)),
        (quantity = parseInt(cartItem.quantity)),
        (totalPrice = totalPrice * quantity),
        this.addToPrice(totalPrice)
      )
    );
  };

  handleClick = (product) => {
    let totalPrice = 0;
    let quantity = parseInt(product.quantity);
    let unitPrice = parseInt(product.product.unitPrice);
    totalPrice = quantity * unitPrice;
    totalPrice = this.state.totalPrice - totalPrice;
    this.addToPrice(totalPrice);
    this.props.removeFromCart(product.product);
  };

  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Prdouct Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.handleClick(cartItem)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total is :</td>
            <td>{this.state.totalPrice}</td>
          </tr>
        </tfoot>
      </Table>
    );
  }

  render() {
    return <div>{this.renderCart()}</div>;
  }
}
