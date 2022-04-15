import React from 'react';

const Header = ({ props }) => {
  const { title } = props;
  return (
    <header>
      <div className="nav-wrapper light-blue darken-2">
        <a href="/" className="brand-logo">
          {title}
        </a>
      </div>
    </header>
  );
};

export default Header;
