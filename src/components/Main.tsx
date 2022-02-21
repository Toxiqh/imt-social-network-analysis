import React, {useState} from 'react';
import {Stack} from 'react-bootstrap';
import '../styles/Main.css'
import Results from './Results';
import Switch from './Switch';
import ClearButton from "./ClearButton";
import InsertBtn from "./InsertBtn";
import SelectBtn from "./SelectBtn";
import RunButton from "./RunButton";
import ActionForm from "./ActionForm";

const Main = () => {
  const [result, setResult] = useState<string>('');
  const [formState, setFormState] = useState<string>('hidden');

  function handleChangeResult(newResult: string) {
    setResult(newResult);
  }

  function setActionForm(newState: string) {
    setFormState(newState);
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
          <InsertBtn click={setActionForm}/>
        </div>
        <div className="Action-Btn">
          <SelectBtn click={setActionForm}/>
        </div>
      </div>
      <div className="Action-Form">
        <ActionForm action={formState}/>
      </div>
      <div className="Actions-Btn-Container">
        <RunButton/>
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