javascript: (function () {

  /**
   * @param  {object} doc A document object
   * @param  {String} textVal A text to copy to clipboard
   */
  function copyTextToClipboard(doc, textVal) {
    let copyFrom = doc.createElement("textarea");
    copyFrom.textContent = textVal;

    let bodyElm = doc.body;
    bodyElm.prepend(copyFrom);

    copyFrom.select();
    doc.execCommand('copy');

    bodyElm.removeChild(copyFrom);
  }

  function askUserToSelectCopyStyleAndCopy(pageTitle, sharedLink) {
    let styleByName = {
      "JIRA": (title, url) => '[' + title + '|' + url + ']',
      "Markdown": (title, url) => '[' + title + '](' + url + ')',
      "Expanded": (title, url) => title + "\n" + url
    };

    let p = document.createElement("p");
    document.body.prepend(p);

    for (let name in styleByName) {
      let btn = document.createElement("button");
      btn.textContent = name;
      btn.onclick = function () {
        let textToCopy = styleByName[name](pageTitle, sharedLink);
        copyTextToClipboard(document, textToCopy);
        document.body.removeChild(p);
      };

      p.appendChild(btn);
    }
  }

  function main() {
    const spaceName = $("meta[name='ajs-space-name']")[0].content;
    const siteTitle = $("meta[name='ajs-site-title']")[0].content;
    const regexp = new RegExp(' - ' + spaceName + ' - ' + siteTitle + '$');
    const pageTitle = document.title.replace(regexp, '');

    const sharedLink = $("link[rel='shortlink']")[0].href;

    askUserToSelectCopyStyleAndCopy(pageTitle, sharedLink);
  };


  main();

})()
