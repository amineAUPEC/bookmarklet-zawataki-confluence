javascript: (function () {

  /**
   * @param  {object} doc A document object
   * @param  {String} textVal A text to copy to clipboard
   * @returns {boolean} true if succeeded. Otherwise false
   */
  function copyTextToClipboard(doc, textVal) {
    let copyFrom = doc.createElement("textarea");
    copyFrom.textContent = textVal;

    let bodyElm = doc.getElementsByTagName("body")[0];
    bodyElm.appendChild(copyFrom);

    copyFrom.select();
    let retVal = doc.execCommand('copy');

    bodyElm.removeChild(copyFrom);

    return retVal;
  }

  function askUserToSelectCopyStyleAndCopy(pageTitle, sharedLink) {
    let text = document.createElement("p");
    text.innerText = "Copy as";

    let popupWindow = window.open("", "", "width=200, height=100");
    popupWindow.document.body.appendChild(text);

    let styleByName = {
      "JIRA": (title, url) => '[' + title + '|' + url + ']',
      "Markdown": (title, url) => '[' + title + '](' + url + ')',
      "Expanded": (title, url) => title + "\n" + url
    };

    for (let name in styleByName) {
      let btn = document.createElement("button");
      let doc = popupWindow.document;

      btn.textContent = name;
      btn.onclick = function () {
        let textToCopy = styleByName[name](pageTitle, sharedLink);
        copyTextToClipboard(doc, textToCopy);

        let loadjs = function () { function e(e, n) { var t, r, i, c = [], o = (e = e.push ? e : [e]).length, f = o; for (t = function (e, t) { t.length && c.push(e), --f || n(c) }; o--;)r = e[o], (i = s[r]) ? t(r, i) : (u[r] = u[r] || []).push(t) } function n(e, n) { if (e) { var t = u[e]; if (s[e] = n, t) for (; t.length;)t[0](e, n), t.splice(0, 1) } } function t(e, n, r, i) { var o, s, u = document, f = r.async, a = (r.numRetries || 0) + 1, h = r.before || c; i = i || 0, /(^css!|\.css$)/.test(e) ? (o = !0, (s = u.createElement("link")).rel = "stylesheet", s.href = e.replace(/^css!/, "")) : ((s = u.createElement("script")).src = e, s.async = void 0 === f || f), s.onload = s.onerror = s.onbeforeload = function (c) { var u = c.type[0]; if (o && "hideFocus" in s) try { s.sheet.cssText.length || (u = "e") } catch (e) { u = "e" } if ("e" == u && (i += 1) < a) return t(e, n, r, i); n(e, u, c.defaultPrevented) }, !1 !== h(e, s) && u.head.appendChild(s) } function r(e, n, r) { var i, c, o = (e = e.push ? e : [e]).length, s = o, u = []; for (i = function (e, t, r) { if ("e" == t && u.push(e), "b" == t) { if (!r) return; u.push(e) } --o || n(u) }, c = 0; c < s; c++)t(e[c], i, r) } function i(e, t, i) { var s, u; if (t && t.trim && (s = t), u = (s ? i : t) || {}, s) { if (s in o) throw "LoadJS"; o[s] = !0 } r(e, function (e) { e.length ? (u.error || c)(e) : (u.success || c)(), n(s, e) }, u) } var c = function () { }, o = {}, s = {}, u = {}; return i.ready = function (n, t) { return e(n, function (e) { e.length ? (t.error || c)(e) : (t.success || c)() }), i }, i.done = function (e) { n(e, []) }, i.reset = function () { o = {}, s = {}, u = {} }, i.isDefined = function (e) { return e in o }, i }();

        loadjs('//cdn.jsdelivr.net/gh/zawataki/popup-message/popup-message.js', {
          success: function () {
            popupMessage("Copied title and shared link to clipboard");
          }
        });

        popupWindow.close();
      };

      popupWindow.document.body.appendChild(btn);
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
