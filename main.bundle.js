/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./js/mobile-nav.js


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var mobileNavScript = /*#__PURE__*/function () {
  function mobileNavScript() {
    _classCallCheck(this, mobileNavScript);
    this.refs = {
      navBtn: document.querySelector(".mobile-nav-btn"),
      nav: document.querySelector(".mobile-nav"),
      menuIcon: document.querySelector(".nav-icon"),
      fade: document.querySelector(".mobile-nav-fade")
    };
  }
  return _createClass(mobileNavScript, [{
    key: "toggleMobileNav",
    value: function toggleMobileNav() {
      this.refs.nav.classList.toggle("mobile-nav--open");
      this.refs.fade.classList.toggle("mobile-nav-fade--open");
      this.refs.menuIcon.classList.toggle("nav-icon--active");
      document.body.classList.toggle("no-scroll");
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.refs.navBtn.addEventListener("click", this.toggleMobileNav.bind(this));
      this.refs.fade.addEventListener("click", this.toggleMobileNav.bind(this));
    }
  }]);
}();
;// CONCATENATED MODULE: ./js/index.js




// Importing an event handler for mobile devices



// Initializing the event handler for mobile devices

var mobileNav = new mobileNavScript();

// Countdown Timer

function initializeCountdown(endDate, elementId) {
  var prefixText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var element = document.getElementById(elementId);
  var headerTextElement = document.getElementById("countdown-header-text");
  var introTextElement = document.getElementById("intro__header");
  if (!element) {
    console.warn("Element with ID ".concat(elementId, " not found"));
    return;
  }
  var updateCountdown = function updateCountdown() {
    var now = new Date().getTime();
    var distance = endDate - now;
    if (distance < 0) {
      clearInterval(countdownInterval);
      element.innerHTML = "Welcome to CryptoGetExpo";
      element.style.fontFamily = "var(--font-press-start)";
      headerTextElement.style.display = "none";
      introTextElement.style.display = "none";
      return;
    }
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    element.innerHTML = "".concat(prefixText).concat(days, "d ").concat(hours, "h ").concat(minutes, "m ").concat(seconds, "s");
  };
  updateCountdown();
  var countdownInterval = setInterval(updateCountdown, 1000);
}
var eventDate = new Date("July 15, 2024 17:30:00").getTime();
initializeCountdown(eventDate, "intro-countdown");
initializeCountdown(eventDate, "header-countdown", "Starts in: ");
initializeCountdown(eventDate, "main-countdown");
// Intro Animation

document.getElementById("get-button").addEventListener("click", function () {
  document.getElementById("intro-screen").classList.add("disappear");
  setTimeout(function () {
    document.getElementById("intro-screen").style.display = "none";
  }, 2000);
});
mobileNav.bindEvents();

// Speakers Section

var speakers = [{
  name: "Russell Armand",
  company: "Ledger Enterprise",
  logo: "img/logo/ledger_enterprise_logo.svg"
}, {
  name: "Danny Winn",
  company: "CoinMENA",
  logo: "img/logo/coinmena_logo.png"
}, {
  name: "Ilyas Vali",
  company: "Bitget",
  logo: "img/logo/bitget_logo.png"
}, {
  name: "Lex Sokolin",
  company: "Binance",
  logo: "img/logo/binance_logo.png"
}, {
  name: "Pieter Vanhove",
  company: "Fireblocks",
  logo: "img/logo/fireblocks_logo.svg"
}, {
  name: "Adrian Zdunczyk",
  company: "OneFootball Labs",
  logo: "img/logo/onefootball_logo.png"
}, {
  name: "Daniel Antcliff",
  company: "Lisk",
  logo: "img/logo/lisk_logo.png"
}, {
  name: "Delphine Forma",
  company: "Dubai International Financial Centre Authority",
  logo: "img/logo/difc_logo.png"
}, {
  name: "Fred Zhou",
  company: "Alserkal Group",
  logo: "img/logo/alserkal_group_logo.png"
}, {
  name: "Lennix Lai",
  company: "OKX",
  logo: "img/logo/okx_logo.png"
}, {
  name: "Victoria Scholar",
  company: "Ripple",
  logo: "img/logo/ripple_logo.png"
}, {
  name: "Stephen Lindsay",
  company: "Vechain",
  logo: "img/logo/vechain_logo.svg"
}];
var speakersGrid = document.querySelector(".speakers-grid");
speakers.forEach(function (speaker) {
  var speakerDiv = document.createElement("div");
  speakerDiv.classList.add("speaker");
  speakerDiv.innerHTML = "\n    <img src=\"img/speakers/".concat(speaker.name.replace(" ", "_").toLowerCase(), ".jpg\" alt=\"").concat(speaker.name, "\">\n    <div class=\"speaker-content\">\n      <p>").concat(speaker.name, " - ").concat(speaker.company, "</p>\n      <img src=\"").concat(speaker.logo, "\" alt=\"").concat(speaker.company, " Logo\" class=\"company-logo\">\n    </div>\n  ");
  speakersGrid.appendChild(speakerDiv);
});

