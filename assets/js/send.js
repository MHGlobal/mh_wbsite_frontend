

// ============================================================
// API base — mudar APENAS esta linha para trocar de ambiente:
//   Local:      http://127.0.0.1:3001
//   Preview:    https://<nome-do-site>.netlify.app
//   Produção:   https://api.mh-globals.com
// ============================================================
const API_BASE = 'http://127.0.0.1:3001';

// Códigos de erro devolvidos pelo backend (src/services/otpService.js)
const OTP_ERROR_MAP = {
    invalid_email:      'email_invalid',
    missing_fields:     'email_code_required',
    invalid_code:       'email_code_wrong',
    code_expired:       'email_code_wrong',
    too_many_attempts:  'email_code_wrong',
    resend_cooldown:    'email_code_required',
    rate_limited:       'connection_error',
    email_send_failed:  'connection_error',
    service_unavailable:'connection_error'
};

function showNotification(notificationKey, isSuccess = true) {
    // Obter o idioma atual do site (armazenado/HTML/navegador/padrão)
    const currentLang = localStorage.getItem('selectedLanguage') || 
                       document.documentElement.lang || 
                       navigator.language.split('-')[0] || 
                       'pt';

    // Elementos da notificação
    const notification = document.getElementById('customNotificationDialog');
    const iconElement = document.getElementById('customNotificationIcon');
    const titleElement = document.getElementById('customNotificationTitle');
    const messageElement = document.getElementById('customNotificationMessage');
    const buttonElement = document.getElementById('customNotificationButton');

    // Dicionário de traduções
    const translations = {
        pt: {
            name_required: {
                title: "Nome obrigatório",
                message: "Por favor, insira seu nome completo.",
                button: "Entendi"
            },
            email_invalid: {
                title: "E-mail inválido",
                message: "Por favor, insira um e-mail válido.",
                button: "Corrigir"
            },
            email_code_required: {
                title: "Código requerido",
                message: "Por favor, insira o código enviado para o seu e-mail.",
                button: "Entendi"
            },
            email_code_short: {
                title: "Código incompleto",
                message: "O código deve ter 6 dígitos. Verifique e tente novamente.",
                button: "Corrigir"
            },
            email_code_wrong: {
                title: "Código incorreto",
                message: "O código inserido não corresponde ao que foi enviado. Verifique e tente novamente.",
                button: "Entendi"
            },email_not_confirmed: {
        title: "Email não confirmado",
        message: "Por favor, confirme o seu email antes de enviar a mensagem.",
        button: "Ok"
    },
            phone_invalid: {
        title: "Telefone inválido",
        message: "Por favor, insira um número de telefone válido.",
        button: "Corrigir"
    },
    subject_required: {
        title: "Assunto obrigatório",
        message: "Por favor, selecione um assunto para a sua mensagem.",
        button: "Selecionar"
    },
            message_short: {
                title: "Mensagem curta",
                message: "Sua mensagem deve ter pelo menos 10 caracteres.",
                button: "Entendi"
            },
            email_confirmed: {
            title: "Email confirmado",
            message: "Seu email foi verificado com sucesso!",
            button: "Ótimo"
            },
            form_success: {
                title: "Sucesso!",
                message: "Sua mensagem foi enviada com sucesso!",
                button: "Ótimo!"
            },
            form_error: {
                title: "Erro",
                message: "Ocorreu um erro ao enviar o formulário.",
                button: "Tentar novamente"
            },
            connection_error: {
                title: "Erro de conexão",
                message: "Falha ao conectar com o servidor.",
                button: "Tentar mais tarde"
            },
            recaptcha_required: {
                title: "Verificação necessária",
                message: "Por favor, complete o reCAPTCHA antes de enviar o formulário.",
                button: "Entendi"
            },
            select_placeholder: "Selecione"
        },
        en: {
            select_placeholder: "Select",
            name_required: {
                title: "Name required",
                message: "Please enter your full name.",
                button: "OK"
            },
            email_invalid: {
                title: "Invalid email",
                message: "Please enter a valid email address.",
                button: "Fix"
            },
            email_code_required: {
                title: "Code required",
                message: "Please enter the code sent to your email.",
                button: "OK"
            },
            email_code_short: {
                title: "Code too short",
                message: "The code must be 6 digits. Please check and try again.",
                button: "Fix"
            },
            email_code_wrong: {
                title: "Incorrect code",
                message: "The code you entered doesn’t match the one sent. Please try again.",
                button: "OK"
            },
            phone_invalid: {
        title: "Invalid phone",
        message: "Please enter a valid phone number.",
        button: "Fix"
    },
    subject_required: {
        title: "Subject required",
        message: "Please select a subject for your message.",
        button: "Select"
    },
            message_short: {
                title: "Message too short",
                message: "Your message must be at least 10 characters.",
                button: "OK"
            },
            email_confirmed: {
            title: "Email confirmed",
            message: "Your email has been successfully verified!",
            button: "Great"
            },email_not_confirmed: {
        title: "Email not confirmed",
        message: "Please confirm your email before submitting the form.",
        button: "Ok"
    },
            form_success: {
                title: "Success!",
                message: "Your message has been sent!",
                button: "Great!"
            },
            form_error: {
                title: "Error",
                message: "There was an error submitting the form.",
                button: "Try again"
            },
            connection_error: {
                title: "Connection error",
                message: "Failed to connect with server.",
                button: "Retry later"
            },
            recaptcha_required: {
                title: "Verification required",
                message: "Please complete the reCAPTCHA before submitting the form.",
                button: "OK"
            }
        }
    };

    // Reset classes de status
    notification.classList.remove('custom-notification-success', 'custom-notification-error');
    
    // Configuração visual baseada no tipo
    if (isSuccess) {
        notification.classList.add('custom-notification-success');
        iconElement.className = 'fas fa-check-circle';
    } else {
        notification.classList.add('custom-notification-error');
        iconElement.className = 'fas fa-exclamation-circle';
    }

    // Obter e aplicar textos localizados
    const translatedContent = translations[currentLang]?.[notificationKey] || translations['pt'][notificationKey];
    
    titleElement.textContent = translatedContent.title;
    messageElement.textContent = translatedContent.message;
    buttonElement.textContent = translatedContent.button;

    // Mostrar notificação
    notification.classList.add('show');

    // Configurar eventos de fechamento
    const closeNotification = () => notification.classList.remove('show');
    buttonElement.onclick = closeNotification;
    document.querySelector('.custom-notification-close').onclick = closeNotification;

    // Fechar ao clicar fora em telas maiores
    notification.onclick = (e) => {
        if (e.target === notification) closeNotification();
    };
}

