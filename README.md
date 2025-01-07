Certainly, here's an enhanced README file for the `zawataki/bookmarklet` repository, including 3 outlines for each JavaScript file:

# **README.md**

**Bookmarklets for Confluence or JIRA**

This repository provides a collection of bookmarklets to enhance your Confluence and JIRA experience. Bookmarklets are small pieces of JavaScript code that can be easily saved as bookmarks in your browser. When clicked, they execute directly within the context of the current web page.

# **Installation**

1. **Choose a bookmarklet:** Select the bookmarklet that you want to use from the list below.
2. **Create a bookmark:** 
   - Right-click on the bookmark bar in your browser.
   - Select "New Bookmark" or "Add Page".
   - In the "Name" field, enter a descriptive name for the bookmarklet (e.g., "Confluence - Find All Links").
   - In the "URL" field, paste the JavaScript code of the selected bookmarklet, **preceded by `javascript:`**. 
   - Click "Save".

# **Usage**

- Navigate to the desired page in Confluence or JIRA.
- Click the bookmarklet in your browser's bookmark bar.
- The bookmarklet will execute and perform its intended action.

## **Bookmarklets**

* **Confluence:**
    * **add-button-to-copy-code-macro-of-confluence.js:**
        * **Outline:**
            1. Adding a copy button to Confluence code block:
            2. The code defines a function copyTextToClipboard that copies a text to the clipboard.
            3. It then adds a button "Copy" to the Confluence code block using jQuery.
            4. When the button is clicked, it
    * **copy-JIRA-title-as-folder-name.js**
        * **Outline:**
            1. **Copy text to clipboard** :  
            2. **Extract and format content:** using regex
            3. **load an external popup** load, display and copy the result
    * **copy-confluence-title-and-shared-link.js**
        * **Outline:**
            1. **Copy text to clipboard** :  
            2. **Ask user to select style and copy**  Style such as jira, markdown, expanded
    * **expand-all-code-block-macro.js**
        * **Outline:**
            1. **Expand each block of macros** :  
# minified version using [chriszarate bookmarkleter](https://chriszarate.github.io/bookmarkleter/)

> [!TIP]
> Open this readme in a markdown / text editor such as vscode  
> Just drag and drop the link into your favorite bars or sub-folders  
> display the favorite bar with <kbd> CTRL+B </kbd>  


add-button-to-copy-code-macro-of-confluence.js


