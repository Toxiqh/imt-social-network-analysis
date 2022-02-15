import React from "react";
import {Card, FormControl, InputGroup} from "react-bootstrap";
import '../styles/Results.css'

const Results = () => (
  <div className="area-results-div">
    <Card className="area-result-text">
      <Card.Body>Résultats :</Card.Body>
    </Card>
    <InputGroup className="area-results">
      <FormControl
        id="textarea-results"
        as="textarea"
        aria-label="With textarea"
        disabled
      />
    </InputGroup>
  </div>
);

export default Results;