let emailConfirmed = false;
let resendTimer;

const confirmEmailBtn = document.getElementById('confirmEmailBtn');
const emailDialog = document.getElementById('emailConfirmDialog');
const validateEmailBtn = document.getElementById('validateEmailBtn');
const resendEmailBtn = document.getElementById('resendEmailBtn');
const emailInput = document.getElementById('email');
const emailCodeInput = document.getElementById('emailConfirmCode');
const emailTimer = document.getElementById('emailTimer');


// Elementos dos inputs divididos
const emailCodeInputs = [
    document.getElementById('emailCode1'),
    document.getElementById('emailCode2'),
    document.getElementById('emailCode3'),
    document.getElementById('emailCode4'),
    document.getElementById('emailCode5'),
    document.getElementById('emailCode6')
];

// Função para obter o código completo (combina os 6 dígitos em uma string)
function getEmailCode() {
    return emailCodeInputs.map(input => input.value).join('');  // Ex.: "123456"
}

// Função para limpar todos os inputs
function clearEmailCode() {
    emailCodeInputs.forEach(input => input.value = '');
}

// Adicionar event listeners para navegação automática e validação
emailCodeInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        // Permite apenas números
        const value = e.target.value.replace(/\D/g, '');  // Remove não-dígitos
        e.target.value = value;

        // Se digitou um número, move para o próximo input
        if (value && index < emailCodeInputs.length - 1) {
            emailCodeInputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        // Backspace: move para o input anterior se vazio
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            emailCodeInputs[index - 1].focus();
        }
    });

    input.addEventListener('paste', (e) => {
        e.preventDefault();
        const paste = (e.clipboardData || window.clipboardData).getData('text');
        const digits = paste.replace(/\D/g, '').slice(0, 6);  // Apenas 6 dígitos
        digits.split('').forEach((digit, i) => {
            if (emailCodeInputs[i]) emailCodeInputs[i].value = digit;
        });
        // Foca no último input preenchido ou no próximo vazio
        const nextIndex = Math.min(digits.length, 5);
        emailCodeInputs[nextIndex].focus();
    });
});

