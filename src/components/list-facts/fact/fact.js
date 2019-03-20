import React from 'react'

export const Fact = ({
  fact = {}
}) =>
  <li className="list-group-item">
      <span style={{float:"left", marginRight :"25px"}} className="badge badge-pill">
      <img alt='fact_icon' src={fact.icon_url} /></span>
      <blockquote >{ fact.value }</blockquote>
  </li>
