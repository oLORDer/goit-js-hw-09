!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(e){if(t.classList.contains("active"))return;t.classList.add("active"),o()})),e.addEventListener("click",(function(){t.classList.remove("active"),clearInterval(c)}));var c=null,o=function(){c=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)};console.log(t)}();
//# sourceMappingURL=01-color-switcher.61683c7a.js.map
