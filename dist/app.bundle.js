!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=333)}({333:function(e,t){var n=document.getElementById("newsletter-button"),r=document.getElementById("newsletter-section"),l=document.getElementById("newsletter-email"),o=!1;n.addEventListener("click",(function(){var e=document.createElement("p");if(!o){var t=document.getElementById("alert");if(t&&t.parentElement.removeChild(t),!l.value)return e.textContent="Veuillez saisir quelque chose !",e.classList.add("alert-danger","w-100","p-2"),e.setAttribute("id","alert"),void r.appendChild(e);e.textContent="Adresse email envoyée !",e.classList.add("alert-success","w-100","p-2"),r.appendChild(e),r.children[0].children[0].removeChild(l),r.children[0].children[0].removeChild(n),o=!0}}))}});