function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t=globalThis,r={},o={},n=t.parcelRequire2041;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequire2041=n);var a=n.register;a("aiB8Q",function(t,r){e(t.exports,"default",()=>o),gsap.registerPlugin(ScrollTrigger);var o=()=>{document.querySelectorAll('[data-animation="fade--in"]').forEach(e=>{gsap.from(e,{opacity:0,y:20,duration:2,scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 20%",toggleActions:"restart none restart none"}})})}}),a("5h3q0",function(t,r){e(t.exports,"default",()=>a);let o=document.querySelector(".email-link"),n=document.querySelector(".arrow");var a=()=>{o.addEventListener("mouseenter",()=>{gsap.to(n,{scaleX:1.5,duration:.3,ease:"power1.out"})}),o.addEventListener("mouseleave",()=>{gsap.to(n,{scaleX:1,duration:.3,ease:"power1.in"})})}}),a("icE8s",function(t,r){e(t.exports,"default",()=>n);let o=document.getElementById("circle");var n=()=>{gsap.set(o,{yPercent:-50,xPercent:-50,zIndex:5});let e=gsap.quickTo(o,"x",{duration:.5,ease:"elastic"}),t=gsap.quickTo(o,"y",{duration:.5});window.addEventListener("mousemove",r=>{e(r.clientX),t(r.clientY)})}}),a("gxooe",function(t,r){e(t.exports,"default",()=>a);let o=document.querySelector(".interact"),n=document.querySelector(".slide-img");var a=()=>{o.addEventListener("mouseenter",()=>{gsap.to(n,{y:-60,opacity:1,duration:.5,ease:"power2.out"})}),o.addEventListener("mouseleave",()=>{gsap.to(n,{y:-55,opacity:0,duration:.5,ease:"power2.in"})})}}),a("lbLlJ",function(t,r){e(t.exports,"default",()=>o);var o=()=>{document.addEventListener("scroll",function(){let e=document.querySelector("header");window.scrollY>10?e.classList.add("scrolled"):e.classList.remove("scrolled")})}});var l=n("aiB8Q"),d=n("5h3q0"),i=n("icE8s"),c=n("gxooe"),s=n("lbLlJ");(0,i.default)(),(0,s.default)(),(0,c.default)(),(0,l.default)(),(0,d.default)(),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".project"),t=document.getElementById("video-overlay"),r=document.getElementById("close-overlay"),o=document.getElementById("project-video"),n=document.getElementById("video-source");e.forEach(e=>{e.addEventListener("click",()=>{var r;r=e.getAttribute("data-video-src"),n.src=r,o.load(),t.style.display="flex",o.play()})}),r.addEventListener("click",()=>{t.style.display="none",o.pause(),o.currentTime=0}),t.addEventListener("click",e=>{e.target===t&&(t.style.display="none",o.pause(),o.currentTime=0)})});
//# sourceMappingURL=portfolio.9b0d413a.js.map
