var globalvariable = global.get("theoutput");
globalvariable.botresponse.messageout.output.text = "Here is what you asked for. The MAXIMUM TEMP recorded by the IoT Sensor is " + msg.payload["1"] + " celsius degrees.";
if(msg.payload["1"] > 0){
    
   //msg.payload = globalvariable;
   msg.payload = "*ALERT* : Current temperature is " + msg.payload["1"];

return msg;

}

