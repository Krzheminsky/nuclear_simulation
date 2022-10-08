import React, { Component } from "react";
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import MapCoordinate from "./map-coordinate/MapCoordinate";
import Header from "./header/Header";
import LeftAdd from "./left-add/LeftAdd";
import LeftOut from "./left-out/LeftOut";
import Footer from "./footer/Footer";
import HowToWork from "./howToWork/HowToWork";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {

  state = {
    dataExplosion: '',
    directionWind: '',
  }

  render() {
    let calcFunction = (dataExplosion) => {
      this.setState({ dataExplosion })
    }

    let calcWind = (directionWind) => {
      this.setState({ directionWind })
    }

    return (

      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <LeftAdd
              calcFunction={calcFunction}
              calcWind={calcWind} />
            <LeftOut data={this.state} />
          </Col>
          <Col md={8}>
            <Routes >
              <Route exact path="/" element={<MapCoordinate data={this.state} />} />
              <Route exact path="/how" element={<HowToWork />} />
            </Routes >
          </Col>

        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}
