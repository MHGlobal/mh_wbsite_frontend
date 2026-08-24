// Objeto de traduções
const translations = {
    pt: {
        // Navbar
        home: "Início",
        about: "Sobre",
        contact: "Contacto",

        // Seção de Início (Hero)
        heroTitle: "Explore o Mundo com a M&H Global Travel",
        heroSubtitle: "Descubra destinos incríveis e viva experiências inesquecíveis",
        
        // Carrossel de Destinos (Início)
        destinationsCarousel_JNB: "África do Sul - Johannesburg (JNB)",
        destinationsCarousel_MPM: "Moçambique - Maputo (MPM)",
        destinationsCarousel_LAD: "Angola - Luanda (LAD)",
        destinationsCarousel_DOH: "Catar - Doha (DOH)",
        destinationsCarousel_LHR: "Reino Unido - Londres Heathrow (LHR)",
        destinationsCarousel_ADD: "Etiópia - Adis Abeba (ADD)",
        destinationsCarousel_GRU: "Brasil - São Paulo Guarulhos (GRU)",
        destinationsCarousel_DAR: "Tanzânia - Dar es Salaam (DAR)",
        destinationsCarousel_LIS: "Portugal - Lisboa (LIS)",

        // Seção de Destinos Populares
        popularDestinationsTitle: "Destinos Populares",
        popularDestinationsSubtitle: "Explore nossos destinos mais procurados e comece a planejar sua próxima aventura",
        popularDestinations_CPT_Country: "África do Sul",
        popularDestinations_CPT_City: "Cape Town (CPT)",
        popularDestinations_MPM_Country: "Moçambique",
        popularDestinations_MPM_City: "Maputo (MPM)",
        popularDestinations_DXB_Country: "Emirados Árabes",
        popularDestinations_DXB_City: "Dubai (DXB)",
        popularDestinations_LIS_Country: "Portugal",
        popularDestinations_LIS_City: "Lisboa (LIS)",
        popularDestinations_BadgePopular: "POPULAR",
        popularDestinations_BadgeTop2024: "TOP 2024",
        popularDestinations_FlightInfo: "Voos diretos",
        popularDestinations_ExploreBtn: "Explorar",
        popularDestinations_ViewAll: "Ver todos os destinos",

        // Seção de Serviços
        servicesTitle: "Nossos Serviços",
        servicesSubtitle: "Oferecemos soluções completas para tornar sua viagem perfeita",
        service_AirTickets_Title: "Passagens Aéreas",
        service_AirTickets_Desc: "As melhores tarifas em voos nacionais e internacionais.",
        service_Accommodation_Title: "Hospedagem",
        service_Accommodation_Desc: "Reservas em hotéis, resorts e pousadas com os melhores preços.",
        service_Visas_Title: "Vistos e Documentos",
        service_Visas_Desc: "Assistência completa para obtenção de vistos e documentos.",
        service_Transfers_Title: "Transferes",
        service_Transfers_Desc: "Transporte confortável e seguro do aeroporto para seu destino.",
        service_TourPackages_Title: "Pacotes Turísticos",
        service_TourPackages_Desc: "Pacotes completos personalizados para todos os tipos de viajantes.",
        service_TravelInsurance_Title: "Seguros de Viagem",
        service_TravelInsurance_Desc: "Cobertura completa para garantir sua tranquilidade.",
        service_CharterFlights_Title: "Voos Charter",
        service_CharterFlights_Desc: "Serviço exclusivo de voos privados e fretamentos.",
        service_RentCar_Title: "Rent a Car",
        service_RentCar_Desc: "Aluguel de veículos nacionais e internacionais.",
        service_LearnMore: "Saiba mais",

        // Seção Sobre Nós
        aboutUsTitle: "Sobre Nós",
        aboutUsParagraph1: "A M&H Global Travel é uma agência de viagens moçambicana, localizada na Cidade de Pemba, Rua do Aeroporto",
        aboutUsParagraph2: "Oferecemos soluções completas e personalizadas para todos os tipos de viajantes, garantindo uma jornada segura e confortável desde o planejamento até a decolagem. Nossa equipe de especialistas está pronta para transformar seus sonhos de viagem em realidade.",
        aboutUs_Experience: "Experiência",
        aboutUs_Security: "Segurança",
        aboutUs_CompetitivePrices: "Preços Competitivos",
        aboutUs_PersonalizedService: "Atendimento Personalizado",
        aboutUs_ContactBtn: "Fale Conosco",

        // Seção Call to Action (CTA)
        ctaTitle: "Pronto para sua próxima aventura?",
        ctaText: "Entre em contacto conosco e deixe que criemos a viagem perfeita para você",

        // Seção de Contato
        contactTitle: "Entre em Contacto",
contactSubtitle: "Tem dúvidas ou precisa de um orçamento personalizado? Preencha o formulário ao lado e nossa equipe entrará em contato o mais breve possível.",
contact_AddressTitle: "Endereço",
contact_Address: "Rua do Aeroporto,Cidade de Pemba, Cabo Delgado",
contact_PhoneTitle: "Telefone",
contact_EmailTitle: "Email",
contact_OperatingHoursTitle: "Horário de Funcionamento",
contact_OperatingHoursWeekdays: "Segunda a Sexta: 8h00 - 17h00",
contact_OperatingHoursSaturday: "Sábado: 9h00 - 13h00",
contact_Form_FullName: "Nome Completo",
contact_Form_Email: "Email",
contact_Form_EmailBtn: "Confirmar",
auth_ValidateEmailBtn: "Validar Email",
auth_CodeSentMessage: "Um código foi enviado para o seu email. Insira abaixo:",
auth_ResendCountdown: "Reenviar (60s)",
contact_Form_Phone: "Telefone",
contact_Form_Subject: "Assunto",
contact_Form_Subject_Select: "Selecione",
contact_Form_Subject_Query: "Consulta sobre viagem",
contact_Form_Subject_Quote: "Solicitação de orçamento",
contact_Form_Subject_Visas: "Informações sobre vistos",
contact_Form_Subject_Flights: "Reserva de passagens aéreas",
contact_Form_Subject_Charter: "Voos charter",
contact_Form_Subject_Transfers: "Transfers",
contact_Form_Subject_Hotels: "Reserva de hotéis",
contact_Form_Subject_Passport: "Assessoria para passaporte",
contact_Form_Subject_Tours: "Pacotes turísticos personalizados",
contact_Form_Subject_Insurance: "Seguro de viagem",
contact_Form_Subject_CarRental: "Aluguel de viaturas",
contact_Form_Subject_Other: "Outro",
contact_Form_Message: "Mensagem",
contact_Form_SendBtn: "Enviar Mensagem",

        // Rodapé (Footer)
        footer_Info: "Transformando sonhos em experiências inesquecíveis desde 2024.",
        footer_QuickLinks: "Links Rápidos",
        footer_Home: "Início",
        footer_Destinations: "Destinos",
        footer_Services: "Serviços",
        footer_AboutUs: "Sobre Nós",
        footer_Contact: "Contacto",
        footer_ServicesTitle: "Serviços",
        footer_AirTickets: "Passagens Aéreas",
        footer_Accommodation: "Hospedagem",
        footer_TourPackages: "Pacotes Turísticos",
        footer_Visas: "Vistos",
        footer_Insurance: "Seguros",
        footer_CharterFlights: "Voos Charter",
        footer_RentCar: "Rent Car",
        footer_ContactsTitle: "Contacto",
        footer_Location: "Pemba, Moçambique",
        footer_Copyright: "© 2025 M&H Global Travel. Todos os direitos reservados.",
        footer_TermsOfService: "Termos de Serviço",
        footer_PrivacyPolicy: "Política de Privacidade"
    },
    en: {
        // Navbar
        home: "Home",
        about: "About",
        contact: "Contact",

        // Seção de Início (Hero)
        heroTitle: "Explore the World with M&H Global Travel",
        heroSubtitle: "Discover incredible destinations and live unforgettable experiences",

        // Carrossel de Destinos (Início)
        destinationsCarousel_JNB: "South Africa - Johannesburg (JNB)",
        destinationsCarousel_MPM: "Mozambique - Maputo (MPM)",
        destinationsCarousel_LAD: "Angola - Luanda (LAD)",
        destinationsCarousel_DOH: "Qatar - Doha (DOH)",
        destinationsCarousel_LHR: "United Kingdom - London Heathrow (LHR)",
        destinationsCarousel_ADD: "Ethiopia - Addis Ababa (ADD)",
        destinationsCarousel_GRU: "Brazil - São Paulo Guarulhos (GRU)",
        destinationsCarousel_DAR: "Tanzania - Dar es Salaam (DAR)",
        destinationsCarousel_LIS: "Portugal - Lisbon (LIS)",

        // Seção de Destinos Populares
        popularDestinationsTitle: "Popular Destinations",
        popularDestinationsSubtitle: "Explore our most sought-after destinations and start planning your next adventure",
        popularDestinations_CPT_Country: "South Africa",
        popularDestinations_CPT_City: "Cape Town (CPT)",
        popularDestinations_MPM_Country: "Mozambique",
        popularDestinations_MPM_City: "Maputo (MPM)",
        popularDestinations_DXB_Country: "United Arab Emirates",
        popularDestinations_DXB_City: "Dubai (DXB)",
        popularDestinations_LIS_Country: "Portugal",
        popularDestinations_LIS_City: "Lisbon (LIS)",
        popularDestinations_BadgePopular: "POPULAR",
        popularDestinations_BadgeTop2024: "TOP 2024",
        popularDestinations_FlightInfo: "Direct flights",
        popularDestinations_ExploreBtn: "Explore",
        popularDestinations_ViewAll: "View all destinations",

        // Seção de Serviços
        servicesTitle: "Our Services",
        servicesSubtitle: "We offer complete solutions to make your trip perfect",
        service_AirTickets_Title: "Air Tickets",
        service_AirTickets_Desc: "The best fares on national and international flights.",
        service_Accommodation_Title: "Accommodation",
        service_Accommodation_Desc: "Reservations in hotels, resorts, and guesthouses at the best prices.",
        service_Visas_Title: "Visas and Documents",
        service_Visas_Desc: "Complete assistance for obtaining visas and documents.",
        service_Transfers_Title: "Transfers",
        service_Transfers_Desc: "Comfortable and safe transportation from the airport to your destination.",
        service_TourPackages_Title: "Tour Packages",
        service_TourPackages_Desc: "Complete personalized packages for all types of travelers.",
        service_TravelInsurance_Title: "Travel Insurance",
        service_TravelInsurance_Desc: "Comprehensive coverage to ensure your peace of mind.",
        service_CharterFlights_Title: "Charter Flights",
        service_CharterFlights_Desc: "Exclusive service for private and chartered flights.",
        service_RentCar_Title: "Rent a Car",
        service_RentCar_Desc: "National and international vehicle rentals.",
        service_LearnMore: "Learn more",

        // Seção Sobre Nós
        aboutUsTitle: "About Us",
        aboutUsParagraph1: "M&H Global Travel is a Mozambican travel agency, located in Pemba City, Rua do Aeroporto ",
        aboutUsParagraph2: "We offer complete and personalized solutions for all types of travelers, ensuring a safe and comfortable journey from planning to takeoff. Our team of specialists is ready to turn your travel dreams into reality.",
        aboutUs_Experience: "Experience",
        aboutUs_Security: "Security",
        aboutUs_CompetitivePrices: "Competitive Prices",
        aboutUs_PersonalizedService: "Personalized Service",
        aboutUs_ContactBtn: "Contact Us",

        // Seção Call to Action (CTA)
        ctaTitle: "Ready for your next adventure?",
        ctaText: "Contact us and let us create the perfect trip for you",

        // Seção de Contato
        contactTitle: "Get in Touch",
contactSubtitle: "Have questions or need a personalized quote? Fill out the form and our team will contact you as soon as possible.",
contact_AddressTitle: "Address",
contact_Address: "Rua do Aeroporto, Pemba City, Cabo Delgado",
contact_PhoneTitle: "Phone",
contact_EmailTitle: "Email",
contact_OperatingHoursTitle: "Operating Hours",
contact_OperatingHoursWeekdays: "Monday to Friday: 8:00 AM - 5:00 PM",
contact_OperatingHoursSaturday: "Saturday: 9:00 AM - 1:00 PM",
contact_Form_FullName: "Full Name",
contact_Form_Email: "Email",
contact_Form_EmailBtn: "Confirm",
auth_ValidateEmailBtn: "Validate Email",
auth_CodeSentMessage: "A code has been sent to your email. Enter it below:",
auth_ResendCountdown: "Resend (60s)",
contact_Form_Phone: "Phone",
contact_Form_Subject: "Subject",
contact_Form_Subject_Select: "Select",
contact_Form_Subject_Query: "Travel inquiry",
contact_Form_Subject_Quote: "Quote request",
contact_Form_Subject_Visas: "Visa information",
contact_Form_Subject_Flights: "Flight booking",
contact_Form_Subject_Charter: "Charter flights",
contact_Form_Subject_Transfers: "Transfers",
contact_Form_Subject_Hotels: "Hotel booking",
contact_Form_Subject_Passport: "Passport assistance",
contact_Form_Subject_Tours: "Customized tour packages",
contact_Form_Subject_Insurance: "Travel insurance",
contact_Form_Subject_CarRental: "Car rental",
contact_Form_Subject_Other: "Other",
contact_Form_Message: "Message",
contact_Form_SendBtn: "Send Message",

        // Rodapé (Footer)
        footer_Info: "Turning dreams into unforgettable experiences since 2024.",
        footer_QuickLinks: "Quick Links",
        footer_Home: "Home",
        footer_Destinations: "Destinations",
        footer_Services: "Services",
        footer_AboutUs: "About Us",
        footer_Contact: "Contact",
        footer_ServicesTitle: "Services",
        footer_AirTickets: "Air Tickets",
        footer_Accommodation: "Accommodation",
        footer_TourPackages: "Tour Packages",
        footer_Visas: "Visas",
        footer_Insurance: "Insurance",
        footer_CharterFlights: "Charter Flights",
        footer_RentCar: "Rent Car",
        footer_ContactsTitle: "Contact",
        footer_Location: "Pemba, Mozambique",
        footer_Copyright: "© 2025 M&H Global Travel. All rights reserved.",
        footer_TermsOfService: "Terms of Service",
        footer_PrivacyPolicy: "Privacy Policy"
    }
};

