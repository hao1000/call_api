import React, { Component } from 'react';
import ProdcuctItem from './../ProductItem';
import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {
  render() {
    return (
        <div >
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title  tbl-10">Product List</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover tbl-10 ">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ProductItem />
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
  }
}

export default ProductList;
