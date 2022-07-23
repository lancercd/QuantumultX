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

function factor(selector) {
    const b = document.querySelector(selector);
    if (b) {
        b.style.display = "none";
        b.remove();
        return COMPLETE;
    }
    return CONTINUE;
}

function header() {

    document.body.style.paddingTop = "100px";
    const header = document.querySelector("#header-top");

    if (header) {
        header.style.height = "100px";
        return COMPLETE;
    }
    return CONTINUE;
}

let tasks = [
    header,
    () => factor("#fc_foot"),
    () => factor(".dplayer-mask"),
    () => factor("#vod_shang"),
    () => factor("#hengfu_pc_vod_shang"),
    () => factor("#dingpiao_wap"),
    () => factor("#p1"),
    () => factor("#hengfu_wap_vod_xia"),
    () => factor("#vod_txt"),
    () => factor(".stui-player.col-pd > p"),
];

if (document.readyState !== "loading") {
    Stay_Inject.run(tasks, 100, 30, false).then((data) => { });
}
else {
    document.addEventListener("DOMContentLoaded", function (event) {
        Stay_Inject.run(tasks, 100, 30, false).then((data) => { });
    });
}
