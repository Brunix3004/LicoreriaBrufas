    const WHATSAPP_NUMBER = "51965978244";

    // Mensaje base
    const BASE_MESSAGE = "Hola, vengo desde la web de Licorerías Brufa's. Quisiera consultar por:";

    function openWhatsapp(customText){
      const msg = customText ? 
      customText : "Hola, vengo desde la web de Licorerías Brufa's. Quisiera hacer una consulta del catálogo.";
      const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
      window.open(url, "_blank");
    } 

    // Carrusel
    new Swiper(".destacados-swiper", {
      loop: true,
      autoplay: { delay: 5500, disableOnInteraction: false },
      speed: 650,
      pagination: { el: ".swiper-pagination", clickable: true }
    });

    // Productos
    const products = [
      { name:"Whisky Something Special", category:"Whisky", desc:"Combo, con vaso incluido.", price:"S/ 55.00", badge:"None", img:"/Imagenes/Whisky/something_special.webp"},
      { name:"Whisky Old Parr", category:"Whisky", desc:"12 años", price:"S/ 95.00", badge:"None", img:"/Imagenes/Whisky/old_parr.webp"},
      { name:"Whisky Chivas Regal", category:"Whisky", desc:"12 años", price:"S/ 95.00", badge:"None", img:"/Imagenes/Whisky/chivas_regal_12.webp"},
      { name:"Whisky Chivas Regal", category:"Whisky", desc:"13 años", price:"S/ 105.00", badge:"TOP", img:"/Imagenes/Whisky/chivas_regal_13.webp"},
      { name:"Jack Daniels'", category:"Whisky", desc:"7 años", price:"S/ 110.00", badge:"None", img:"/Imagenes/Whisky/jack_daniels.webp"},
      { name:"Red Label", category:"Whisky", desc:"Johnnie Walker", price:"S/ 50.00", badge:"None", img:"/Imagenes/Whisky/red_label.webp"},
      { name:"Black Label", category:"Whisky", desc:"Johnnie Walker", price:"S/ 110.00", badge:"None", img:"/Imagenes/Whisky/black_label.webp"},
      { name:"Double Black", category:"Whisky", desc:"Johnnie Walker", price:"S/ 140.00", badge:"TOP", img:"/Imagenes/Whisky/double_black.webp"},
      { name:"Gold Label", category:"Whisky", desc:"Johnnie Walker", price:"S/ 240.00", badge:"TOP", img:"/Imagenes/Whisky/gold_label.webp"},
      { name:"Old Times Black", category:"Whisky", desc:"1L", price:"S/ 30.00", badge:"None", img:"/Imagenes/Whisky/old_times_black.webp"},
      { name:"Old Times Red", category:"Whisky", desc:"1L", price:"S/ 27.00", badge:"None", img:"/Imagenes/Whisky/old_times_red.webp"},
      { name:"Ballentines", category:"Whisky", desc:"Escoces", price:"S/ 37.00", badge:"None", img:"/Imagenes/Whisky/ballentines.webp"},

      { name:"Ron Zacapa", category:"Ron", desc:"23 años", price:"S/ 250.00", badge:"TOP", img:"/Imagenes/Ron/ron_zacapa_23.webp"},
      { name:"Ron Cartavio XO", category:"Ron", desc:"18 años", price:"S/ 220.00", badge:"TOP", img:"/Imagenes/Ron/cartavio_xo_18.webp"},
      { name:"Ron de Caldas", category:"Ron", desc:"15 años", price:"S/ 130.00", badge:"TOP", img:"/Imagenes/Ron/once_caldas_15.webp"},
      { name:"Ron Cartavio Black Barrel", category:"Ron", desc:"750ml", price:"S/ 30.00", badge:"None", img:"/Imagenes/Ron/black_barrel.webp"},
      { name:"Ron Cartavio Reserva", category:"Ron", desc:"8 años", price:"S/ 38.00", badge:"None", img:"/Imagenes/Ron/cartavio_reserva_8.webp"},
      { name:"Ron Cartavio Selecto", category:"Ron", desc:"5 años", price:"S/ 30.00", badge:"None", img:"/Imagenes/Ron/cartavio_selecto_5.webp"},
      { name:"Ron Cartavio Black", category:"Ron", desc:"750 ml", price:"S/ 26.00", badge:"None", img:"/Imagenes/Ron/cartavio_black.webp"},
      { name:"Ron Cartavio Black", category:"Ron", desc:"1L", price:"S/ 29.00", badge:"None", img:"/Imagenes/Ron/cartavio_black_1L.webp"},
      { name:"Ron Cartavio Blanco", category:"Ron", desc:"1L", price:"S/ 29.00", badge:"None", img:"/Imagenes/Ron/cartavio_blanco_1L.webp"},
      { name:"Ron Cartavio Superior", category:"Ron", desc:"1L", price:"S/30.00", badge:"None", img:"/Imagenes/Ron/cartavio_superior_1L.webp"},
      { name:"Captain Morgan", category:"Ron", desc:"Spiced Gold", price:"S/ 37.00", badge:"None", img:"/Imagenes/Ron/captain_morgan.webp"},
      { name:"Ron Flor de Caña", category:"Ron", desc:"4 años", price:"S/ 47.00", badge:"None", img:"/Imagenes/Ron/flor_de_cana_4.webp"},
      { name:"Ron Flor de Caña", category:"Ron", desc:"5 años", price:"S/ 65.00", badge:"None", img:"/Imagenes/Ron/flor_de_cana_5.webp"},
      { name:"Ron Flor de Caña", category:"Ron", desc:"12 años", price:"S/ 115.00", badge:"TOP", img:"/Imagenes/Ron/flor_de_cana_12.webp"},
      { name:"Ron Cartavio Solera", category:"Ron", desc:"12 años", price:"S/ 78.00", badge:"None", img:"/Imagenes/Ron/cartavio_solera_12.webp"},
      { name:"Ron Cabo Blanco Silver", category:"Ron", desc:"1L", price:"S/ 18.50", badge:"None", img:"/Imagenes/Ron/cabo_blanco_silver.webp"},
      { name:"Ron Cabo Blanco Black", category:"Ron", desc:"1L", price:"S/ 18.50", badge:"None", img:"/Imagenes/Ron/cabo_blanco_black.webp"},
      { name:"Ron Havana Club Añejo", category:"Ron", desc:"Special", price:"S/ 36.00", badge:"None", img:"/Imagenes/Ron/havana_club.webp"},
      { name:"Ron Viejo de Caldas", category:"Ron", desc:"3 años", price:"S/ 35.00", badge:"None", img:"/Imagenes/Ron/ron_caldas_3.webp"},
      { name:"Ron Viejo de Caldas", category:"Ron", desc:"5 años", price:"S/ 41.00", badge:"None", img:"/Imagenes/Ron/ron_caldas_5.webp"},

    //   TEQUILA
      { name:"Tequila Jose Cuervo", category:"Tequila", desc:"Especial", price:"S/ 65.00", badge:"OFERTA", img:"/Imagenes/Tequila/tequila_jose_cuervo.webp"},

    //  VODKA
      { name:"Vodka Russkaya", category:"Vodka", desc:"1L", price:"S/ 27.00", badge:"None", img:"/Imagenes/Vodka/russkaya_1L.webp"},
      { name:"Vodka Russkaya", category:"Vodka", desc:"Fresa y Manzana", price:"S/ 25.00", badge:"None", img:"/Imagenes/Vodka/russkaya.webp"},
      { name:"Vodka Absolut", category:"Vodka", desc:"1L", price:"S/ 50.00", badge:"None", img:"/Imagenes/Vodka/absolute_vodka.webp"},
      { name:"Vodka Smirnoff", category:"Vodka", desc:"Frambuesa y Sandia", price:"S/ 33.00", badge:"None", img:"/Imagenes/Vodka/smirnoff_vodka.webp"},

    // CHAMPAGNE
      { name:"Riccadonna Ruby", category:"Champaña", desc:"Dulce intenso", price:"S/ 56.00", badge:"None", img:"/Imagenes/Champan/riccadonna_ruby.webp"},
      { name:"Riccadonna Asti", category:"Champaña", desc:"Dulce suave", price:"S/ 56.00", badge:"None", img:"/Imagenes/Champan/riccadonna_asti.webp"},
      { name:"Riccadonna Prosecco", category:"Champaña", desc:"Fresco", price:"S/ 56.00", badge:"None", img:"/Imagenes/Champan/riccadonna_prosecco.webp"},

    // VINO
      { name:"Vino Casillero del Diablo", category:"Vino", desc:"Reserva", price:"S/ 43.00", badge:"None", img:"/Imagenes/Vino/casillero_del_diablo.webp"},
      { name:"Vino Tabernero", category:"Vino", desc:"Borgoña y Gran Rose", price:"S/ 17.00", badge:"None", img:"/Imagenes/Vino/vino_tabernero.webp"},
      { name:"Vino Santiago Queirolo", category:"Vino", desc:"Borgoña, Rose y Magdalena", price:"S/ 15.00", badge:"None", img:"/Imagenes/Vino/vino_santiago_queirolo.webp"},

    // COCTELES
      { name:"Baileys", category:"Cocteles", desc:"Licor Irlandes", price:"S/ 75.00", badge:"None", img:"/Imagenes/Cocteles/baileys.webp"},
      { name:"Belisho", category:"Cocteles", desc:"Coctel Amazonico", price:"S/ 26.00", badge:"None", img:"/Imagenes/Cocteles/belisho.webp"},

    // PISCOS
      { name:"Pisco Tabernero La Botija", category:"Pisco", desc:"2L", price:"S/ 61.00", badge:"None", img:"/Imagenes/Pisco/tabernero_la_botija_2L.webp"},
      { name:"Pisco Tabernero La Botija", category:"Pisco", desc:"700ml", price:"S/ 31.50", badge:"None", img:"/Imagenes/Pisco/tabernero_la_botija.webp"},
      { name:"Pisco Santiago Queirolo", category:"Pisco", desc:"Acholado", price:"S/ 30.00", badge:"None", img:"/Imagenes/Pisco/pisco_acholado_santiago_queirolo.webp"},
      { name:"Pisco Decanto", category:"Pisco", desc:"Acholado", price:"S/ 30.00", badge:"None", img:"/Imagenes/Pisco/pisco_acholado_decanto.webp"},
      { name:"Pisco Buenaventura", category:"Pisco", desc:" ml", price:"S/ 15.00", badge:"None", img:"/Imagenes/Pisco/pisco_buenaventura.webp"},

    // Bebidas
      { name:"Mike's", category:"Bebidas", desc:"Limon, Maracuya, Fresa", price:"S/ 6.00", badge:"2 x S/ 11.00", img:"/Imagenes/Bebidas/mikes.webp"},
      { name:"Red Bull", category:"Bebidas", desc:"Original", price:"S/ 8.00", badge:"None", img:"/Imagenes/Bebidas/red_bull.webp"},
      { name:"Four Loko", category:"Bebidas", desc:"Variedades", price:"S/ 11.00", badge:"None", img:"/Imagenes/Bebidas/four_loko.webp"},

    // CERVEZA LATA
      { name:"Cerveza Cristal", category:"Cerveza", desc:"473ml", price:"S/ 5.00", badge:"Unidad", img:"/Imagenes/Cerveza/cerveza_cristal_lata_473.webp"},
      { name:"Cerveza Cristal", category:"Cerveza", desc:"6 x 473ml", price:"S/ 28.00", badge:"Six-pack", img:"/Imagenes/Cerveza/cerveza_cristal_lata_473_six.webp"},
      
      { name:"Cerveza Cristal", category:"Cerveza", desc:"355ml", price:"S/ 4.00", badge:"Unidad", img:"/Imagenes/Cerveza/cerveza_cristal_lata_355.webp"},
      { name:"Cerveza Cristal", category:"Cerveza", desc:"6 x 355ml", price:"S/ 22.00", badge:"Six-Pack", img:"/Imagenes/Cerveza/cerveza_cristal_lata_355_six.webp"},

      { name:"Cerveza Pilsen Callao", category:"Cerveza", desc:"355ml", price:"S/ 4.50", badge:"Unidad", img:"/Imagenes/Cerveza/cerveza_pilsen_lata.webp"},
      { name:"Cerveza Pilsen Callao", category:"Cerveza", desc:"6 x 355ml", price:"S/ 25.00", badge:"Six-Pack", img:"/Imagenes/Cerveza/cerveza_pilsen_lata_six.webp"},

      { name:"Cerveza Pilsen Fresh", category:"Cerveza", desc:"355ml", price:"S/ 4.50", badge:"Unidad", img:"/Imagenes/Cerveza/cerveza_pilsen_fresh_lata.webp"},
      { name:"Cerveza Pilsen Fresh", category:"Cerveza", desc:"6 x 355ml", price:"S/ 25.00", badge:"Six-Pack", img:"/Imagenes/Cerveza/cerveza_pilsen_fresh_lata_six.webp"},

      { name:"Cerveza Cusqueña Trigo", category:"Cerveza", desc:"355ml", price:"S/ 5.00", badge:"Unidad", img:"/Imagenes/Cerveza/cerveza_cusquena_trigo_355_unidad.webp"},
      { name:"Cerveza Cusqueña Trigo", category:"Cerveza", desc:"6 x 355ml", price:"S/ 28.00", badge:"Six-Pack", img:"/Imagenes/Cerveza/cerveza_cusquena_trigo_355_six.webp"},
      
      { name:"Cerveza Cusqueña Trigo", category:"Cerveza", desc:"473ml", price:"S/ 5.50", badge:"Unidad", img:"/Imagenes/Cerveza/cerveza_cusquena_trigo_unidad.webp"},
      { name:"Cerveza Cusqueña Trigo", category:"Cerveza", desc:"6 x 473ml", price:"S/ 33.00", badge:"Six-Pack", img:"/Imagenes/Cerveza/cerveza_cusquena_trigo_six.webp"},

      { name:"Cerveza Cusqueña Negra", category:"Cerveza", desc:"473ml", price:"S/ 5.00", badge:"Unidad", img:"/Imagenes/Cerveza/cerveza_cusquena_negra_unidad.webp"},
      { name:"Cerveza Cusqueña Negra", category:"Cerveza", desc:"6 x 473ml", price:"S/ 28.00", badge:"Six-Pack", img:"/Imagenes/Cerveza/cerveza_cusquena_negra_six.webp"},

      { name:"Cerveza Golden", category:"Cerveza", desc:"269ml", price:"S/ 2.50", badge:"Unidad", img:"/Imagenes/Cerveza/cerveza_golden_269_unidad.webp"},
      { name:"Cerveza Golden", category:"Cerveza", desc:"6 x 269ml", price:"S/ 14.00", badge:"Six-Pack", img:"/Imagenes/Cerveza/cerveza_golden_269_six.webp"},

      { name:"Cerveza Golden", category:"Cerveza", desc:"355ml", price:"S/ 3.50", badge:"Unidad", img:"/Imagenes/Cerveza/cerveza_golden_355_unidad.webp"},
      { name:"Cerveza Golden", category:"Cerveza", desc:"6 x 355ml", price:"S/ 19.00", badge:"Six-Pack", img:"/Imagenes/Cerveza/cerveza_golden_355_six.webp"},

      { name:"Cerveza Golden", category:"Cerveza", desc:"473ml", price:"S/ 4.00", badge:"Unidad", img:"/Imagenes/Cerveza/cerveza_golden_473_unidad.webp"},
      { name:"Cerveza Golden", category:"Cerveza", desc:"6 x 473ml", price:"S/ 22.00", badge:"Six-Pack", img:"/Imagenes/Cerveza/cerveza_golden_473_six.webp"},

    // CERVEZA BOTELLA
      { name:"Cerveza Corona", category:"Cerveza", desc:"330ml", price:"S/ 5.00", badge:"Unidad", img:"/Imagenes/Cerveza/cerveza_corona_unidad.webp"},
      { name:"Cerveza Corona", category:"Cerveza", desc:"330ml", price:"S/ 30.00", badge:"Six-Pack", img:"/Imagenes/Cerveza/cerveza_corona_six.webp"},
      
      { name:"Cerveza Corona", category:"Cerveza", desc:"210ml", price:"S/ 0.00", badge:"Unidad", img:"/Imagenes/Cerveza/cerveza_corona_210_unidad.webp"},
      { name:"Cerveza Corona", category:"Cerveza", desc:"210ml", price:"S/ 0.00", badge:"Six-Pack", img:"/Imagenes/Cerveza/cerveza_corona_210_six.webp"},

      { name:"Cerveza Cusqueña Trigo", category:"Cerveza", desc:"310ml", price:"S/ 5.00", badge:"Six-pack", img:"/Imagenes/Cerveza/cerveza_cusquena_unidad.webp"},
      { name:"Cerveza Cusqueña Trigo", category:"Cerveza", desc:"6 x 310ml", price:"S/ 28.00", badge:"Six-pack", img:"/Imagenes/Cerveza/cerveza_cusquena_six.webp"},
      
      { name:"Cerveza Cusqueña Trigo 0% alcohol", category:"Cerveza", desc:"310ml", price:"S/ 5.00", badge:"Six-pack", img:"/Imagenes/Cerveza/cerveza_cusquena_0_unidad.webp"},
      { name:"Cerveza Cusqueña Trigo 0% alcohol", category:"Cerveza", desc:"6 x 310ml", price:"S/ 28.00", badge:"Six-pack", img:"/Imagenes/Cerveza/cerveza_cusquena_0_six.webp"},

      { name:"Cerveza Pilsen Callao", category:"Cerveza", desc:"305ml", price:"S/ 4.50", badge:"Unidad", img:"/Imagenes/Cerveza/cerveza_pilsen_unidad.webp"},
      { name:"Cerveza Pilsen Callao", category:"Cerveza", desc:"6 x 305ml", price:"S/ 25.00", badge:"Six-Pack", img:"/Imagenes/Cerveza/cerveza_pilsen_six.webp"}, 

      // OTROS
      { name:"Jagermeister", category:"Otros", desc:"Licor de hierbas", price:"S/ 75.00", badge:"None", img:"/Imagenes/Otros/jagermeister.webp"},
      // { name:"Beefeater", category:"Otros", desc:"Ginebra", price:"S/ 75.00", badge:"None", img:"/Imagenes/Otros/beefeater.webp"},
      { name:"Jarabe de Goma", category:"Otros", desc:"Edulcorante", price:"S/ 13.00", badge:"None", img:"/Imagenes/Otros/jarabe_de_goma.webp"},
      { name:"Ginger Ale", category:"Otros", desc:"Gaseosa de jengibre", price:"S/ 7.00", badge:"None", img:"/Imagenes/Otros/ginger_ale.webp"}
    ];

    // Categorías
    const allCats = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];
    let activeCat = "Todos";

    const filtersEl = document.getElementById("filters");
    const gridEl = document.getElementById("grid");

    function renderFilters(){
      filtersEl.innerHTML = "";
      allCats.forEach(cat => {
        const chip = document.createElement("div");
        chip.className = "chip" + (cat === activeCat ? " active" : "");
        chip.textContent = cat;
        chip.onclick = () => {
          activeCat = cat;
          renderFilters();
          apply();
        };
        filtersEl.appendChild(chip);
      });
    }

    function renderCards(list){
      gridEl.innerHTML = "";
      list.forEach(p => {
        const card = document.createElement("div");
        const badgeHTML = (p.badge && p.badge !== "None") ? `<span class="badge">${p.badge}</span>` : ""; //Generar badge solo si existe y no es "None"
        card.className = "card";
        card.innerHTML = `
          <div class="img">
            <img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async">
          </div>
          <div class="content">
            <p class="title"><b>${p.name}</b></p>
            <p class="desc">${p.desc}</p>
            <div class="row">
              <span class="price">${p.price}</span>
              ${badgeHTML}
            </div>
            <div style="margin-top:10px; display:flex; gap:10px;">
              <button class="btn btn-consultar" style="flex:1" data-message="">Consultar</button>
            </div>
          </div>
        `;

        const btn = card.querySelector(".btn-consultar");
        btn.dataset.message = `${BASE_MESSAGE} ${p.name}.`;
        btn.addEventListener("click", () => {
          openWhatsapp(btn.dataset.message);
        });
        gridEl.appendChild(card);
      });
    }

    function apply(){
      const q = (document.getElementById("q").value || "").toLowerCase().trim();
      let list = [...products];

      if(activeCat !== "Todos") list = list.filter(p => p.category === activeCat);
      if(q) list = list.filter(p => (p.name + " " + p.category).toLowerCase().includes(q));

    //   ordenar por top y luego por precios de mayor a menor
    list = list.sort((a, b) => {
      // Top primero
        if (a.badge === "TOP" && b.badge !== "TOP") return -1;
        if (a.badge !== "TOP" && b.badge === "TOP") return 1;
        
        // Luego por precio (mayor a menor)
        const priceA = parseFloat(a.price.replace("S/", "").trim());
        const priceB = parseFloat(b.price.replace("S/", "").trim());
        return priceB - priceA;
    });

      renderCards(list);
    }

