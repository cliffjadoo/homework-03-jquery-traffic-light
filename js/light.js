$(document).ready(function(){

	$("#stopButton").click(goRed);
	$("#goButton").click(goGreen);
	$("#slowButton").click(goYellow);

		//functions to change colors below
		function goRed() {
			clearLight();
			$("#stopLight").css("backgroundColor", "red");
		}

		function goGreen() {
			clearLight();
			$("#goLight").css("backgroundColor", "green");
		}

		function goYellow() {
			clearLight();
			$("#slowLight").css("backgroundColor", "yellow");
		}


		function clearLight() {
			$("#stopLight").css("backgroundColor", "black");
			$("#goLight").css("backgroundColor", "black");
			$("#slowLight").css("backgroundColor", "black");

		}


});

