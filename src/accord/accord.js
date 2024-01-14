import * as React from 'react';

import './accord.css';

const Accord = ({list}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  return (
    <div className="dropdown">
      {open ? (
        <button className = 'but_drop' onClick={handleOpen}>⇧ Места Москвы ⇧</button>
      ) : <button className = 'but_drop' onClick={handleOpen}>⇩ Места Москвы ⇩</button>}
      {open ? (
        <ul className="menu">
          {list}
        </ul>
      ) : <div className='img'></div>}
    </div>
  );
};

export default Accord;