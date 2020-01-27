$(function() {
  $("#down-config-popup")
    .find(".slider")
    .rangeslider({
      polyfill: false,
      onSlide: function(position, value) {
        $("#" + this.$element.attr("output")).text(value);
      },
    })
    .on("change", function(e) {
      let $target = $(e.target);
      let outputId = $target.attr("output");
      
      $("#" + outputId).text($target.val());
    });
});
  