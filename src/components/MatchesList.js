// MatchesList.js
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';

function MatchesList({ matches }) {
  return (
    <Container className='mt-5' style={{ maxWidth: '1200px' }}>
      <Accordion>
        {matches.map((match, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{match.match}</Accordion.Header>
            <Accordion.Body>
              Pronostico, quote e info:
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}

export default MatchesList;
