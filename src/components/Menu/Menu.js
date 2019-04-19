import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
        <div>

            <div className="navbar navbar-default">
                <a className="navbar-brand" href="/some/valid/uri" >Call API</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="/some/valid/uri">Home</a>
                    </li>
                    <li>
                        <a href="/some/valid/uri">Product Management</a>
                    </li>
                </ul>
            </div>

        </div>
    );
  }
}

export default Menu;
