
 tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#003366',
                        secondary: '#005599',
                        accent: '#ff9900',
                        light: '#f4f4f4',
                    },
                    fontFamily: {
                        sans: ['Poppins', 'sans-serif'],
                    },
                }
            }
        }


window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    navbar.style.background = "rgba(255, 255, 255, 100%)";
});

// Seleciona os elementos do menu principal
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('header nav ul');
const menuItems = document.querySelectorAll('header nav ul li a');
menuItems[0].classList.add('MenuItmsEdit');

// Seleciona os elementos do menu de idioma
const dropBtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');
const dropdownItems = document.querySelectorAll('.dropdown-content a');
dropdownItems[0].classList.add('MenuItmsEdit');

// Alternar o menu principal
menuBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdown.classList.remove('active');
    dropBtn.classList.remove('clicked');
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// Alternar o menu de idioma
dropBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
    dropdown.classList.toggle('active');
    dropBtn.classList.toggle('clicked');
});

// Fecha os menus ao clicar fora deles
document.body.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
    }
    if (!dropdown.contains(event.target) && !dropBtn.contains(event.target)) {
        dropdown.classList.remove('active');
        dropBtn.classList.remove('clicked');
    }
});

// Fecha o menu principal ao clicar em um item
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        menuItems.forEach(i => i.classList.remove('MenuItmsEdit'));
        item.classList.toggle('MenuItmsEdit');
    });
});

// Fecha o menu suspenso ao clicar em um item
dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
        dropdown.classList.remove('active');
        dropBtn.classList.remove('clicked');
        dropdownItems.forEach(i => i.classList.remove('MenuItmsEdit'));
        item.classList.toggle('MenuItmsEdit');
    });
});

// Função para mostrar divs
function mostrarDiv(id) {
    document.querySelectorAll(".conteudo").forEach(div => {
        div.classList.remove("ativo");
    });
    document.getElementById(id).classList.add("ativo");
}

const carousel = document.getElementById("carousel");

carousel.addEventListener("mouseenter", () => {
    carousel.style.animationPlayState = "paused";
});

carousel.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
});


// Carrossel
let currentIndex = Math.floor(Math.random() * document.querySelectorAll('.carrossel-item').length);
let slideInterval;
const slides = document.querySelectorAll('.carrossel-item');
const totalSlides = slides.length;

// Função para mover o carrossel
function moveSlide(direction) {
    slides[currentIndex].classList.remove('show');
    slides[currentIndex].classList.add('hide');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const carrossel = document.querySelector('.carrossel-images');
    carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;

    setTimeout(() => {
        slides[currentIndex].classList.remove('hide');
        slides[currentIndex].classList.add('show');
    }, 500);
}

// Função para iniciar o carrossel automaticamente
function startAutoSlide() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 10000);
}