[add-button-to-copy-code-macro-of-confluence.js](javascript:void%20function(){javascript:(function(){function%20a(a){let%20b=document.createElement(%22textarea%22);b.textContent=a;let%20c=document.getElementsByTagName(%22body%22)[0];c.appendChild(b),b.select();let%20d=document.execCommand(%22copy%22);return%20c.removeChild(b),d}$(%22%3Cbutton%3E%22,{type:%22button%22,name:%22aaa%22,text:%22Copy%22}).click(function(b){const%20c=b.toElement.parentElement,d=$(c).find(%22td.code%20%3E%20div.container%20%3E%20div%22).map((a,b)=%3E{let%20c=$(b).html(),d=$(b).html().replace(/%26nbsp;$/,%22%22);$(b).html(d);let%20e=$(b).text().replace(/\u00A0/g,%22%20%22);return%20$(b).html(c),e}).get().join(%22\n%22);console.log(%22codeWithCorrectEmptyLine:%20%22,d),a(d),loadjs=function(){function%20a(a,b){var%20d,g,k,l=[],c=(a=a.push%3Fa:[a]).length,m=c;for(d=function(a,c){c.length%26%26l.push(a),--m||b(l)};c--;)g=a[c],(k=h[g])%3Fd(g,k):(j[g]=j[g]||[]).push(d)}function%20b(a,b){if(a){var%20c=j[a];if(h[a]=b,c)for(;c.length;)c[0](a,b),c.splice(0,1)}}function%20d(b,e,j,k){var%20l,m,c=document,n=j.async,f=(j.numRetries||0)+1,a=j.before||g;k=k||0,/(^css!|\.css$)/.test(b)%3F(l=!0,(m=c.createElement(%22link%22)).rel=%22stylesheet%22,m.href=b.replace(/^css!/,%22%22)):((m=c.createElement(%22script%22)).src=b,m.async=void%200===n||n),m.onload=m.onerror=m.onbeforeload=function(a){var%20c=a.type[0];if(l%26%26%22hideFocus%22in%20m)try{m.sheet.cssText.length||(c=%22e%22)}catch(a){c=%22e%22}return%22e%22==c%26%26(k+=1)%3Cf%3Fd(b,e,j,k):void%20e(b,c,a.defaultPrevented)},!1!==a(b,m)%26%26c.head.appendChild(m)}function%20f(a,b,f){var%20g,h,j=(a=a.push%3Fa:[a]).length,k=j,l=[];for(g=function(a,c,d){if(%22e%22==c%26%26l.push(a),%22b%22==c){if(!d)return;l.push(a)}--j||b(l)},h=0;h%3Ck;h++)d(a[h],g,f)}function%20e(a,d,e){var%20h,i;if(d%26%26d.trim%26%26(h=d),i=(h%3Fe:d)||{},h){if(h%20in%20c)throw%22LoadJS%22;c[h]=!0}f(a,function(a){a.length%3F(i.error||g)(a):(i.success||g)(),b(h,a)},i)}var%20g=function(){},c={},h={},j={};return%20e.ready=function(b,c){return%20a(b,function(a){a.length%3F(c.error||g)(a):(c.success||g)()}),e},e.done=function(a){b(a,[])},e.reset=function(){c={},h={},j={}},e.isDefined=function(a){return%20a%20in%20c},e}(),loadjs(%22//cdn.jsdelivr.net/gh/zawataki/popup-message/popup-message.js%22,{success:function(){popupMessage(%22Copied%20code%20to%20clipboard%22)}})}).prependTo(%22div.codeContent%22)})()}();)


copy-JIRA-title-as-folder-name.js

[copy-JIRA-title-as-folder-name.js](javascript:void%20function(){javascript:(function(){const%20a=$(%22meta[name='ajs-app-title']%22)[0].content,b=new%20RegExp(%22%20-%20%22+a+%22$%22),c=document.title.replace(b,%22%22),d=c.replace(/^\[/,%22%22).replace(/^([^\]]+)\]%20/,%22$1_%22).replace(/\//,%22\uFF0F%22);(function(a){let%20b=document.createElement(%22textarea%22);b.textContent=a;let%20c=document.getElementsByTagName(%22body%22)[0];c.appendChild(b),b.select();let%20d=document.execCommand(%22copy%22);return%20c.removeChild(b),d})(d),loadjs=function(){function%20a(a,b){var%20d,g,k,l=[],c=(a=a.push%3Fa:[a]).length,m=c;for(d=function(a,c){c.length%26%26l.push(a),--m||b(l)};c--;)g=a[c],(k=h[g])%3Fd(g,k):(j[g]=j[g]||[]).push(d)}function%20b(a,b){if(a){var%20c=j[a];if(h[a]=b,c)for(;c.length;)c[0](a,b),c.splice(0,1)}}function%20d(b,e,j,k){var%20l,m,c=document,n=j.async,f=(j.numRetries||0)+1,a=j.before||g;k=k||0,/(^css!|\.css$)/.test(b)%3F(l=!0,(m=c.createElement(%22link%22)).rel=%22stylesheet%22,m.href=b.replace(/^css!/,%22%22)):((m=c.createElement(%22script%22)).src=b,m.async=void%200===n||n),m.onload=m.onerror=m.onbeforeload=function(a){var%20c=a.type[0];if(l%26%26%22hideFocus%22in%20m)try{m.sheet.cssText.length||(c=%22e%22)}catch(a){c=%22e%22}return%22e%22==c%26%26(k+=1)%3Cf%3Fd(b,e,j,k):void%20e(b,c,a.defaultPrevented)},!1!==a(b,m)%26%26c.head.appendChild(m)}function%20f(a,b,f){var%20g,h,j=(a=a.push%3Fa:[a]).length,k=j,l=[];for(g=function(a,c,d){if(%22e%22==c%26%26l.push(a),%22b%22==c){if(!d)return;l.push(a)}--j||b(l)},h=0;h%3Ck;h++)d(a[h],g,f)}function%20e(a,d,e){var%20h,i;if(d%26%26d.trim%26%26(h=d),i=(h%3Fe:d)||{},h){if(h%20in%20c)throw%22LoadJS%22;c[h]=!0}f(a,function(a){a.length%3F(i.error||g)(a):(i.success||g)(),b(h,a)},i)}var%20g=function(){},c={},h={},j={};return%20e.ready=function(b,c){return%20a(b,function(a){a.length%3F(c.error||g)(a):(c.success||g)()}),e},e.done=function(a){b(a,[])},e.reset=function(){c={},h={},j={}},e.isDefined=function(a){return%20a%20in%20c},e}(),loadjs(%22//cdn.jsdelivr.net/gh/zawataki/popup-message/popup-message.js%22,{success:function(){popupMessage(%22Copied%20title%20as%20folder%20name%20to%20clipboard%22)}})})()}();)


copy-confluence-title-and-shared-link.js

[copy-confluence-title-and-shared-link.js](javascript:void%20function(){javascript:(function(){function%20a(a,b){let%20c=a.createElement(%22textarea%22);c.textContent=b;let%20d=a.body;d.prepend(c),c.select(),a.execCommand(%22copy%22),d.removeChild(c)}function%20b(b,c){let%20d={JIRA:(a,b)=%3E%22[%22+a+%22|%22+b+%22]%22,Markdown:(a,b)=%3E%22[%22+a+%22](%22+b+%22)%22,Expanded:(a,b)=%3Ea+%22\n%22+b},e=document.createElement(%22p%22);for(let%20f%20in%20document.body.prepend(e),d){let%20g=document.createElement(%22button%22);g.textContent=f,g.onclick=function(){let%20g=d[f](b,c);a(document,g),document.body.removeChild(e)},e.appendChild(g)}}(function(){const%20a=$(%22meta[name='ajs-space-name']%22)[0].content,c=$(%22meta[name='ajs-site-title']%22)[0].content,d=new%20RegExp(%22%20-%20%22+a+%22%20-%20%22+c+%22$%22),e=document.title.replace(d,%22%22),f=$(%22link[rel='shortlink']%22)[0].href;b(e,f)})()})()}();)

copy-link-as-JIRA-style-with-escape.js
[copy-link-as-JIRA-style-with-escape.js](javascript:void%20function(){javascript:(function(){const%20a=document.title.replace(/(\[|\])/g,%22\\$1%22).replace(/\|/g,%22\uFF5C%22);(function(a){let%20b=document.createElement(%22textarea%22);b.textContent=a;let%20c=document.getElementsByTagName(%22body%22)[0];c.appendChild(b),b.select();let%20d=document.execCommand(%22copy%22);return%20c.removeChild(b),d})(%22[%22+a+%22|%22+document.URL+%22]%22),loadjs=function(){function%20a(a,b){var%20d,g,k,l=[],c=(a=a.push%3Fa:[a]).length,m=c;for(d=function(a,c){c.length%26%26l.push(a),--m||b(l)};c--;)g=a[c],(k=h[g])%3Fd(g,k):(j[g]=j[g]||[]).push(d)}function%20b(a,b){if(a){var%20c=j[a];if(h[a]=b,c)for(;c.length;)c[0](a,b),c.splice(0,1)}}function%20d(b,e,j,k){var%20l,m,c=document,n=j.async,f=(j.numRetries||0)+1,a=j.before||g;k=k||0,/(^css!|\.css$)/.test(b)%3F(l=!0,(m=c.createElement(%22link%22)).rel=%22stylesheet%22,m.href=b.replace(/^css!/,%22%22)):((m=c.createElement(%22script%22)).src=b,m.async=void%200===n||n),m.onload=m.onerror=m.onbeforeload=function(a){var%20c=a.type[0];if(l%26%26%22hideFocus%22in%20m)try{m.sheet.cssText.length||(c=%22e%22)}catch(a){c=%22e%22}return%22e%22==c%26%26(k+=1)%3Cf%3Fd(b,e,j,k):void%20e(b,c,a.defaultPrevented)},!1!==a(b,m)%26%26c.head.appendChild(m)}function%20f(a,b,f){var%20g,h,j=(a=a.push%3Fa:[a]).length,k=j,l=[];for(g=function(a,c,d){if(%22e%22==c%26%26l.push(a),%22b%22==c){if(!d)return;l.push(a)}--j||b(l)},h=0;h%3Ck;h++)d(a[h],g,f)}function%20e(a,d,e){var%20h,i;if(d%26%26d.trim%26%26(h=d),i=(h%3Fe:d)||{},h){if(h%20in%20c)throw%22LoadJS%22;c[h]=!0}f(a,function(a){a.length%3F(i.error||g)(a):(i.success||g)(),b(h,a)},i)}var%20g=function(){},c={},h={},j={};return%20e.ready=function(b,c){return%20a(b,function(a){a.length%3F(c.error||g)(a):(c.success||g)()}),e},e.done=function(a){b(a,[])},e.reset=function(){c={},h={},j={}},e.isDefined=function(a){return%20a%20in%20c},e}(),loadjs(%22//cdn.jsdelivr.net/gh/zawataki/popup-message/popup-message.js%22,{success:function(){popupMessage(%22Copied%20link%20as%20JIRA%20style%20to%20clipboard%22)}})})()}();)

expand-all-code-block-macro.js


[expand-all-code-block-macro.js](javascript:void%20function(){javascript:(function(){$(%22.expand-control-icon%22).not(%22.expanded%22).each(function(){$(this).click()})})()}();)


# JS every codes to copy 

add-button-to-copy-code-macro-of-confluence.js

```js 
javascript:void%20function(){javascript:(function(){function%20a(a){let%20b=document.createElement(%22textarea%22);b.textContent=a;let%20c=document.getElementsByTagName(%22body%22)[0];c.appendChild(b),b.select();let%20d=document.execCommand(%22copy%22);return%20c.removeChild(b),d}$(%22%3Cbutton%3E%22,{type:%22button%22,name:%22aaa%22,text:%22Copy%22}).click(function(b){const%20c=b.toElement.parentElement,d=$(c).find(%22td.code%20%3E%20div.container%20%3E%20div%22).map((a,b)=%3E{let%20c=$(b).html(),d=$(b).html().replace(/%26nbsp;$/,%22%22);$(b).html(d);let%20e=$(b).text().replace(/\u00A0/g,%22%20%22);return%20$(b).html(c),e}).get().join(%22\n%22);console.log(%22codeWithCorrectEmptyLine:%20%22,d),a(d),loadjs=function(){function%20a(a,b){var%20d,g,k,l=[],c=(a=a.push%3Fa:[a]).length,m=c;for(d=function(a,c){c.length%26%26l.push(a),--m||b(l)};c--;)g=a[c],(k=h[g])%3Fd(g,k):(j[g]=j[g]||[]).push(d)}function%20b(a,b){if(a){var%20c=j[a];if(h[a]=b,c)for(;c.length;)c[0](a,b),c.splice(0,1)}}function%20d(b,e,j,k){var%20l,m,c=document,n=j.async,f=(j.numRetries||0)+1,a=j.before||g;k=k||0,/(^css!|\.css$)/.test(b)%3F(l=!0,(m=c.createElement(%22link%22)).rel=%22stylesheet%22,m.href=b.replace(/^css!/,%22%22)):((m=c.createElement(%22script%22)).src=b,m.async=void%200===n||n),m.onload=m.onerror=m.onbeforeload=function(a){var%20c=a.type[0];if(l%26%26%22hideFocus%22in%20m)try{m.sheet.cssText.length||(c=%22e%22)}catch(a){c=%22e%22}return%22e%22==c%26%26(k+=1)%3Cf%3Fd(b,e,j,k):void%20e(b,c,a.defaultPrevented)},!1!==a(b,m)%26%26c.head.appendChild(m)}function%20f(a,b,f){var%20g,h,j=(a=a.push%3Fa:[a]).length,k=j,l=[];for(g=function(a,c,d){if(%22e%22==c%26%26l.push(a),%22b%22==c){if(!d)return;l.push(a)}--j||b(l)},h=0;h%3Ck;h++)d(a[h],g,f)}function%20e(a,d,e){var%20h,i;if(d%26%26d.trim%26%26(h=d),i=(h%3Fe:d)||{},h){if(h%20in%20c)throw%22LoadJS%22;c[h]=!0}f(a,function(a){a.length%3F(i.error||g)(a):(i.success||g)(),b(h,a)},i)}var%20g=function(){},c={},h={},j={};return%20e.ready=function(b,c){return%20a(b,function(a){a.length%3F(c.error||g)(a):(c.success||g)()}),e},e.done=function(a){b(a,[])},e.reset=function(){c={},h={},j={}},e.isDefined=function(a){return%20a%20in%20c},e}(),loadjs(%22//cdn.jsdelivr.net/gh/zawataki/popup-message/popup-message.js%22,{success:function(){popupMessage(%22Copied%20code%20to%20clipboard%22)}})}).prependTo(%22div.codeContent%22)})()}();
```

copy-JIRA-title-as-folder-name.js
```js
javascript:void%20function(){javascript:(function(){const%20a=$(%22meta[name='ajs-app-title']%22)[0].content,b=new%20RegExp(%22%20-%20%22+a+%22$%22),c=document.title.replace(b,%22%22),d=c.replace(/^\[/,%22%22).replace(/^([^\]]+)\]%20/,%22$1_%22).replace(/\//,%22\uFF0F%22);(function(a){let%20b=document.createElement(%22textarea%22);b.textContent=a;let%20c=document.getElementsByTagName(%22body%22)[0];c.appendChild(b),b.select();let%20d=document.execCommand(%22copy%22);return%20c.removeChild(b),d})(d),loadjs=function(){function%20a(a,b){var%20d,g,k,l=[],c=(a=a.push%3Fa:[a]).length,m=c;for(d=function(a,c){c.length%26%26l.push(a),--m||b(l)};c--;)g=a[c],(k=h[g])%3Fd(g,k):(j[g]=j[g]||[]).push(d)}function%20b(a,b){if(a){var%20c=j[a];if(h[a]=b,c)for(;c.length;)c[0](a,b),c.splice(0,1)}}function%20d(b,e,j,k){var%20l,m,c=document,n=j.async,f=(j.numRetries||0)+1,a=j.before||g;k=k||0,/(^css!|\.css$)/.test(b)%3F(l=!0,(m=c.createElement(%22link%22)).rel=%22stylesheet%22,m.href=b.replace(/^css!/,%22%22)):((m=c.createElement(%22script%22)).src=b,m.async=void%200===n||n),m.onload=m.onerror=m.onbeforeload=function(a){var%20c=a.type[0];if(l%26%26%22hideFocus%22in%20m)try{m.sheet.cssText.length||(c=%22e%22)}catch(a){c=%22e%22}return%22e%22==c%26%26(k+=1)%3Cf%3Fd(b,e,j,k):void%20e(b,c,a.defaultPrevented)},!1!==a(b,m)%26%26c.head.appendChild(m)}function%20f(a,b,f){var%20g,h,j=(a=a.push%3Fa:[a]).length,k=j,l=[];for(g=function(a,c,d){if(%22e%22==c%26%26l.push(a),%22b%22==c){if(!d)return;l.push(a)}--j||b(l)},h=0;h%3Ck;h++)d(a[h],g,f)}function%20e(a,d,e){var%20h,i;if(d%26%26d.trim%26%26(h=d),i=(h%3Fe:d)||{},h){if(h%20in%20c)throw%22LoadJS%22;c[h]=!0}f(a,function(a){a.length%3F(i.error||g)(a):(i.success||g)(),b(h,a)},i)}var%20g=function(){},c={},h={},j={};return%20e.ready=function(b,c){return%20a(b,function(a){a.length%3F(c.error||g)(a):(c.success||g)()}),e},e.done=function(a){b(a,[])},e.reset=function(){c={},h={},j={}},e.isDefined=function(a){return%20a%20in%20c},e}(),loadjs(%22//cdn.jsdelivr.net/gh/zawataki/popup-message/popup-message.js%22,{success:function(){popupMessage(%22Copied%20title%20as%20folder%20name%20to%20clipboard%22)}})})()}();
```

copy-confluence-title-and-shared-link.js
```js 
javascript:void%20function(){javascript:(function(){function%20a(a,b){let%20c=a.createElement(%22textarea%22);c.textContent=b;let%20d=a.body;d.prepend(c),c.select(),a.execCommand(%22copy%22),d.removeChild(c)}function%20b(b,c){let%20d={JIRA:(a,b)=%3E%22[%22+a+%22|%22+b+%22]%22,Markdown:(a,b)=%3E%22[%22+a+%22](%22+b+%22)%22,Expanded:(a,b)=%3Ea+%22\n%22+b},e=document.createElement(%22p%22);for(let%20f%20in%20document.body.prepend(e),d){let%20g=document.createElement(%22button%22);g.textContent=f,g.onclick=function(){let%20g=d[f](b,c);a(document,g),document.body.removeChild(e)},e.appendChild(g)}}(function(){const%20a=$(%22meta[name='ajs-space-name']%22)[0].content,c=$(%22meta[name='ajs-site-title']%22)[0].content,d=new%20RegExp(%22%20-%20%22+a+%22%20-%20%22+c+%22$%22),e=document.title.replace(d,%22%22),f=$(%22link[rel='shortlink']%22)[0].href;b(e,f)})()})()}();
```

copy-link-as-JIRA-style-with-escape.js
```js 
javascript:void%20function(){javascript:(function(){const%20a=document.title.replace(/(\[|\])/g,%22\\$1%22).replace(/\|/g,%22\uFF5C%22);(function(a){let%20b=document.createElement(%22textarea%22);b.textContent=a;let%20c=document.getElementsByTagName(%22body%22)[0];c.appendChild(b),b.select();let%20d=document.execCommand(%22copy%22);return%20c.removeChild(b),d})(%22[%22+a+%22|%22+document.URL+%22]%22),loadjs=function(){function%20a(a,b){var%20d,g,k,l=[],c=(a=a.push%3Fa:[a]).length,m=c;for(d=function(a,c){c.length%26%26l.push(a),--m||b(l)};c--;)g=a[c],(k=h[g])%3Fd(g,k):(j[g]=j[g]||[]).push(d)}function%20b(a,b){if(a){var%20c=j[a];if(h[a]=b,c)for(;c.length;)c[0](a,b),c.splice(0,1)}}function%20d(b,e,j,k){var%20l,m,c=document,n=j.async,f=(j.numRetries||0)+1,a=j.before||g;k=k||0,/(^css!|\.css$)/.test(b)%3F(l=!0,(m=c.createElement(%22link%22)).rel=%22stylesheet%22,m.href=b.replace(/^css!/,%22%22)):((m=c.createElement(%22script%22)).src=b,m.async=void%200===n||n),m.onload=m.onerror=m.onbeforeload=function(a){var%20c=a.type[0];if(l%26%26%22hideFocus%22in%20m)try{m.sheet.cssText.length||(c=%22e%22)}catch(a){c=%22e%22}return%22e%22==c%26%26(k+=1)%3Cf%3Fd(b,e,j,k):void%20e(b,c,a.defaultPrevented)},!1!==a(b,m)%26%26c.head.appendChild(m)}function%20f(a,b,f){var%20g,h,j=(a=a.push%3Fa:[a]).length,k=j,l=[];for(g=function(a,c,d){if(%22e%22==c%26%26l.push(a),%22b%22==c){if(!d)return;l.push(a)}--j||b(l)},h=0;h%3Ck;h++)d(a[h],g,f)}function%20e(a,d,e){var%20h,i;if(d%26%26d.trim%26%26(h=d),i=(h%3Fe:d)||{},h){if(h%20in%20c)throw%22LoadJS%22;c[h]=!0}f(a,function(a){a.length%3F(i.error||g)(a):(i.success||g)(),b(h,a)},i)}var%20g=function(){},c={},h={},j={};return%20e.ready=function(b,c){return%20a(b,function(a){a.length%3F(c.error||g)(a):(c.success||g)()}),e},e.done=function(a){b(a,[])},e.reset=function(){c={},h={},j={}},e.isDefined=function(a){return%20a%20in%20c},e}(),loadjs(%22//cdn.jsdelivr.net/gh/zawataki/popup-message/popup-message.js%22,{success:function(){popupMessage(%22Copied%20link%20as%20JIRA%20style%20to%20clipboard%22)}})})()}();
```

expand-all-code-block-macro.js

```js 
javascript:void%20function(){javascript:(function(){$(%22.expand-control-icon%22).not(%22.expanded%22).each(function(){$(this).click()})})()}();
```
# **Disclaimer**

* These bookmarklets are provided as-is and without any warranty.
* Use them at your own risk.
* Always test bookmarklets thoroughly in a non-production environment before using them in your daily work.
* Be mindful of potential side effects and unintended consequences when using these bookmarklets.

# **Contributing**

Contributions are welcome! If you have any ideas for new bookmarklets, bug fixes, or improvements, please feel free to submit a pull request.

# infos 
I hope this enhanced README file is helpful! from @amineaupec
