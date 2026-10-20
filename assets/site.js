/* =====================================================================
   SCRIPT COMMUN À TOUTES LES PAGES
   • 1. CONFIGURATION : nom de la marque, coordonnées, envoi des formulaires
   • 2. TRADUCTIONS ANGLAISES : une clé par attribut data-i18n="…" des pages
   Le reste fait fonctionner le site (langue, menu mobile, formulaires, cadran…).
   ===================================================================== */
(function () {
'use strict';

/* =====================================================================
   1. CONFIGURATION — modifiez ici le nom, les coordonnées et l'envoi des formulaires
   ===================================================================== */
const CONFIG = {
  // Nom de la marque : mis à jour partout (en-tête, cadran, pied de page, textes, titres d'onglet).
  brand: 'WATCH',

  // Coordonnées (fictives pour l'instant). Écrivez les numéros au format français « 06 00 00 00 00 ».
  phone: '06 00 00 00 00',
  whatsapp: '33600000000',              // numéro WhatsApp au format international, sans « + » ni espaces
  email: 'contact@watch-exemple.fr',
  instagramUrl: 'https://www.instagram.com/watch.exemple/',
  instagramHandle: '@watch.exemple',

  // Lignes directes des associés (page À propos)
  partner1Phone: '06 00 00 00 01',
  partner2Phone: '06 00 00 00 02',

  /* FORMULAIRES — RELIER À UN SERVICE D'ENVOI (ex. Formspree)
     1. Créez un compte sur https://formspree.io et un formulaire (un par type de demande, ou un seul pour les trois).
     2. Collez l'adresse fournie, par ex. 'https://formspree.io/f/abcdwxyz', ci-dessous.
     Tant qu'une adresse est vide :
       • fichier ouvert sur votre ordinateur → le message de confirmation s'affiche pour tester, rien n'est envoyé ;
       • site en ligne → le visiteur est invité à appeler ou à écrire sur WhatsApp. */
  forms: {
    sell:    '',   // « Vendre ma montre »
    find:    '',   // « Trouver une montre »
    contact: ''    // « Contact »
  },

  // Envoi de photos dans « Vendre ma montre ». Chez Formspree, les fichiers joints nécessitent une offre payante.
  // Passez à false pour remplacer le champ par une invitation à envoyer les photos sur WhatsApp.
  allowPhotoUpload: true,
  maxPhotos: 10,
  maxPhotoMB: 25,

  defaultLang: 'fr'
};

/* =====================================================================
   2. TRADUCTIONS ANGLAISES
   Le français est écrit directement dans le HTML. Chaque clé ci-dessous correspond
   à un attribut data-i18n="…" (ou data-i18n-attr) du HTML.
   {brand} est remplacé automatiquement par le nom de la marque.
   ===================================================================== */
const EN = {
  // Accessibilité
  'a11y.skip': `Skip to content`,
  'a11y.mainNav': `Main navigation`,
  'a11y.lang': `Language`,
  'a11y.menuOpen': `Open menu`,
  'a11y.menuClose': `Close menu`,
  'a11y.dial': `Watch dial showing the current time`,
  'a11y.paths': `Journeys`,
  'a11y.wa': `Message us on WhatsApp`,

  // Navigation
  'nav.home': `Home`,
  'nav.about': `About`,
  'nav.services': `Services`,
  'nav.how': `How it works`,
  'nav.trust': `Trust`,
  'nav.sales': `Completed sales`,
  'nav.contact': `Contact`,
  'cta.sell': `Sell my watch`,
  'cta.find': `Find a watch`,

  // Accueil
  'hero.title': `Luxury watch brokerage, built on trust.`,
  'hero.lead': `Looking to sell your watch, or searching for a particular piece? We guide you in Paris and Orléans, from the first valuation to the handover in person.`,
  'hero.note': `A question? Call <a data-tel="phone" href="tel:+33600000000"><span data-config="phone"></span></a> or message us on <a data-wa href="https://wa.me/33600000000" target="_blank" rel="noopener">WhatsApp</a>.`,
  'home.svc.title': `Our services`,
  'home.svc.lead': `Depending on your watch and what you expect from the sale, we decide together on the most suitable arrangement.`,
  'svc.brokerage.name': `Brokerage`,
  'svc.intro.name': `Introductions`,
  'svc.consign.name': `Consignment`,
  'svc.buy.name': `Direct purchase`,
  'home.svc.brokerage': `We connect seller and buyer, for an agreed commission.`,
  'home.svc.intro': `We introduce your project to one of our professional partners.`,
  'home.svc.consign': `You entrust us with your watch; we sell it on your behalf.`,
  'home.svc.buy': `Reserved for certain exceptional pieces.`,
  'home.svc.link': `Explore our services`,
  'home.trust.title': `Peace of mind, from start to finish.`,
  'home.trust.auth.t': `Authentication`,
  'home.trust.auth.d': `Every watch is inspected by a partner watchmaker or an official brand service before any transaction.`,
  'home.trust.hand.t': `In-person handover`,
  'home.trust.hand.d': `The watch and the payment change hands in person, in Paris or Orléans.`,
  'home.trust.care.t': `Personal guidance`,
  'home.trust.care.d': `We remain your direct point of contact at every stage, from valuation to completion.`,
  'home.trust.link': `Our commitments`,
  'home.paths.title': `How it works`,
  'home.paths.sell.t': `Selling a watch`,
  'home.paths.sell.d': `From the first valuation to the final payment, we take care of every step.`,
  'home.paths.sell.link': `See the 8 steps`,
  'home.paths.find.t': `Looking for a watch`,
  'home.paths.find.d': `Describe the piece you have in mind: we find it, have it authenticated and hand it to you in person.`,
  'home.paths.find.link': `See the 5 steps`,

  // À propos
  'about.title': `About us`,
  'about.lead': `Two partners brought together by a shared passion for fine watchmaking, and by one conviction: a luxury watch should be bought and sold with complete confidence.`,
  'about.story.title': `A passion that began in childhood.`,
  'about.story.p1': `We have been immersed in the world of watchmaking since childhood. From an early age we were around great houses such as Audemars Piguet and Patek Philippe, and learned to see a watch for what it truly is: craftsmanship, a story, and often an heirloom.`,
  'about.story.p2': `Today we are students at EIML, where we are trained in marketing, and we draw on a network of contacts we have been building for years.`,
  'about.story.p3': `We founded {brand} to offer brokerage that is simple and transparent: an honest valuation, systematic authentication and an in-person handover, in Paris or Orléans.`,
  'about.partners.title': `The partners`,
  'partner.photo': `Photo coming soon`,
  'partner.direct': `Direct line:`,
  'partner1.role': `[Role]`,
  'partner1.bio': `[Short introduction]`,
  'partner2.role': `[Role]`,
  'partner2.bio': `[Short introduction]`,

  // Services
  'services.title': `Services`,
  'services.lead': `Every watch is different. We guide you towards the arrangement best suited to your piece and your expectations, then set it out in a signed mandate.`,
  'services.formulas.title': `Four ways to work together`,
  'svc.brokerage.text': `We connect a seller with a buyer and see the transaction through to completion. We are paid by commission, agreed in advance.`,
  'svc.intro.text': `We introduce you to a professional partner within our network, who then takes your project forward with you.`,
  'svc.consign.text': `You entrust your watch to us. We present it to our network and sell it on your behalf, on terms agreed together.`,
  'svc.buy.text': `We purchase your watch directly, with no need to wait for a buyer.`,
  'svc.buy.note': `Less common: reserved for certain exceptional pieces.`,
  'services.scope.title': `Which watches`,
  'services.scope.text': `We handle all luxury watches, whatever the maison. Handbags and jewellery are not part of our services for the time being.`,
  'services.fees.title': `Fees and commission`,
  'services.fees.text': `On quotation, depending on the watch. Our fee depends on the piece and the arrangement chosen; it is agreed with you and written into the mandate before anything begins.`,
  'services.fees.cta': `Request a quote`,

  // Comment ça marche
  'how.title': `How it works`,
  'how.lead': `Whether you are selling or searching, every step is clear and you always know where your request stands.`,
  'how.tab.sell': `Selling a watch`,
  'how.tab.find': `Finding a watch`,
  'how.sell.1.t': `First contact`,
  'how.sell.1.d': `Send us photos of your watch with its reference and year, and let us know whether you have the box and papers.`,
  'how.sell.2.t': `Initial valuation and choice of arrangement`,
  'how.sell.2.d': `We give you an initial valuation and advise you on the most suitable arrangement: brokerage, consignment, introduction or direct purchase.`,
  'how.sell.3.t': `Meeting`,
  'how.sell.3.d': `We meet in Paris or Orléans to examine the watch together.`,
  'how.sell.4.t': `Authentication`,
  'how.sell.4.d': `The watch is authenticated by a partner watchmaker or an official brand service.`,
  'how.sell.5.t': `Signing the mandate`,
  'how.sell.5.d': `The terms of sale and our commission are set out in writing, in a mandate we both sign.`,
  'how.sell.6.t': `Finding the buyer`,
  'how.sell.6.d': `We present your watch to buyers within our network.`,
  'how.sell.7.t': `Secure transaction`,
  'how.sell.7.d': `The sale is completed in person, once payment has been verified.`,
  'how.sell.8.t': `Payment to you`,
  'how.sell.8.d': `You receive the sale proceeds, less our commission.`,
  'how.find.1.t': `Your brief`,
  'how.find.1.d': `Describe the watch you are looking for: model, reference, budget, condition, box and papers.`,
  'how.find.2.t': `Signing the search mandate`,
  'how.find.2.d': `Your request and our terms are set out in a signed search mandate.`,
  'how.find.3.t': `Search and proposals`,
  'how.find.3.d': `We call on our network and present you with pieces that match your brief.`,
  'how.find.4.t': `Authentication`,
  'how.find.4.d': `The watch you select is authenticated by a partner watchmaker or an official brand service.`,
  'how.find.5.t': `In-person handover and secure payment`,
  'how.find.5.d': `You receive your watch in person, in Paris or Orléans, with a secure payment.`,

  // Confiance
  'trust.title': `Trust and security`,
  'trust.lead': `A luxury watch carries significant value, and sometimes a family story. That is why every transaction follows the same rules, without exception.`,
  'trust.auth.t': `Systematic authentication`,
  'trust.auth.d': `No watch changes hands without first being authenticated by a partner watchmaker or the brand’s official service.`,
  'trust.hand.t': `In-person handover only`,
  'trust.hand.d': `Every transaction is completed in person, in Paris or Orléans. No watch is ever shipped.`,
  'trust.mandate.t': `A signed mandate for every transaction`,
  'trust.mandate.d': `Each party’s role, the terms and the commission are set down in black and white before we begin.`,
  'trust.pay.t': `Payment verified before any handover`,
  'trust.pay.d': `The watch is only handed over once payment has been received and verified.`,

  // Ventes réalisées
  'sales.title': `Completed sales`,
  'sales.lead': `The watches we have handled will be shown here. The first ones are coming soon.`,
  'sales.soon': `Coming soon`,
  'sales.model': `[Model]`,
  'sales.ref': `[Reference]`,
  'sales.year': `[Year]`,

  // Formulaires (commun)
  'form.group.you': `Your details`,
  'form.group.watch': `Your watch`,
  'form.group.more': `Photos and message`,
  'form.group.search': `Your search`,
  'form.group.details': `Further details`,
  'form.name': `Full name`,
  'form.phone': `Phone`,
  'form.email': `Email`,
  'form.city': `City`,
  'form.choose': `Select…`,
  'form.city.paris': `Paris`,
  'form.city.orleans': `Orléans`,
  'form.city.other': `Other`,
  'form.city.otherLabel': `Please specify your city`,
  'form.brand': `Brand`,
  'form.brand.ph': `e.g. Rolex, Patek Philippe, Omega`,
  'form.model': `Model`,
  'form.model.ph': `e.g. Submariner, Royal Oak`,
  'form.ref': `Reference`,
  'form.ref.ph': `e.g. 126610LN`,
  'form.year': `Year`,
  'form.year.ph': `e.g. 2019`,
  'form.condition': `Condition`,
  'form.cond.new': `New, never worn`,
  'form.cond.excellent': `Excellent`,
  'form.cond.vgood': `Very good`,
  'form.cond.good': `Good, signs of wear`,
  'form.cond.service': `Needs servicing`,
  'form.cond.any': `No preference`,
  'form.boxpapers': `Box and papers`,
  'form.yes': `Yes`,
  'form.no': `No`,
  'form.partial': `Partial`,
  'form.price': `Asking price`,
  'form.price.ph': `e.g. €12,000`,
  'form.optional': `(optional)`,
  'form.photos': `Photos of the watch`,
  'form.photos.cta': `Add photos`,
  'form.photos.drop': `or drag them here`,
  'form.photos.hint': `Dial, case, caseback and bracelet. Up to <span data-config="maxPhotos"></span> photos.`,
  'form.photos.alt': `You can send us your photos on <a data-wa href="https://wa.me/33600000000" target="_blank" rel="noopener">WhatsApp</a> after submitting your request.`,
  'form.message': `Message`,
  'form.message.sell.ph': `History, servicing, accessories, questions…`,
  'form.message.find.ph': `Dial colour, bracelet, year, any other details…`,
  'form.message.contact.ph': `Your message`,
  'form.wanted': `Model or reference sought`,
  'form.wanted.ph': `e.g. Nautilus 5711, Daytona`,
  'form.budget': `Budget`,
  'form.budget.ph': `e.g. €20,000 to €25,000`,
  'form.wantedCond': `Preferred condition`,
  'form.wantedBox': `Box and papers`,
  'form.box.must': `Essential`,
  'form.box.nice': `Preferred`,
  'form.box.any': `No preference`,
  'form.timing': `Timeframe`,
  'form.timing.asap': `As soon as possible`,
  'form.timing.1m': `Within a month`,
  'form.timing.3m': `Within three months`,
  'form.timing.none': `No particular deadline`,
  'form.consent': `I agree that {brand} may use my details to handle my request, in accordance with the <a href="mentions-legales.html">privacy policy</a>. <span class="req">*</span>`,
  'form.requiredNote': `Fields marked with an asterisk (*) are required.`,
  'form.submit.sell': `Send my request`,
  'form.submit.find': `Send my search request`,
  'form.submit.contact': `Send message`,
  'form.success.sell.t': `Your request has been sent.`,
  'form.success.sell.d': `Thank you. We will review your watch and come back to you shortly with an initial valuation.`,
  'form.success.find.t': `Your search request has been sent.`,
  'form.success.find.d': `Thank you. We are starting the search within our network and will be in touch shortly.`,
  'form.success.contact.t': `Your message has been sent.`,
  'form.success.contact.d': `Thank you, we will reply shortly.`,
  'form.again': `Make another request`,
  'form.againMsg': `Write another message`,

  // Vendre / Trouver
  'sell.title': `Sell my watch`,
  'sell.lead': `Tell us about your watch in a few minutes. We will come back to you with an initial valuation and the most suitable arrangement.`,
  'sell.aside.title': `For an accurate valuation`,
  'sell.aside.1': `Sharp photos of the dial, case, caseback and bracelet.`,
  'sell.aside.2': `The reference number, often engraved on the caseback or between the lugs.`,
  'sell.aside.3': `The box, papers and invoices, if you have them.`,
  'find.title': `Find a watch`,
  'find.lead': `Tell us what you are looking for. We will start the search within our network and come back to you with proposals.`,
  'find.aside.title': `For an effective search`,
  'find.aside.1': `The exact reference, if you know it.`,
  'find.aside.2': `A budget range.`,
  'find.aside.3': `Your requirements regarding condition, box and papers.`,
  'aside.free': `This request is free and places you under no obligation.`,
  'aside.direct.title': `Prefer to talk?`,
  'aside.direct.wa': `WhatsApp`,

  // Contact
  'contact.title': `Contact`,
  'contact.lead': `By phone, on WhatsApp or by email: whichever suits you best.`,
  'contact.phone.label': `Phone`,
  'contact.wa.btn': `Message us on WhatsApp`,
  'contact.email.label': `Email`,
  'contact.zones.label': `Where we operate`,
  'contact.zones.text': `Paris and Orléans. Meetings are arranged together, at your convenience.`,
  'contact.form.title': `Write to us`,

  // Mentions légales
  'legal.title': `Legal notice and privacy`,
  'legal.updated': `Last updated: [date]`,
  'legal.h.notice': `Legal notice`,
  'legal.h.publisher': `Publisher and hosting`,
  'legal.l.company': `Company name`,
  'legal.l.status': `Legal form`,
  'legal.l.siret': `SIRET number`,
  'legal.l.address': `Registered address`,
  'legal.l.email': `Email`,
  'legal.l.phone': `Phone`,
  'legal.l.director': `Publication director`,
  'legal.l.host': `Hosting provider`,
  'legal.l.hostAddress': `Hosting provider’s address`,
  'legal.h.ip': `Intellectual property`,
  'legal.ip': `All content on this website (text, visuals, logo) is protected. Any reproduction without prior permission is prohibited. The watch brands mentioned belong to their respective owners; {brand} is an independent intermediary with no affiliation to these houses.`,
  'legal.h.privacy': `Privacy policy`,
  'legal.privacy.intro': `This policy explains what personal data we collect through this website and how we use it, in accordance with the General Data Protection Regulation (GDPR).`,
  'legal.h.controller': `Data controller`,
  'legal.controller': `The data controller is the website publisher named above, who can be reached at <a data-mail href="mailto:contact@watch-exemple.fr"><span data-config="email"></span></a>.`,
  'legal.h.data': `Data we collect`,
  'legal.data': `Only the information you enter in our forms: name, phone number, email address, city, details and photos of your watch or of the watch you are looking for, and your message.`,
  'legal.h.purpose': `Purpose and legal basis`,
  'legal.purpose': `This data is used to respond to your requests, provide a valuation, and prepare and carry out a sale or search mandate. Processing is based on your consent and on pre-contractual steps taken at your request.`,
  'legal.h.recipients': `Recipients`,
  'legal.recipients': `Your data is intended for the partners of {brand}. It passes through our form-handling provider, [Form provider]. It may be shared with the partner watchmaker in charge of authentication, only where your request requires it. It is never sold.`,
  'legal.h.retention': `Retention period`,
  'legal.retention': `Your data is kept for [retention period, e.g. 3 years from the last contact], then deleted.`,
  'legal.h.rights': `Your rights`,
  'legal.rights': `You have the right to access, rectify, erase, object to, restrict and port your data, as well as the right to withdraw your consent at any time. To exercise these rights, write to us at <a data-mail href="mailto:contact@watch-exemple.fr"><span data-config="email"></span></a>. You may also lodge a complaint with the CNIL, the French data protection authority (<a href="https://www.cnil.fr" target="_blank" rel="noopener">cnil.fr</a>).`,
  'legal.h.cookies': `Cookies and local storage`,
  'legal.cookies': `This website uses no advertising cookies and no audience-measurement tools. Your language choice is simply stored in your browser. Fonts are loaded from Google Fonts, which involves your IP address being sent to Google.`,

  // Bandeau final et pied de page
  'band.title': `A watch to sell, or a piece to find?`,
  'band.text': `Tell us about your project. The initial valuation places you under no obligation.`,
  'footer.tagline': `Luxury watch brokerage in Paris and Orléans.`,
  'footer.navTitle': `Navigation`,
  'footer.contactTitle': `Contact`,
  'footer.legal': `Legal notice and privacy`
};

/* Textes générés par le script (messages d'erreur, titres d'onglet…), dans les deux langues */
const UI = {
  fr: {
    errRequired: 'Ce champ est obligatoire.',
    errChoice: 'Choisissez une option.',
    errEmail: 'Indiquez une adresse e-mail valide, par exemple nom@domaine.fr.',
    errPhone: 'Indiquez un numéro de téléphone valide.',
    errConsent: 'Cochez cette case pour envoyer votre demande.',
    errPhotosCount: '{max} photos maximum. Retirez-en quelques-unes.',
    errPhotosSize: 'Les photos dépassent {mb} Mo au total. Retirez-en quelques-unes.',
    sending: 'Envoi en cours…',
    sendError: 'L’envoi n’a pas abouti. Vérifiez votre connexion et réessayez, ou appelez-nous au <a data-tel="phone" href="#"><span data-config="phone"></span></a>.',
    notConfigured: 'L’envoi en ligne n’est pas encore disponible. Appelez-nous au <a data-tel="phone" href="#"><span data-config="phone"></span></a> ou écrivez-nous sur <a data-wa href="#" target="_blank" rel="noopener">WhatsApp</a>.',
    subjects: { sell: 'Nouvelle demande : vendre une montre', find: 'Nouvelle demande : trouver une montre', contact: 'Nouveau message' },
    waText: 'Bonjour, je vous contacte depuis le site {brand}.',
    description: 'Courtage de montres de luxe à Paris et Orléans : vente, recherche, dépôt-vente et rachat. Authentification systématique et remise en main propre.',
    titles: {
      'accueil': '{brand} | Courtage de montres de luxe à Paris et Orléans',
      'a-propos': 'À propos | {brand}',
      'services': 'Services | {brand}',
      'comment-ca-marche': 'Comment ça marche | {brand}',
      'confiance': 'Confiance et sécurité | {brand}',
      'ventes': 'Ventes réalisées | {brand}',
      'vendre': 'Vendre ma montre | {brand}',
      'trouver': 'Trouver une montre | {brand}',
      'contact': 'Contact | {brand}',
      'mentions-legales': 'Mentions légales et confidentialité | {brand}'
    }
  },
  en: {
    errRequired: 'This field is required.',
    errChoice: 'Please select an option.',
    errEmail: 'Please enter a valid email address, e.g. name@domain.com.',
    errPhone: 'Please enter a valid phone number.',
    errConsent: 'Please tick this box to send your request.',
    errPhotosCount: 'Up to {max} photos. Please remove a few.',
    errPhotosSize: 'Your photos exceed {mb} MB in total. Please remove a few.',
    sending: 'Sending…',
    sendError: 'Your message could not be sent. Please check your connection and try again, or call us on <a data-tel="phone" href="#"><span data-config="phone"></span></a>.',
    notConfigured: 'Online sending is not available yet. Please call us on <a data-tel="phone" href="#"><span data-config="phone"></span></a> or message us on <a data-wa href="#" target="_blank" rel="noopener">WhatsApp</a>.',
    subjects: { sell: 'New request: sell a watch', find: 'New request: find a watch', contact: 'New message' },
    waText: 'Hello, I am getting in touch via the {brand} website.',
    description: 'Luxury watch brokerage in Paris and Orléans: sales, sourcing, consignment and direct purchase. Systematic authentication and in-person handover.',
    titles: {
      'accueil': '{brand} | Luxury watch brokerage in Paris and Orléans',
      'a-propos': 'About | {brand}',
      'services': 'Services | {brand}',
      'comment-ca-marche': 'How it works | {brand}',
      'confiance': 'Trust and security | {brand}',
      'ventes': 'Completed sales | {brand}',
      'vendre': 'Sell my watch | {brand}',
      'trouver': 'Find a watch | {brand}',
      'contact': 'Contact | {brand}',
      'mentions-legales': 'Legal notice and privacy | {brand}'
    }
  }
};

/* =====================================================================
   3. OUTILS
   ===================================================================== */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const PAGE = document.body.dataset.page || 'accueil';   // nom de la page (attribut data-page du <body>)
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lang = CONFIG.defaultLang;

const fill = (str, vars) => str.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
const digits = (num) => String(num).replace(/\D/g, '');

// « 06 00 00 00 00 » → « +33600000000 » (pour les liens tel:)
function toIntl(num) {
  const d = digits(num);
  if (d.startsWith('0') && d.length === 10) return '+33' + d.slice(1);
  return '+' + d;
}
// En anglais, les numéros s'affichent au format international : +33 6 00 00 00 00
function displayPhone(num) {
  const d = digits(num);
  if (lang === 'en' && d.startsWith('0') && d.length === 10) {
    return '+33 ' + d.charAt(1) + ' ' + d.slice(2).match(/.{2}/g).join(' ');
  }
  return num;
}
const storage = {
  get(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* stockage indisponible */ } }
};

/* =====================================================================
   4. CONFIGURATION APPLIQUÉE AU HTML (nom, numéros, liens)
   ===================================================================== */
function applyConfig(root = document) {
  $$('[data-brand]', root).forEach(el => { el.textContent = CONFIG.brand; });
  $$('[data-config]', root).forEach(el => {
    const key = el.dataset.config;
    const value = CONFIG[key];
    if (value === undefined) return;
    el.textContent = /phone/i.test(key) ? displayPhone(value) : value;
  });
  $$('[data-tel]', root).forEach(el => { el.href = 'tel:' + toIntl(CONFIG[el.dataset.tel]); });
  $$('[data-mail]', root).forEach(el => { el.href = 'mailto:' + CONFIG.email; });
  $$('[data-insta]', root).forEach(el => { el.href = CONFIG.instagramUrl; });
  const waText = encodeURIComponent(fill(UI[lang].waText, { brand: CONFIG.brand }));
  $$('[data-wa]', root).forEach(el => { el.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + waText; });
  $$('[data-year]', root).forEach(el => { el.textContent = new Date().getFullYear(); });
}

/* =====================================================================
   5. LANGUE (FR | EN)
   ===================================================================== */
function setLang(next, { updateUrl = true } = {}) {
  lang = next === 'en' ? 'en' : 'fr';
  document.documentElement.lang = lang;

  $$('[data-i18n]').forEach(el => {
    if (el.__fr === undefined) el.__fr = el.innerHTML;          // mémorise le texte français d'origine
    const key = el.dataset.i18n;
    if (lang === 'fr') { el.innerHTML = el.__fr; return; }
    if (key in EN) el.innerHTML = EN[key].replace(/\{brand\}/g, '<span data-brand></span>');
    else console.warn('[Traduction manquante]', key);
  });

  $$('[data-i18n-attr]').forEach(el => {
    el.__frAttr = el.__frAttr || {};
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (!(attr in el.__frAttr)) el.__frAttr[attr] = el.getAttribute(attr) || '';
      const value = lang === 'fr' ? el.__frAttr[attr] : (EN[key] !== undefined ? EN[key] : el.__frAttr[attr]);
      el.setAttribute(attr, value);
    });
  });

  $$('[data-set-lang]').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.setLang === lang)));
  applyConfig();
  updateLinks();
  updateMeta();
  refreshFormTexts();
  storage.set('lang', lang);
  if (updateUrl) {
    try {
      const url = new URL(location.href);
      if (lang === 'en') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
      history.replaceState(null, '', url);
    } catch (e) { /* adresse non modifiable (aperçu local) */ }
  }
}

