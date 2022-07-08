import React from 'react';
export default function Dropdown() {
  const handleHover = (e) => {
    // e.target.click();
    // console.dir(e.target);
  };
  const handleClick = (e) => {
    // console.log('clicked');
  };
  return (
    <div>
      <select
        onClick={handleClick}
        onMouseMove={handleHover}
        className="nav-bar-dropdown-select"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((x) => (
          <option>item dropdown{x}</option>
        ))}
      </select>
    </div>
  );
}
