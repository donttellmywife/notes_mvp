const apiUrl = `http://cthulhu.hp.consul/`

function GET(url) {
  return fetch(`${apiUrl + url}`)
    .then(checkStatus)
    .then(getJson)
    .catch(handleError)
}

function POST(url, data = {}) {
  return fetch(`${apiUrl + url}`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(checkStatus)
    .then(getJson)
    .catch(handleError)
}

function DELETE(url, data = {}) {
  return fetch(`${apiUrl + url}`, {
    method: 'DELETE',
    body: JSON.stringify(data),
  })
    .then(checkStatus)
    .catch(handleError)
}

function UPDATE(url, data = {}) {
  return fetch(`${apiUrl + url}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
    .then(checkStatus)
    .then(getJson)
    .catch(handleError)
}


function getJson(res) {
  return res.json()
}
function checkStatus(res) {
  if (res.status >= 400) {
    console.error('Looks like there was a problem. Status Code: ' + res.status)
    return
  }
  return res
}
function handleError(err) {
  console.error(err)
  return Promise.reject()
}

export default { GET, POST, DELETE, UPDATE }