// Garde la langue d'une page à l'autre : ajoute « ?lang=en » aux liens internes quand l'anglais est choisi
function updateLinks() {
  $$('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!/^[\w-]+\.html/.test(href)) return;
    const [path, hash] = href.split('#');
    const base = path.split('?')[0];
    a.setAttribute('href', base + (lang === 'en' ? '?lang=en' : '') + (hash ? '#' + hash : ''));
  });
}

function updateMeta() {
  document.title = fill(UI[lang].titles[PAGE] || UI[lang].titles.accueil, { brand: CONFIG.brand });
  const desc = $('meta[name="description"]');
  if (desc) desc.setAttribute('content', UI[lang].description);
}

/* =====================================================================
   6. MENU MOBILE
   ===================================================================== */
let lastFocus = null;
function openMenu() {
  const menu = $('#mobile-menu');
  lastFocus = document.activeElement;
  menu.classList.add('is-open');
  menu.setAttribute('aria-hidden', 'false');
  $('.menu-toggle').setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
  setTimeout(() => { const first = $('.menu-close', menu); if (first) first.focus(); }, 60);
}
function closeMenu(restoreFocus = true) {
  const menu = $('#mobile-menu');
  if (!menu.classList.contains('is-open')) return;
  menu.classList.remove('is-open');
  menu.setAttribute('aria-hidden', 'true');
  $('.menu-toggle').setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
  if (restoreFocus && lastFocus) lastFocus.focus();
}
function initMenu() {
  const menu = $('#mobile-menu');
  $('.menu-toggle').addEventListener('click', openMenu);
  $('.menu-close').addEventListener('click', () => closeMenu());
  menu.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(false); });
  menu.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeMenu(); return; }
    if (e.key !== 'Tab') return;
    const items = $$('a, button', menu);
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  window.addEventListener('resize', () => { if (window.innerWidth >= 1100) closeMenu(false); });
}

