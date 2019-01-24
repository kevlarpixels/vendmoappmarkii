import React, { Component } from "react";
import "./Landing.css";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import webLanding from './webLanding.svg';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img className="landingImg" src={webLanding} alt="webLanding" srcSet />
          <InputGroup className="searchlanding">
        <Input className="inputlanding" />
        <InputGroupAddon addonType="append">
          <Button className="colorlandingbtn">Search</Button>
        </InputGroupAddon>
      </InputGroup>
          
          
          <div className="container text-center landingline">Buy Quickly. Buy Quality. Sell Local.</div>
          <div className="container-fluid landinggreeninfo">
            <div className="row">
              <div className="col">
                <h3>1 of 3</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa eligendi, illo magni corporis,
                  dignissimos commodi at sapiente quos, esse magnam voluptatum odio quasi suscipit ea voluptas dolor
                incidunt temporibus. Expedita!</p>
              </div>
              <div className="col">
                <h3>1 of 3</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa eligendi, illo magni corporis,
                  dignissimos commodi at sapiente quos, esse magnam voluptatum odio quasi suscipit ea voluptas dolor
                incidunt temporibus. Expedita!</p>
              </div>
              <div className="col">
                <h3>1 of 3</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa eligendi, illo magni corporis,
                  dignissimos commodi at sapiente quos, esse magnam voluptatum odio quasi suscipit ea voluptas dolor
                incidunt temporibus. Expedita!</p>
              </div>
            </div>
          </div>
          <footer className="container-fluid" role="contentinfo" aria-labelledby="footer-label">
            <div className="row">
              <div className="col">
                <h3 className="h5 strong mb-xs-2 text-center">
                  Shop
              </h3>
              </div>
              <div className="col">
                <h3 className="h5 strong mb-xs-2 text-center">
                  Sell
              </h3>
              </div>
              <div className="col">
                <h3 className="h5 strong mb-xs-2 text-center">
                  About
              </h3>
              </div>
              <div className="col">
                <h3 className="h5 strong mb-xs-2 text-center">
                  Follow VendMo
              </h3>
              </div>
            </div>
            <div className="copy">
              <span className="text-smaller text-gray-lighter mr-sm-2 text-center">
                © 2019 VendMo, Inc.
            </span>
            </div>
          </footer>
        </div></div>
    );
  }
}

export default Landing;
