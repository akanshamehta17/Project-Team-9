var globalvariable = global.get("theoutput");
globalvariable.botresponse.messageout.output.text = "Here is what you asked for. The MINIMUM TEMP recorded by the IoT Sensor is " + msg.payload["1"] + " celsius degrees.";
if(msg.payload["1"] < 5){
    
   //msg.payload = globalvariable;
   msg.payload = "*ALERT* : Current temperature is " + msg.payload["1"];

return msg;

}

