
### Project Title: IOT Sensor Weather Chatbot 

Abstract :-

With everyday changes in the technology today, people need more comfort and easy to use devices. In this project, we have created a weather bot which fulfills a user’s need to know the room temperature, humidity, and intensity of light for
various purposes including Air Condition mode, conducting a laboratory experiment and maintaining a proper environment
for the workers in the manual labor industry. It also sends an alert message when the room environment is above or below your
comfort or desired level. 

Follow this link in order to chat with our Weather Bot : https://iot-sensor-chatbot.mybluemix.net/bot

Summary:

- Using IBM Bluemix services (Node-RED, Watson IoT Platform, dashDB and Watson Conversation), we have created a chatbot allowing us to ask questions like: What was the average temperature value you recorded ?, What is the maximum intensity of light today ?, How humid it is today? 

- Apart from this, it also sends email notifications as alerts to the user!

- Used Texas Instrument TI CC2650 IOT sensor which senses Temperature/Humidity/Light and other weather related values.

![alt text](https://raw.github.com/SJSU272LabS17/Project-Team-9/master/Sensor.jpg)

- Used the above sensor to push real time Temperature/Light/Humidity values to Watson IoT Platform.

![alt text](https://raw.github.com/SJSU272LabS17/Project-Team-9/master/IoT.png)

- Used Watson Conversation service as machine learning tool to train the chatbot to analyze the user input and provide appropriate responses.
  
![alt text](https://raw.github.com/SJSU272LabS17/Project-Team-9/master/Watson_Dialog.png)

- Created Node-Red flow that glues everything together:
  
  (i) Wired Watson IOT Platform node with Dash DB node in order to populate DB with real-time values of the surrounding weather captured by the sensor.
  
  (ii) Used Javascript in order to set up Client/Server page and AJAX to invoke Server using REST API calls.
  
  (iii) Captured the Conversation’s input and output.
  
  (iv) Refined the chatbot answers by SQLs queries where max/min/avg/latest Temp/Humidity/Light values are the user input.
  
  (v) Sending the responses to the client

  ![ScreenShot](https://raw.github.com/SJSU272LabS17/Project-Team-9/master/node-red.png)

  (vi) The bot also sends Email alerts to the user when the temperature or humidity value increases or decreases beyond a comfortable range! This range of values is customizable according to the user's needs.

 ![alt text](https://raw.github.com/SJSU272LabS17/Project-Team-9/master/Alert.png)

- Our app: Weather Chatbot! 

 ![ScreenShot](https://raw.github.com/SJSU272LabS17/Project-Team-9/master/chatbot.png)


Use Cases :

- At home: ask what the average temperature in a room was during a given day, then adjust the start/end time of your heating or air-co depending on that. This could save costs …

- Monitoring temperature in places Like laboratory where environment temperature is very important for experiments.

- In any industrial environment (e.g. Mining) where Workers Health & Safety is key: what if in the case of a crisis situation, every member of an Operations Centre had the ability to ask in plain English: ‘What is MAXIMUM, MIN temperature, Light intensity, & Humidity’ ? This could save lives … 

- Let's say you are in office and want to monitor temperature of house.


