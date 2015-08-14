/**
 * (CSP) Cdp Static Parts
 *
 * Integração de visual, barra e footer dos projetos da CdP
 */

(function () {

var cdp = window.cdp || {};

cdp.readCookie = function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};


cdp.renderUserMenuLinks = function renderUserMenuLinks() {
  var token = cdp.readCookie('wetoken') || '';
  $.ajax({
    url: '/render-menu',
    method: 'GET',
    xhrFields: {
        withCredentials: true
    },
    success: function(data) {
      $('#main-navbar-content').append(data.header);
      $('#main-footer-content').append(data.footer);
    },
    fail: function (err) {
      console.error('Failed to load navbar and menu', err);
    }
  });
};

cdp.renderAll = function () {
  cdp.renderUserMenuLinks();
};

window.cdp = cdp;
})();