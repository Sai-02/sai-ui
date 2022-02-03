"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),i=r(t);!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".sui-skeleton {\r\n  width: 100%;\r\n  display: block;\r\n  background: lightgray;\r\n  background: linear-gradient(\r\n      to right,\r\n      rgba(255, 255, 255, 0),\r\n      rgba(255, 255, 255, 0.5) 50%,\r\n      rgba(255, 255, 255, 0) 80%\r\n    ),\r\n    lightgray;\r\n  background-repeat: repeat-y;\r\n  background-size: 50px 200px;\r\n  background-position: 0 0;\r\n  animation: shine 1s infinite;\r\n  height: 1rem;\r\n}\r\n@keyframes shine {\r\n  to {\r\n    background-position: 100% 0, 0 0;\r\n  }\r\n}\r\n.sui-skeleton-text {\r\n  border-radius: 6px;\r\n  height: 1rem;\r\n  width: 100%;\r\n}\r\n.sui-skeleton-rectangle {\r\n  border-radius: 5px;\r\n}\r\n.sui-skeleton-circle {\r\n  border-radius: 50%;\r\n}\r\n");const s=({variant:e,customStyles:t,width:r,height:i,customClasses:s})=>n.default.createElement("span",{className:`sui-skeleton   ${"text"==e?"sui-skeleton-text":""}  ${"rectangle"==e?"sui-skeleton-rectangle":""} ${"circle"==e?"sui-skeleton-circle":""} ${void 0===s?"":s} `,style:{width:r+"rem",height:i+"rem",...t}});s.propTypes={variant:i.default.oneOfType(["circle","rectangle","text"],i.default.string),width:i.default.string,height:i.default.string,customStyles:i.default.object,customClasses:i.default.string},exports.Skeleton=s;
//# sourceMappingURL=index.js.map
