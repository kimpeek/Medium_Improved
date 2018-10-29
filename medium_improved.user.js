// ==UserScript==
// @name         Medium_Improved
// @name:en      Medium_Improved
// @version      0.1
// @description  Fix annoying UI behaviors on medium.com
// @namespace    https://greasyfork.org/en/scripts/
// @author       https://github.com/kimpeek
// @include      *medium.com/*
// ==/UserScript==

// remove modal
const modal = document.getElementsByClassName('overlay--lighter')[0];
modal.style.display = 'none';

// re-enable scroll
const hidden = document.getElementsByClassName('u-overflowHidden');
for (let element in hidden) {
    try {
        hidden[element].classList.remove("u-overflowHidden");
    } catch (e) {

    }
}

// hide fixed elements
const fixed = document.getElementsByClassName('u-fixed');
for (let element in fixed) {
    try {
        fixed[element].style.display = 'none';
    } catch (e) {

    }
}
