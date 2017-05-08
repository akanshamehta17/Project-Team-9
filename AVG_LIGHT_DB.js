var globalvariable = global.get("theoutput");
globalvariable.botresponse.messageout.output.text = "Here is what you asked for. The AVERAGE LIGHT recorded by the IoT Sensor is " + msg.payload["1"] + " degrees.";
msg.payload = globalvariable;
return msg;
