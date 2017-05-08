
<html lang="en"  data-locale="en-US">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
	  Weather Chatbot
	</title>
	<style style="text/css">
body {
  background-image: url("https://ybtraveler.files.wordpress.com/2014/05/clouds-and-blue-sky-background-hd-wallpapers-2560-x-1600-2.jpg");
  background-position: 50% 50%;
  background-repeat: repeat;
  text-align: center;	
  }
  
  {
	margin:0;
	padding: 0;
	font-family: tahoma, sans-serif;
	box-sizing: border-box;
  }
		
	.chatbox {
	width: 700px;
	height: 700px;
	background-image: url("http://c8.alamy.com/comp/EYR24G/the-thermometer-icon-high-and-low-temperature-EYR24G.jpg");
	padding: 20px;
	margin: 15px auto;
	box-shadow: 0 3px #ccc;
}

.chatlogs {
	padding: 10px;
	width: 100%;
	height: 450px;
	
}

.chat .chat-message {
		width: 60px;
		height: 60px;
		background: #ccc;
		border-radius: 50%;
	}
	
</style>
	<link rel="stylesheet"
        type="text/css"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
  </head>
  <body>

    <div class="container">
      <div id="no-script"class="bg-info">
        This application needs JavaScript enabled in your browser!
      </div>
      <div id="id_contextdump"><h3></h3></div>

      <center><h1><h1>Know Real Time Weather Data</h1></h1></center>
	  <div class="chatbox">
		<div class="chatlogs">
		<div class="chat">
			<div id=id_botchathistory>
			
			
			</div>
		
	  
		<form>
			<label for="id_chattext"><i><h3>Your Input: </h3></i></label>
			<input type="text" name="chattext" id="id_chattext">
			
			<br/>
		</form>
		
		<button type="button" value="submit" onclick="javascript:onChatClick()" id="buttonpress">Send</button>
		</div>
		</div>
	  </div>
		

    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript">
		
		
		
		$("#id_chattext").keyup(function(event){
    if(event.keyCode == 13){
        $("#buttonpress").click();
		}
	});

      $(document).ready(function() {
          javascriptCheck();
          	$('#id_contextdump').hide();
      });

      // if javascript is enabled on the browser then can
      // remove the warning message
      function javascriptCheck() {
        $('#no-script').remove();
      }
      
      function createNewDiv(who, message) {
        console.log('002-001');  
        var txt = who + ' : ' + message;
        return $('<div></div>').text(txt);
      }

      function chat(person, txt) {
        $('#id_botchathistory').append(createNewDiv(person, txt));
      }    
      
      function processOK(response) {
        console.log('003-001');
        console.log(response);
        console.log(response.botresponse.messageout);
        console.log(response.botresponse.messageout.output.text);
        console.log(response.botresponse.messageout.context);
        chat('Bot', response.botresponse.messageout.output.text); 
        $('#id_contextdump').data('convContext', response.botresponse.messageout.context);
      }
      
      function processNotOK() {
        chat('Error', 'Error whilst attempting to talk to Bot');
      }
      
      function invokeAjax(message) {
        var contextdata = $('#id_contextdump').data('convContext');
        console.log('checking stashed context data');
        console.log(contextdata);
        
  
        //var ajaxData = "msgdata=" + message;
        var ajaxData = {};
        ajaxData.msgdata = message;
        if (contextdata) {
          ajaxData.context = contextdata;    
        }

        $.ajax({
          type: 'POST',
          url: 'botchat',
          data: ajaxData,
          success: processOK,
          error: processNotOK
        });
      }
          
      // User has entered some text.
      function onChatClick() {
        console.log('001-001');
        var txt = $('#id_chattext').val();
        chat('You', txt); 
        invokeAjax(txt);
        console.log('001-002');
      }
	  
    </script>
  </body>
</html>
