import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'; // Import Col

function Circle({ to, className, competition }) { 
  return (
    <Link to={to} className={className}></Link>
  );
}

function HomePage() {
  return (
    <Container className='mt-2'>
      <Row>
        {/* Each Col component represents a column. Adjust 'md' prop for responsiveness */}
        <Col className="circle-container text-center">
          <Circle to="/seriea" className="circle serie-a" /><br></br>
          <span>Serie A</span>
        </Col>
        <Col  className="circle-container">
          <Circle to="/premierleague" className="circle premier-league" /><br></br>
          <span>Premier League</span>
        </Col>
        <Col  className="circle-container">
          <Circle to="/ligue1" className="circle ligue-1" /><br></br>
          <span>Ligue 1</span>
        </Col>
        <Col className="circle-container">
          <Circle to="/liga" className="circle liga" /><br></br>
          <span>La Liga</span>
        </Col>
     
        <Col  className="circle-container">
          <Circle to="/bundesliga" className="circle bundesliga" /><br></br>
          <span>Bundesliga</span>
        </Col>
        </Row>
      <Row>
        <Col  className="circle-container">
          <Circle to="/championsleague" className="circle champions-league" /><br></br>
          <span>Champions League</span>
        </Col>
        <Col  className="circle-container">
          <Circle to="/europaleague" className="circle europa-league" /><br></br>
          <span>Europa League</span>
        </Col>
        <Col  className="circle-container">
          <Circle to="/conferenceleague" className="circle conference-league" /><br></br>
          <span>Conference League</span>
        </Col>
        </Row>
        <Col className="circle-container">
          <Circle to="/national" competition="Nazionali" className="circle national" /><br></br>
          <span>Nazionali</span>
        </Col>
      
    </Container>
  );
}

export default HomePage;
