/*
  Inserisci qui i collegamenti reali.
  Esempio: facebook: "https://www.facebook.com/tuapagina"
  Per WhatsApp usa il link di invito che desideri rendere pubblico.
*/
const LINKS = {
  whatsapp: "INSERISCI_LINK_WHATSAPP",
  facebook: "INSERISCI_LINK_FACEBOOK",
  instagram: "INSERISCI_LINK_INSTAGRAM",
  maps: "INSERISCI_LINK_GOOGLE_MAPS"
};

document.querySelectorAll("[data-link]").forEach(a => {
  const url = LINKS[a.dataset.link];
  if (url && !url.startsWith("INSERISCI_")) {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  } else {
    a.addEventListener("click", e => {
      e.preventDefault();
      alert("Aggiungi il collegamento " + a.dataset.link + " nel file script.js.");
    });
  }
});
