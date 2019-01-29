import React from 'react'

export const Fact = ({
  fact = {}
}) =>
  <li className="list-group-item">
    <h4>{ fact.value }</h4>
    <div>
      <span className="badge badge-primary badge-pill"><img alt='fact_icon' src={fact.icon_url} /></span>
    </div>
  </li>
