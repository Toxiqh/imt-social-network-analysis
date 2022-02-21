import React from 'react';
import '../styles/ActionBtn.css'

type Props = {
  click: (newState: string) => void;
  requestLabel: string;
  btnLabel: string;
  title: string;
}

const RequestBtn = (props: Props) => (
    <div className="Btn" title={props.title} onClick={() => props.click(props.requestLabel)}>{props.btnLabel}</div>
);

export default RequestBtn;