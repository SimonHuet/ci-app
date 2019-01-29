import React from 'react'
import Fact from './fact'
import Error from './error'

export const ListFacts = ({
  isFetchedFacts,
  facts
}) =>
  <div>
    <h1 className="mt-5"> Chuck Norris Facts List</h1>
    <Error />
    {isFetchedFacts && 
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
     </div>
    }
    {facts && console.log(facts)}
    
    {
      facts.length ? renderFacts(facts)
      : <div className="alert alert-warning">No facts :/</div>
    }
    <br />
  </div>

const renderFacts = (facts) =>
  <ul className="list-group">
    { facts.map((fact, index) =>
      <Fact key={index} fact={fact} />
    )}
  </ul>
