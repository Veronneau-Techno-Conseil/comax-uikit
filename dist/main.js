'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jQuery = require('jquery');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var jQuery__default = /*#__PURE__*/_interopDefaultLegacy(jQuery);

const $ = jQuery__default["default"];
function Startup() {
  $(function() {
    $(".navbar").on("click", ".burger", function() {
      console.log("Burger clicked");
      var menu = $(`#${this.dataset.target}`);
      if (menu.length > 0) {
        this?.classList.toggle("is-active");
        menu.toggleClass("is-active");
      }
    });
  });
}

exports.Startup = Startup;
//# sourceMappingURL=main.js.map
