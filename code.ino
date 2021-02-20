const int PIEZO_PIN = A0; // Piezo output
const int buzzer = 9;

float threshold = 1.0;


void setup() 
{
  Serial.begin(9600);
  pinMode(buzzer, OUTPUT);
}

void loop() 
{
  // Read Piezo ADC value in, and convert it to a voltage
  int piezoADC = analogRead(PIEZO_PIN);
  float piezoV = piezoADC / 1023.0 * 6.0;
  if(piezoV > threshold)
  {
    tone(buzzer,1000);
    delay(1000);
  }
  else{
     noTone(buzzer);
    }

  Serial.println(piezoV); // Print the voltage.

  delay(0);


}
