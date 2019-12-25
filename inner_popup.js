$(function() {
    var $document   = $(document),
      selector    = '[data-rangeslider]',
      $element    = $(selector);
    function valueOutput(element) {
      var value = element.value,
        output = element.parentNode.getElementsByTagName('output')[0];
        output.innerHTML = value;
    }
    for (var i = $element.length - 1; i >= 0; i--) {
      valueOutput($element[i]);
    };
    $document.on('change', 'input[type="range"]', function(e) {
      valueOutput(e.target);
    });
    $element.rangeslider({
      polyfill: false,
      onInit: function() {},
      // onSlide: function(position, value) {
      //   console.log('onSlide');
      //   console.log('position: ' + position, 'value: ' + value);
      // },
      onSlideEnd: function(position, value) {
        console.log('onSlideEnd');
        console.log('position: ' + position, 'value: ' + value);
      }
    });
  });
  