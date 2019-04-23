javascript: (
  function () {

    /**
     * Allows pressing ArrowRight/ArrowLeft key to move to a next/previous
     * element which is added or removed on Page Comparison Views of Confluence.
     */

    const addedElements = document.getElementsByClassName('diff-html-added');
    const removedElements = document.getElementsByClassName('diff-html-removed');
    const targetElements = Array.from(addedElements).concat(Array.from(removedElements));
    targetElements.sort(function (a, b) {
      let aRect = a.getBoundingClientRect();
      let aAbsolutelyTop = aRect.top + window.pageYOffset;
      let aAbsolutelyLeft = aRect.left + window.pageXOffset;
      let bRect = b.getBoundingClientRect();
      let bAbsolutelyTop = bRect.top + window.pageYOffset;
      let bAbsolutelyLeft = bRect.left + window.pageXOffset;
      let topDiff = aAbsolutelyTop - bAbsolutelyTop;
      if (topDiff === 0) {
        return aAbsolutelyLeft - bAbsolutelyLeft;
      }
      return topDiff;
    });

    sessionStorage.currentIndex = 0;

    const focusElement = function (offset) {
      let index = parseInt(sessionStorage.getItem('currentIndex'));
      if (index === null) {
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
      sessionStorage.currentIndex = index;
    };

    $(document).keydown(function (e) {
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
          /* Do nothing */
          break;
      }
    });
  })()
