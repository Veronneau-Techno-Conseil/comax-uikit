import jQuery from 'jquery';

const $ = jQuery;
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

export { Startup };
//# sourceMappingURL=main.mjs.map
