var CheckBubbleExist = document.getElementById("CGAPI");
const API_URL = "https://phpstack-618117-3493389.cloudwaysapps.com";
// const API_URL = "http://127.0.0.1:5000";
// const API_URL = "https://complete-greet.onrender.com";
if (CheckBubbleExist == null) {
  (function (s, a, l, u, t, e) {
    (t = a.createElement(l)), (e = a.getElementsByTagName(l)[0]);
    t.async = 1;
    t.src = u;
    t.id = "CGAPI";
    e.parentNode.insertBefore(t, e);
  })(window, document, "script", `${API_URL}/js/CompleteGreetAPI.js?v12345678`);
}
