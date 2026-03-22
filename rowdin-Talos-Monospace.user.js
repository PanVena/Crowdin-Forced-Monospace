// ==UserScript==
// @name         Crowdin Talos Monospace Font
// @name:uk      Crowdin Talos: Моноширинний шрифт
// @namespace    https://github.com/PanVena/Crowdin-Forced-Monospace
// @version      1.0.0
// @description  Aggressively applies monospace font to Crowdin editor for ASCII art alignment (The Talos Principle).
// @description:uk Примусово застосовує моноширинний шрифт у редакторі Crowdin для правильного відображення ASCII-арту та пробілів (The Talos Principle).
// @author       PanVena
// @match        *://*.crowdin.com/editor/*
// @grant        GM_addStyle
// @homepage     https://github.com/PanVena/Crowdin-Forced-Monospace
// ==/UserScript==

(function() {
    'use strict';

    // Застосовуємо стилі до всіх можливих контейнерів з текстом у Crowdin
    GM_addStyle(`
        /* Зміна шрифту для елементів з мовними тегами, текстових полів та редакторів */
        div[lang], 
        span[lang], 
        textarea, 
        [contenteditable="true"],
        [data-slate-editor="true"] {
            font-family: "Consolas", "Monaco", "Courier New", monospace !important;
            white-space: pre-wrap !important; 
            font-size: 14px !important;
            line-height: 1.2 !important;
            letter-spacing: 0px !important;
        }

        /* Легке підсвічування активного поля вводу для зручності фокусування */
        textarea:focus, 
        [contenteditable="true"]:focus {
            background-color: rgba(255, 255, 255, 0.05) !important;
            outline: 1px dotted rgba(255, 255, 255, 0.2) !important;
        }
    `);

    console.log("Talos Monospace Force: Стилі успішно застосовано!");
})();
