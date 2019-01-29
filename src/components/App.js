import React from 'react';
import { Header } from './header'
import ListFacts from './list-facts'

export const App = () =>
  <div>
    <Header brand="Chuck Norris Facts" />
    <div className="container">
      <ListFacts />
    </div>
  </div>
