import React from 'react';

export const Header = ({
  brand = 'ci-default'
}) =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <p style={{color:"white"}}><i className="fa fa-list-alt"></i> Salut { brand }</p>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
