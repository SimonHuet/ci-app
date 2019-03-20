import { connect } from 'react-redux'
import { ListFacts } from './list-facts'
import { factsFetched, fetchFacts, factFetchError, clear } from '../../redux/actions/list-facts'
import { fetchBackend } from '../../fetch-backend'
import { applyLifecycle } from 'react-lifecycle-component'

const mapStateToProps = state => ({
  facts: state.listFacts.facts,
  isFetchedFacts: state.listFacts.isFetchedFacts,
  isFetchError: state.listFacts.isFetchError
})

const mapDispatchToProps = dispatch => ({
  componentDidMount: () => {
    dispatch(fetchFacts())

    fetchBackend('/random')
      .then(body => dispatch(factsFetched([body])))
      .catch(() => dispatch(factFetchError()))
  },
  componentShouldUpdate: ()=>{ return mapStateToProps.facts.length>0 },
  componentWillUnmount: () => { dispatch(clear()) },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(applyLifecycle(ListFacts))
