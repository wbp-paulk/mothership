$("body").addClass("js-enabled"),$(document).ready(function(){$(".home .hero").anystretch("/wp-content/themes/special/images/crane.jpg",{speed:500}),$(".error404 .hero").anystretch("/wp-content/themes/special/images/max.gif",{speed:500}),$(".page .hero").anystretch()}),$(document).ready(function(){$(".toggle-content").click(function(){var a=$(this).attr("href"),b=$(this);$(a).toggle(function(){"none"==$(this).css("display")?b.html("View"):b.html("Close")})})}),$(document).ready(function(){$(".crapagram").embedagram({instagram_id:"1909818",limit:1})});var headroom=new Headroom(document.getElementById("masthead"),{tolerance:5,offset:50,classes:{initial:"animated",pinned:"swingInX",unpinned:"swingOutX"}});headroom.init(),window.grunticon=function(a){if(a&&3===a.length){var b=window,c=!!b.document.createElementNS&&!!b.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&!!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),d=function(d){var e=b.document.createElement("link"),f=b.document.getElementsByTagName("script")[0];e.rel="stylesheet",e.href=a[d&&c?0:d?1:2],f.parentNode.insertBefore(e,f)},e=new b.Image;e.onerror=function(){d(!1)},e.onload=function(){d(1===e.width&&1===e.height)},e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}},grunticon(["/wp-content/themes/special/js/icons.data.svg.css","/wp-content/themes/special/js/icons.data.png.css","/wp-content/themes/special/js/icons.fallback.css"]),function(){"use strict";function a(a){var b,c=t;a:{b=c.className.split(/\s+/);for(var d=0,e=b.length;e>d;d+=1)if(b[d]===a){b=!0;break a}b=!1}b||(c.className+=(""===c.className?"":" ")+a)}function b(a,b,c){this.b=null!=a?a:null,this.c=null!=b?b:null,this.e=null!=c?c:null}function c(a,b){return a.b>b.b||a.b===b.b&&a.c>b.c||a.b===b.b&&a.c===b.c&&a.e>b.e?1:a.b<b.b||a.b===b.b&&a.c<b.c||a.b===b.b&&a.c===b.c&&a.e<b.e?-1:0}function d(a,b){return 0===c(a,b)||1===c(a,b)}function e(){var a=i.exec(o[1]),c=null,d=null,e=null;return a&&(null!==a[1]&&a[1]&&(c=parseInt(a[1],10)),null!==a[2]&&a[2]&&(d=parseInt(a[2],10)),null!==a[3]&&a[3]&&(e=parseInt(a[3],10))),new b(c,d,e)}function f(){var a=g;return 3===a.a||7===a.a||6===a.a||9===a.a||8===a.a||5===a.a?"grayscale":1===a.a&&d(a.f,new b(6,2))&&1===a.d?"grayscale":"unknown"}var g,h=window,i=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/,j=h.navigator.userAgent,k=0,l=new b,m=0,n=new b,o=null;(o=/(?:iPod|iPad|iPhone).*? OS ([\d_]+)/.exec(j))?(m=3,n=e()):(o=/(?:BB\d{2}|BlackBerry).*?Version\/([^\s]*)/.exec(j))?(m=9,n=e()):(o=/Android ([^;)]+)|Android/.exec(j))?(m=5,n=e()):(o=/Windows Phone(?: OS)? ([^;)]+)/.exec(j))?(m=8,n=e()):(o=/Linux ([^;)]+)|Linux/.exec(j))?(m=4,n=e()):(o=/OS X ([^;)]+)/.exec(j))?(m=2,n=e()):(o=/Windows NT ([^;)]+)/.exec(j))?(m=1,n=e()):(o=/CrOS ([^;)]+)/.exec(j))&&(m=6,n=e()),(o=/MSIE ([\d\w\.]+)/.exec(j))?(k=1,l=e()):(o=/Trident.*rv:([\d\w\.]+)/.exec(j))?(k=1,l=e()):(o=/OPR\/([\d.]+)/.exec(j))?(k=4,l=e()):(o=/Opera Mini.*Version\/([\d\.]+)/.exec(j))?(k=4,l=e()):(o=/Opera(?: |.*Version\/|\/)([\d\.]+)/.exec(j))?(k=4,l=e()):(o=/Firefox\/([\d\w\.]+)|Firefox/.exec(j))?(k=3,l=e()):(o=/(?:Chrome|CrMo|CriOS)\/([\d\.]+)/.exec(j))?(k=2,l=e()):(o=/Silk\/([\d\._]+)/.exec(j))?(k=7,l=e()):5===m||9===m?k=6:(o=/Version\/([\d\.\w]+).*Safari/.exec(j))&&(k=5,l=e()),g=new function(a,b,c,d){this.d=a,this.g=b,this.a=c,this.f=d}(k,l,m,n);var p,q=f(),r=f();p="unknown"!==r?r:2===g.a||4===g.a?"subpixel":1===g.a?d(g.f,new b(6,0))?"subpixel":1===g.d?d(g.g,new b(7,0))?"subpixel":"grayscale":"subpixel":"unknown";var s,t=h.document.documentElement;if(1===g.a){var u,v;if(!(v=2===g.d)){var w;(w=4===g.d)||(w=-1===c(g.f,new b(6,0))),v=w}if(v)u="gdi";else{var x;if(d(g.f,new b(6,0))){var y;if(y=1===g.d){var z=g.g,A=new b(8,0);y=0===c(z,A)||-1===c(z,A)}x=y?"gdi":"directwrite"}else x="unknown";u=x}s=u}else s=8===g.a?"directwrite":2===g.a||3===g.a?"coretext":5===g.a||4===g.a||6===g.a||7===g.a||9===g.a?"freetype":"unknown";a("tr-"+s),"unknown"===q&&"unknown"!==p&&(q+="-"+p),a("tr-aa-"+q)}();