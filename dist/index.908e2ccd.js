var r=globalThis,e={},t={},o=r.parcelRequire2041;null==o&&((o=function(r){if(r in e)return e[r].exports;if(r in t){var o=t[r];delete t[r];var a={id:r,exports:{}};return e[r]=a,o.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(r,e){t[r]=e},r.parcelRequire2041=o),o.register;var a=o("4AGbv"),i=o("iNA1s");(0,a.default).registerPlugin(i.ScrollTrigger);const l=document.querySelectorAll("[data-animation='moveUpTitle']"),n=document.querySelectorAll("[data-animation='moveUpTitleRight']");var g=o("aiB8Q"),s=o("5h3q0"),a=o("4AGbv"),i=o("iNA1s");(0,a.default).registerPlugin(i.ScrollTrigger);const c=document.querySelector(".hero-title");(0,o("icE8s").default)(),(0,a.default).from(c,{y:-500,opacity:0,duration:1.5,scrollTrigger:{trigger:c,start:"top 80%",end:"bottom 20%",toggleActions:"restart none restart none"}}),l.forEach(r=>{(0,a.default).from(r,{y:150,opacity:0,rotate:5,duration:1,stagger:1,scrub:!0,scrollTrigger:{trigger:r,toggleActions:"restart none restart none"}})}),(0,g.default)(),n.forEach(r=>{(0,a.default).from(r,{y:150,opacity:0,rotate:-5,duration:1,stagger:.2,scrub:!0,scrollTrigger:{trigger:r,toggleActions:"restart none restart none"}})}),(0,s.default)();
//# sourceMappingURL=index.908e2ccd.js.map