// Inicia o carrossel automaticamente quando a página carrega
window.onload = () => {
    slides[currentIndex].classList.add('show');
    startAutoSlide();
};
const serviceData = {
    desc1: { 
        pt: { 
            texto: "Oferecemos as melhores tarifas em voos nacionais e internacionais, com opções flexíveis para atender às suas necessidades de viagem. Trabalhamos com as principais companhias aéreas para garantir conforto e segurança.", 
            imagem: "./imagem/servicos/ERB.jpg" 
        },
        en: { 
            texto: "We offer the best fares on national and international flights, with flexible options to meet your travel needs. We work with major airlines to ensure comfort and safety.", 
            imagem: "./imagem/servicos/ERB.jpg" 
        }
    },
    desc2: { 
        pt: { 
            texto: "Garanta sua estadia perfeita com nossa vasta seleção de hotéis, resorts e pousadas. Desde opções econômicas a luxuosas, encontramos o lugar ideal para você relaxar e aproveitar sua viagem.", 
            imagem: "./imagem/servicos/Reserva Hotel.jpg" 
        },
        en: { 
            texto: "Ensure your perfect stay with our wide selection of hotels, resorts, and guesthouses. From budget-friendly to luxurious options, we find the ideal place for you to relax and enjoy your trip.", 
            imagem: "./imagem/servicos/Reserva Hotel.jpg" 
        }
    },
    desc3: { 
        pt: { 
            texto: "Simplificamos o processo de obtenção de vistos e outros documentos de viagem. Nossa equipe oferece assistência completa para garantir que você tenha tudo o que precisa para sua jornada internacional.", 
            imagem: "./imagem/servicos/Visa Passaporte.jpg" 
        },
        en: { 
            texto: "We simplify the process of obtaining visas and other travel documents. Our team provides complete assistance to ensure you have everything you need for your international journey.", 
            imagem: "./imagem/servicos/Visa Passaporte.jpg" 
        }
    },
    desc4: { 
        pt: { 
            texto: "Desfrute de um transporte confortável e seguro do aeroporto para o seu destino e vice-versa. Nossos serviços de transfer garantem pontualidade e tranquilidade, seja para viagens individuais ou em grupo.", 
            imagem: "./imagem/servicos/Tranfer.jpg" 
        },
        en: { 
            texto: "Enjoy comfortable and safe transportation from the airport to your destination and vice versa. Our transfer services ensure punctuality and peace of mind, whether for individual or group travel.", 
            imagem: "./imagem/servicos/Tranfer.jpg" 
        }
    },
    desc5: { 
        pt: { 
            texto: "Explore o mundo com nossos pacotes turísticos completos e personalizados. Criamos roteiros que incluem voos, hospedagem, passeios e atividades, adaptados aos seus interesses e orçamento.", 
            imagem: "./imagem/servicos/Pacotes turisticos.jpg" 
        },
        en: { 
            texto: "Explore the world with our complete and personalized tour packages. We create itineraries that include flights, accommodation, tours, and activities, tailored to your interests and budget.", 
            imagem: "./imagem/servicos/Pacotes turisticos.jpg" 
        }
    },
    desc6: { 
        pt: { 
            texto: "Viaje com total tranquilidade sabendo que você está protegido. Oferecemos diversas opções de seguros de viagem que cobrem emergências médicas, cancelamento de viagem, perda de bagagem e muito mais.", 
            imagem: "./imagem/servicos/Travel insuarance.jpg" 
        },
        en: { 
            texto: "Travel with complete peace of mind knowing you are protected. We offer various travel insurance options that cover medical emergencies, trip cancellation, lost luggage, and more.", 
            imagem: "./imagem/servicos/Travel insuarance.jpg" 
        }
    },
    desc7: { 
        pt: { 
            texto: "Para uma experiência de viagem exclusiva e personalizada, nossos voos charter oferecem flexibilidade e privacidade. Ideal para grupos, eventos corporativos ou viagens de luxo.", 
            imagem: "./imagem/servicos/charter flights.avif" 
        },
        en: { 
            texto: "For an exclusive and personalized travel experience, our charter flights offer flexibility and privacy. Ideal for groups, corporate events, or luxury travel.", 
            imagem: "./imagem/servicos/charter flights.avif" 
        }
    },
    desc8: { 
        pt: { 
            texto: "Tenha liberdade para explorar seu destino no seu próprio ritmo. Oferecemos aluguel de veículos nacionais e internacionais, com uma ampla frota para atender a todas as suas necessidades de locomoção.", 
            imagem: "./imagem/servicos/rent car.avif" 
        },
        en: { 
            texto: "Have the freedom to explore your destination at your own pace. We offer national and international vehicle rentals, with a wide fleet to meet all your transportation needs.", 
            imagem: "./imagem/servicos/rent car.avif" 
        }
    }
};

