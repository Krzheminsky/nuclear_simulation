import React, { Component } from "react";
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import MapCoordinate from "./map-coordinate/MapCoordinate";
import Header from "./header/Header";
import LeftAdd from "./left-add/LeftAdd";
import LeftOut from "./left-out/LeftOut";
import Footer from "./footer/Footer";
import HowToWork from "./howToWork/HowToWork";
import WhatsNew from './whats-new/WhatsNew';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const width = window.innerWidth

  if (width >= 768) {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <LeftAdd />
            <LeftOut />
          </Col>
          <Col md={8}>
            <Routes >
              <Route exact path="/" element={<MapCoordinate />} />
              <Route exact path="/how" element={<HowToWork />} />
              <Route exact path="/what" element={<WhatsNew />} />
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
  else {

    return (
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <LeftAdd />
          </Col>
        </Row>
        <Row>
          <Col>
            <Routes >
              <Route exact path="/" element={<MapCoordinate />} />
              <Route exact path="/how" element={<HowToWork />} />
              <Route exact path="/what" element={<WhatsNew />} />
            </Routes >
          </Col>
        </Row>
        <Row>
          <Col>
            <LeftOut />
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

export default App