(function () {
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };
  // Escape text from data.js before inserting as HTML
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var safeUrl = function (u) { return /^https?:\/\//i.test(u) ? u : ""; };

  /* ---------- Basics ---------- */
  document.title = S.name + " · Dancer";
  $("brandName").textContent = S.name;
  $("heroName").textContent = S.name;
  $("heroTagline").textContent = S.tagline;
  $("heroStyle").textContent = S.style;
  $("heroIntro").textContent = S.intro;
  $("footName").textContent = S.name;
  $("year").textContent = new Date().getFullYear();

  // Hero image (only used if the file actually loads)
  var probe = new Image();
  probe.onload = function () {
    $("heroBg").style.backgroundImage = "url('" + S.heroImage + "')";
    $("heroBg").classList.add("has-img");
  };
  probe.src = S.heroImage;

  /* ---------- About ---------- */
  var ap = $("aboutPhoto");
  ap.src = S.about.photo;
  ap.alt = "Portrait of " + S.name;
  ap.onerror = function () { ap.removeAttribute("src"); };
  $("aboutText").innerHTML = S.about.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("stats").innerHTML = S.about.highlights.map(function (h) {
    return "<li><strong>" + esc(h.value) + "</strong><span>" + esc(h.label) + "</span></li>";
  }).join("");

  /* ---------- Portfolio timeline ---------- */
  $("timeline").innerHTML = S.portfolio.map(function (t) {
    return '<li class="reveal"><div class="yr">' + esc(t.year) + "</div><h4>" + esc(t.title) +
           "</h4><p>" + esc(t.detail) + "</p></li>";
  }).join("");

  /* ---------- School ---------- */
  var sc = S.school;
  if (!sc || sc.enabled === false) {
    $("school").remove();
    $("navSchool").remove();
  } else {
    $("schoolName").textContent = sc.name;
    $("schoolTagline").textContent = sc.tagline;
    $("schoolDesc").textContent = sc.description;
    var sp = $("schoolPhoto");
    sp.src = sc.photo;
    sp.alt = sc.name;
    sp.onerror = function () { sp.removeAttribute("src"); };
    $("schoolFacts").innerHTML = (sc.facts || []).map(function (f) {
      return "<li><strong>" + esc(f.value) + "</strong><span>" + esc(f.label) + "</span></li>";
    }).join("");
    $("classGrid").innerHTML = (sc.classes || []).map(function (c) {
      return '<article class="class-card reveal"><span class="mode">' + esc(c.mode) + "</span><h5>" + esc(c.name) +
        '</h5><p class="level">' + esc(c.level) + "</p><p>" + esc(c.description) +
        '</p><p class="when">' + esc(c.schedule) + "</p></article>";
    }).join("");

    var enrol = safeUrl(sc.enrolLink);
    if (enrol) {
      $("enrolBtn").href = enrol;
      $("enrolBtn").target = "_blank";
      $("enrolBtn").rel = "noopener";
      $("enrolBtn").textContent = "Enrol now";
    } else {
      // Scroll to the contact form and pre-fill a helpful message
      $("enrolBtn").addEventListener("click", function () {
        var m = document.querySelector("#contactForm textarea");
        if (m && !m.value) m.value = "Hello, I would like to enquire about classes at " + sc.name + ".";
      });
    }
    var site = safeUrl(sc.website);
    if (site) { $("schoolSite").href = site; $("schoolSite").hidden = false; }
  }

  /* ---------- Testimonials ---------- */
  $("quotes").innerHTML = S.testimonials.map(function (q) {
    return '<blockquote class="reveal"><p>“' + esc(q.quote) + "”</p><cite>" + esc(q.by) + "</cite></blockquote>";
  }).join("");

  /* ---------- Gallery + lightbox ---------- */
  var grid = $("galleryGrid");
  S.gallery.forEach(function (src, i) {
    var tile = document.createElement("div");
    tile.className = "tile reveal";
    var img = new Image();
    img.loading = "lazy";
    img.alt = "Gallery photo " + (i + 1);
    img.onerror = function () { img.style.display = "none"; };
    img.src = src;
    tile.appendChild(img);
    tile.addEventListener("click", function () {
      if (img.style.display === "none") return;
      $("lbImg").src = src;
      $("lightbox").hidden = false;
    });
    grid.appendChild(tile);
  });
  var closeLb = function () { $("lightbox").hidden = true; };
  $("lbClose").addEventListener("click", closeLb);
  $("lightbox").addEventListener("click", function (e) { if (e.target.id === "lightbox") closeLb(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLb(); });

  /* ---------- Videos (YouTube loads only on click) ---------- */
  $("videoGrid").innerHTML = S.videos.map(function (v) {
    var id = encodeURIComponent(v.id);
    return '<div class="video reveal" data-id="' + id + '"><div class="frame">' +
      '<img loading="lazy" src="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg" alt="' + esc(v.title) + '" />' +
      '<div class="play">▶</div></div><h4>' + esc(v.title) + "</h4></div>";
  }).join("");
  $("videoGrid").addEventListener("click", function (e) {
    var card = e.target.closest(".video");
    if (!card) return;
    var frame = card.querySelector(".frame");
    if (frame.querySelector("iframe")) return;
    frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + card.dataset.id +
      '?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="Video"></iframe>';
  });

  /* ---------- Events: auto-split upcoming vs past ---------- */
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var withDate = S.events.map(function (e) { e._d = new Date(e.date + "T00:00:00"); return e; });
  var upcoming = withDate.filter(function (e) { return e._d >= today; }).sort(function (a, b) { return a._d - b._d; });
  var past = withDate.filter(function (e) { return e._d < today; }).sort(function (a, b) { return b._d - a._d; });
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var eventHtml = function (e) {
    var link = safeUrl(e.link);
    return '<div class="event reveal"><div class="date"><b>' + e._d.getDate() + "</b><span>" +
      months[e._d.getMonth()] + " " + e._d.getFullYear() + "</span></div><div><h5>" + esc(e.title) +
      '</h5><div class="venue">' + esc(e.venue) + "</div><p>" + esc(e.description) + "</p>" +
      (link ? '<a href="' + link + '" target="_blank" rel="noopener">Details</a>' : "") + "</div></div>";
  };
  var group = function (title, list, emptyMsg) {
    return '<div class="events-group"><h4>' + title + "</h4>" +
      (list.length ? list.map(eventHtml).join("") : '<p class="empty">' + emptyMsg + "</p>") + "</div>";
  };
  $("eventsList").innerHTML = group("Upcoming", upcoming, "New dates coming soon.") + group("Past", past, "No past events listed yet.");

  /* ---------- Contact ---------- */
  var social = S.contact.social;
  $("social").innerHTML = Object.keys(social).filter(function (k) { return safeUrl(social[k]); }).map(function (k) {
    return '<li><a href="' + safeUrl(social[k]) + '" target="_blank" rel="noopener">' + esc(k) + "</a></li>";
  }).join("");

  $("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, note = $("formNote");
    var name = f.name.value.trim(), email = f.email.value.trim(), msg = f.message.value.trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !msg) { note.textContent = "Please fill in all fields with a valid email."; return; }

    if (S.contact.formEndpoint) {
      note.textContent = "Sending…";
      fetch(S.contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: name, email: email, message: msg })
      }).then(function (r) {
        if (!r.ok) throw new Error();
        note.textContent = "Thank you! Your message has been sent.";
        f.reset();
      }).catch(function () { note.textContent = "Could not send. Please email " + S.contact.email + " directly."; });
    } else {
      var body = msg + "\n\n— " + name + " (" + email + ")";
      window.location.href = "mailto:" + S.contact.email +
        "?subject=" + encodeURIComponent("Enquiry from website") + "&body=" + encodeURIComponent(body);
      note.textContent = "Opening your email app…";
    }
  });

  /* ---------- Nav behaviour ---------- */
  var nav = $("nav"), menu = $("menu"), btn = $("menuBtn");
  var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 40); };
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  btn.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") { menu.classList.remove("open"); btn.setAttribute("aria-expanded", false); } });

  /* ---------- Scroll reveal + active link ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  var links = [].slice.call(menu.querySelectorAll("a"));
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });
})();