// Sponsors Section

var sponsors = [{
  name: "a16z",
  url: "https://a16zcrypto.com/"
}, {
  name: "casper",
  url: "https://casper.network/"
}, {
  name: "iohk",
  url: "https://iohk.io/"
}, {
  name: "jpmorgan",
  url: "https://www.jpmorganchase.com/"
}, {
  name: "pqshield",
  url: "https://pqshield.com/"
}, {
  name: "ibm",
  url: "https://www.ibm.com/"
}, {
  name: "nttresearch",
  url: "https://ntt-research.com/"
}, {
  name: "hyperledger",
  url: "https://www.hyperledger.org/"
}];
var sponsorsGrid = document.querySelector(".sponsors-grid");
sponsors.forEach(function (sponsor) {
  var sponsorDiv = document.createElement("div");
  sponsorDiv.classList.add("sponsor");
  sponsorDiv.innerHTML = "\n    <div class=\"sponsor-inner\">\n      <div class=\"sponsor-front\">\n        <img src=\"img/sponsors/".concat(sponsor.name, ".png\" alt=\"").concat(sponsor.name, "\">\n      </div>\n      <div class=\"sponsor-back\">\n        <p>").concat(sponsor.name, "</p>\n        <a href=\"").concat(sponsor.url, "\" target=\"_blank\">Visit website</a>\n      </div>\n    </div>\n  ");
  sponsorsGrid.appendChild(sponsorDiv);
});
document.getElementById("home-link").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var targetId = this.getAttribute("href").substring(1);
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
      var headerHeight = document.querySelector(".bottom-bar").offsetHeight;
      var elementPosition = targetElement.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: window.scrollY + offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

// Lightbox functionality

