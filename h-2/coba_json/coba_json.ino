#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ArduinoJson.h>
#include <SocketIoClient.h>
#include <ArduinoJson.h>
#define USE_SERIAL Serial

int angka = 100;
char jsonChar[150];
int count =0;

//konfigurasi
const size_t bufferSize = JSON_ARRAY_SIZE(2) + JSON_OBJECT_SIZE(5);
DynamicJsonBuffer jsonBuffer(bufferSize);
//StaticJsonBuffer<200> jsonBuffer;
ESP8266WiFiMulti WiFiMulti;
SocketIoClient webSocket;

//buat inisiasi JSON
JsonObject& json = jsonBuffer.createObject();
const char* sensor = {};


void event(const char * payload, size_t length) {
   USE_SERIAL.printf("got message: %s\n", payload);
}

void setup() {
  // put your setup code here, to run once:
  pinMode(A0,INPUT);
  Serial.begin(115200);

  HTTPClient http;
    USE_SERIAL.begin(115200);

    USE_SERIAL.setDebugOutput(true);

    USE_SERIAL.println();
    USE_SERIAL.println();
    USE_SERIAL.println();
    
    for(uint8_t t = 4; t > 0; t--) {
        USE_SERIAL.printf("[SETUP] BOOT WAIT %d...\n", t);
        USE_SERIAL.flush();
        delay(1000);
    }

      WiFiMulti.addAP("PUDJI", "Rahardjo");

    while(WiFiMulti.run() != WL_CONNECTED) {
        delay(100);
    }
    
   webSocket.begin("192.168.1.14",3000);
   webSocket.on("connection", event);
}

void loop() {
  // put your main code here, to run repeatedly:
  angka = analogRead(A0);
  
  json["suhu"] = String(angka);
  json["tekanan"] = String(angka);
  
  json.printTo(jsonChar, json.measureLength()+1);
  
  webSocket.loop();
  webSocket.emit("data", jsonChar);
  Serial.println(jsonChar);
  delay(1000);
  count++;
  Serial.println(String(count));
}
