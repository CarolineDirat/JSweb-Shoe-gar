!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=332)}({332:function(e,t){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var r="https://master-7rqtwti-fus3tltfddn7w.eu-2.platformsh.site";function o(e){return new Promise((function(t,n){var r=new XMLHttpRequest;r.open("GET",e),r.onreadystatechange=function(){4===r.readyState&&(200!==r.status&&n(JSON.parse(r.response)),t(JSON.parse(r.response)))},r.send()}))}function a(){var e,t,a,c,i,l;return regeneratorRuntime.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=o(r+"/generate-title"),t=o(r+"/generate-lorem"),s.prev=2,s.next=5,regeneratorRuntime.awrap(Promise.all([e,t]));case 5:a=s.sent,c=n(a,2),i=c[0],l=c[1],document.querySelector("main").appendChild(u(i.title,l.lorem)),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(2),document.querySelector("main").appendChild(u("Une erreur est survenue !",s.t0));case 15:case"end":return s.stop()}}),null,null,[[2,12]])}function u(e,t){var n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("h2"),a=document.createElement("p");return n.classList.add("card"),r.classList.add("card-body"),o.classList.add("card-title"),a.classList.add("card-text"),o.textContent=e,a.textContent=t,r.appendChild(o),r.appendChild(a),n.appendChild(r),n}document.getElementById("load-button").addEventListener("click",(function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:a();case 1:case"end":return e.stop()}}))}))}});