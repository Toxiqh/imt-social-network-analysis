import React from 'react';

type Props = {
  clear: () => void;
}

const ClearButton = (props: Props) => (
  <div
    className='Btn Btn-clear'
    onClick={props.clear}
  >
    Clear results
  </div>
);

export default ClearButton;