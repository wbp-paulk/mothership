 
 // js body class for javascript disabled browsers
 $('body').addClass('js-enabled');

 $(document).ready(function() {
  
        $('.home .hero').anystretch("/wp-content/themes/special/images/crane.jpg", {speed: 500});
        $('.error404 .hero').anystretch("/wp-content/themes/special/images/max.gif", {speed: 500});
        $('.hero').anystretch("", {speed: 500});
  });

$(document).ready(function() {
  $('.toggle-content').click(function(){
  //get collapse content selector
  var collapse_content_selector = $(this).attr('href');         

  //make the collapse content to be shown or hide
  var toggle_switch = $(this);
  $(collapse_content_selector).toggle(function(){
    if($(this).css('display')=='none'){
                            //change the button label to be 'Show'
    toggle_switch.html('View');
    }else{
                            //change the button label to be 'Hide'
    toggle_switch.html('Close');
    }
  });
  });

});


$(document).ready(function() {
    $('.crapagram').embedagram({
            instagram_id: "1909818" ,
            limit: 1
        });
});


 var headroom = new Headroom(document.getElementById("masthead"), {
  "tolerance": 5,
  "offset": 205,
  "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp",
    "top": "headroom--top",
    "notTop": "headroom--not-top"
  }
});
headroom.init();


/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */
window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!!t.document.createElementNS&&!!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&!!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),A=function(A){var o=t.document.createElement("link"),r=t.document.getElementsByTagName("script")[0];o.rel="stylesheet",o.href=e[A&&n?0:A?1:2],r.parentNode.insertBefore(o,r)},o=new t.Image;o.onerror=function(){A(!1)},o.onload=function(){A(1===o.width&&1===o.height)},o.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};
grunticon( [ "/wp-content/themes/special/js/icons.data.svg.css", "/wp-content/themes/special/js/icons.data.png.css", "/wp-content/themes/special/js/icons.fallback.css" ] );

/* Type Rendering Mix JS - (c) 2013 Tim Brown, Bram Stein. License: new BSD */(function(){'use strict';var c=window;function d(a){var b=e,g;a:{g=b.className.split(/\s+/);for(var m=0,H=g.length;m<H;m+=1)if(g[m]===a){g=!0;break a}g=!1}g||(b.className+=(""===b.className?"":" ")+a)};function f(a,b,g){this.b=null!=a?a:null;this.c=null!=b?b:null;this.e=null!=g?g:null}var h=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;function k(a,b){return a.b>b.b||a.b===b.b&&a.c>b.c||a.b===b.b&&a.c===b.c&&a.e>b.e?1:a.b<b.b||a.b===b.b&&a.c<b.c||a.b===b.b&&a.c===b.c&&a.e<b.e?-1:0}function l(a,b){return 0===k(a,b)||1===k(a,b)}
function n(){var a=h.exec(p[1]),b=null,g=null,m=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(g=parseInt(a[2],10)),null!==a[3]&&a[3]&&(m=parseInt(a[3],10)));return new f(b,g,m)};function q(){var a=r;return 3===a.a||7===a.a||6===a.a||9===a.a||8===a.a||5===a.a?"grayscale":1===a.a&&l(a.f,new f(6,2))&&1===a.d?"grayscale":"unknown"};var r,s=c.navigator.userAgent,t=0,u=new f,v=0,w=new f,p=null;if(p=/(?:iPod|iPad|iPhone).*? OS ([\d_]+)/.exec(s))v=3,w=n();else if(p=/(?:BB\d{2}|BlackBerry).*?Version\/([^\s]*)/.exec(s))v=9,w=n();else if(p=/Android ([^;)]+)|Android/.exec(s))v=5,w=n();else if(p=/Windows Phone(?: OS)? ([^;)]+)/.exec(s))v=8,w=n();else if(p=/Linux ([^;)]+)|Linux/.exec(s))v=4,w=n();else if(p=/OS X ([^;)]+)/.exec(s))v=2,w=n();else if(p=/Windows NT ([^;)]+)/.exec(s))v=1,w=n();else if(p=/CrOS ([^;)]+)/.exec(s))v=6,w=n();
if(p=/MSIE ([\d\w\.]+)/.exec(s))t=1,u=n();else if(p=/Trident.*rv:([\d\w\.]+)/.exec(s))t=1,u=n();else if(p=/OPR\/([\d.]+)/.exec(s))t=4,u=n();else if(p=/Opera Mini.*Version\/([\d\.]+)/.exec(s))t=4,u=n();else if(p=/Opera(?: |.*Version\/|\/)([\d\.]+)/.exec(s))t=4,u=n();else if(p=/Firefox\/([\d\w\.]+)|Firefox/.exec(s))t=3,u=n();else if(p=/(?:Chrome|CrMo|CriOS)\/([\d\.]+)/.exec(s))t=2,u=n();else if(p=/Silk\/([\d\._]+)/.exec(s))t=7,u=n();else if(5===v||9===v)t=6;else if(p=/Version\/([\d\.\w]+).*Safari/.exec(s))t=
5,u=n();r=new function(a,b,g,m){this.d=a;this.g=b;this.a=g;this.f=m}(t,u,v,w);var x=q(),y,z=q();y="unknown"!==z?z:2===r.a||4===r.a?"subpixel":1===r.a?l(r.f,new f(6,0))?"subpixel":1===r.d?l(r.g,new f(7,0))?"subpixel":"grayscale":"subpixel":"unknown";var e=c.document.documentElement,A;
if(1===r.a){var B,C;if(!(C=2===r.d)){var D;(D=4===r.d)||(D=-1===k(r.f,new f(6,0)));C=D}if(C)B="gdi";else{var E;if(l(r.f,new f(6,0))){var F;if(F=1===r.d){var G=r.g,I=new f(8,0);F=0===k(G,I)||-1===k(G,I)}E=F?"gdi":"directwrite"}else E="unknown";B=E}A=B}else A=8===r.a?"directwrite":2===r.a||3===r.a?"coretext":5===r.a||4===r.a||6===r.a||7===r.a||9===r.a?"freetype":"unknown";d("tr-"+A);"unknown"===x&&"unknown"!==y&&(x+="-"+y);d("tr-aa-"+x);}()); 