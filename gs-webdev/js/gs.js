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