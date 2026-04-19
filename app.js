(function () {
  "use strict";

  const STORAGE = {
    lang: "counsel_lang_v1",
    theme: "counsel_theme_v1",
    journal: "counsel_journal_v1",
    checklist: "counsel_checklist_v1",
    moodLog: "counsel_mood_log_v1",
  };

  const STRINGS = {
    en: {
      navHome: "Home",
      navMotivation: "Motivation",
      navRelief: "Relief",
      navExpress: "Express",
      navStudy: "Study",
      navHelp: "Help",
      heroTitle: "You're Not Alone 💛",
      heroLead: "It's okay to feel stressed. You can take a break and breathe.",
      ctaStart: "Start Feeling Better",
      motivationHeading: "Motivation",
      motivationLine1: "Small steps every day lead to big success.",
      motivationLine2: "You are stronger than your stress.",
      quoteLabel: "Today's gentle reminder",
      quotes: [
        "Progress, not perfection.",
        "Rest is part of learning.",
        "You can try again tomorrow.",
        "One page at a time.",
        "Your effort matters.",
      ],
      reliefHeading: "Stress relief",
      tipBreath: "Take deep breaths",
      tipWater: "Drink water",
      tipBreak: "Take short breaks",
      tipTalk: "Talk to someone you trust",
      breathingHeading: "Breathing guide",
      breathingReduced: "Breathe slowly — in through your nose, out through your mouth.",
      breathingInhale: "Breathe in…",
      breathingHold: "Hold gently…",
      breathingExhale: "Breathe out slowly…",
      breathingStart: "Start",
      breathingStop: "Pause",
      expressHeading: "Talk / express",
      expressPrivacy: "Your words stay on this device only.",
      expressLabel: "Write what you're feeling",
      expressPlaceholder: "Write what you're feeling…",
      expressClear: "Clear",
      expressClearConfirm: "Clear everything you wrote? This cannot be undone.",
      moodPrompt: "How are you feeling right now?",
      moodThank: "Thank you for checking in. You're doing great.",
      moodAriaGood: "Good mood",
      moodAriaOkay: "Okay mood",
      moodAriaLow: "Low mood",
      studyHeading: "Study help",
      studyTip1: "Study in small time blocks",
      studyTip2: "Avoid distractions",
      studyTip3: "Make a simple plan",
      checklistHeading: "Daily checklist",
      checklistNewLabel: "New task",
      checklistPlaceholder: "Add a small task…",
      checklistAdd: "Add",
      checklistDelete: "Remove",
      checklistEmpty: "No tasks yet — add one small step.",
      emergencyHeading: "If you need support",
      emergencyBody:
        "If you feel overwhelmed, please talk to a trusted person like a parent, teacher, or friend.",
      footerNote: "Take care of yourself. Small rests count.",
      themeToggleLight: "Night calm 🌙",
      themeToggleDark: "Morning light ☀️",
      themeToggleAriaLight: "Switch to dark night calm theme",
      themeToggleAriaDark: "Switch to light theme",
      calmSoundOn: "Calm sound on",
      calmSoundOff: "Calm sound off",
      calmSoundAriaOn: "Turn off calm ambient sound",
      calmSoundAriaOff: "Turn on calm ambient sound",
    },
    ta: {
      navHome: "முகப்பு",
      navMotivation: "உற்சாகம்",
      navRelief: "நிம்மதி",
      navExpress: "பகிர்தல்",
      navStudy: "படிப்பு",
      navHelp: "உதவி",
      heroTitle: "நீங்கள் தனியாக இல்லை 💛",
      heroLead: "அழுத்தம் உணர்வது இயல்பு. நீங்கள் ஓய்வெடுத்து மூச்சு விடலாம்.",
      ctaStart: "இப்போது நல்ல உணர்வுக்கு",
      motivationHeading: "உற்சாகம்",
      motivationLine1: "ஒவ்வொரு நாளும் சிறு அடிகள் பெரிய வெற்றிக்கு வழி வகுக்கும்.",
      motivationLine2: "உங்கள் அழுத்தத்தை விட நீங்கள் வலிமையானவர்.",
      quoteLabel: "இன்றைய மென்மையான நினைவு",
      quotes: [
        "முன்னேற்றம் தான் முக்கியம், சிறப்பு அல்ல.",
        "ஓய்வு கற்றலின் ஒரு பகுதி.",
        "நாளை மீண்டும் முயலலாம்.",
        "ஒரு பக்கம் ஒரு நேரம்.",
        "உங்கள் முயற்சி முக்கியம்.",
      ],
      reliefHeading: "அழுத்தம் குறைத்தல்",
      tipBreath: "ஆழமாக மூச்சு விடுங்கள்",
      tipWater: "நீர் குடியுங்கள்",
      tipBreak: "குறுகிய இடைவெளி எடுங்கள்",
      tipTalk: "நம்பிக்கையான ஒருவருடன் பேசுங்கள்",
      breathingHeading: "மூச்சு வழிகாட்டி",
      breathingReduced: "மெதுவாக மூச்சு விடுங்கள் — மூக்கினால் உள்ளிழுத்து வாயினால் வெளியிடுங்கள்.",
      breathingInhale: "உள்ளிழுக்கவும்…",
      breathingHold: "சிறிது நிறுத்தவும்…",
      breathingExhale: "மெதுவாக வெளியிடவும்…",
      breathingStart: "தொடங்கு",
      breathingStop: "இடைநிறுத்து",
      expressHeading: "பேசுதல் / வெளிப்படுத்துதல்",
      expressPrivacy: "உங்கள் வார்த்தைகள் இந்த சாதனத்தில் மட்டுமே இருக்கும்.",
      expressLabel: "உங்கள் உணர்வை எழுதுங்கள்",
      expressPlaceholder: "நீங்கள் என்ன உணர்கிறீர்கள் என்று எழுதுங்கள்…",
      expressClear: "அழி",
      expressClearConfirm: "எழுதியதை அனைத்தும் அழிக்கவா? இதை மீண்டும் பெற முடியாது.",
      moodPrompt: "இப்போது எப்படி உணர்கிறீர்கள்?",
      moodThank: "பகிர்ந்ததற்கு நன்றி. நீங்கள் நன்றாக செய்கிறீர்கள்.",
      moodAriaGood: "நல்ல உணர்வு",
      moodAriaOkay: "சராசரி உணர்வு",
      moodAriaLow: "குறைந்த உணர்வு",
      studyHeading: "படிப்பு உதவி",
      studyTip1: "சிறிய நேரத் தொகுதிகளில் படியுங்கள்",
      studyTip2: "கவனச்சிதறல்களைத் தவிர்க்கவும்",
      studyTip3: "எளிய திட்டம் வகுங்கள்",
      checklistHeading: "தினசரி பட்டியல்",
      checklistNewLabel: "புதிய பணி",
      checklistPlaceholder: "ஒரு சிறிய பணியைச் சேர்க்கவும்…",
      checklistAdd: "சேர்",
      checklistDelete: "நீக்கு",
      checklistEmpty: "இன்னும் பணிகள் இல்லை — ஒரு சிறு அடியைச் சேர்க்கவும்.",
      emergencyHeading: "உதவி தேவைப்பட்டால்",
      emergencyBody:
        "நீங்கள் மிகுந்த அழுத்தத்தில் இருந்தால், பெற்றோர், ஆசிரியர் அல்லது நண்பர் போன்ற நம்பிக்கையான ஒருவரிடம் பேசுங்கள்.",
      footerNote: "உங்களைப் பாதுகாத்துக் கொள்ளுங்கள். சிறு ஓய்வுகளும் முக்கியம்.",
      themeToggleLight: "இரவு அமைதி 🌙",
      themeToggleDark: "பகல் ஒளி ☀️",
      themeToggleAriaLight: "இருண்ட இரவு அமைதி தீம் மாற்று",
      themeToggleAriaDark: "வெளிச்ச தீம் மாற்று",
      calmSoundOn: "மென்மையான ஒலி இயக்கம்",
      calmSoundOff: "மென்மையான ஒலி நிறுத்தம்",
      calmSoundAriaOn: "மென்மையான ஒலியை நிறுத்து",
      calmSoundAriaOff: "மென்மையான ஒலியை இயக்கு",
    },
  };

  let currentLang = localStorage.getItem(STORAGE.lang) || "en";
  if (currentLang !== "en" && currentLang !== "ta") currentLang = "en";

  const els = {
    quote: document.getElementById("quote-rotator"),
    langEn: document.getElementById("lang-en"),
    langTa: document.getElementById("lang-ta"),
    themeToggle: document.getElementById("theme-toggle"),
    journal: document.getElementById("journal"),
    journalClear: document.getElementById("journal-clear"),
    breathingCard: document.getElementById("breathing-card"),
    breathingStatic: document.getElementById("breathing-static"),
    breathingActive: document.getElementById("breathing-active"),
    breathingCircle: document.getElementById("breathing-circle"),
    breathingPhase: document.getElementById("breathing-phase"),
    breathingToggle: document.getElementById("breathing-toggle"),
    checklistForm: document.getElementById("checklist-form"),
    checklistNew: document.getElementById("checklist-new"),
    checklistUl: document.getElementById("checklist"),
    moodToast: document.getElementById("mood-toast"),
    globalToast: document.getElementById("global-toast"),
    calmSound: document.getElementById("calm-sound-toggle"),
  };

  let quoteIndex = 0;
  let quoteTimer = null;
  let breathingRunning = false;
  let breathingTimer = null;
  let audioCtx = null;
  let oscNode = null;
  let gainNode = null;
  let journalTimer = null;

  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function t(key) {
    const pack = STRINGS[currentLang];
    return pack[key] !== undefined ? pack[key] : STRINGS.en[key];
  }

  function applyLanguage(lang) {
    currentLang = lang === "ta" ? "ta" : "en";
    localStorage.setItem(STORAGE.lang, currentLang);
    document.documentElement.lang = currentLang === "ta" ? "ta" : "en";

    els.langEn.setAttribute("aria-pressed", currentLang === "en" ? "true" : "false");
    els.langTa.setAttribute("aria-pressed", currentLang === "ta" ? "true" : "false");

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (!key || key.startsWith("theme") || key.startsWith("calmSound")) return;
      const val = t(key);
      if (typeof val === "string") node.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.getAttribute("data-i18n-placeholder");
      if (key && typeof t(key) === "string") node.setAttribute("placeholder", t(key));
    });

    updateThemeButtonLabel();
    updateCalmSoundButtonLabel();

    document.querySelectorAll(".mood-btn").forEach((btn) => {
      const m = btn.getAttribute("data-mood");
      if (m === "good") btn.setAttribute("aria-label", t("moodAriaGood"));
      if (m === "okay") btn.setAttribute("aria-label", t("moodAriaOkay"));
      if (m === "low") btn.setAttribute("aria-label", t("moodAriaLow"));
    });

    if (els.breathingToggle && !breathingRunning) {
      els.breathingToggle.textContent = t("breathingStart");
    }

    startQuoteRotation();
    setupBreathingUI();
    loadChecklist();
  }

  function updateThemeButtonLabel() {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    els.themeToggle.textContent = dark ? t("themeToggleDark") : t("themeToggleLight");
    els.themeToggle.setAttribute(
      "aria-label",
      dark ? t("themeToggleAriaDark") : t("themeToggleAriaLight")
    );
    els.themeToggle.setAttribute("aria-pressed", dark ? "true" : "false");
  }

  function updateCalmSoundButtonLabel() {
    const on = els.calmSound.getAttribute("aria-pressed") === "true";
    els.calmSound.textContent = on ? t("calmSoundOn") : t("calmSoundOff");
    els.calmSound.setAttribute("aria-label", on ? t("calmSoundAriaOn") : t("calmSoundAriaOff"));
  }

  function getQuotes() {
    const pack = STRINGS[currentLang];
    return Array.isArray(pack.quotes) ? pack.quotes : STRINGS.en.quotes;
  }

  function setQuoteText(animate) {
    const quotes = getQuotes();
    if (!quotes.length || !els.quote) return;

    const show = () => {
      els.quote.textContent = quotes[quoteIndex % quotes.length];
      els.quote.classList.remove("is-fading");
    };

    if (animate && !prefersReducedMotion()) {
      els.quote.classList.add("is-fading");
      window.setTimeout(show, 220);
    } else {
      show();
    }
  }

  function startQuoteRotation() {
    if (quoteTimer) clearInterval(quoteTimer);
    const quotes = getQuotes();
    quoteIndex = 0;
    setQuoteText(false);
    quoteTimer = setInterval(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      setQuoteText(true);
    }, 10000);
  }

  function initTheme() {
    const saved = localStorage.getItem(STORAGE.theme);
    if (saved === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    updateThemeButtonLabel();
  }

  function toggleTheme() {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    if (dark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(STORAGE.theme, "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem(STORAGE.theme, "dark");
    }
    updateThemeButtonLabel();
  }

  function setupBreathingUI() {
    const reduced = prefersReducedMotion();
    if (reduced) {
      els.breathingStatic.hidden = false;
      els.breathingActive.hidden = true;
      stopBreathing();
      return;
    }
    els.breathingStatic.hidden = true;
    els.breathingActive.hidden = false;
    els.breathingPhase.textContent = "";
    els.breathingCircle.className = "breathing-circle";
  }

  function stopBreathing() {
    breathingRunning = false;
    if (breathingTimer) {
      clearTimeout(breathingTimer);
      breathingTimer = null;
    }
    els.breathingCircle.className = "breathing-circle";
    els.breathingPhase.textContent = "";
    els.breathingToggle.textContent = t("breathingStart");
  }

  function scheduleBreathingPhase(phase) {
    if (!breathingRunning) return;

    if (phase === "inhale") {
      els.breathingPhase.textContent = t("breathingInhale");
      els.breathingCircle.className = "breathing-circle phase-inhale";
      breathingTimer = setTimeout(() => scheduleBreathingPhase("hold"), 4000);
    } else if (phase === "hold") {
      els.breathingPhase.textContent = t("breathingHold");
      els.breathingCircle.className = "breathing-circle phase-hold";
      breathingTimer = setTimeout(() => scheduleBreathingPhase("exhale"), 4000);
    } else if (phase === "exhale") {
      els.breathingPhase.textContent = t("breathingExhale");
      els.breathingCircle.className = "breathing-circle phase-exhale";
      breathingTimer = setTimeout(() => scheduleBreathingPhase("inhale"), 6000);
    }
  }

  function startBreathing() {
    if (prefersReducedMotion()) return;
    breathingRunning = true;
    els.breathingToggle.textContent = t("breathingStop");
    scheduleBreathingPhase("inhale");
  }

  function toggleBreathing() {
    if (prefersReducedMotion()) return;
    if (breathingRunning) stopBreathing();
    else startBreathing();
  }

  function loadJournal() {
    try {
      const raw = localStorage.getItem(STORAGE.journal);
      if (raw) els.journal.value = raw;
    } catch (_) {}
  }

  function saveJournalDebounced() {
    if (journalTimer) clearTimeout(journalTimer);
    journalTimer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE.journal, els.journal.value);
      } catch (_) {}
    }, 400);
  }

  function clearJournal() {
    if (!confirm(t("expressClearConfirm"))) return;
    els.journal.value = "";
    try {
      localStorage.removeItem(STORAGE.journal);
    } catch (_) {}
  }

  function loadChecklist() {
    let items = [];
    try {
      const raw = localStorage.getItem(STORAGE.checklist);
      if (raw) items = JSON.parse(raw);
      if (!Array.isArray(items)) items = [];
    } catch (_) {
      items = [];
    }
    renderChecklist(items);
  }

  function saveChecklist(items) {
    try {
      localStorage.setItem(STORAGE.checklist, JSON.stringify(items));
    } catch (_) {}
  }

  function renderChecklist(items) {
    els.checklistUl.innerHTML = "";
    if (!items.length) {
      const li = document.createElement("li");
      li.className = "checklist-empty-msg";
      li.textContent = t("checklistEmpty");
      els.checklistUl.appendChild(li);
      return;
    }

    items.forEach((item, index) => {
      const li = document.createElement("li");
      const id = `task-${index}-${item.id || ""}`;
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.id = id;
      cb.checked = !!item.done;
      const label = document.createElement("label");
      label.htmlFor = id;
      label.textContent = item.text || "";
      if (item.done) label.classList.add("done");

      cb.addEventListener("change", () => {
        item.done = cb.checked;
        label.classList.toggle("done", item.done);
        saveChecklist(items);
      });

      const del = document.createElement("button");
      del.type = "button";
      del.className = "checklist-delete";
      del.textContent = t("checklistDelete");
      del.setAttribute("aria-label", t("checklistDelete"));
      del.addEventListener("click", () => {
        items.splice(index, 1);
        saveChecklist(items);
        renderChecklist(items);
      });

      li.appendChild(cb);
      li.appendChild(label);
      li.appendChild(del);
      els.checklistUl.appendChild(li);
    });
  }

  function addChecklistItem(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    let items = [];
    try {
      const raw = localStorage.getItem(STORAGE.checklist);
      if (raw) items = JSON.parse(raw);
      if (!Array.isArray(items)) items = [];
    } catch (_) {
      items = [];
    }
    items.push({ id: Date.now(), text: trimmed, done: false });
    saveChecklist(items);
    renderChecklist(items);
  }

  function logMood(mood) {
    let log = [];
    try {
      const raw = localStorage.getItem(STORAGE.moodLog);
      if (raw) log = JSON.parse(raw);
      if (!Array.isArray(log)) log = [];
    } catch (_) {
      log = [];
    }
    log.push({ mood, at: new Date().toISOString() });
    if (log.length > 50) log = log.slice(-50);
    try {
      localStorage.setItem(STORAGE.moodLog, JSON.stringify(log));
    } catch (_) {}

    els.moodToast.textContent = t("moodThank");
    els.moodToast.hidden = false;
    window.setTimeout(() => {
      els.moodToast.hidden = true;
    }, 3500);
  }

  function startCalmSound() {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }
      if (oscNode) {
        oscNode.stop();
        oscNode.disconnect();
      }
      oscNode = audioCtx.createOscillator();
      gainNode = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();
      oscNode.type = "sine";
      oscNode.frequency.value = 174;
      filter.type = "lowpass";
      filter.frequency.value = 420;
      gainNode.gain.value = 0.04;
      oscNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscNode.start();
    } catch (e) {
      showGlobalToast("Sound could not start. Try again.");
    }
  }

  function stopCalmSound() {
    try {
      if (oscNode) {
        oscNode.stop();
        oscNode.disconnect();
        oscNode = null;
      }
    } catch (_) {}
  }

  function showGlobalToast(msg) {
    els.globalToast.textContent = msg;
    els.globalToast.hidden = false;
    window.setTimeout(() => {
      els.globalToast.hidden = true;
    }, 2800);
  }

  function toggleCalmSound() {
    const on = els.calmSound.getAttribute("aria-pressed") === "true";
    if (on) {
      stopCalmSound();
      els.calmSound.setAttribute("aria-pressed", "false");
    } else {
      startCalmSound();
      els.calmSound.setAttribute("aria-pressed", "true");
    }
    updateCalmSoundButtonLabel();
  }

  function initFadeSections() {
    const sections = document.querySelectorAll(".fade-section");
    if (prefersReducedMotion()) {
      sections.forEach((s) => s.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    sections.forEach((s) => io.observe(s));
  }

  function init() {
    initTheme();
    applyLanguage(currentLang);
    loadJournal();

    els.langEn.addEventListener("click", () => applyLanguage("en"));
    els.langTa.addEventListener("click", () => applyLanguage("ta"));
    els.themeToggle.addEventListener("click", toggleTheme);

    els.journal.addEventListener("input", saveJournalDebounced);
    els.journalClear.addEventListener("click", clearJournal);

    els.breathingToggle.addEventListener("click", toggleBreathing);

    els.checklistForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addChecklistItem(els.checklistNew.value);
      els.checklistNew.value = "";
    });

    document.querySelectorAll(".mood-btn").forEach((btn) => {
      btn.addEventListener("click", () => logMood(btn.getAttribute("data-mood")));
    });

    els.calmSound.addEventListener("click", toggleCalmSound);

    window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", () => {
      setupBreathingUI();
      if (prefersReducedMotion() && breathingRunning) stopBreathing();
    });

    initFadeSections();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
