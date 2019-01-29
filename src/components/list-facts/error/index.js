import { connect } from 'react-redux'
import { Error } from './error'

const mapStateToProps = state => ({
  isFetchError: state.listFacts.isFetchError,
})

export default connect(
  mapStateToProps,
  null,
)(Error)
