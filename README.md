# 🌦️ Estação Meteorológica com Arduino

Este projeto simula uma estação meteorológica usando um Arduino Uno e sensores que monitoram as condições climáticas e ambientais em tempo real. Ele lê dados de temperatura, umidade, luminosidade e nível de água, processa essas informações e as exibe em um display LCD 16x2 via I2C.

Ao ser ligado, o sistema inicializa o display LCD e informa que está testando os sensores. Isso é feito apenas como uma introdução visual para o usuário saber que o sistema está iniciando corretamente.

Em seguida, o Arduino realiza a leitura de três sensores:

- O **DHT22** coleta a **temperatura** e a **umidade do ar**.
- Um **LDR** (sensor de luz) detecta a **luminosidade do ambiente**, permitindo determinar se o tempo está "Claro" ou "Nublado" com base no valor lido.
- O **sensor ultrassônico HC-SR04** mede a **distância até o nível da água**, permitindo identificar situações de enchente ou risco.

Após coletar os dados, o programa interpreta os valores para gerar mensagens compreensíveis ao usuário:

- A **probabilidade de chuva** é estimada com base na umidade: se estiver entre 80% e 89%, é média; entre 90% e 99%, alta; e se estiver em 100%, a chuva é considerada certa.
- A **luminosidade** é verificada com o valor do LDR: se for menor que 500, o tempo é considerado nublado; caso contrário, está claro.
- O **nível da água** é analisado a partir da distância medida pelo ultrassônico. Se a distância for menor que 100 cm, o sistema alerta para "ENCHENTE"; entre 100 cm e 200 cm, o nível é considerado "CRÍTICO"; e acima disso, "OK".

Essas informações são então organizadas em duas telas diferentes no LCD:

1. A primeira tela mostra:
   - A estimativa de chuva
   - A condição do clima (claro ou nublado) e o valor da luminosidade
   - A temperatura (em graus Celsius) e a umidade (em porcentagem)

2. A segunda tela exibe:
   - A distância medida pelo sensor ultrassônico (em centímetros)
   - A situação do nível da água (OK, CRÍTICO ou ENCHENTE)

Essas duas telas se alternam automaticamente a cada 2 segundos, permitindo que o usuário visualize todos os dados sem a necessidade de interagir com botões ou menus.

## 🔌 Ligações do Hardware

- **DHT22**: pino digital 2  
- **LDR**: pino analógico A0  
- **HC-SR04**: TRIG no pino digital 3 e ECHO no pino digital 4  
- **LCD I2C**: conectado via interface I2C (endereço padrão `0x27`)  

## 📝 Observações

- O valor `500` utilizado como limiar para o sensor LDR pode variar dependendo da iluminação do local onde o projeto for instalado. É recomendável testar diferentes valores em campo.
- A distância crítica para detectar enchente (100 cm) e alerta (200 cm) também pode ser ajustada conforme o projeto e o recipiente monitorado.
- O display LCD usa a biblioteca `LiquidCrystal_I2C`, então é necessário instalar essa biblioteca na IDE do Arduino.
- A biblioteca `DHT` também deve estar instalada para que o sensor de temperatura funcione corretamente.

## 🔗 Teste Online

Este projeto pode ser visualizado e testado diretamente no simulador Wokwi, acessando o link abaixo:

👉 [Acessar simulação no Wokwi](https://wokwi.com/projects/432971162091667457)

## 📽️ Apresentação

Confira a apresentação em vídeo do projeto no YouTube:

👉 [Assista ao vídeo no YouTube](https://youtu.be/aw496WBEeKI)

---

Projeto desenvolvido para fins educacionais, com foco em simulação de monitoramento climático usando sensores simples e acessíveis com Arduino.
