/*
  Inserisci qui i collegamenti reali.
  Esempio: facebook: "https://www.facebook.com/tuapagina"
  Per WhatsApp usa il link di invito che desideri rendere pubblico.
*/
const LINKS = {
  whatsapp: "https://chat.whatsapp.com/Ifag3B36bjDHfOy5tIghCx?mode=ems_copy_c",
  facebook: "https://www.facebook.com/share/1FtL1H5fXd/",
  instagram: "https://www.instagram.com/comunitafilosoficadifirenze?lqvp=NTM0c21oZjVseGZ3",
  maps: "https://maps.app.goo.gl/iWHHv3rNXd6gTtKn6"
};
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
