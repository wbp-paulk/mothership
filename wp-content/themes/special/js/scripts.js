!function l(u,i,c){function _(t,e){if(!i[t]){if(!u[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(s)return s(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var r=i[t]={exports:{}};u[t][0].call(r.exports,function(e){return _(u[t][1][e]||e)},r,r.exports,l,u,i,c)}return i[t].exports}for(var s="function"==typeof require&&require,e=0;e<c.length;e++)_(c[e]);return _}({1:[function(e,t,n){var k,o,c,r,l,u,i,w={},C=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function x(e,t){for(var n in t)e[n]=t[n];return e}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function s(e,t,n){var o,r,l,u,i=arguments;if(t=x({},t),3<arguments.length)for(n=[n],o=3;o<arguments.length;o++)n.push(i[o]);if(null!=n&&(t.children=n),null!=e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===t[r]&&(t[r]=e.defaultProps[r]);return u=t.key,null!=(l=t.ref)&&delete t.ref,null!=u&&delete t.key,a(e,t,u,l)}function a(e,t,n,o){var r={type:e,props:t,key:n,ref:o,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return k.vnode&&k.vnode(r),r}function S(e){return e.children}function P(e,t){this.props=e,this.context=t}function g(e,t){if(null==t)return e.__p?g(e.__p,e.__p.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?g(e):null}function f(e){var t,n;if(null!=(e=e.__p)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return f(e)}}function p(e){(!e.__d&&(e.__d=!0)&&1===c.push(e)||l!==k.debounceRendering)&&(l=k.debounceRendering,(k.debounceRendering||r)(h))}function h(){var e,t,n,o,r,l,u,i;for(c.sort(function(e,t){return t.__v.__b-e.__v.__b});e=c.pop();)e.__d&&(o=n=void 0,l=(r=(t=e).__v).__e,u=t.__P,i=t.u,t.u=!1,u&&(n=[],o=b(u,r,x({},r),t.__n,void 0!==u.ownerSVGElement,null,n,i,null==l?g(r):l),v(n,r),o!=l&&f(r)))}function E(t,n,e,o,r,l,u,i,c){var _,s,a,f,p,h,d,y=e&&e.__k||C,v=y.length;if(i==w&&(i=null!=l?l[0]:v?g(e,0):null),_=0,n.__k=O(n.__k,function(e){if(null!=e){if(e.__p=n,e.__b=n.__b+1,null===(a=y[_])||a&&e.key==a.key&&e.type===a.type)y[_]=void 0;else for(s=0;s<v;s++){if((a=y[s])&&e.key==a.key&&e.type===a.type){y[s]=void 0;break}a=null}if(f=b(t,e,a=a||w,o,r,l,u,null,i,c),(s=e.ref)&&a.ref!=s&&(d=d||[]).push(s,e.__c||f,e),null!=f){if(null==h&&(h=f),null!=e.l)f=e.l,e.l=null;else if(l==a||f!=i||null==f.parentNode){e:if(null==i||i.parentNode!==t)t.appendChild(f);else{for(p=i,s=0;(p=p.nextSibling)&&s<v;s+=2)if(p==f)break e;t.insertBefore(f,i)}"option"==n.type&&(t.value="")}i=f.nextSibling,"function"==typeof n.type&&(n.l=f)}}return _++,e}),n.__e=h,null!=l&&"function"!=typeof n.type)for(_=l.length;_--;)null!=l[_]&&m(l[_]);for(_=v;_--;)null!=y[_]&&N(y[_],y[_]);if(d)for(_=0;_<d.length;_++)M(d[_],d[++_],d[++_])}function O(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var o=0;o<e.length;o++)O(e[o],t,n);else n.push(t?t(function(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return a(null,e,null,null);if(null==e.__e&&null==e.__c)return e;var t=a(e.type,e.props,e.key,null);return t.__e=e.__e,t}(e)):e);return n}function d(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===_.test(t)?n+"px":null==n?"":n}function D(e,t,n,o,r){var l,u,i,c,_;if("key"===(t=r?"className"===t?"class":t:"class"===t?"className":t)||"children"===t);else if("style"===t)if(l=e.style,"string"==typeof n)l.cssText=n;else{if("string"==typeof o&&(l.cssText="",o=null),o)for(u in o)n&&u in n||d(l,u,"");if(n)for(i in n)o&&n[i]===o[i]||d(l,i,n[i])}else"o"===t[0]&&"n"===t[1]?(c=t!==(t=t.replace(/Capture$/,"")),t=((_=t.toLowerCase())in e?_:t).slice(2),n?(o||e.addEventListener(t,y,c),(e.t||(e.t={}))[t]=n):e.removeEventListener(t,y,c)):"list"!==t&&"tagName"!==t&&"form"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n?e.removeAttribute(t):e.setAttribute(t,n))}function y(e){return this.t[e.type](k.event?k.event(e):e)}function b(e,t,n,o,r,l,u,i,c,_){var s,a,f,p,h,d,y,v,m,g,b=t.type;if(void 0!==t.constructor)return null;(s=k.__b)&&s(t);try{e:if("function"==typeof b){if(v=t.props,m=(s=b.contextType)&&o[s.__c],g=s?m?m.props.value:s.__p:o,n.__c?y=(a=t.__c=n.__c).__p=a.__E:("prototype"in b&&b.prototype.render?t.__c=a=new b(v,g):(t.__c=a=new P(v,g),a.constructor=b,a.render=U),m&&m.sub(a),a.props=v,a.state||(a.state={}),a.context=g,a.__n=o,f=a.__d=!0,a.__h=[]),null==a.__s&&(a.__s=a.state),null!=b.getDerivedStateFromProps&&x(a.__s==a.state?a.__s=x({},a.__s):a.__s,b.getDerivedStateFromProps(v,a.__s)),f)null==b.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&u.push(a);else{if(null==b.getDerivedStateFromProps&&null==i&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(v,g),!i&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(v,a.__s,g)){for(a.props=v,a.state=a.__s,a.__d=!1,(a.__v=t).__e=null!=c?c!==n.__e?c:n.__e:null,t.__k=n.__k,s=0;s<t.__k.length;s++)t.__k[s]&&(t.__k[s].__p=t);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(v,a.__s,g)}for(p=a.props,h=a.state,a.context=g,a.props=v,a.state=a.__s,(s=k.__r)&&s(t),a.__d=!1,a.__v=t,a.__P=e,s=a.render(a.props,a.state,a.context),t.__k=O(null!=s&&s.type==S&&null==s.key?s.props.children:s),null!=a.getChildContext&&(o=x(x({},o),a.getChildContext())),f||null==a.getSnapshotBeforeUpdate||(d=a.getSnapshotBeforeUpdate(p,h)),E(e,t,n,o,r,l,u,c,_),a.base=t.__e;s=a.__h.pop();)a.__s&&(a.state=a.__s),s.call(a);f||null==p||null==a.componentDidUpdate||a.componentDidUpdate(p,h,d),y&&(a.__E=a.__p=null)}else t.__e=function(e,t,n,o,r,l,u,i){var c,_,s,a,f=n.props,p=t.props;if(r="svg"===t.type||r,null==e&&null!=l)for(c=0;c<l.length;c++)if(null!=(_=l[c])&&(null===t.type?3===_.nodeType:_.localName===t.type)){e=_,l[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(p);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),l=null}return null===t.type?f!==p&&(null!=l&&(l[l.indexOf(e)]=null),e.data=p):t!==n&&(null!=l&&(l=C.slice.call(e.childNodes)),s=(f=n.props||w).dangerouslySetInnerHTML,a=p.dangerouslySetInnerHTML,i||(a||s)&&(a&&s&&a.__html==s.__html||(e.innerHTML=a&&a.__html||"")),function(e,t,n,o,r){var l;for(l in n)l in t||D(e,l,null,n[l],o);for(l in t)r&&"function"!=typeof t[l]||"value"===l||"checked"===l||n[l]===t[l]||D(e,l,t[l],n[l],o)}(e,p,f,r,i),t.__k=t.props.children,a||E(e,t,n,o,"foreignObject"!==t.type&&r,l,u,w,i),i||("value"in p&&void 0!==p.value&&p.value!==e.value&&(e.value=null==p.value?"":p.value),"checked"in p&&void 0!==p.checked&&p.checked!==e.checked&&(e.checked=p.checked))),e}(n.__e,t,n,o,r,l,u,_);(s=k.diffed)&&s(t)}catch(e){k.__e(e,t,n)}return t.__e}function v(e,t){for(var n;n=e.pop();)try{n.componentDidMount()}catch(e){k.__e(e,n.__v)}k.__c&&k.__c(t)}function M(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){k.__e(e,n)}}function N(e,t,n){var o,r,l;if(k.unmount&&k.unmount(e),(o=e.ref)&&M(o,null,t),n||"function"==typeof e.type||(n=null!=(r=e.__e)),e.__e=e.l=null,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){k.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&N(o[l],t,n);null!=r&&m(r)}function U(e,t,n){return this.constructor(e,n)}function R(e,t,n){var o,r,l;k.__p&&k.__p(e,t),r=(o=n===u)?null:n&&n.__k||t.__k,e=s(S,null,[e]),l=[],b(t,o?t.__k=e:(n||t).__k=e,r||w,w,void 0!==t.ownerSVGElement,n&&!o?[n]:r?null:C.slice.call(t.childNodes),l,!1,n||w,o),v(l,e)}k={},o=function(e){return null!=e&&void 0===e.constructor},P.prototype.setState=function(e,t){var n=this.__s!==this.state&&this.__s||(this.__s=x({},this.state));"function"==typeof e&&!(e=e(n,this.props))||x(n,e),null!=e&&this.__v&&(this.u=!1,t&&this.__h.push(t),p(this))},P.prototype.forceUpdate=function(e){this.__v&&(e&&this.__h.push(e),this.u=!0,p(this))},P.prototype.render=S,c=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=k.debounceRendering,k.__e=function(e,t,n){for(var o;t=t.__p;)if((o=t.__c)&&!o.__p)try{if(o.constructor&&null!=o.constructor.getDerivedStateFromError)o.setState(o.constructor.getDerivedStateFromError(e));else{if(null==o.componentDidCatch)continue;o.componentDidCatch(e)}return p(o.__E=o)}catch(t){e=t}throw e},u=w,i=0,n.render=R,n.hydrate=function(e,t){R(e,t,u)},n.createElement=s,n.h=s,n.Fragment=S,n.createRef=function(){return{}},n.isValidElement=o,n.Component=P,n.cloneElement=function(e,t){return t=x(x({},e.props),t),2<arguments.length&&(t.children=C.slice.call(arguments,2)),a(e.type,t,t.key||e.key,t.ref||e.ref)},n.createContext=function(e){var o={},r={__c:"__cC"+i++,__p:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,t=this;return this.getChildContext||(n=[],this.getChildContext=function(){return o[r.__c]=t,o},this.shouldComponentUpdate=function(t){e.value!==t.value&&(o[r.__c].props.value=t.value,n.some(function(e){e.__P&&(e.context=t.value,p(e))}))},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return r.Consumer.contextType=r},n.toChildArray=O,n._e=N,n.options=k},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=e("preact");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(o){return function(){var e,t=i(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=i(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,e)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),e}var a=function(){function e(){c(this,e),this.options={selector:document.querySelector(".js-main-navigation")}}return s(e,[{key:"setupComponent",value:function(){var r=this,e=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(n,l.Component);var t=u(n);function n(){var e;return c(this,n),(e=t.call(this)).state={menuOpen:!1,menuData:function(){for(var e=[],t=0;t<r.options.selector.firstElementChild.children.length;t++){var n=r.options.selector.firstElementChild.children[t],o={link:n.firstElementChild.href,text:n.firstElementChild.textContent};e.push(o)}return e}(),currentPage:null,test:null},e}return s(n,[{key:"toggleMenu",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"componentDidMount",value:function(){this.setState({currentPage:window.location.pathname})}},{key:"render",value:function(){var o=this;return(0,l.h)(l.Fragment,null,(0,l.h)("button",{className:"main-nav-toggle ".concat(this.state.menuOpen?" close-state":""),onClick:function(){return o.toggleMenu()}},(0,l.h)("svg",{class:"main-nav-button",viewBox:"0 0 225 164.7",width:"22.5",height:"16.47"},(0,l.h)("rect",{class:"one",y:"0",width:"225",height:"23.7"}),(0,l.h)("rect",{class:"two",y:"70.5",width:"225",height:"23.7"}),(0,l.h)("rect",{class:"three",y:"141",width:"225",height:"23.7"})),(0,l.h)("span",{className:"label"},this.state.menuOpen?"Close":"Menu")),(0,l.h)("ul",{id:"primary-menu",className:"menu ".concat(this.state.menuOpen?"open":"closed")},this.state.menuData.map(function(e,t){var n=RegExp("".concat(e.text.toLowerCase())).test(o.state.currentPage);return(0,l.h)("li",{key:t,className:"menu-item"},(0,l.h)("a",{"aria-current":!!n,href:e.link},e.text))})))}}]),n}();(0,l.render)((0,l.h)(e,null),this.options.selector)}},{key:"init",value:function(){this.setupComponent()}}]),e}();n.default=a},{preact:1}],3:[function(e,t,n){"use strict";var o,r,l=(o=e("./MobileMenu"))&&o.__esModule?o:{default:o};document,r="localhost"===window.location.hostname,"serviceWorker"in navigator&&!r&&navigator.serviceWorker.register("/sw.js").then(function(){return navigator.serviceWorker.ready}),(new l.default).init()},{"./MobileMenu":2}]},{},[3]);