import React from 'react';
import Logo from './Logo';
import Dropdown from './Dropdown';
import GradientButton from './GradientButton';

export default function Navbar() {
  return (
    <header  className="nav-bar">
      <div>
        <Logo />
      </div>
      <div className="nav-bar-dropdown">
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
      <div>
        <GradientButton title="login/register" />
      </div>
    </header>
  );
}
