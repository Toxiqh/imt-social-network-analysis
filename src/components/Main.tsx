import React from 'react';
import {Stack} from 'react-bootstrap';
import Results from "./Results";

const Main = () => (
  <Stack className="App-main">
    <div className="Db-Selector"></div>
    <div className="Actions-Btn"></div>
    <div className="Result-display">
      <Results/>
    </div>
    <div className="Clear-Btn"></div>
  </Stack>
);

export default Main;