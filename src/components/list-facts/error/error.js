import React from 'react'

export const Error = ({
  isFetchError,
}) =>
  (isFetchError) &&
  <div className="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Error :</strong> Cannot be fetch chuck norris facts.
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
