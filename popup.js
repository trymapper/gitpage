function main() {
    var popup = document.getElementById('js-popup');
    // if(!popup) return;
  
  
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
    var showBtn = document.getElementById('js-show-popup');
  
    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);
    console.log(7)
    function closePopUp(elem) {
        console.log(6)
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.toggle('is-show');
        console.log(1)
      });
    }
}
window.addEventListener('load', main)
//   window.onload = popupImage();

//   window.onload = function() {
//     var popup = document.getElementById('js-popup');
//     if(!popup) return;
//     popup.classList.add('is-show');
  
//     var blackBg = document.getElementById('js-black-bg');
//     var closeBtn = document.getElementById('js-close-btn');
  
//     closePopUp(blackBg);
//     closePopUp(closeBtn);
//     console.log(4)
  
//     function closePopUp(elem) {
//         console.log(5)
//       if(!elem) return;
//       elem.addEventListener('click', function() {
//         popup.classList.remove('is-show');
//         console.log(2)
//       })
//     }
//   }