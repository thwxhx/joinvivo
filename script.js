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
    url: "https://www.vivosports.live/p/wp.html"
  },
   {
    id: "telegram-channel",
    name: "Telegram Channel",
    tag: "Live links",
    desc: "Fast stream links and match alerts, right when they go live.",
    cta: "Join channel",
    icon: "fa-brands fa-telegram",
    url: "https://t.me/+9Fp7JKDVI0ZhMWNl"
  },
     {
    id: "website",
    name: "Official Website",
    tag: "Website",
    desc: "Watch live streams, schedules and the latest news.",
    cta: "Visit site",
    icon: "fa-solid fa-globe",
    url: "https://www.vivosports.live"
  },
  {
    id: "whatsapp-channel",
    name: "WhatsApp Channel",
    tag: "Updates",
    desc: "One-way broadcasts: fixtures, streams and announcements.",
    cta: "Follow channel",
    icon: "fa-brands fa-whatsapp",
    url: "https://www.whatsapp.com/channel/0029VbCbhOuDzgT7kOp9SH29"
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
    let ticking = false, last = null;
    grid.addEventListener("pointermove", function (e) {
      const card = e.target.closest(".card");
      if (!card) return;
      last = { card: card, x: e.clientX, y: e.clientY };
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        const r = last.card.getBoundingClientRect();
        last.card.style.setProperty("--mx", last.x - r.left + "px");
        last.card.style.setProperty("--my", last.y - r.top + "px");
        ticking = false;
      });
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  document.documentElement.style.scrollBehavior = "smooth";
})();