// COMBOS

const combos = [
  { name:"Gold Label + 2 Red Bull + Hielo", category:"Combo", desc:"Combo premium para ocasiones especiales.", price:"S/ 250.00", badge:"TOP", img:"/Imagenes/Combos/combo_gold_label.webp"},  
  { name:"Double Black + 2 Red Bull + Hielo", category:"Combo", desc:"Sabor intenso para disfrutar de noche.", price:"S/ 240.00", badge:"None", img:"/Imagenes/Combos/combo_double_black.webp"},
  { name:"Black Label + 2 Red Bull + Hielo", category:"Combo", desc:"Clásico elegante, ideal para compartir.", price:"S/ 130.00", badge:"None", img:"/Imagenes/Combos/combo_black_label.webp"},
  { name:"Captain Morgan + Coca Cola 2.5L + Hielo", category:"Combo", desc:"Refrescante y perfecto para reuniones.", price:"S/ 54.00", badge:"None", img:"/Imagenes/Combos/combo_captain_morgan.webp"},
  { name:"Cartavio Selecto 5 años + Coca Cola 2.5L + Hielo", category:"Combo", desc:"Buen ron, buen precio, buena compañía.", price:"S/ 49.00", badge:"None", img:"/Imagenes/Combos/combo_selecto_5.webp"},
  { name:"Cartavio Selecto 8 años + Coca Cola 2.5L + Hielo", category:"Combo", desc:"Más cuerpo y sabor para la noche.", price:"S/ 57.00", badge:"None", img:"/Imagenes/Combos/combo_selecto_8.webp"},
  { name:"Whisky Ballantines + Guarana 2L", category:"Combo", desc:"Suave y rendidor para compartir.", price:"S/ 42.00", badge:"None", img:"/Imagenes/Combos/combo_ballantines.webp"},
  { name:"Red Label + 2 Aguas + Hielo", category:"Combo", desc:"Simple, práctico y listo para servir.", price:"S/ 55.00", badge:"None", img:"/Imagenes/Combos/combo_red_label.webp"},
];


