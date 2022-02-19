import React, {useState} from 'react';
import {Stack} from 'react-bootstrap';
import Results from './Results';
import Switch from './Switch';
import ClearButton from "./ClearButton";
import InsertBtn from "./InsertBtn";
import SelectBtn from "./SelectBtn";
import '../styles/Main.css'

const Main = () => {
  const [result, setResult] = useState<string>('');

  function handleChangeResult(newResult: string) {
    setResult(newResult);
  }

  function handleClear() {
    setResult('');
  }

  return (
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
        <Results result={result} onChange={handleChangeResult}/>
      </div>
      <div className="Clear-Btn">
        <ClearButton clear={handleClear}/>
      </div>
    </Stack>
  )
}

export default Main;