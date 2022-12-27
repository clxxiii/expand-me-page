// ==UserScript==
// @name     ExpandedMePage
// @version  1
// @author clxxiii
// @description Adds an 'Expand' button to the me! page that expands the me! section to the content length
// @grant    none
// @include https://osu.ppy.sh/*, https://lazer.ppy.sh/*
// ==/UserScript==

function addGlobalStyle(css) {
	var head, style;
	head = document.getElementsByTagName("head")[0];
	if (!head) {
		return;
	}
	style = document.createElement("style");
	style.type = "text/css";
	style.innerHTML = css;
	head.appendChild(style);
}

window.addEventListener("load", () => {
	let parent = document.getElementsByClassName("page-extra--userpage")[0];
	let me = parent.getElementsByClassName(
		"page-extra__content-overflow-wrapper-outer"
	)[0];
	let button = document.createElement("div");
	me.appendChild(button);
	parent.style.paddingBottom = "35px";
	// This button ripped from the show more button used on other profile sections
	button.innerHTML = `<button type="button" onclick="meSectionShowMore()" style="left: -30px;" class="show-more-link show-more-link--profile-page expand-me-profile"><span class="show-more-link__spinner"><div class="la-ball-clip-rotate"></div></span><span class="show-more-link__label"><span class="show-more-link__label-icon show-more-link__label-icon--left"><span class="fas fa-angle-down"></span></span><span class="show-more-link__label-text">expand</span><span class="show-more-link__label-icon show-more-link__label-icon--right"><span class="fas fa-angle-down"></span></span></span></button>`;

	injectUserScripts();
});

function injectUserScripts() {
	var js = `
   function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
  }

  function meSectionShowMore() {
  console.log("Hi!");
     addGlobalStyle(\`
  .page-extra__content-overflow-wrapper-outer {
    max-height: none !important
  }
  .page-extra__content-overflow-wrapper-inner {
    max-height: none !important
  }
  .expand-me-profile {
    opacity: 0;
  }
  .page-extra--userpage {
  padding-bottom: 0 !important
  }
\`);
   }
   `;

	var head, script;
	head = document.getElementsByTagName("head")[0];
	if (!head) {
		return;
	}
	script = document.createElement("script");
	script.innerHTML = js;
	head.appendChild(script);
}
