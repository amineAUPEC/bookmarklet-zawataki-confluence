javascript: (
  function () {
    let addedElements = document.getElementsByClassName('diff-html-added');
    let removedElements = document.getElementsByClassName('diff-html-removed');
    let targetElements = Array.from(addedElements).concat(Array.from(removedElements));
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

    for (const element of targetElements) {
      let style = element.style;
      style.border = '';
    }
    let numberOfElements = targetElements.length;
    let index = sessionStorage.getItem('currentIndex');
    if (index === null) {
      index = 0;
    } else {
      index++;
      if (index >= numberOfElements) {
        index = 0;
      }
    }
    targetElements[index].scrollIntoView();
    let targetStyle = targetElements[index].style;
    targetStyle.border = 'solid 2px #5989cf';
    sessionStorage.currentIndex = index;
  })()
