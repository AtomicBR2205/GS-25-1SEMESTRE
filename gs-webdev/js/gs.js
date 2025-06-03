let currentSlide = 0;
const slides = document.querySelectorAll(".slide-container");

function changeSlide(direction) {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}
const quizData = [
  {
    question: "1. Qual é a principal causa das enchentes urbanas?",
    options: [
      "Desmatamento e ocupação irregular do solo",
      "Temperaturas elevadas",
      "Poluição do ar",
      "Uso excessivo de energia"
    ],
    answer: 0
  },
  {
    question: "2. Qual tecnologia ajuda a prever desastres naturais?",
    options: [
      "Sistemas de alerta precoce",
      "Impressoras 3D",
      "Redes sociais",
      "Energia solar"
    ],
    answer: 0
  },
  {
    question: "3. Qual medida urbana ajuda a evitar enchentes?",
    options: [
      "Construção em áreas de risco",
      "Zonas verdes permeáveis",
      "Aumento da impermeabilização do solo",
      "Redução de bueiros"
    ],
    answer: 1
  },
  {
    question: "4. O que é essencial para a educação comunitária em gestão de riscos?",
    options: [
      "Ignorar os sinais de risco",
      "Programas de formação e conscientização",
      "Deixar o governo resolver tudo",
      "Construir mais edifícios"
    ],
    answer: 1
  },
  {
    question: "5. Qual é o órgão brasileiro responsável pelo monitoramento de desastres naturais?",
    options: [
      "INPE",
      "CEMADEN",
      "IBGE",
      "ANVISA"
    ],
    answer: 1
  },
  {
    question: "6. O que deve ser priorizado para evitar desastres nas cidades?",
    options: [
      "Infraestrutura de drenagem urbana",
      "Aumento da poluição",
      "Redução das zonas verdes",
      "Desmatamento"
    ],
    answer: 0
  },
  {
    question: "7. Qual é o impacto econômico anual estimado dos desastres naturais no Brasil?",
    options: [
      "R$ 1 bilhão",
      "R$ 8 bilhões",
      "R$ 50 bilhões",
      "R$ 100 milhões"
    ],
    answer: 1
  },
  {
    question: "8. Como a população pode ajudar na prevenção?",
    options: [
      "Participando de consultas públicas e mapeamento de risco",
      "Ignorando alertas",
      "Construindo em áreas de risco",
      "Desmatando áreas urbanas"
    ],
    answer: 0
  },
  {
    question: "9. Qual país é referência em sistemas de alerta precoce para desastres?",
    options: [
      "Japão",
      "Brasil",
      "Argentina",
      "Rússia"
    ],
    answer: 0
  },
  {
    question: "10. O que é importante incluir em planos diretores municipais?",
    options: [
      "Zonas verdes permeáveis",
      "Construção em áreas de risco",
      "Redução da infraestrutura",
      "Cortes em investimentos públicos"
    ],
    answer: 0
  }
];

function buildQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  quizData.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-block");

    const questionTitle = document.createElement("p");
    questionTitle.classList.add("question");
    questionTitle.textContent = q.question;
    questionDiv.appendChild(questionTitle);

    q.options.forEach((option, i) => {
      const label = document.createElement("label");
      label.classList.add("option-label");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${index}`;
      input.value = i;
      input.id = `q${index}option${i}`;

      const span = document.createElement("span");
      span.textContent = option;

      label.appendChild(input);
      label.appendChild(span);
      questionDiv.appendChild(label);
    });

    quizContainer.appendChild(questionDiv);
  });
}

function showResults() {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name=question${index}]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });
  const result = document.getElementById("quiz-result");
  result.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
}

document.getElementById("submit-quiz").addEventListener("click", showResults);

buildQuiz();

function abrirMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.left === "80%") {
    menu.style.left = "120%";
  } else {
    menu.style.left = "80%";
  }
}

const temas = {
  claro: {
    "--cor-primaria": "rgb(72, 72, 243)",
    "--cor-primaria-escura": "rgb(9, 9, 59)",
    "--cor-branco": "#fff",
    "--cor-preto": "#000",
    "--cor-cinza-escuro": "rgb(94, 94, 94)",
    "--cor-cinza-medio": "rgb(223, 223, 223)",
    "--cor-cinza-claro": "rgb(233, 233, 233)",
    "--cor-cinza-footer": "rgb(185, 185, 185)",
    "--cor-cinza-paragrafo": "rgb(59, 59, 59)",
    "--cor-footer-h3": "rgb(240, 240, 240)",
    "--cor-footer-h4": "rgb(240, 240, 240)",
    "--cor-input-bg": "#222"
  },
  escuro: {
    "--cor-primaria": "rgb(180, 180, 255)",
    "--cor-primaria-escura": "rgb(220, 220, 255)",
    "--cor-branco": "#111",
    "--cor-preto": "#fff",
    "--cor-cinza-escuro": "rgb(200, 200, 200)",
    "--cor-cinza-medio": "rgb(40, 40, 40)",
    "--cor-cinza-claro": "rgb(30, 30, 30)",
    "--cor-cinza-footer": "rgb(70, 70, 70)",
    "--cor-cinza-paragrafo": "rgb(220, 220, 220)",
    "--cor-footer-h3": "rgb(30, 30, 30)",
    "--cor-footer-h4": "rgb(30, 30, 30)",
    "--cor-input-bg": "#eee"
  },
  reverso: {
    "--cor-primaria": "rgb(243, 72, 72)",
    "--cor-primaria-escura": "rgb(59, 9, 9)",
    "--cor-branco": "#000",
    "--cor-preto": "#fff",
    "--cor-cinza-escuro": "rgb(223, 223, 223)",
    "--cor-cinza-medio": "rgb(94, 94, 94)",
    "--cor-cinza-claro": "rgb(59, 59, 59)",
    "--cor-cinza-footer": "rgb(59, 59, 59)",
    "--cor-cinza-paragrafo": "rgb(185, 185, 185)",
    "--cor-footer-h3": "rgb(30, 30, 30)",
    "--cor-footer-h4": "rgb(30, 30, 30)",
    "--cor-input-bg": "#fff"
  }
};

let temaAtual = "claro";

function alternarTema() {
  if (temaAtual === "claro") {
    aplicarTema("escuro");
  } else if (temaAtual === "escuro") {
    aplicarTema("reverso");
  } else {
    aplicarTema("claro");
  }
}

function aplicarTema(tema) {
  const root = document.documentElement;
  const vars = temas[tema];
  Object.keys(vars).forEach(key => {
    root.style.setProperty(key, vars[key]);
  });
  temaAtual = tema;
}