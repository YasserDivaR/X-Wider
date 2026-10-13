<div align="center">

# 🐦 X-Wider

### حذف سایدبارهای چپ و راست و بزرگتر کردن متن توییتها در شبکه اجتماعی X

[![Version](https://img.shields.io/badge/version-1.2-blue.svg)](https://github.com/YasserDivaR/X-Wider)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-Required-orange.svg)](https://www.tampermonkey.net/)
[![Twitter/X](https://img.shields.io/badge/Works%20on-X.com-black.svg)](https://x.com/)

</div>

---

## ✨ ویژگیها

- 🚫 **حذف سایدبار چپ** (منوی ناوبری)
- 🚫 **حذف سایدبار راست** (ترندها و پیشنهادها)
- 📏 **عریضتر شدن ستون اصلی** تا `900px` و وسطچین شدن
- 🔤 **بزرگتر شدن متن توییتها** برای خوانایی بهتر
- 🖼️ **بهبود نمایش تصاویر** داخل توییتها
- ⚡ **سبک و سریع** — فقط با CSS، بدون تغییر در DOM
- 🌐 **پشتیبانی از هر دو دامنه** `twitter.com` و `x.com`

---

## 🚀 نحوه نصب

### قدم ۱ — نصب افزونه Tampermonkey

اگه افزونه Tampermonkey رو نصب نداری، از لینک زیر نصبش کن:

<p align="center">
  <a href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo">
    <img src="https://img.shields.io/badge/Chrome-Install%20Tampermonkey-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Install on Chrome">
  </a>
  <a href="https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/">
    <img src="https://img.shields.io/badge/Firefox-Install%20Tampermonkey-FF7139?style=for-the-badge&logo=firefox&logoColor=white" alt="Install on Firefox">
  </a>
  <a href="https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd">
    <img src="https://img.shields.io/badge/Edge-Install%20Tampermonkey-0078D7?style=for-the-badge&logo=microsoftedge&logoColor=white" alt="Install on Edge">
  </a>
</p>

### قدم ۲ — نصب اسکریپت X-Wider

روی لینک زیر کلیک کن و در صفحهای که باز میشه، دکمه **Install** رو بزن:

<p align="center">
  <a href="https://raw.githubusercontent.com/YasserDivaR/X-Wider/refs/heads/main/x-wider.js">
    <img src="https://img.shields.io/badge/📥%20Install%20X--Wider-Click%20Here-success?style=for-the-badge" alt="Install X-Wider">
  </a>
</p>

یا به صورت دستی این آدرس رو در نوار آدرس مرورگر باز کن:

https://raw.githubusercontent.com/YasserDivaR/X-Wider/refs/heads/main/x-wider.js

### قدم ۳ — لذت ببر! 🎉

صفحه X رو رفرش کن (F5) و تغییرات رو ببین.

---

## 🛠️ شخصیسازی

میخوای متن توییتها بزرگتر یا کوچکتر باشه؟ مقدار `font-size` رو در کد تغییر بده:

```css
/* ===== بزرگتر کردن متن توییتها ===== */
[data-testid="tweetText"] {
    font-size: 17px !important;   /* 👈 این عدد رو تغییر بده */
    line-height: 1.55 !important;
}
/*همچنین میتونی عرض ستون اصلی رو تغییر بدی:*/
[data-testid="primaryColumn"] {
    max-width: 900px !important;  /* 👈 این عدد رو تغییر بده */
}
```

🧩 سازگاری
مرورگر	وضعیت
🟢 Chrome / Chromium	✅ تست شده

🟢 Firefox	✅ تست شده

🟢 Edge	✅ تست شده

🟢 Brave	✅ تست شده

🟡 Safari	⚠️ نیاز به Tampermonkey نسخه Safari

❓ سوالات متداول
<details> <summary><b>تغییرات اعمال نشد، چیکار کنم؟</b></summary>
۱. مطمئن شو افزونه Tampermonkey فعاله.
۲. صفحه X رو با Ctrl + F5 (رفرش کامل) رفرش کن.
۳. توی داشبورد Tampermonkey چک کن که اسکریپت X-Wider فعال (Enabled) باشه.
۴. اگه بازم مشکل بود، توی Issues گزارش بده.

</details><details> <summary><b>آیا روی موبایل هم کار میکنه؟</b></summary>
بله، اگه از مرورگر موبایل با پشتیبانی افزونه (مثل Kiwi Browser یا Firefox Mobile) استفاده کنی.

</details><details> <summary><b>متن توییتها هنوز ریزه، چرا؟</b></summary>
مقدار font-size رو توی بخش شخصیسازی بالاتر ببر (مثلاً 19px یا 21px).

</details><details> <summary><b>سایدبار چپ کامل حذف نمیشه؟</b></summary>
X کلاسهای CSS رو مدام تغییر میده. اگه مشکل دیدی، توی Issues گزارش بده تا selector رو آپدیت کنم.

</details>
🐛 گزارش باگ و درخواست ویژگی
اگه باگ پیدا کردی یا ایده جدیدی داری، از بخش Issues استفاده کن:

🐞 گزارش باگ

💡 درخواست ویژگی

🤝 مشارکت
از مشارکت استقبال میکنم! برای این کار:

ریپو رو Fork کن

یه برنچ جدید بساز (git checkout -b feature/amazing-feature)

تغییرات رو Commit کن (git commit -m 'Add amazing feature')

برنچ رو Push کن (git push origin feature/amazing-feature)

یه Pull Request باز کن

📜 لایسنس
این پروژه تحت لایسنس MIT منتشر شده. برای جزئیات فایل LICENSE رو ببین.

<div align="center">
🌟 اگه از این پروژه خوشت اومد، یه ستاره بده!
ساخته شده با ❤️ توسط YasserDivaR.ir



</div> ```




