var r=globalThis,e={},t={},o=r.parcelRequire2041;null==o&&((o=function(r){if(r in e)return e[r].exports;if(r in t){var o=t[r];delete t[r];var a={id:r,exports:{}};return e[r]=a,o.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(r,e){t[r]=e},r.parcelRequire2041=o),o.register;var a=o("4AGbv"),i=o("iNA1s");(0,a.default).registerPlugin(i.ScrollTrigger);const l=document.querySelectorAll("[data-animation='moveUpTitle']"),n=document.querySelectorAll("[data-animation='moveUpTitleRight']");var u=o("aiB8Q"),g=o("5h3q0"),s=o("inux9"),c=o("icE8s"),a=o("4AGbv");(0,c.default)(),(0,s.default)(),l.forEach(r=>{(0,a.default).from(r,{y:150,opacity:0,rotate:5,duration:1,stagger:1,scrub:!0,scrollTrigger:{trigger:r,toggleActions:"restart none restart none"}})}),(0,u.default)(),n.forEach(r=>{(0,a.default).from(r,{y:150,opacity:0,rotate:-5,duration:1,stagger:.2,scrub:!0,scrollTrigger:{trigger:r,toggleActions:"restart none restart none"}})}),(0,g.default)();
//# sourceMappingURL=index.56a851a0.js.map
