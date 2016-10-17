/**
 * Inspired by : http://joakim.beng.se/blog/posts/a-javascript-router-in-20-lines.html
 */
(function() {
  var links = document.querySelectorAll(".nav > li");
  function activate(id) {
    links.forEach(el => el.dataset.id === id
                      ? el.className = "active"
                      : el.className = "");
  }

  var view = document.getElementById('view');
  var routes = {
    '/': '',
    '/angular': 'angular',
    '/list': 'list'
  };
  function router() {
    var url = location.hash.slice(1) || '/';

    // TODO: Remove listeners in old content ?
    view.innerHTML = "";
    var templateId = routes[url];
    if (templateId) {
      var template = document.getElementById(templateId).import.getElementsByTagName('template')[0].content;
      var clone = document.importNode(template, true);

      view.appendChild(clone);
    }
    activate(templateId);
  }

  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
})();
