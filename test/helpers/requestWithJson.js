// DRY setting the accept header to application/json for all requests
export default function requestWithHeader(api, method, url) {
  return api[method](url).set('Accept', 'application/json');
}
