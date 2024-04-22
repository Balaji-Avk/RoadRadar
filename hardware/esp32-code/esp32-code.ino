#define RXp2 16
#define TXp2 17
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "R3P";
const char* password = "balajiavk";
const char* serverName = "https://roadradar.angarabalaji.workers.dev/api/pole/setpoledetails";
unsigned long lastTime = 0;
unsigned long timerDelay = 5000;


void setup() {
  Serial.begin(115200);
  Serial2.begin(9600, SERIAL_8N1, RXp2, TXp2);

  WiFi.begin(ssid, password);
  Serial.println("Connecting");

  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network");
}
void loop() {
  if (WiFi.status()== WL_CONNECTED && Serial2.available() > 0) {
    Serial.println("Message Received: ");
    String depth = Serial2.readString();
    Serial.println(depth);
    
    HTTPClient http;
    http.begin(serverName);

    http.addHeader("Content-Type", "application/json");
    http.addHeader("apikey", "9b909c3c3c263dd3eca832507a1271fa31d5d66fbcdaf5a1c16e1003ca2e17f3");

    StaticJsonDocument<50> payload;
    payload["depth"] = depth.toInt();
    payload["pincode"] = 517504;

    String requestBody;
    serializeJson(payload, requestBody);
    int httpResponseCode = http.POST(requestBody);

    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);

    http.end();
    Serial.println("Exiting....");
    esp_deep_sleep_start();
  }
  delay(500);
}