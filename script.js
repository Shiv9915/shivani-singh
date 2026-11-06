/* EDIT ME: personal links, email, photo and resume path */
var C = {
  email: "YOUR_EMAIL_ADDRESS",
  resume: "Shivani-Singh-Resume.pdf",
  photo: "shivani-profile.jpg",
  github: "https://github.com/shivani-singh-dev",
  linkedin: "LINKEDIN_PROFILE_URL",
  instagram: "",
};
var R = matchMedia("(prefers-reduced-motion: reduce)").matches,
  G = window.gsap;
var $ = function (s, p) {
    return (p || document).querySelector(s);
  },
  $$ = function (s, p) {
    return [].slice.call((p || document).querySelectorAll(s));
  };
var CATS = {
  B: "Backend Development",
  F: "Frontend Development",
  D: "Databases",
};
var SK = [
  ["B", "Python", "code"],
  ["B", "Django", "server"],
  ["F", "React", "atom"],
  ["F", "JavaScript", "braces"],
  ["F", "HTML", "file-code"],
  ["F", "CSS", "paintbrush"],
  ["D", "MongoDB", "database"],
  ["D", "MySQL", "database"],
];
var SV = [
  [
    "Frontend Development",
    "monitor",
    "Building responsive and user-friendly interfaces with React, HTML, CSS and JavaScript.",
  ],
  [
    "Backend & Database Development",
    "database",
    "Learning and building application logic, APIs and data-driven features with Python, Django, MongoDB and MySQL.",
  ],
];
var PJ = [
  [
    "AI Resume Analyzer",
    "file-search",
    "A web application concept that analyzes uploaded resumes and helps users review skills and job-role relevance.",
    ["Python", "Django", "React"],
    "linear-gradient(135deg,#171329,#7c3aed)",
    "",
    "",
    4,
    2,
  ],
  [
    "MERN E-Commerce Website",
    "shopping-bag",
    "An e-commerce project with a React frontend and a Node.js, Express and MongoDB backend.",
    ["React", "JavaScript", "MongoDB"],
    "linear-gradient(135deg,#5426a8,#9b6cff)",
    "",
    "",
    2,
    2,
  ],
  [
    "AI Customer Support Chatbot",
    "messages-square",
    "A customer-support chatbot project built with a Django REST backend, authentication and FAQ-based responses.",
    ["Python", "Django REST Framework", "JWT"],
    "linear-gradient(135deg,#080812,#5426a8)",
    "",
    "",
    2,
    2,
  ],
];
function ic(n) {
  return '<i data-lucide="' + n + '"></i>';
}
$("#sg").innerHTML = SK.map(function (s) {
  return (
    '<article class="glass sk tilt" data-c="' +
    s[0] +
    '">' +
    ic(s[2]) +
    "<h3>" +
    s[1] +
    "</h3><p>" +
    CATS[s[0]] +
    '</p><span class="bar"></span></article>'
  );
}).join("");
$("#fl").innerHTML =
  '<button class="on" data-f="*">All</button>' +
  Object.keys(CATS)
    .map(function (k) {
      return '<button data-f="' + k + '">' + CATS[k] + "</button>";
    })
    .join("");
$("#sv").innerHTML = SV.map(function (s) {
  return (
    '<article class="glass gb sv tilt">' +
    ic(s[1]) +
    "<h3>" +
    s[0] +
    "</h3><p>" +
    s[2] +
    "</p></article>"
  );
}).join("");
$("#pj").innerHTML = PJ.map(function (p) {
  var l =
    (p[5]
      ? '<a class="btn s" href="' +
        p[5] +
        '" target="_blank" rel="noopener">Live Demo</a>'
      : "") +
    (p[6]
      ? '<a class="btn s" href="' +
        p[6] +
        '" target="_blank" rel="noopener">GitHub</a>'
      : "");
  return (
    '<article class="glass pj tilt" style="grid-column:span ' +
    p[7] +
    ";grid-row:span " +
    p[8] +
    '"><div class="vis" style="background:' +
    p[4] +
    '">' +
    ic(p[1]) +
    '</div><div class="tx"><h3>' +
    p[0] +
    "</h3><p>" +
    p[2] +
    '</p><div class="tags">' +
    p[3]
      .map(function (t) {
        return '<span class="tag">' + t + "</span>";
      })
      .join("") +
    "</div>" +
    (l ? '<div class="lk">' + l + "</div>" : "") +
    "</div></article>"
  );
}).join("");
$("#mq").innerHTML = Array(6).join(
  "<span>Code.</span><span>Design.</span><span>Build.</span><span>Improve.</span>",
);
$$("[data-k]").forEach(function (a) {
  if (C[a.dataset.k]) a.href = C[a.dataset.k];
  else a.hidden = true;
});
if (C.photo) {
  var im = new Image();
  im.alt = "Shivani Singh";
  im.onload = function () {
    $(".pf .in").innerHTML = "";
    $(".pf .in").appendChild(im);
  };
  im.onerror = function () {
    /* Keep the SS initials visible if the photo file is missing. */
    im.remove();
  };
  im.src = C.photo;
}
if (C.resume) {
  var r = $("#resume");
  r.href = C.resume;
  r.setAttribute("download", "");
}
if (window.lucide) lucide.createIcons();
/* heading words */
var h = $("#h1"),
  txt = h.textContent;
