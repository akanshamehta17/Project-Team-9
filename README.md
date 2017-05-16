# Project-Team-9
**********************NOTE : WE ARE TEAM 9 ON GITHUB AND TEAM 15 ON CANVAS, SO, FOR THIS PROJECT, PLEASE GIVE THE SURVEY ON TEAM 15 IN CANVAS(KAMESH GANGWANI, AKANSHA MEHTA, RAKSHA KASHYAP, NIVEDITA NADKARNI*******************

### Project Idea 3 Title: IOT Sensor Weather Chatbot - APPROVED

Abstract :-— 

With everyday changes in the technology today, people need more comfort and easy to use devices. In this project, we have created a weather bot which fulfills a user’s need to know the room temperature, humidity, and intensity of light for
various purposes including Air Condition mode, conducting a laboratory experiment and maintaining a proper environment
for the workers in the manual labor industry. It also sends an alert message when the room environment is above or below your
comfort or desired level. 

Follow this link in order to chat with Weather Bot : https://iot-sensor-chatbot.mybluemix.net/bot

Summary:

- Using IBM Bluemix services (Node-RED, Watson IoT Platform, dashDB and Watson Conversation), we have created a chatbot allowing us to ask questions like: What was the average temperature value you recorded ?, What is the maximum intensity of light today ?, How humid it is today? 

- Apart from this, it also sends email notifications as alerts to the user!

- Using Javascript we have set up Client/Server page in Node-Red and AJAX to invoke Server using REST API calls.

![ScreenShot](https://raw.github.com/SJSU272LabS17/Project-Team-9/master/node-red.png)

- Used Texas Instrument TI CC2650 sensor in order to push real time Temperature/Light/Humidity values through Watson IoT Platform to Dash DB. 

![alt text](https://raw.github.com/SJSU272LabS17/Project-Team-9/master/Sensor.jpg)

- Used Watson Conversation service to train the chatbot to analyze the user input and provide appropriate responses.
  > Intents are created for the kind of questions that could be given as input.

![alt text](https://raw.github.com/SJSU272LabS17/Project-Team-9/master/Watson_Intents.jpg)

  > Entities are defined according to the requirements.
  
 ![alt text](https://raw.github.com/SJSU272LabS17/Project-Team-9/master/Watson_Entities.jpg)
 
  > Finally, the dialog is created to train the Watson on how to reply to the user.
  
 ![alt text](https://raw.github.com/SJSU272LabS17/Project-Team-9/master/Watson_Dialog.jpg)

- The bot responses related to weather are being fetched through querying Dash DB in a Node Red Application as well as training Watson using Watson Conversation service.

![ScreenShot](https://raw.github.com/SJSU272LabS17/Project-Team-9/master/weather-chatbot.png)

- The bot also sends Email alerts to the user when the temperature or humidity value increases or decreases beyond a comfortable range! This range of values is customizable according to the user's needs.

![alt text](https://raw.github.com/SJSU272LabS17/Project-Team-9/master/Watson_Dialog.jpg)

Use Cases :

- At home: ask what the average temperature in a room was during a given day, then adjust the start/end time of your heating or air-co depending on that. This could save costs …

- Monitoring temperature in places Like laboratory where environment temperature is very important for experiments.

- In any industrial environment (e.g. Mining) where Workers Health & Safety is key: what if in the case of a crisis situation, every member of an Operations Centre had the ability to ask in plain English: ‘What is MAXIMUM, MIN temperature, Light intensity, & Humidity’ ? This could save lives … 

- Let's say you are in office and want to monitor temperature of house.


