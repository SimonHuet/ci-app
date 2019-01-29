export const fetchBackend = (path, options) =>
  fetch(`${process.env.REACT_APP_API}${path}`, options)
    .then(response => response.status < 400
      ? response.json()
      : Promise.reject(response)
    )