// Função para mudar o idioma
function mudarIdioma(lang) {
    // Salva o idioma selecionado no localStorage
    localStorage.setItem('selectedLanguage', lang);

    const currentTranslations = translations[lang];

    // Navbar
    document.querySelector('nav ul li:nth-child(1) a').textContent = currentTranslations.home;
    document.querySelector('nav ul li:nth-child(2) a').textContent = currentTranslations.about;
    document.querySelector('nav ul li:nth-child(3) a').textContent = currentTranslations.contact;

    // Seção de Início (Hero)
    document.querySelector('.overlay h1').textContent = currentTranslations.heroTitle;
    document.querySelector('.overlay p').textContent = currentTranslations.heroSubtitle;

    // Carrossel de Destinos (Início)
    document.querySelector('.carrossel-item:nth-child(1) p').textContent = currentTranslations.destinationsCarousel_JNB;
    document.querySelector('.carrossel-item:nth-child(2) p').textContent = currentTranslations.destinationsCarousel_MPM;
    document.querySelector('.carrossel-item:nth-child(3) p').textContent = currentTranslations.destinationsCarousel_LAD;
    document.querySelector('.carrossel-item:nth-child(4) p').textContent = currentTranslations.destinationsCarousel_DOH;
    document.querySelector('.carrossel-item:nth-child(5) p').textContent = currentTranslations.destinationsCarousel_LHR;
    document.querySelector('.carrossel-item:nth-child(6) p').textContent = currentTranslations.destinationsCarousel_ADD;
    document.querySelector('.carrossel-item:nth-child(7) p').textContent = currentTranslations.destinationsCarousel_GRU;
    document.querySelector('.carrossel-item:nth-child(8) p').textContent = currentTranslations.destinationsCarousel_DAR;
    document.querySelector('.carrossel-item:nth-child(9) p').textContent = currentTranslations.destinationsCarousel_LIS;

    // Seção de Destinos Populares
    document.querySelector('#destinations .destinations-header h2').textContent = currentTranslations.popularDestinationsTitle;
    document.querySelector('#destinations .destinations-header p').textContent = currentTranslations.popularDestinationsSubtitle;
    
    // Destino 1
    document.querySelector('.destinations-card:nth-child(1) .destinations-card-info h3').textContent = currentTranslations.popularDestinations_CPT_Country;
    document.querySelector('.destinations-card:nth-child(1) .destinations-card-info p').textContent = currentTranslations.popularDestinations_CPT_City;
    document.querySelector('.destinations-card:nth-child(1) .destinations-badge').textContent = currentTranslations.popularDestinations_BadgePopular;
    document.querySelector('.destinations-card:nth-child(1) .destinations-flight-info').innerHTML = `<i class="fas fa-plane"></i> ${currentTranslations.popularDestinations_FlightInfo}`;
    document.querySelector('.destinations-card:nth-child(1) .destinations-btn-explore').innerHTML = `<i class="fas fa-plus-circle"></i> ${currentTranslations.popularDestinations_ExploreBtn}`;

    // Destino 2
    document.querySelector('.destinations-card:nth-child(2) .destinations-card-info h3').textContent = currentTranslations.popularDestinations_MPM_Country;
    document.querySelector('.destinations-card:nth-child(2) .destinations-card-info p').textContent = currentTranslations.popularDestinations_MPM_City;
    document.querySelector('.destinations-card:nth-child(2) .destinations-flight-info').innerHTML = `<i class="fas fa-plane"></i> ${currentTranslations.popularDestinations_FlightInfo}`;
    document.querySelector('.destinations-card:nth-child(2) .destinations-btn-explore').innerHTML = `<i class="fas fa-plus-circle"></i> ${currentTranslations.popularDestinations_ExploreBtn}`;

    // Destino 3
    document.querySelector('.destinations-card:nth-child(3) .destinations-card-info h3').textContent = currentTranslations.popularDestinations_DXB_Country;
    document.querySelector('.destinations-card:nth-child(3) .destinations-card-info p').textContent = currentTranslations.popularDestinations_DXB_City;
    document.querySelector('.destinations-card:nth-child(3) .destinations-badge').textContent = currentTranslations.popularDestinations_BadgeTop2024;
    document.querySelector('.destinations-card:nth-child(3) .destinations-flight-info').innerHTML = `<i class="fas fa-plane"></i> ${currentTranslations.popularDestinations_FlightInfo}`;
    document.querySelector('.destinations-card:nth-child(3) .destinations-btn-explore').innerHTML = `<i class="fas fa-plus-circle"></i> ${currentTranslations.popularDestinations_ExploreBtn}`;

    // Destino 4
    document.querySelector('.destinations-card:nth-child(4) .destinations-card-info h3').textContent = currentTranslations.popularDestinations_LIS_Country;
    document.querySelector('.destinations-card:nth-child(4) .destinations-card-info p').textContent = currentTranslations.popularDestinations_LIS_City;
    document.querySelector('.destinations-card:nth-child(4) .destinations-flight-info').innerHTML = `<i class="fas fa-plane"></i> ${currentTranslations.popularDestinations_FlightInfo}`;
    document.querySelector('.destinations-card:nth-child(4) .destinations-btn-explore').innerHTML = `<i class="fas fa-plus-circle"></i> ${currentTranslations.popularDestinations_ExploreBtn}`;

    document.querySelector('.destinations-footer a').innerHTML = `${currentTranslations.popularDestinations_ViewAll} <i class="fas fa-arrow-right"></i>`;

    // Seção de Serviços
    document.querySelector('#services .section-header h2').textContent = currentTranslations.servicesTitle;
    document.querySelector('#services .section-header p').textContent = currentTranslations.servicesSubtitle;

    // Serviço 1: Passagens Aéreas
    document.querySelector('.service-card:nth-child(1) h3').textContent = currentTranslations.service_AirTickets_Title;
    document.querySelector('.service-card:nth-child(1) p').textContent = currentTranslations.service_AirTickets_Desc;
    document.querySelector('.service-card:nth-child(1) a').innerHTML = `${currentTranslations.service_LearnMore} <i class="fas fa-arrow-right"></i>`;

    // Serviço 2: Hospedagem
    document.querySelector('.service-card:nth-child(2) h3').textContent = currentTranslations.service_Accommodation_Title;
    document.querySelector('.service-card:nth-child(2) p').textContent = currentTranslations.service_Accommodation_Desc;
    document.querySelector('.service-card:nth-child(2) a').innerHTML = `${currentTranslations.service_LearnMore} <i class="fas fa-arrow-right"></i>`;

    // Serviço 3: Vistos e Documentos
    document.querySelector('.service-card:nth-child(3) h3').textContent = currentTranslations.service_Visas_Title;
    document.querySelector('.service-card:nth-child(3) p').textContent = currentTranslations.service_Visas_Desc;
    document.querySelector('.service-card:nth-child(3) a').innerHTML = `${currentTranslations.service_LearnMore} <i class="fas fa-arrow-right"></i>`;

    // Serviço 4: Transferes
    document.querySelector('.service-card:nth-child(4) h3').textContent = currentTranslations.service_Transfers_Title;
    document.querySelector('.service-card:nth-child(4) p').textContent = currentTranslations.service_Transfers_Desc;
    document.querySelector('.service-card:nth-child(4) a').innerHTML = `${currentTranslations.service_LearnMore} <i class="fas fa-arrow-right"></i>`;

    // Serviço 5: Pacotes Turísticos
    document.querySelector('.service-card:nth-child(5) h3').textContent = currentTranslations.service_TourPackages_Title;
    document.querySelector('.service-card:nth-child(5) p').textContent = currentTranslations.service_TourPackages_Desc;
    document.querySelector('.service-card:nth-child(5) a').innerHTML = `${currentTranslations.service_LearnMore} <i class="fas fa-arrow-right"></i>`;

    // Serviço 6: Seguros de Viagem
    document.querySelector('.service-card:nth-child(6) h3').textContent = currentTranslations.service_TravelInsurance_Title;
    document.querySelector('.service-card:nth-child(6) p').textContent = currentTranslations.service_TravelInsurance_Desc;
    document.querySelector('.service-card:nth-child(6) a').innerHTML = `${currentTranslations.service_LearnMore} <i class="fas fa-arrow-right"></i>`;

    // Serviço 7: Voos Charter
    document.querySelector('.service-card:nth-child(7) h3').textContent = currentTranslations.service_CharterFlights_Title;
    document.querySelector('.service-card:nth-child(7) p').textContent = currentTranslations.service_CharterFlights_Desc;
    document.querySelector('.service-card:nth-child(7) a').innerHTML = `${currentTranslations.service_LearnMore} <i class="fas fa-arrow-right"></i>`;

    // Serviço 8: Rent a Car
    document.querySelector('.service-card:nth-child(8) h3').textContent = currentTranslations.service_RentCar_Title;
    document.querySelector('.service-card:nth-child(8) p').textContent = currentTranslations.service_RentCar_Desc;
    document.querySelector('.service-card:nth-child(8) a').innerHTML = `${currentTranslations.service_LearnMore} <i class="fas fa-arrow-right"></i>`;

    // Seção Sobre Nós
    document.querySelector('#about h2').textContent = currentTranslations.aboutUsTitle;
    document.querySelector('#about p:nth-of-type(1)').textContent = currentTranslations.aboutUsParagraph1;
    document.querySelector('#about p:nth-of-type(2)').textContent = currentTranslations.aboutUsParagraph2;
    document.querySelector('.grid.grid-cols-2.gap-6.mb-8 div:nth-child(1) span').textContent = currentTranslations.aboutUs_Experience;
    document.querySelector('.grid.grid-cols-2.gap-6.mb-8 div:nth-child(2) span').textContent = currentTranslations.aboutUs_Security;
    document.querySelector('.grid.grid-cols-2.gap-6.mb-8 div:nth-child(3) span').textContent = currentTranslations.aboutUs_CompetitivePrices;
    document.querySelector('.grid.grid-cols-2.gap-6.mb-8 div:nth-child(4) span').textContent = currentTranslations.aboutUs_PersonalizedService;
    document.querySelector('#about button').innerHTML = `<i class="fas fa-phone-alt mr-2"></i> ${currentTranslations.aboutUs_ContactBtn}`;

    // Seção Call to Action (CTA)
    document.querySelector('.cta-title').textContent = currentTranslations.ctaTitle;
    document.querySelector('.cta-text').textContent = currentTranslations.ctaText;

    // Seção de Contato
    document.querySelector('#contact .contact-info h2').textContent = currentTranslations.contactTitle;
    document.querySelector('#contact .contact-info p').textContent = currentTranslations.contactSubtitle;
    document.querySelector('.contact-item:nth-child(1) h4').textContent = currentTranslations.contact_AddressTitle;
    document.querySelector('.contact-item:nth-child(1) p').textContent = currentTranslations.contact_Address;
    document.querySelector('.contact-item:nth-child(2) h4').textContent = currentTranslations.contact_PhoneTitle;
    document.querySelector('.contact-item:nth-child(3) h4').textContent = currentTranslations.contact_EmailTitle;
    document.querySelector('.contact-item:nth-child(4) h4').textContent = currentTranslations.contact_OperatingHoursTitle;
    document.querySelector('.contact-item:nth-child(4) p:nth-child(2)').textContent = currentTranslations.contact_OperatingHoursWeekdays;
    document.querySelector('.contact-item:nth-child(4) p:nth-child(3)').textContent = currentTranslations.contact_OperatingHoursSaturday;

    //// Formulário de Contato
document.querySelector('#contactForm label[for="name"]').textContent = currentTranslations.contact_Form_FullName;
document.querySelector('#contactForm label[for="email"]').textContent = currentTranslations.contact_Form_Email;
document.querySelector('#contactForm button[type="button"]').innerHTML = `<i class="fas fa-envelope"></i> ${currentTranslations.contact_Form_EmailBtn}`;


document.querySelector('#contactForm label[for="phone"]').textContent = currentTranslations.contact_Form_Phone;
document.querySelector('#contactForm label[for="subject"]').textContent = currentTranslations.contact_Form_Subject;

// Opções do select
document.querySelector('#contactForm select#subject option:nth-child(1)').textContent = currentTranslations.contact_Form_Subject_Select;
document.querySelector('#contactForm select#subject option:nth-child(2)').textContent = currentTranslations.contact_Form_Subject_Query;
document.querySelector('#contactForm select#subject option:nth-child(3)').textContent = currentTranslations.contact_Form_Subject_Quote;
document.querySelector('#contactForm select#subject option:nth-child(4)').textContent = currentTranslations.contact_Form_Subject_Visas;
document.querySelector('#contactForm select#subject option:nth-child(5)').textContent = currentTranslations.contact_Form_Subject_Flights;
document.querySelector('#contactForm select#subject option:nth-child(6)').textContent = currentTranslations.contact_Form_Subject_Charter;
document.querySelector('#contactForm select#subject option:nth-child(7)').textContent = currentTranslations.contact_Form_Subject_Transfers;
document.querySelector('#contactForm select#subject option:nth-child(8)').textContent = currentTranslations.contact_Form_Subject_Hotels;
document.querySelector('#contactForm select#subject option:nth-child(9)').textContent = currentTranslations.contact_Form_Subject_Passport;
document.querySelector('#contactForm select#subject option:nth-child(10)').textContent = currentTranslations.contact_Form_Subject_Tours;
document.querySelector('#contactForm select#subject option:nth-child(11)').textContent = currentTranslations.contact_Form_Subject_Insurance;
document.querySelector('#contactForm select#subject option:nth-child(12)').textContent = currentTranslations.contact_Form_Subject_CarRental;
document.querySelector('#contactForm select#subject option:nth-child(13)').textContent = currentTranslations.contact_Form_Subject_Other;

document.querySelector('#contactForm label[for="message"]').textContent = currentTranslations.contact_Form_Message;
document.querySelector('#contactForm button[type="submit"]').innerHTML = `<i class="fas fa-paper-plane"></i> ${currentTranslations.contact_Form_SendBtn}`;

    // Rodapé (Footer)
    document.querySelector('.footer-info p').textContent = currentTranslations.footer_Info;
    document.querySelector('.footer-links h4').textContent = currentTranslations.footer_QuickLinks;
    document.querySelector('.footer-links ul li:nth-child(1) a').textContent = currentTranslations.footer_Home;
    document.querySelector('.footer-links ul li:nth-child(2) a').textContent = currentTranslations.footer_Destinations;
    document.querySelector('.footer-links ul li:nth-child(3) a').textContent = currentTranslations.footer_Services;
    document.querySelector('.footer-links ul li:nth-child(4) a').textContent = currentTranslations.footer_AboutUs;
    document.querySelector('.footer-links ul li:nth-child(5) a').textContent = currentTranslations.footer_Contact;
    document.querySelector('.footer-services h4').textContent = currentTranslations.footer_ServicesTitle;
    document.querySelector('.footer-services ul li:nth-child(1) a').textContent = currentTranslations.footer_AirTickets;
    document.querySelector('.footer-services ul li:nth-child(2) a').textContent = currentTranslations.footer_Accommodation;
    document.querySelector('.footer-services ul li:nth-child(3) a').textContent = currentTranslations.footer_TourPackages;
    document.querySelector('.footer-services ul li:nth-child(4) a').textContent = currentTranslations.footer_Visas;
    document.querySelector('.footer-services ul li:nth-child(5) a').textContent = currentTranslations.footer_Insurance;
    document.querySelector('.footer-services ul li:nth-child(6) a').textContent = currentTranslations.footer_CharterFlights;
    document.querySelector('.footer-services ul li:nth-child(7) a').textContent = currentTranslations.footer_RentCar;
    document.querySelector('.footer-contacts h4').textContent = currentTranslations.footer_ContactsTitle;
    document.querySelector('.footer-contacts ul li:nth-child(1)').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${currentTranslations.footer_Location}`;
    document.querySelector('.footer-bottom p').textContent = currentTranslations.footer_Copyright;
    document.querySelector('.footer-terms a:nth-child(1)').textContent = currentTranslations.footer_TermsOfService;
    document.querySelector('.footer-terms a:nth-child(2)').textContent = currentTranslations.footer_PrivacyPolicy;
}

// Carrega o idioma preferido do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'pt'; // Padrão para português
    mudarIdioma(savedLanguage);
});

