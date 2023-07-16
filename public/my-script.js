const API_URL = "https://phpstack-618117-3493389.cloudwaysapps.com";
// const API_URL = "https://complete-greet.onrender.com";
// const API_URL = "http://127.0.0.1:5000";
fetch(`${API_URL}/my-html-content`)
  .then((response) => response.text())
  .then((html) => {
    document.querySelector("#my-html-content").innerHTML = html;
  });