h.innerHTML = txt
  .split(" ")
  .map(function (w) {
    return '<span class="w"><span>' + w + "</span></span>";
  })
  .join(" ");
/* role cycle */
var roles = [
    "Aspiring Software Engineer",
    "Python & Django Developer",
    "Full-Stack Web Developer",
  ],
  ri = 0,
  rl = $("#role");
function typeRole() {
  var t = roles[ri % 3],
    i = 0;
  rl.textContent = "";
  (function s() {
    rl.textContent = t.slice(0, i++);
    if (i <= t.length) setTimeout(s, 60);
    else {
      ri++;
      setTimeout(function () {
        rl.textContent = "";
        typeRole();
      }, 1800);
    }
  })();
}
if (R) rl.textContent = roles.join(" | ");
else typeRole();
/* nav */
var nav = $("#nav"),
  mb = $("#mb"),
  lk = $("#links");
mb.onclick = function () {
  var o = lk.classList.toggle("open");
  mb.setAttribute("aria-expanded", o);
  mb.setAttribute("aria-label", o ? "Close menu" : "Open menu");
};
$$("#links a").forEach(function (a) {
  a.addEventListener("click", function () {
    lk.classList.remove("open");
    mb.setAttribute("aria-expanded", "false");
  });
});
addEventListener(
  "scroll",
  function () {
    nav.classList.toggle("sc", scrollY > 30);
    var m = document.documentElement.scrollHeight - innerHeight;
    $("#prog").style.transform = "scaleX(" + (m > 0 ? scrollY / m : 0) + ")";
  },
  { passive: true },
);
$$("section[id]").forEach(function (s) {
  new IntersectionObserver(
    function (e) {
      if (e[0].isIntersecting)
        $$("#links a").forEach(function (a) {
          a.classList.toggle("on", a.getAttribute("href") == "#" + s.id);
        });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  ).observe(s);
});
/* skill filters */
$("#fl").onclick = function (e) {
  var b = e.target.closest("button");
  if (!b) return;
  $$("#fl button").forEach(function (x) {
    x.classList.toggle("on", x == b);
  });
  $$(".sk").forEach(function (c) {
    c.hidden = b.dataset.f != "*" && c.dataset.c != b.dataset.f;
  });
  if (G && !R)
    G.from($$(".sk:not([hidden])"), {
      y: 24,
      opacity: 0,
      scale: 0.94,
      duration: 0.5,
      stagger: 0.04,
      ease: "power3.out",
      clearProps: "transform,opacity",
    });
};
/* form */
var f = $("#form"),
  ok = $("#ok");
f.onsubmit = function (e) {
  e.preventDefault();
  var d = new FormData(f);
  location.href =
    "mailto:" +
    C.email +
    "?subject=" +
    encodeURIComponent(d.get("subject")) +
    "&body=" +
    encodeURIComponent(
      d.get("message") + "\n\n— " + d.get("name") + " (" + d.get("email") + ")",
    );
  f.style.display = "none";
  ok.classList.add("show");
};
$("#again").onclick = function () {
  f.reset();
  f.style.display = "";
  ok.classList.remove("show");
};
/* glass light + particles + trails */
document.addEventListener(
  "pointermove",
  function (e) {
    var g = e.target.closest && e.target.closest(".glass");
    if (g) {
      var b = g.getBoundingClientRect();
      g.style.setProperty("--mx", e.clientX - b.left + "px");
      g.style.setProperty("--my", e.clientY - b.top + "px");
    }
  },
  { passive: true },
);
(function () {
  var c = $("#bg"),
    x = c.getContext("2d"),
    W,
    H,
    P = [];
  function rs() {
    W = c.width = innerWidth;
    H = c.height = innerHeight;
  }
  rs();
  addEventListener("resize", rs);
  var n = innerWidth < 700 ? 36 : 80;
  for (var i = 0; i < n; i++)
    P.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.6 + 0.3,
      v: Math.random() * 0.25 + 0.05,
      c: ["#9b6cff", "#eee9ff", "#c084fc"][i % 3],
      p: Math.random() * 6,
    });
  function d(t) {
    x.clearRect(0, 0, W, H);
    P.forEach(function (p) {
      p.y -= p.v;
      if (p.y < -5) {
        p.y = H + 5;
        p.x = Math.random() * W;
      }
      x.globalAlpha = 0.25 + 0.5 * Math.abs(Math.sin(t / 1500 + p.p));
      x.fillStyle = p.c;
      x.beginPath();
      x.arc(p.x, p.y, p.r, 0, 6.3);
      x.fill();
    });
    if (!R) requestAnimationFrame(d);
  }
  requestAnimationFrame(d);
  if (!R)
    for (var j = 0; j < 5; j++) {
      var t = document.createElement("div");
      t.className = "trail";
      t.style.left = Math.random() * 100 + "%";
      t.style.animationDuration = 5 + Math.random() * 5 + "s";
      t.style.animationDelay = -Math.random() * 8 + "s";
      document.body.appendChild(t);
    }
})();
/* motion */
function intro() {
  var l = $("#load");
  if (R || !G) {
    l.remove();
    return;
  }
  G.timeline()
    .to("#load", {
      yPercent: -100,
      duration: 0.8,
      delay: 1.2,
      ease: "power4.inOut",
      onComplete: function () {
        l.remove();
      },
    })
    .from(
      ".w>span",
      { yPercent: 115, duration: 0.9, stagger: 0.07, ease: "power4.out" },
      "-=.35",
    )
    .from(
      ".hero .pill,.hero p,.role,.hero .row>*",
      {
        y: 24,
        opacity: 0,
        stagger: 0.06,
        duration: 0.7,
        clearProps: "all",
      },
      "-=.6",
    )
    .from(
      ".pf",
      { scale: 0.8, opacity: 0, duration: 1, ease: "power3.out" },
      "-=1",
    );
}
if (G && window.ScrollTrigger && !R) {
  G.registerPlugin(ScrollTrigger);
  $$("[data-r]").forEach(function (e) {
    G.from(e, {
      y: 46,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: e, start: "top 88%", once: true },
    });
  });
  $$("[data-s]").forEach(function (p) {
    G.from(p.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: p, start: "top 86%", once: true },
      clearProps: "opacity,transform",
    });
  });
  $$("[data-n]").forEach(function (e) {
    var o = { v: 0 },
      n = +e.dataset.n;
    ScrollTrigger.create({
      trigger: e,
      start: "top 92%",
      once: true,
      onEnter: function () {
        G.to(o, {
          v: n,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: function () {
            e.textContent = Math.round(o.v);
          },
        });
      },
    });
  });
  G.to(".o1", {
    y: 300,
    scrollTrigger: { scrub: 1, start: 0, end: "max" },
  });
  G.to(".o2", {
    y: -260,
    scrollTrigger: { scrub: 1, start: 0, end: "max" },
  });
  G.to(".o3", {
    x: 200,
    y: -120,
    scrollTrigger: { scrub: 1, start: 0, end: "max" },
  });
  G.to(".mq div", {
    xPercent: -4,
    scrollTrigger: { trigger: ".mq", scrub: 1 },
  });
  /* desktop: cursor, magnetic, tilt */
  if (matchMedia("(hover:hover) and (pointer:fine)").matches) {
    var cur = $("#cur"),
      ring = $("#ring"),
      qx = G.quickTo(ring, "x", { duration: 0.35 }),
      qy = G.quickTo(ring, "y", { duration: 0.35 });
    addEventListener(
      "pointermove",
      function (e) {
        G.set(cur, { x: e.clientX, y: e.clientY });
        qx(e.clientX);
        qy(e.clientY);
      },
      { passive: true },
    );
    document.addEventListener("pointerover", function (e) {
      ring.classList.toggle(
        "big",
        !!e.target.closest("a,button,input,textarea"),
      );
    });
    $$(".mag").forEach(function (b) {
      b.addEventListener("pointermove", function (e) {
        var r = b.getBoundingClientRect();
        G.to(b, {
          x: (e.clientX - r.left - r.width / 2) * 0.3,
          y: (e.clientY - r.top - r.height / 2) * 0.3,
          duration: 0.3,
        });
      });
      b.addEventListener("pointerleave", function () {
        G.to(b, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,.4)" });
      });
    });
    $$(".tilt").forEach(function (c) {
      c.addEventListener("pointermove", function (e) {
        var r = c.getBoundingClientRect(),
          px = (e.clientX - r.left) / r.width - 0.5,
          py = (e.clientY - r.top) / r.height - 0.5;
        G.to(c, {
          rotateY: px * 10,
          rotateX: -py * 10,
          transformPerspective: 800,
          duration: 0.4,
        });
      });
      c.addEventListener("pointerleave", function () {
        G.to(c, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.7,
          ease: "power3.out",
        });
      });
    });
  }
} else {
  $$("[data-n]").forEach(function (e) {
    e.textContent = e.dataset.n;
  });
  document.body.classList.remove("cc");
}
if (!matchMedia("(hover:hover) and (pointer:fine)").matches)
  document.body.classList.remove("cc");
intro();
