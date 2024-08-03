export function searchingRequest(param) {
  return fetch(`https://pixabay.com/api/?${param}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}
