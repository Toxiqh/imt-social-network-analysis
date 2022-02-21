import React from 'react';
import '../styles/ActionBtn.css'

type Props = {
    click: (newState: string) => void;
}

const InsertBtn = (props: Props) => {
    return (
        <div className="Btn" onClick={() => props.click('insert')}>Insertion de données</div>
)
};

export default InsertBtn;