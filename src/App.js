import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductItem/ProductItem'

class App extends Component {
  render() {
    return (
      <div className="ProductList">
      

        <Menu/>

        
        <div className="container">

          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

              <button type="button" className="btn btn-info mr-10">Add Product</button> &nbsp;

              <ProductList/>
              
            </div>

          </div>

        </div>

      </div>
    );
  }
}
export default App;
