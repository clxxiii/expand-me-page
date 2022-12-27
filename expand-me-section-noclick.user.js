// ==UserScript==
// @name     ExpandedMePageNoClick
// @version  1
// @author clxxiii
// @description Expands the me! page without a the click of a button
// @grant    none
// @match https://osu.ppy.sh/*
// @match https://lazer.ppy.sh/*
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

addGlobalStyle(`
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
`);