/* =====================================================================
   7. ONGLETS « VENDRE / TROUVER » (page Comment ça marche)
   ===================================================================== */
function initTabs() {
  const list = $('#how-tabs');
  if (!list) return;
  const tabs = $$('[role="tab"]', list);
  const select = (tab, focus) => {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
      select(next, true);
    });
  });
  // comment-ca-marche.html#trouver ouvre directement le parcours acheteur (#vendre : parcours vendeur)
  const fromHash = { vendre: 'sell', trouver: 'find' }[location.hash.slice(1)];
  const initialTab = tabs.find(t => t.dataset.tab === fromHash);
  if (initialTab) select(initialTab);
}

/* =====================================================================
   8. FORMULAIRES : validation, envoi, confirmation
   ===================================================================== */
function errorEl(field) {
  let out = $('.field-error', field);
  if (!out) {
    out = document.createElement('p');
    out.className = 'field-error';
    out.id = 'err-' + Math.random().toString(36).slice(2, 9);
    out.setAttribute('aria-live', 'polite');
    field.appendChild(out);
  }
  return out;
}

function validateField(input) {
  const field = input.closest('.field');
  if (!field || input.closest('[hidden]')) return true;
  const t = UI[lang];
  let msg = '';

  if (input.type === 'radio') {
    const group = $$(`input[name="${input.name}"]`, input.form);
    if (group.some(r => r.required) && !group.some(r => r.checked)) msg = t.errChoice;
  } else if (input.type === 'checkbox') {
    if (input.required && !input.checked) msg = t.errConsent;
  } else if (input.type === 'file') {
    const files = Array.from(input.files || []);
    const total = files.reduce((s, f) => s + f.size, 0);
    if (files.length > CONFIG.maxPhotos) msg = fill(t.errPhotosCount, { max: CONFIG.maxPhotos });
    else if (total > CONFIG.maxPhotoMB * 1024 * 1024) msg = fill(t.errPhotosSize, { mb: CONFIG.maxPhotoMB });
  } else {
    const v = (input.value || '').trim();
    if (input.required && !v) msg = t.errRequired;
    else if (v && input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = t.errEmail;
    else if (v && input.type === 'tel' && (digits(v).length < 8 || digits(v).length > 15)) msg = t.errPhone;
  }

  const out = errorEl(field);
  out.textContent = msg;
  field.classList.toggle('has-error', !!msg);
  const target = input.type === 'radio' ? null : input;
  if (target) {
    target.setAttribute('aria-invalid', msg ? 'true' : 'false');
    const ids = (target.getAttribute('aria-describedby') || '').split(' ').filter(Boolean);
    if (!ids.includes(out.id)) target.setAttribute('aria-describedby', ids.concat(out.id).join(' '));
  }
  return !msg;
}

function validateForm(form) {
  let first = null;
  const seenRadios = new Set();
  $$('input, select, textarea', form).forEach(input => {
    if (!input.name || input.type === 'hidden' || input.name === '_gotcha') return;
    if (input.type === 'radio') { if (seenRadios.has(input.name)) return; seenRadios.add(input.name); }
    if (!validateField(input) && !first) first = input;
  });
  return first;
}

function setStatus(form, html) {
  const status = $('.form-status', form);
  if (!status) return;
  if (!html) { status.hidden = true; status.innerHTML = ''; return; }
  status.innerHTML = html;
  status.hidden = false;
  applyConfig(status);
}

function isLocalPreview() {
  return location.protocol === 'file:' || ['localhost', '127.0.0.1', ''].includes(location.hostname);
}

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  if (form._gotcha && form._gotcha.value) return;              // robot détecté (champ piège rempli)

  setStatus(form, '');
  const firstInvalid = validateForm(form);
  if (firstInvalid) { firstInvalid.focus(); return; }

  const kind = form.dataset.form;
  const btn = $('[type="submit"]', form);
  const label = btn.innerHTML;
  btn.disabled = true;
  btn.textContent = UI[lang].sending;

  const data = new FormData(form);
  data.set('_subject', CONFIG.brand + ' | ' + UI[lang].subjects[kind]);
  data.set('langue', lang === 'en' ? 'Anglais' : 'Français');
  data.delete('_gotcha');
  const photos = data.getAll('photos');
  if (photos.length && photos.every(f => !f || !f.size)) data.delete('photos');

  const endpoint = (CONFIG.forms[kind] || '').trim();
  try {
    if (!endpoint) {
      if (isLocalPreview()) {
        console.info('[Formulaire] Aperçu local : aucune adresse d’envoi configurée dans CONFIG.forms.' + kind + '. Rien n’a été envoyé.');
        await new Promise(r => setTimeout(r, 700));
        showSuccess(form);
      } else {
        setStatus(form, UI[lang].notConfigured);
      }
      return;
    }
    const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    showSuccess(form);
  } catch (err) {
    console.error('[Formulaire] Échec de l’envoi :', err);
    setStatus(form, UI[lang].sendError);
  } finally {
    btn.disabled = false;
    btn.innerHTML = label;
  }
}

