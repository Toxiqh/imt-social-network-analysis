import React from 'react';
import {Stack} from 'react-bootstrap';
import Results from "./Results";
import Switch from "./Switch";
import InsertBtn from "./InsertBtn";
import SelectBtn from "./SelectBtn";
import '../styles/Main.css'

const Main = () => (
  <Stack className="App-main">
    <div className="Db-Selector">
        <Switch/>
    </div>
    <div className="Actions-Btn-Container">
        <div className="Action-Btn">
            <InsertBtn/>
        </div>
        <div className="Action-Btn">
            <SelectBtn/>
        </div>
    </div>
    <div className="Result-display">
      <Results/>
    </div>
    <div className="Clear-Btn"></div>
  </Stack>
);

export default Main;