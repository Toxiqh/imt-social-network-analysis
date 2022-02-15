import React from 'react';
import {Stack} from 'react-bootstrap';

const Main = () => (
  <Stack gap={3} className="App-main">
    <div className="Db-Selector"></div>
    <div className="Actions-Btn"></div>
    <div className="Result-display"></div>
    <div className="Clear-Btn"></div>
  </Stack>
);

export default Main;