function showSuccess(form) {
  const shell = form.closest('.form-shell');
  const success = $('.form-success', shell);
  form.reset();
  $$('.file-list', form).forEach(l => { l.innerHTML = ''; });
  $$('select[data-other]', form).forEach(s => s.dispatchEvent(new Event('change')));
  form.hidden = true;
  success.hidden = false;
  success.classList.remove('is-shown');
  void success.offsetWidth;                                   // relance l'animation du tracé
  success.classList.add('is-shown');
  success.scrollIntoView({ block: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
  success.focus({ preventScroll: true });
}

function renderFileList(input) {
  const list = $('.file-list', input.closest('.field'));
  if (!list) return;
  list.innerHTML = '';
  Array.from(input.files || []).forEach(f => {
    const li = document.createElement('li');
    const kb = f.size / 1024;
    li.textContent = f.name + '  (' + (kb > 1024 ? (kb / 1024).toFixed(1) + ' Mo' : Math.round(kb) + ' Ko') + ')';
    list.appendChild(li);
  });
}

function refreshFormTexts() {
  // Re-traduit les messages d'erreur déjà affichés lors d'un changement de langue
  $$('.field.has-error').forEach(field => {
    const input = $('input:not([type="hidden"]), select, textarea', field);
    if (input) validateField(input);
  });
}

function initForms() {
  $$('form[data-form]').forEach(form => {
    form.addEventListener('submit', handleSubmit);
    const recheck = e => {
      const field = e.target.closest('.field');
      if (field && field.classList.contains('has-error')) validateField(e.target);
    };
    form.addEventListener('input', recheck);
    form.addEventListener('change', recheck);
  });

  // Ville « Autre » → champ de précision
  $$('select[data-other]').forEach(sel => {
    const wrap = document.getElementById(sel.dataset.other);
    const input = wrap && $('input', wrap);
    const toggle = () => {
      const show = sel.value === 'Autre';
      wrap.hidden = !show;
      input.required = show;
      if (!show) { input.value = ''; wrap.classList.remove('has-error'); }
    };
    sel.addEventListener('change', toggle);
    toggle();
  });

  // Photos : liste des fichiers + glisser-déposer
  $$('[data-dropzone]').forEach(zone => {
    const input = $('input[type="file"]', zone);
    input.addEventListener('change', () => renderFileList(input));
    ['dragenter', 'dragover'].forEach(ev => zone.addEventListener(ev, e => { e.preventDefault(); zone.classList.add('is-dragover'); }));
    ['dragleave', 'drop'].forEach(ev => zone.addEventListener(ev, e => { e.preventDefault(); zone.classList.remove('is-dragover'); }));
    zone.addEventListener('drop', e => {
      const files = e.dataTransfer && e.dataTransfer.files;
      if (files && files.length) { input.files = files; renderFileList(input); validateField(input); }
    });
  });
  if (!CONFIG.allowPhotoUpload) {
    $$('[data-photo-field]').forEach(f => { f.hidden = true; const i = $('input', f); if (i) i.disabled = true; });
    $$('[data-photo-alt]').forEach(p => { p.hidden = false; });
  }

  // « Faire une autre demande »
  $$('[data-form-again]').forEach(btn => btn.addEventListener('click', () => {
    const shell = btn.closest('.form-shell');
    const form = $('form', shell);
    $('.form-success', shell).hidden = true;
    form.hidden = false;
    const first = $('input:not([type="hidden"]):not(.hp)', form);
    if (first) first.focus();
  }));
}

/* =====================================================================
   9. CADRAN DE L'ACCUEIL
   Les aiguilles partent de 10 h 10 (la pose classique des montres en vitrine)
   puis rejoignent l'heure réelle, et la trotteuse balaie le cadran en continu.
   ===================================================================== */
function initDial() {
  const hH = document.getElementById('hand-h');
  const hM = document.getElementById('hand-m');
  const hS = document.getElementById('hand-s');
  if (!hH || !hM || !hS) return;

  const set = (el, deg) => el.setAttribute('transform', 'rotate(' + deg.toFixed(2) + ' 200 200)');
  const now = () => {
    const d = new Date();
    const s = d.getSeconds() + d.getMilliseconds() / 1000;
    const m = d.getMinutes() + s / 60;
    const h = (d.getHours() % 12) + m / 60;
    return { h: h * 30, m: m * 6, s: s * 6 };
  };

  if (reduceMotion) {
    hS.style.display = 'none';
    const tick = () => { const a = now(); set(hH, a.h); set(hM, a.m); };
    tick();
    setInterval(tick, 15000);
    return;
  }

  const start = { h: 305, m: 60, s: 0 };                        // 10 h 10
  const t0 = performance.now();
  const duration = 1800;
  const ease = t => 1 - Math.pow(1 - t, 4);
  const towards = (from, to, p) => { let d = ((to - from) % 360 + 540) % 360 - 180; return from + d * p; };

  const frame = (t) => {
    const a = now();
    const p = Math.min(1, (t - t0) / duration);
    if (p < 1) {
      const e = ease(p);
      set(hH, towards(start.h, a.h, e));
      set(hM, towards(start.m, a.m, e));
      set(hS, towards(start.s, a.s, e));
    } else {
      set(hH, a.h); set(hM, a.m); set(hS, a.s);
    }
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

/* =====================================================================
   10. APPARITION DOUCE AU SCROLL + EN-TÊTE
   ===================================================================== */
function initReveal() {
  const items = $$('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('is-visible')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
  items.forEach(el => io.observe(el));
}

function initHeader() {
  const header = $('.site-header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* =====================================================================
   11. DÉMARRAGE
   ===================================================================== */
function init() {
  const params = new URLSearchParams(location.search);
  const initial = params.get('lang') || storage.get('lang') || CONFIG.defaultLang;
  setLang(initial, { updateUrl: false });
  $$('[data-set-lang]').forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.setLang)));

  initMenu();
  initTabs();
  initForms();
  initHeader();
  initReveal();
  initDial();
}

init();
})();
