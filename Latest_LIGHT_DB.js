var globalvariable = global.get("theoutput");
var dashDBresult = msg.payload;
var latest = dashDBresult.LIGHT;
//var timesent = dashDBresult.TIMESENT;
globalvariable.botresponse.messageout.output.text = "Here is what you asked for. The LATEST LIGHT recorded by the IoT Sensor is " + latest + " lux units.";
msg.payload = globalvariable;
return msg;
