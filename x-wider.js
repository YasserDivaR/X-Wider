// ==UserScript==
// @name         X Wider
// @namespace    https://yasserdivar.ir/
// @version      1.2
// @description  حذف سایدبارهای چپ و راست و بزرگتر کردن متن توییتها در شبکه اجتماعی X
// @author       https://yasserdivar.ir/
// @match        https://twitter.com/*
// @match        https://x.com/*
// @grant        GM_xmlhttpRequest
// @connect      x.com
// @connect      twitter.com
// @connect      twimg.com
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const css = `
        /* ===== حذف سایدبار چپ (منوی ناوبری) ===== */
        header[role="banner"] {
            display: none !important;
        }

        /* ===== حذف سایدبار راست (ترندها و پیشنهادها) ===== */
        [data-testid="sidebarColumn"] {
            display: none !important;
        }

        /* ===== بزرگتر کردن و وسطچین کردن ستون اصلی ===== */
        [data-testid="primaryColumn"] {
            max-width: 1024px !important;
            width: 100% !important;
            margin: 0 auto !important;
        }

        /* وسطچین کردن کل محتوای اصلی */
        main[role="main"] {
            align-items: center !important;
            justify-content: center !important;
        }

        /* ===== بزرگتر کردن متن توییتها ===== */
        [data-testid="tweetText"] {
            font-size: 16px !important;
            line-height: 1.55 !important;
        }

        [data-testid="tweetText"] span {
            font-size: inherit !important;
        }

        /* نام کاربر و یوزرنیم کمی بزرگتر */
        [data-testid="User-Name"] {
            font-size: 15.5px !important;
        }

        /* فاصلهگذاری بهتر برای هر توییت */
        article[data-testid="tweet"] {
            padding: 14px 18px !important;
        }

        /* بزرگتر کردن تصاویر داخل توییت */
        [data-testid="tweetPhoto"] img {
            border-radius: 14px !important;
        }
    `;

    function injectStyle() {
        const style = document.createElement('style');
        style.id = 'tw-wide-mode-style';
        style.textContent = css;
        (document.head || document.documentElement).appendChild(style);
    }

    injectStyle();

    // در صورت رندر مجدد صفحه توسط React، استایل را دوباره تزریق کن
    const observer = new MutationObserver(() => {
        if (!document.getElementById('tw-wide-mode-style')) {
            injectStyle();
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
