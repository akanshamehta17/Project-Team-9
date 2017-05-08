var globalvariable = global.get("theoutput");
globalvariable.botresponse.messageout.output.text = "Here is what you asked for. The MAXIMUM LIGHT recorded by the IoT Sensor is " + msg.payload["1"] + " lux units.";
msg.payload = globalvariable;