function getCombos(){
  return combos;
}

function renderCombos(){
  const comboGrid = document.getElementById("comboGrid");
  // Si no hay combos, ocultamos la sección
  const section = document.getElementById("combos");
  
  if(!comboGrid || !section) return;

  const combos = getCombos();


  if(!combos.length){
    section.style.display = "none";
    return;
  }

  comboGrid.innerHTML = "";
  combos.forEach(c => {
    const badgeHTML = (c.badge && c.badge !== "None") ? `<span class="badge badge-top">${c.badge}</span>` : "";
    const card = document.createElement("div");
    card.className = "combo-card";
    card.innerHTML = `
      <div class="combo-img">
        <img src="${c.img}" alt="${c.name}" loading="lazy" decoding="async">
        <div class="combo-overlay"></div>
        <div class="combo-badge">${badgeHTML}</div>
      </div>

      <div class="combo-content">
        <div class="combo-title">
          <b>${c.name}</b>
          <span class="combo-price">${c.price}</span>
        </div>
        <div class="combo-desc">${c.desc}</div>

        <div class="combo-actions">
          <button class="btn whatsapp btn-combo" style="flex:1 data-message="">
            Consultar por WhatsApp
          </button>
        </div>
      </div>
    `;

    const btn = card.querySelector(".btn-combo");
    btn.dataset.message = `${BASE_MESSAGE} ${c.name}.`;
    btn.addEventListener("click", () => {
      openWhatsapp(btn.dataset.message);
    });

    card.style.cursor = "pointer";
    card.addEventListener("click", () => openComboModal(c));
    comboGrid.appendChild(card);
  });

  const btnCombos = document.getElementById("btnCombos");
  if(btnCombos){
    btnCombos.addEventListener("click", () => {
       openWhatsapp("Hola, vengo desde la web de Licorerías Brufa's. Quisiera consultar por los combos disponibles.");
    });
  }
}

function openComboModal(combo){
  const modal = document.getElementById("comboModal");
  const img = document.getElementById("comboModalImg");
  const title = document.getElementById("comboModalTitle");
  const desc = document.getElementById("comboModalDesc");
  const price = document.getElementById("comboModalPrice");
  const badge = document.getElementById("comboModalBadge");
  const btn = document.getElementById("comboModalWsp");

  img.src = combo.img;
  img.alt = combo.name;

  title.textContent = combo.name;
  desc.textContent = combo.desc || "";
  price.textContent = combo.price || "";

  if(combo.badge && combo.badge !== "None"){
    badge.style.display = "inline-flex";
    badge.textContent = combo.badge;
  }else{
    badge.style.display = "none";
    badge.textContent = "";
  }

  btn.onclick = () => openWhatsapp(`${BASE_MESSAGE} ${combo.name} (${combo.price}).`);

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeComboModal(){
  const modal = document.getElementById("comboModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

/* Listeners para cerrar */
document.getElementById("comboModalClose").addEventListener("click", closeComboModal);
document.getElementById("comboModalBackdrop").addEventListener("click", closeComboModal);
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeComboModal();
});


document.getElementById("q").addEventListener("input", apply);

renderFilters();
apply();
renderCombos();