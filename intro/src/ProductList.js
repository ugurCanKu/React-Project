import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {



  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((prod) => (
              <tr key={prod.id}>
                <th scope="row">{prod.id}</th>
                <td>{prod.productName}</td>
                <td>{prod.unitPrice}</td>
                <td>{prod.quantityPerUnit}</td>
                <td>{prod.unitsInStock}</td>
                <td><Button onClick={()=>this.props.addToCart(prod)} color="warning">add to cart</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
