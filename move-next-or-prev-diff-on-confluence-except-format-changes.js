javascript: (
  function () {
    const targetElements = document.querySelectorAll('span[id*="-diff-"]');

    sessionStorage.removeItem('currentIndexOfDiff');

    const focusElement = function(offset) {
      let index = parseInt(sessionStorage.getItem('currentIndexOfDiff'));
      if (index === null || isNaN(index)) {
        index = 0;
      } else {
        /* Clear the style of the current focused element */
        let style = targetElements[index].style;
        style.border = '';
        index += offset;
        if (index >= targetElements.length) {
          index = 0;
        } else if (index < 0) {
          index = targetElements.length - 1;
        }
      }
      targetElements[index].scrollIntoView();
      let targetStyle = targetElements[index].style;
      targetStyle.border = 'solid 2px #5989cf';
      sessionStorage.currentIndexOfDiff = index;
    };

    $(document).keyup(function(e) {
      switch (e.keyCode) {
        case 39:
          /* ArrowRight key was pressed */
          focusElement(1);
          break;
        case 37:
          /* ArrowLeft key was pressed */
          focusElement(-1);
          break;
        default:
          break;
      }
    });
  }
)()
