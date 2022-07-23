// ==UserScript==
// @name         YP
// @namespace    http://stay.app/
// @version      0.1
// @description  adblock
// @author       lancer
// @match        *://jbfyrm7tbu7z15cau.com*
// @run-at       document-start
// @require      stay://vendor/stay-taskloop.js
// @updateURL    https://github.com/lancercd/QuantumultX/raw/master/stay/yp.js
// @downloadURL    https://github.com/lancercd/QuantumultX/raw/master/stay/yp.js
// ==/UserScript==

function header() {

    document.body.style.paddingTop = "100px";
    const header = document.querySelector("#header-top");

    if (header) {
        header.style.height = "100px";
    }

    const topBanner = document.querySelector("#dingpiao_wap");

    if (topBanner) {
        topBanner.style.display = "none";
        return COMPLETE;
    }
    return CONTINUE;
}

function footerBanner() {
    const booterBanner = document.querySelector("#fc_foot");
    if (booterBanner) {
        booterBanner.style.display = "none";
        booterBanner.remove();
        return COMPLETE;
    }
    return CONTINUE;
}

let tasks = [header, footerBanner];

if (document.readyState !== "loading") {
    Stay_Inject.run(tasks, 100, 30, false).then((data) => { });
}
else {
    document.addEventListener("DOMContentLoaded", function (event) {
        Stay_Inject.run(tasks, 100, 30, false).then((data) => { });
    });
}
