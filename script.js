/* ==========================================================
   EDIT YOUR SOCIAL LINKS HERE
   Replace each `url` with your real link. Nothing else needs
   to change. Reorder, add or remove items freely.
   ========================================================== */
const SOCIAL_LINKS = [
  {
    id: "whatsapp-group",
    name: "WhatsApp Group",
    tag: "Community",
    desc: "Chat with fellow fans and get match links instantly.",
    cta: "Join group",
    icon: "fa-brands fa-whatsapp",
    url: "https://chat.whatsapp.com/YOUR_WHATSAPP_GROUP_LINK"
  },
  {
    id: "whatsapp-channel",
    name: "WhatsApp Channel",
    tag: "Updates",
    desc: "One-way broadcasts: fixtures, streams and announcements.",
    cta: "Follow channel",
    icon: "fa-brands fa-whatsapp",
    url: "https://whatsapp.com/channel/YOUR_WHATSAPP_CHANNEL_LINK"
  },
  {
    id: "telegram-channel",
    name: "Telegram Channel",
    tag: "Live links",
    desc: "Fast stream links and match alerts, right when they go live.",
    cta: "Join channel",
    icon: "fa-brands fa-telegram",
    url: "https://t.me/YOUR_TELEGRAM_CHANNEL"
  },
  {
    id: "instagram",
    name: "Instagram",
    tag: "Highlights",
    desc: "Match highlights, news and behind the scenes.",
    cta: "Follow us",
    icon: "fa-brands fa-instagram",
    url: "https://instagram.com/YOUR_INSTAGRAM_HANDLE"
  }
];
/* ================= END OF EDIT SECTION ================= */

(function () {
  const grid = document.getElementById("links");

  grid.innerHTML = SOCIAL_LINKS.map(function (l) {
    return (
      '<a class="card" data-id="' + l.id + '" href="' + l.url + '" target="_blank" rel="noopener noreferrer">' +
        '<span class="icon"><i class="' + l.icon + '" aria-hidden="true"></i></span>' +
        '<span class="body">' +
          '<span class="name">' + l.name + '<em>' + l.tag + '</em></span>' +
          '<span class="desc">' + l.desc + '</span>' +
        '</span>' +
        '<span class="go" aria-hidden="true"><span>' + l.cta + '</span><i class="fa-solid fa-arrow-up-right-from-square"></i></span>' +
      '</a>'
    );
  }).join("");

  // Cursor spotlight on cards (skipped for touch / reduced motion)
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (fine && !calm) {
    grid.addEventListener("pointermove", function (e) {
      const card = e.target.closest(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  document.documentElement.style.scrollBehavior = "smooth";
})();
