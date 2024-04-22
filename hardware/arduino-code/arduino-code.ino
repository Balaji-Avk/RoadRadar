// defines pins numbers
const int trigPin = 12;
const int echoPin = 13;

// defines variables
long duration;
int distance;
const int buzzer = 5;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT); 
  Serial.begin(9600); 
  pinMode(buzzer, OUTPUT); 
}
void loop() {
  
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);

  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);

  // Calculating the distance
  distance = duration * 0.034 / 2;
  
  // Default height of road is 8.5
  if(distance>8.5 && distance<500){

    Serial.println(distance-8.5);
    tone(buzzer, 100);

  }
  else{
    noTone(buzzer);
  }
  
  delay(1000);
}