var programItems = document.querySelectorAll(".program-list__item");
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");
var lightboxTitle = document.getElementById("lightbox-title");
var lightboxTopic = document.getElementById("lightbox-topic");
var lightboxTime = document.getElementById("lightbox-time");
var lightboxLogo = document.getElementById("lightbox-logo");
var speakerDetails = {
  fred_zhou: {
    img: "img/speakers/fred_zhou.jpg",
    speaker: "Fred Zhou",
    topic: "WHAT WEB 3.0 MEANS FOR ENTERPRISES",
    time: "10:00 AM - 10:30 AM",
    companyLogo: "img/logo/alserkal_group_logo.png"
  },
  adrian_zdunczyk: {
    img: "img/speakers/adrian_zdunczyk.jpg",
    speaker: "Adrian Zduńczyk",
    topic: "VALUE CREATION IN THE METAVERSE",
    time: "10:30 AM - 11:00 AM",
    companyLogo: "img/logo/onefootball_logo.png"
  },
  victoria_scholar: {
    img: "img/speakers/victoria_scholar.jpg",
    speaker: "Victoria Scholar",
    topic: "THE ROLE OF STABLECOINS IN A DECENTRALIZED ECOSYSTEM",
    time: "11:00 AM - 11:30 AM",
    companyLogo: "img/logo/ripple_logo.png"
  },
  stephen_lindsay: {
    img: "img/speakers/stephen_lindsay.jpg",
    speaker: "Stephen Lindsay",
    topic: "DAOS: NEW BREED OF INTERNET-NATIVE ORGANIZATIONS",
    time: "11:30 AM - 12:00 PM",
    companyLogo: "img/logo/vechain_logo.svg"
  },
  daniel_antcliff: {
    img: "img/speakers/daniel_antcliff.jpg",
    speaker: "Daniel Antcliff",
    topic: "MAXIMIZING ESG IMPACT WITH BLOCKCHAIN",
    time: "12:00 PM - 12:30 PM",
    companyLogo: "img/logo/lisk_logo.png"
  },
  ilyas_vali: {
    img: "img/speakers/ilyas_vali.jpg",
    speaker: "Ilyas Vali",
    topic: "BRIDGING DEFI AND CEFI",
    time: "12:30 PM - 13:00 PM",
    companyLogo: "img/logo/bitget_logo.png"
  },
  russell_armand: {
    img: "img/speakers/russell_armand.jpg",
    speaker: "Russell Armand",
    topic: "WEB 3 GAMING: THE NEW FRONTIER?",
    time: "13:00 PM - 13:30 PM",
    companyLogo: "img/logo/ledger_enterprise_logo.svg"
  },
  danny_winn: {
    img: "img/speakers/danny_winn.jpg",
    speaker: "Danny Winn",
    topic: "DECRYPTING THE REGULATORY LANDSCAPE OF VIRTUAL ASSETS",
    time: "13:30 PM - 14:00 PM",
    companyLogo: "img/logo/coinmena_logo.png"
  },
  lex_sokolin: {
    img: "img/speakers/lex_sokolin.jpg",
    speaker: "Lex Sokolin",
    topic: "DECRYPTING THE REGULATORY LANDSCAPE OF VIRTUAL ASSETS",
    time: "14:30 PM - 15:00 PM",
    companyLogo: "img/logo/binance_logo.png"
  },
  pieter_vanhove: {
    img: "img/speakers/pieter_vanhove.jpg",
    speaker: "Pieter Vanhove",
    topic: "WEB 3: THE FUTURE IS HERE AND NOW",
    time: "15:00 PM - 15:30 PM",
    companyLogo: "img/logo/fireblocks_logo.svg"
  },
  lennix_lai: {
    img: "img/speakers/lennix_lai.jpg",
    speaker: "Lennix Lai",
    topic: "NFT MARKET OVERVIEW: TRENDS & OPPORTUNITIES",
    time: "15:30 PM - 16:00 PM",
    companyLogo: "img/logo/okx_logo.png"
  },
  delphine_forma: {
    img: "img/speakers/delphine_forma.jpg",
    speaker: "Delphine Forma",
    topic: "INTEROPERABILITY - CHALLENGES AND OPPORTUNITIES",
    time: "16:30 PM - 17:00 PM",
    companyLogo: "img/logo/difc_logo.png"
  }
};
programItems.forEach(function (item) {
  item.addEventListener("click", function () {
    var speakerId = this.dataset.speaker;
    var details = speakerDetails[speakerId];
    lightboxImg.src = details.img || "#";
    lightboxTitle.innerText = "Speaker: ".concat(details.speaker);
    lightboxTopic.innerText = "Topic: ".concat(details.topic);
    lightboxTime.innerText = "Time: ".concat(details.time);
    lightboxLogo.src = details.companyLogo || "#";
    lightbox.classList.add("show");
    setTimeout(function () {
      lightbox.querySelector(".lightbox-content").classList.add("show");
    }, 50);
  });
});
window.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    lightbox.classList.remove("show");
    lightbox.querySelector(".lightbox-content").classList.remove("show");
  }
});

// Function to handle intersection observer

var observeElements = function observeElements(elements, observerOptions) {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  elements.forEach(function (element) {
    observer.observe(element);
  });
};

// Initialize intersection observer for sections

var sections = document.querySelectorAll(".section-animate");
observeElements(sections, {
  threshold: 0.1
});

// Initialize intersection observer for program list items

var programListItems = document.querySelectorAll(".program-list__item");
observeElements(programListItems, {
  threshold: 0.1
});

// Initialize intersection observer for speaker and sponsor cards

var speakerCards = document.querySelectorAll(".speaker");
var sponsorCards = document.querySelectorAll(".sponsor");
observeElements(speakerCards, {
  threshold: 0.1
});
observeElements(sponsorCards, {
  threshold: 0.1
});

// Scrolls to top on refresh page

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map