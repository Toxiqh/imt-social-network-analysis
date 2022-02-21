import React from 'react';
import '../styles/ActionBtn.css'

type Props = {
    click: (newState: string) => void;
}

const SelectBtn = (props: Props) => (
  <div className="Btn" onClick={() => props.click('select')}>Récupérer des données</div>
);

export default SelectBtn;