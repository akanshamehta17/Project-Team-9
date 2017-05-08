var globalvariable = global.get("theoutput");
var dashDBresult = msg.payload;
var latest = dashDBresult.HUMIDITY;
//var timesent = dashDBresult.TIMESENT;
globalvariable.botresponse.messageout.output.text = "Here is what you asked for. The LATEST HUMIDITY recorded by the IoT Sensor is " + latest + "gram per cubic meter";
msg.payload = globalvariable;
return msg;
