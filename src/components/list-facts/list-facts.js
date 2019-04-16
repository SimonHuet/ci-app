import React from 'react'
import Fact from './fact'
import Error from './error'

export class ListFacts extends React.Component{

  renderFacts = (facts) =>{ 
    return ( 
    <ul className="list-group">
     {facts.map((fact, index) =>
      <Fact key={index} fact={fact} />
     )}
    </ul>)
  }

  render(){
    const { isFetchedFacts , facts } = this.props
    return (
    <div>
    <h1 className="mt-5"> Chuck Norris Facts List</h1>
    <Error />
    {isFetchedFacts && 
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
     </div>
    }

    {facts.length > 0 ? this.renderFacts(facts)
      : <div className="alert alert-warning">No facts :/</div>
    }
    <br />
  </div>)
  }
}