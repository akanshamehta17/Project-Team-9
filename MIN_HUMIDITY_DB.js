var globalvariable = global.get("theoutput");
globalvariable.botresponse.messageout.output.text = "Here is what you asked for. The MINIMUM HUMIDITY recorded by the IoT Sensor is " + msg.payload["1"] + "gram per cubic meter";
msg.payload = globalvariable;
return msg;
