export default function(options, callback) {
  fetch(
    "https://api.github.com/search/repositories?q=" +
      options.term +
      "&access_token=6088b6e66548f939ec683a417def05fd0d69b019"
  )
    .then(response => response.json())
    .then(responseJson => {
      callback(responseJson.items, responseJson.total_count);
    })
    .catch(error => {
      console.error(error);
    });
}