/* --- populateEmailDialog: pré-preenche o modal segundo o idioma actual --- */
function getDialogTranslations(lang) {
  // fallback local
  const FALLBACK = {
    pt: {
      title: 'Confirmar Email',
      message: 'Um código foi enviado para o seu email. Insira abaixo:',
      validate: 'Validar Email',
      resend: 'Reenviar (60s)',
      resendShort: 'Reenviar',
      codePlaceholder: '',
      Conforming: `Confirmando...`
    },
    en: {
      title: 'Confirm Email',
      message: 'A code has been sent to your email. Enter it below:',
      validate: 'Validate Email',
      resend: 'Resend (60s)',
      resendShort: 'Resend',
      codePlaceholder: '',
       Conforming: `Confirming...`
    }
  };

  const globalT = window.translations || {}; // suporta estrutura translations.pt / translations.en
  const langObj = (globalT && globalT[lang]) ? globalT[lang] : null;
  return Object.assign({}, FALLBACK[lang] || FALLBACK.pt, langObj || {});
}

function populateEmailDialog() {
  const currentLang = localStorage.getItem('selectedLanguage') || 'pt';
  const t = getDialogTranslations(currentLang);

  const emailDialog = document.getElementById('emailConfirmDialog');
  if(!emailDialog) return console.warn('emailConfirmDialog não existe.');

  const heading = emailDialog.querySelector('h3');
  const paragraph = emailDialog.querySelector('p');
  const validateBtn = document.getElementById('validateEmailBtn');
  const resendBtn = document.getElementById('resendEmailBtn');
  const inputs = Array.from(emailDialog.querySelectorAll('.email-code-input'));
  const timerEl = document.getElementById('emailTimer');

  if(heading) heading.textContent = t.auth_ConfirmEmailBtn || t.title || t['title'] || 'Confirmar Email';
  if(paragraph) paragraph.textContent = t.auth_CodeSentMessage || t.message || t['message'] || 'Um código foi enviado para o seu email. Insira abaixo:';

  if(validateBtn) {
    // preserva ícone se tiver — simplifica: só texto
    validateBtn.innerHTML = (t.auth_ValidateEmailBtn || t.validate || t['validate'] || 'Validar Email');
  }

  if(resendBtn) {
    // se já tiver dataset.countdown preferimos manter, senão definimos texto padrão
    const countdown = resendBtn.dataset.countdown || '60';
    resendBtn.innerHTML = (t.auth_ResendCountdown || t.resend || t['resend'] || `Reenviar (${countdown}s)`);
    // mantém disabled conforme o fluxo (o código chamador irá setar disabled = true)
  }

  // inputs: placeholder / aria-label
  inputs.forEach((inp, idx) => {
    inp.placeholder = t.codePlaceholder || '';
    inp.setAttribute('aria-label', t.codePlaceholder || (currentLang === 'pt' ? `Dígito ${idx+1}` : `Digit ${idx+1}`));
    inp.value = ''; // limpar (segurança)
  });

  if(timerEl) timerEl.textContent = ''; // limpa mensagem
}


// 👉 Abrir o dialog e pedir envio de código
confirmEmailBtn.addEventListener('click', async () => {
    const email = emailInput.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showNotification('email_invalid', false);
        emailInput.focus();
        return;
    }
    
     populateEmailDialog();
     const g=getDialogTranslations();
 
   confirmEmailBtn.innerHTML =  `<i class="fas fa-spinner fa-spin"></i>`;



  

    try {
        const response = await fetch(`${API_BASE}/api/send-email-code`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        let data = {};
        try { data = await response.json(); } catch (_) { /* resposta não-JSON */ }

        if (data.success) {


            // Mostra o modal (usando apenas classe)
            emailDialog.classList.add('active');

             clearEmailCode();  // Limpa os inputs divididos
        emailCodeInputs[0].focus();  // Foca no primeiro

            resendEmailBtn.disabled = true;
            startResendCooldown();
        } else {
            showNotification(OTP_ERROR_MAP[data.error] || 'form_error', false);
        }
    } catch (err) {
        console.error(err);
        showNotification('connection_error', false);
    }
});


