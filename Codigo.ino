#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>

// LCD
LiquidCrystal_I2C lcd(0x27, 16, 2); // Endereço I2C pode variar

// DHT22
#define DHTPIN 2
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

// LDR
#define LDR_PIN A0

// Ultrassônico
#define TRIG_PIN 3
#define ECHO_PIN 4

void setup() {
  Serial.begin(9600);

  lcd.init();
  lcd.backlight();
  dht.begin();

  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

  // Mensagem de inicialização
  lcd.setCursor(0, 0);
  lcd.print("Inicializando...");
  delay(2500);
  lcd.setCursor(0, 1);
  lcd.print("Testando sensores");
  delay(2500);
  lcd.clear();
}

void loop() {
  // Leitura do DHT22
  float hum = dht.readHumidity();
  float temp = dht.readTemperature();

  // Avaliação de chance de chuva
  String chuva = "Chuva: Baixa";
  if (hum >= 100) chuva = "Chuva: Certa";
  else if (hum >= 90) chuva = "Chuva: Alta";
  else if (hum >= 80) chuva = "Chuva: Media";

  // Leitura do LDR
  int ldrValue = analogRead(LDR_PIN);
  String nublado = ldrValue < 500 ? "Nublado" : "Claro";

  // Medição do nível com ultrassônico
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH);
  float distancia = duration * 0.034 / 2;
  String nivel = "OK";
  if (distancia < 100.0) nivel = "ENCHENTE";
  else if (distancia < 200.0) nivel = "CRITICO";

  // Exibição no LCD

  delay(2000);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print(chuva);
  lcd.setCursor(0, 1);
  lcd.print("Clima: ");
  lcd.print(nublado);
  lcd.print(ldrValue)
  lcd.setCursor(0, 2);
  lcd.print("Temp:");
  lcd.print(temp, 1);
  lcd.print(" Humid:");
  lcd.print(hum, 0);
  
  delay(2000);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Nivel: ");
  lcd.print(distancia, 1);
  lcd.setCursor(0, 1);
  lcd.print(nivel);
}