function getServiceModalLang() {
    const lang = localStorage.getItem("selectedLanguage") || "pt";
    const t = (window.translations && window.translations[lang]) ? window.translations[lang] : {};

    const FALLBACK = {
        pt: {
            service_label: "Serviço",
            service_company: "M&H Global Travel",
            service_budget: "Orçamento",
            service_book: "Reservar",
        },
        en: {
            service_label: "Service",
            service_company: "M&H Global Travel",
            service_budget: "Get Quote",
            service_book: "Book Now",
        }
    };

    return {
        label: t.service_label || FALLBACK[lang].service_label,
        company: t.service_company || FALLBACK[lang].service_company,
        budget: t.service_budget || FALLBACK[lang].service_budget,
        book: t.service_book || FALLBACK[lang].service_book
    };
}
function focusNameInput() {
    const nameInput = document.getElementById("name");
    if (nameInput) {
        closeCardModal();
        nameInput.focus();
        nameInput.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}


// ----- SELECTORS -----
const modal = document.getElementById("serviceModal");
const modalImg = document.getElementById("modalImg");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("closeModal") || document.querySelector(".close-btn");

// Utility: encode path to avoid issues with spaces in filenames
function encodeImagePath(path){
  try{
    return path.split('/').map(seg => encodeURIComponent(seg)).join('/');
  } catch(e) {
    return path;
  }
}

// Escape HTML to avoid XSS if any text is dynamic
function escapeHtml(str){
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// Opens the card-style modal using id from serviceData (ex: 'desc1')
function openCardModal(id){
  const currentLang = localStorage.getItem('selectedLanguage') || 'pt';
  if(!serviceData || !serviceData[id] || !serviceData[id][currentLang]){
    console.warn('serviceData ou id inválido', id);
    return;
  }
  const data = serviceData[id][currentLang];
// Antes de carregar a imagem:
// Aplicar skeletons
modalImg.classList.add("skeleton");
modalImg.style.backgroundImage = "";
modalText.classList.add("loading");

// Carregar imagem real
const imgSrc = encodeImagePath(serviceData[id][currentLang].imagem);
const tempImg = new Image();

tempImg.onload = function () {
    // remover skeleton da imagem
    modalImg.classList.remove("skeleton");
    modalImg.style.backgroundImage = `url('${imgSrc}')`;

    // agora substituir o conteúdo por texto real multilíngue
    modalText.innerHTML = `
      <div>
        <h3 id="modalTitle">${escapeHtml(title)}</h3>
        <div class="meta-row">${L.label} • ${L.company}</div>
        <p>${escapeHtml(data.texto)}</p>
      </div>

      <div class="action-row">
      <a href="#" class="btn-outline" onclick="event.preventDefault(); focusNameInput();">
    ${L.budget}
</a>

<a href="#" class="btn-primary" onclick="event.preventDefault(); focusNameInput();">
    ${L.book}
</a>
      </div>
    `;
};

tempImg.src = imgSrc;


  // set image (encoded)
 // modalImg.style.backgroundImage = `url('${encodeImagePath(data.imagem)}')`;

  // try to get a friendly title from DOM (falls back to generated)
  let titleFromDom = document.querySelector(`[data-id="${id}"] h3`);
  const title = titleFromDom ? titleFromDom.innerText : (id === 'desc1' ? 'Voos' : id.replace('desc','Serviço '));

  const L = getServiceModalLang();

modalText.innerHTML = `
  <div class="skeleton skeleton-title"></div>
  <div class="skeleton skeleton-paragraph"></div>
  <div class="skeleton skeleton-paragraph"></div>
  <div class="skeleton skeleton-paragraph short"></div>

  <div class="action-row">
    <div class="skeleton skeleton-paragraph" style="width:120px; height:36px; border-radius:10px;"></div>
    <div class="skeleton skeleton-paragraph" style="width:120px; height:36px; border-radius:10px;"></div>
  </div>
`;



  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');

  // accessibilty: foco no botão fechar
  if(closeBtn && typeof closeBtn.focus === 'function') closeBtn.focus();
}

// Close modal
function closeCardModal(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}

// Attach events
if(closeBtn) closeBtn.addEventListener('click', closeCardModal);
modal.addEventListener('click', function(e){
  if(e.target === modal) closeCardModal();
});
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeCardModal();
});

// Attach click to any existing service-card links (keeps your HTML structure)
document.querySelectorAll('.service-card a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.parentElement.getAttribute("data-id");
    if(id) openCardModal(id);
  });
});




let sobreIndex = 0;
const sobreSlides = document.querySelectorAll('.sobre-item');
const sobreTotalSlides = sobreSlides.length;
let sobreSlideInterval;

// Função para mover o carrossel
function sobreMoveSlide(direction) {
    sobreIndex += direction;

    if (sobreIndex < 0) {
        sobreIndex = sobreTotalSlides - 1;
    } else if (sobreIndex >= sobreTotalSlides) {
        sobreIndex = 0;
    }

    document.querySelector('.sobre-images').style.transform =
        `translateX(-${sobreIndex * 100}%)`;
}

// Função para iniciar o carrossel automático
function sobreStartAutoSlide() {
    sobreSlideInterval = setInterval(() => {
        sobreMoveSlide(1);
    }, 5000);
}

// Inicia o carrossel quando a página carrega
window.addEventListener("load", () => {
    sobreStartAutoSlide();
});



function scrollToContact() {
    // Seleciona o elemento com id "contact"
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        // Rola suavemente até o elemento
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const consent = document.getElementById("cookieConsent");
    const overlay = document.getElementById("cookieOverlay");
    const acceptBtn = document.getElementById("acceptCookies");
    const declineBtn = document.getElementById("declineCookies");

    // se ainda não aceitou
    if (!localStorage.getItem("cookieConsent")) {
        overlay.classList.add("active");
        consent.classList.add("active");
    }

    function closeBanner(choice) {
        localStorage.setItem("cookieConsent", choice);

        // animação reversa
        consent.classList.remove("active");
        overlay.classList.remove("active");
    }

    acceptBtn.addEventListener("click", () => closeBanner("accepted"));
    declineBtn.addEventListener("click", () => closeBanner("declined"));
});