function getEmailDialogLang() {
    const lang = localStorage.getItem("selectedLanguage") || "pt";

    const FALLBACK = {
        pt: {
            codeError: "Por favor, insira o código completo (6 dígitos).",
            validating: "Validando...",
            success: "Email confirmado com sucesso!",
            confirmedBtn: "Confirmado"
        },
        en: {
            codeError: "Please enter the complete code (6 digits).",
            validating: "Validating...",
            success: "Email successfully confirmed!",
            confirmedBtn: "Confirmed"
        }
    };

    const base = FALLBACK[lang];

    const langPack = (window.translations && window.translations[lang])
        ? window.translations[lang]
        : {};

    return {
        codeError: langPack.auth_CodeError || base.codeError,
        validating: langPack.auth_Validating || base.validating,
        success: langPack.auth_EmailConfirmed || base.success,
        confirmedBtn: langPack.auth_ConfirmedBtn || base.confirmedBtn
    };
}
// 👉 Validar código (chama backend)
// Validar código (chama backend)
// Validar código (chama backend)
// Validar código (chama backend)
validateEmailBtn.addEventListener('click', async (e) => {
    e.preventDefault();  // Impede submissão automática
    e.stopPropagation();

    const T = getEmailDialogLang();

    const email = emailInput.value.trim();
    const code = getEmailCode().trim();  // Obtém o código dos 6 inputs divididos

    // Limpar mensagens no início
    emailTimer.textContent = '';
    emailTimer.classList.remove('error', 'success');

    // 1) Verificar se o código tem exatamente 6 dígitos
    if (!code || code.length !== 6) {
        emailTimer.textContent = T.codeError;
        emailTimer.classList.add('error');
        emailCodeInputs[0].focus();  // Foca no primeiro input vazio
        return;
    }

    // 2) Chamar backend para verificar
    try {
        validateEmailBtn.disabled = true;
        validateEmailBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${T.validating}`;

        const response = await fetch(`${API_BASE}/api/verify-email-code`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, code })
        });

        let data = {};
        try { data = await response.json(); } catch (_) { /* resposta não-JSON */ }

        if (response.ok && data.success) {
            emailConfirmed = true;
            emailTimer.textContent = T.success;
            emailTimer.classList.add('success');
            showNotification('email_confirmed', true);  // Notificação de sucesso
            emailDialog.classList.remove('active');
            confirmEmailBtn.innerHTML =  `<i class="fas fa-check"></i> ${T.confirmedBtn}`;
            confirmEmailBtn.disabled = true;
           confirmEmailBtn.style.background = "green"; 
            emailInput.disabled = true;
            
           
        } else if (data.error && OTP_ERROR_MAP[data.error] !== 'connection_error') {
            // Código inválido / expirado / tentativas esgotadas
            emailTimer.textContent = 'O código inserido não corresponde ao que foi enviado. Verifique e tente novamente.';
            emailTimer.classList.add('error');
            emailCodeInputs[0].focus();  // Foca no primeiro para correção
        } else {
            // Erro de rede / servidor indisponível
            emailTimer.textContent = 'Falha ao conectar com o servidor. Verifique sua conexão e tente novamente.';
            emailTimer.classList.add('error');
            // Não foca aqui, pois o erro é externo
        }
    } catch (err) {
        console.error('Erro na validação:', err);
        // Mensagem de erro de conexão
        emailTimer.textContent = 'Falha ao conectar com o servidor. Verifique sua conexão e tente novamente.';
        emailTimer.classList.add('error');
        // Não foca aqui, pois o erro é externo
    } finally {
        validateEmailBtn.disabled = false;
        validateEmailBtn.innerHTML = '<i class="fas fa-check"></i> Validar Email';
    }
});
// 👉 Reenviar código
resendEmailBtn.addEventListener('click', async () => {
    const email = emailInput.value.trim();
    if (!email) return;

    resendEmailBtn.disabled = true;
    startResendCooldown();

    try {
        await fetch(`${API_BASE}/api/send-email-code`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
    } catch (err) {
        console.error(err);
    }
});

// Timer de 60 segundos para reenvio
function startResendCooldown() {

    const currentLang = localStorage.getItem('selectedLanguage') || 'pt';

    //  Obter traduções com fallback
    const FALLBACK = {
        pt: { resend: "Reenviar", resendCountdown: "Reenviar ({time}s)" },
        en: { resend: "Resend", resendCountdown: "Resend ({time}s)" }
    };

    // tenta utilizar translations.auth_ResendCountdown / translations.auth_ResendShort se existirem
    const langPack = (window.translations && window.translations[currentLang])
        ? window.translations[currentLang]
        : {};

    const resendTextBase = langPack.auth_ResendShort || langPack.resend || FALLBACK[currentLang].resend;
    const resendCountdownText = langPack.auth_ResendCountdown || FALLBACK[currentLang].resendCountdown;

    let time = 60;
    resendEmailBtn.disabled = true;
    resendEmailBtn.style.cursor = "not-allowed";
    resendEmailBtn.innerHTML = `<i class="fas fa-envelope"></i> ${resendCountdownText.replace("{time}", time)}`;
    resendEmailBtn.style.background = '#aaa'; // cor de fundo desabilitado

    clearInterval(resendTimer);
    resendTimer = setInterval(() => {
        time--;
       
        resendEmailBtn.innerHTML =  `<i class="fas fa-envelope"></i> ${resendCountdownText.replace("{time}", time)}`;
        if (time <= 0) {
            clearInterval(resendTimer);
            resendEmailBtn.disabled = false;
            resendEmailBtn.style.cursor = "pointer";
            resendEmailBtn.innerHTML =`<i class="fas fa-envelope"></i> ${resendCountdownText.replace("{time}", time)}`;
            resendEmailBtn.style.background = '#ff9900'; // volta à cor normal
        }
    }, 1000);
}

emailDialog.querySelector('.custom-notification-close').addEventListener('click', () => {
    emailDialog.classList.remove('active');

    // 🔥 Atualizar texto do botão Confirmar segundo o idioma atual
    const currentLang = localStorage.getItem('selectedLanguage') || 'pt';

    const FALLBACK = {
        pt: { confirm: "Confirmar" },
        en: { confirm: "Confirm" }
    };

    const langPack = (window.translations && window.translations[currentLang])
        ? window.translations[currentLang]
        : {};

    const confirmText =
        langPack.auth_ConfirmEmailBtn ||
        langPack.confirm ||
        FALLBACK[currentLang].confirm;

    confirmEmailBtn.innerHTML = `<i class="fas fa-envelope"></i> ${confirmText}`;
});




// 1. Adicione esta função para verificar antes de recarregar a página
function setupBeforeUnload() {
    let formDirty = false;
    const form = document.getElementById('contactForm');
    
    // Monitorar alterações no formulário
    if (form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                formDirty = true;
            });
        });

        // Verificar antes de sair da página
        window.addEventListener('beforeunload', (e) => {
            if (formDirty) {
                e.preventDefault();
                e.returnValue = '';
                return 'Você tem alterações não salvas. Tem certeza que deseja sair?';
            }
        });

        // Resetar o status quando o formulário é enviado com sucesso
        form.addEventListener('submit', function() {
            if (!this.dataset.success) return;
            formDirty = false;
            this.reset(); // Limpa todos os campos do formulário
        }, true);
    }
}
// Inicializa o input com intl-tel-input
// Supondo que phoneInput e countrySelect sejam definidos (ex.: const phoneInput = document.getElementById('phone'); const countrySelect = document.getElementById('countryCode');)

// Defina os elementos NO TOPO DO ARQUIVO (antes de qualquer outro código)
const phoneInput = document.getElementById('phone');
const countrySelect = document.getElementById('countryCode');
const contactForm = document.getElementById('contactForm'); // Se usado no submit

// Verifique se os elementos existem (para evitar erros se o HTML não carregou)
if (!phoneInput || !countrySelect) {
    console.error('Elementos do telefone não encontrados. Verifique o HTML.');
}

// RESTRIÇÃO: Permite apenas números no input de telefone
phoneInput.addEventListener('input', (event) => {
    const value = event.target.value.replace(/\D/g, '');
    event.target.value = value;
});
phoneInput.addEventListener('paste', (event) => {
    event.preventDefault();
    const paste = (event.clipboardData || window.clipboardData).getData('text');
    const numericPaste = paste.replace(/\D/g, '');
    event.target.value += numericPaste;
});

// Inicializa a biblioteca para pegar todos os países
const iti = window.intlTelInput(phoneInput, {
    initialCountry: "auto",
    geoIpLookup: function(callback) {
        fetch('https://ipinfo.io/json?token=1142c502b46523')
            .then(res => res.json())
            .then(data => callback(data.country))
            .catch(() => callback('US'));
    },
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
});

// Aguarda a inicialização e popula o select com países
iti.promise.then(() => {
    const countryData = window.intlTelInputGlobals.getCountryData();
    const selectedCountry = iti.getSelectedCountryData();
    
    countrySelect.innerHTML = countryData.map(country => {
        const isSelected = country.iso2 === selectedCountry.iso2;
        return `<option value="${country.dialCode}" ${isSelected ? "selected" : ""} title="${country.name}">
            +${country.dialCode} ${country.name}
        </option>`;
    }).join('');
    console.log('Select populado com sucesso'); // Log para confirmar
}).catch(err => {
    console.error('Erro ao inicializar iti:', err);
    // Fallback: Popula manualmente se falhar
    countrySelect.innerHTML = '<option value="258">+258 Moçambique</option>';
});

// Atualiza o campo quando o select mudar
countrySelect.addEventListener('change', () => {
    const selectedDialCode = countrySelect.value;
    const country = window.intlTelInputGlobals.getCountryData().find(c => c.dialCode === selectedDialCode);
    if (country) {
        iti.setCountry(country.iso2);
    }
});


  

// Função para enviar formulário
async function submitContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
   const formData = {
    name: form.querySelector('#name').value.trim(),
    email: form.querySelector('#email').value.trim(),
   phone: iti.getNumber(), // Atribui o número internacional (ex.: "+258841234567")
    subject: form.querySelector('#subject').value,
    message: form.querySelector('#message').value.trim(),
    lang: localStorage.getItem('selectedLanguage') || 
          document.documentElement.lang || 
          navigator.language.split('-')[0] || 
          'pt' // default
};
const translations = {
        pt: { select_placeholder: "Selecione" },
        en: { select_placeholder: "Select" }
    };
    const placeholderText = translations[formData.lang]?.select_placeholder || "Selecione";
    // Validações
    if (!formData.name) {
        showNotification('name_required', false);
        form.querySelector('#name').focus();
        return;
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        showNotification('email_invalid', false);
        form.querySelector('#email').focus();
        return;
    }
    
    if (!emailConfirmed) {
        showNotification('email_not_confirmed', false);
        emailInput.focus();
        return;
    }

        // Validação do telefone
    if (!formData.phone || !iti.isValidNumber()) {
        showNotification('phone_invalid', false);
        phoneInput.focus();
        return;
    }

    // Validação do assunto
    if (!formData.subject || formData.subject === placeholderText) {
        showNotification('subject_required', false);
        subjectSelect.focus();
        return;
    }
      if (!formData.message || formData.message.length < 10) {
        showNotification('message_short', false);
        form.querySelector('#message').focus();
        return;
    }


  // Pegar token do reCAPTCHA
    const recaptchaToken = grecaptcha.getResponse();
    if (!recaptchaToken) {
        showNotification('recaptcha_required', false);
        document.querySelector('.g-recaptcha').scrollIntoView({ behavior: 'smooth' });
        return;
    }

    
  
    // Estado de carregamento
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';


     try {
        // 3️⃣ Verifica o reCAPTCHA no backend
        const verifyResponse = await fetch(`${API_BASE}/api/verify-recaptcha`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recaptchaToken })
        });
        const verifyData = await verifyResponse.json();

        if (!verifyData.success) {
            showNotification('recaptcha_required', false);
            grecaptcha.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            return;
        }



    // Envio AJAX

fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(data => {
        if (data.success) {
            showNotification('form_success', true);
            form.reset();
        } else {
            showNotification('form_error', false);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        showNotification('connection_error', false);
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        confirmEmailBtn.disabled = false;
        emailInput.disabled = false;
    });

}catch (err) {
        console.error(err);
        showNotification('connection_error', false);
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    }
}

// Inicialização do formulário
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', submitContactForm);
    }
});
