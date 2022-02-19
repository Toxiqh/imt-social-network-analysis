import React from 'react';
import {Card, FormControl, InputGroup} from 'react-bootstrap';
import '../styles/Results.css'

type Props = {
  result: string;
  onChange: (newResult: string) => void;
}

const Results = (props: Props) => (
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
        value={props.result}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </InputGroup>
  </div>
);

export default Results;