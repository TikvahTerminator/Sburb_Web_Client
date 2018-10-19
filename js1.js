console.log("SBURB Web Server v1");
console.log("Homestuck is the property of Viz Media & Andrew 'The Huss' Hussie, all assets relating to Homestuck are not my own; but belong to the Huss.  Don't sue me Andrew <3 ");
console.log("My Twitter is @Tikvahterminate, my Reddit is /u/deiterrc, and my stairs keep happening man");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
var check = document.getElementById("loading");
var parent = document.getElementById("body");
var alphastate = 0;
$("#body").css({"cursor": "none"});
$("#Clientdiv").hide();
$("#Serverdiv").hide();
$("#options").hide();
$("#credits").hide();
$("#mainmenu").hide();




check.onplaying = index();

function index() {
	check.addEventListener("ended", change);
}

function change(){
			if ( check.ended == true) {
			$("#videocontainer").remove();
			$("#logo").hide().fadeIn(3000 , fadelogo);
			$("#mainmenu").hide();
			$("#Serverdiv").hide();
			$("#Clientdiv").hide();
			$("#options").hide();
			$("#credits").hide();
			}
}

function fadelogo() {
	$("#logo").fadeOut(3000, stage1);
}

function stage1() {
	$("#logocontainer").remove();
	$("#body").css({"cursor": "url(SBURB.cur),auto"});
	document.getElementById("menutheme").play();
	$("#mainmenu").fadeIn(1500);
}

function buttonover() {
	if (alphastate == 1) {
		$("#menubuttons").css({"background": "linear-gradient(#fc6e6e,#8f4141)", "color": "black"});
		$("#body").css({"cursor": "url(ALPHA.cur),auto"});
	}
	else{
	$("#menubuttons").css({"background": "linear-gradient(#92fc7b,#436a3a)", "color": "black"});
	$("#body").css({"cursor": "url(SBURB.cur),auto"});
	}
}

function buttonoffer() {
	if (alphastate == 1) {
		$("#menubuttons").css({"background": "linear-gradient(#ff0000,#870404)", "color": "white"});
		$("#body").css({"cursor": "url(ALPHA.cur),auto"});
	}
	else{
	$("#menubuttons").css({"background": "linear-gradient(#2eff00,#126400)", "color": "white"});
	$("#body").css({"cursor": "url(SBURB.cur),auto"});
	}
}

function buttonover2() {
	if (alphastate == 1) {
		$("#menubuttons2").css({"background": "linear-gradient(#fc6e6e,#8f4141)", "color": "black"});
		$("#body").css({"cursor": "url(ALPHA.cur),auto"});
	}
	else{
	$("#menubuttons2").css({"background": "linear-gradient(#92fc7b,#436a3a)", "color": "black"});
	$("#body").css({"cursor": "url(SBURB.cur),auto"});
	}
}

function buttonoffer2() {
	if (alphastate == 1) {
		$("#menubuttons2").css({"background": "linear-gradient(#ff0000,#870404)", "color": "white"});
		$("#body").css({"cursor": "url(ALPHA.cur),auto"});
	}
	else{
	$("#menubuttons2").css({"background": "linear-gradient(#2eff00,#126400)", "color": "white"});
	$("#body").css({"cursor": "url(SBURB.cur),auto"});
	}
}

function buttonover3() {
	if (alphastate == 1) {
		$("#menubuttons3").css({"background": "linear-gradient(#fc6e6e,#8f4141)", "color": "black"});
		$("#body").css({"cursor": "url(ALPHA.cur),auto"});
	}
	else{
	$("#menubuttons3").css({"background": "linear-gradient(#92fc7b,#436a3a)", "color": "black"});
	$("#body").css({"cursor": "url(SBURB.cur),auto"});
	}
}

function buttonoffer3() {
	if (alphastate == 1) {
		$("#menubuttons3").css({"background": "linear-gradient(#ff0000,#870404)", "color": "white"});
		$("#body").css({"cursor": "url(ALPHA.cur),auto"});
	}
	else{
	$("#menubuttons3").css({"background": "linear-gradient(#2eff00,#126400)", "color": "white"});
	$("#body").css({"cursor": "url(SBURB.cur),auto"});
	}
}

function buttonover4() {
	if (alphastate == 1) {
		$("#menubuttons4").css({"background": "linear-gradient(#fc6e6e,#8f4141)", "color": "black"});
		$("#body").css({"cursor": "url(ALPHA.cur),auto"});
	}
	else{
	$("#menubuttons4").css({"background": "linear-gradient(#92fc7b,#436a3a)", "color": "black"});
	$("#body").css({"cursor": "url(SBURB.cur),auto"});
	}
}

function buttonoffer4() {
	if (alphastate == 1) {
		$("#menubuttons4").css({"background": "linear-gradient(#ff0000,#870404)", "color": "white"});
		$("#body").css({"cursor": "url(ALPHA.cur),auto"});
	}
	else{
	$("#menubuttons4").css({"background": "linear-gradient(#2eff00,#126400)", "color": "white"});
	$("#body").css({"cursor": "url(SBURB.cur),auto"});
	}
}

function hostserver() {
	$("#mainmenu").css({"z-value": "-1"});
	$("#Serverdiv").css({"z-value": "-2"});
	$("#options").css({"z-value": "-3"});
	$("#credits").css({"z-value": "-4"});
	$("#mainmenu").hide();
	$("#sburbuser").hide();
	$("#Clientdiv").show();
	document.getElementById("menutheme").pause();
	$("#topbarmenu").hide();
	$("#sburbuser").fadeIn(1000);
}

function hostclient() {
	$("#mainmenu").css({"z-value": "-1"});
	$("#Clientdiv").css({"z-value": "-2"});
	$("#options").css({"z-value": "-3"});
	$("#credits").css({"z-value": "-4"});
	$("#mainmenu").hide();
	$(".serverconsole").hide();
	$(".servertext").hide();
	$(".error").hide();
	$("#Serverdiv").fadeIn(1000, clientconsole());
}

function clientconsole() {
	$(".serverconsole").fadeIn(1000);
	$(".servertext").fadeIn(1000);
	$(".error").fadeIn(8500);
}


function options() {
	$("#mainmenu").css({"z-value": "-1"});
	$("#Clientdiv").css({"z-value": "-2"});
	$("#Serverdiv").css({"z-value": "-3"});
	$("#credits").css({"z-value": "-4"});
	$("#mainmenu").hide();
	$("#options").show();
}

function credits() {
	$("#mainmenu").css({"z-value": "-1"});
	$("#Clientdiv").css({"z-value": "-2"});
	$("#options").css({"z-value": "-3"});
	$("#Serverdiv").css({"z-value": "-4"});
	$("#mainmenu").hide();
	$("#credits").show();
}

function menumusic(music) {
	if (music == "True"){
		document.getElementById("menutheme").play();
	}
	else{ document.getElementById("menutheme").pause();}
}

function volume(val) {
	var audio = document.getElementById("menutheme");
	audio.volume = val / 100;
}

function returntomenu() {
	$("#mainmenu").css({"z-value": "8"});
	$("#Clientdiv").css({"z-value": "6"});
	$("#Serverdiv").css({"z-value": "7"});
	$("#options").css({"z-value": "4"});
	$("#credits").css({"z-value": "5"});
	$("#Clientdiv").hide();
	$("#Serverdiv").hide();
	$("#options").hide();
	$("#credits").hide();
	$("#mainmenu").show();
}



function alpha(alphamode) {
	if (alphamode == "True") {
		$(".menubuttons").css({"background": "linear-gradient(#ff0000,#870404)", "color": "white"});
		$(".menublock").css({"background": "linear-gradient(#ff0000,#870404)", "color": "white"});
		$("#sburbmenuside").css({"background-color": "#ff0000", "border-right": "10px solid #f66a6a", "border-bottom": "10px solid #f66a6a" });
		$("#arrows").css({"background-color": "#f66a6a"});
		$("#zoom").css({"background-color": "#f66a6a"});
		$("#undo").css({"background-color": "#f66a6a"});
		$("#redo").css({"background-color": "#f66a6a"});
		$("#build").css({"border": "2px solid #ff0000"});
		$("#revise").css({"border": "2px solid #ff0000"});
		$("#deploy").css({"border": "2px solid #ff0000"});
		$("#phernreg").css({"border": "2px solid #ff0000"});
		$("#grist").css({"border": "2px solid #ff0000"});
		$("#atheneum").css({"border": "2px solid #ff0000"});
		$("#alchemise").css({"border": "2px solid #ff0000"});
		$("#zoombutton").attr("src", "menubuttons/zoomred.png");
		$("#closebutton").attr("src", "menubuttons/closered.png");
		$("#savebutton").attr("src", "menubuttons/savered.png");
		$("#openbutton").attr("src", "menubuttons/openred.png");
		$("#arrowup").attr("src", "menubuttons/arrowred.png");
		$("#arrowdown").attr("src", "menubuttons/arrowred.png");
		$("#arrowleft").attr("src", "menubuttons/arrowred.png");
		$("#arrowright").attr("src", "menubuttons/arrowred.png");
		$("#centralbutton").attr("src", "menubuttons/centralred.png");
		$("#spiro").attr("src", "menubuttons/sliderred.png");
		$("#buildbutton").attr("src", "menubuttons/buildred.png");
		$("#revisebutton").attr("src", "menubuttons/revisered.png");
		$("#deploybutton").attr("src", "menubuttons/deployred.png");
		$("#sburbuser").attr("src", "alphaview.png");
		$(".serverconsole").css({"border-top" : "5px solid #870404"});
		$(".return").css({"background": "linear-gradient(#ff0000,#870404)", "color": "white"});
		$("#mainmenulogo").attr("src", "mainmenulogoalpha.png");
		$("#body").css({"cursor": "url(ALPHA.cur),auto"});
		$("#skaianetlogo").attr("src", "croc.png");
		$("#gameversion").html("SBURB ALPHA 1.0.0");
		$("#gamecredittext").html("Created by Crockercorp R&D Division <br><br> Thank you to the dedication and patience of our loyal subjects.<br><br> This game is dedicated to our CEO: Betty Crocker, founder of the SBURB project.");
		$("#servertextalpha").html("Sburb Server version 0.0.1<br><br> &copy; CROCKERCORP SYSTEMS INCORPERATED, ALL RIGHTS RESERVED,<br><br> SBURB client is running. <br><br> Awaiting connection...");
		$("#servererror").html("ERROR 413-612: Could not establish connection to Crockercorp. Please check your internet connection.");
		alphastate = 1;
	}
	else { if (alphamode = "False") {
		$(".menubuttons").css({"background": "linear-gradient(#2eff00,#126400)", "color": "white"});
		$(".menublock").css({"background": "linear-gradient(#2eff00,#126400)", "color": "white"});
		$(".serverconsole").css({"border-top" : "5px solid #084000"});
		$("#sburbmenuside").css({"background-color": "#01f100", "border-right": "10px solid #3f9c38", "border-bottom": "10px solid #3f9c38" });
		$("#arrows").css({"background-color": "#3f9c38"});
		$("#zoom").css({"background-color": "#3f9c38"});
		$("#undo").css({"background-color": "#3f9c38"});
		$("#redo").css({"background-color": "#3f9c38"});
		$("#build").css({"border": "2px solid #2eff00"});
		$("#revise").css({"border": "2px solid #2eff00"});
		$("#deploy").css({"border": "2px solid #2eff00"});
		$("#phernreg").css({"border": "2px solid #2eff00"});
		$("#grist").css({"border": "2px solid #2eff00"});
		$("#atheneum").css({"border": "2px solid #2eff00"});
		$("#alchemise").css({"border": "2px solid #2eff00"});
		$("#zoombutton").attr("src", "menubuttons/zoomgreen.png");
		$("#closebutton").attr("src", "menubuttons/closegreen.png");
		$("#savebutton").attr("src", "menubuttons/savegreen.png");
		$("#openbutton").attr("src", "menubuttons/opengreen.png");
		$("#arrowup").attr("src", "menubuttons/arrowgreen.png");
		$("#arrowdown").attr("src", "menubuttons/arrowgreen.png");
		$("#arrowleft").attr("src", "menubuttons/arrowgreen.png");
		$("#arrowright").attr("src", "menubuttons/arrowgreen.png");
		$("#centralbutton").attr("src", "menubuttons/centralgreen.png");
		$("#spiro").attr("src", "slider.png");
		$("#buildbutton").attr("src", "menubuttons/buildgreen.png");
		$("#revisebutton").attr("src", "menubuttons/revisegreen.png");
		$("#deploybutton").attr("src", "menubuttons/deploygreen.png");
		$("#sburbuser").attr("src", "betaview.png");
		$(".return").css({"background": "linear-gradient(#2eff00,#126400)", "color": "white"});
		$("#mainmenulogo").attr("src", "mainmenulogo.png");
		$("#body").css({"cursor": "url(SBURB.cur),auto"});
		$("#skaianetlogo").attr("src", "Skaianet.png");
		$("#gameversion").html("SBURB BETA 1.0.0");
		$("#gamecredittext").html("Created by Skaianet Games Division <br><br> Special thanks to R.Lalonde for contributions on Server Infrastructure<br><br> Thank you to the dedication and patience of our fans!<br><br> This game is dedicated to the late Jake Harley, CEO of Skaianet, founder of the SBURB project.");
		$("#servertextalpha").html(" Sburb Server version 0.0.1<br><br> &copy; SKAIANET SYSTEMS INCORPERATED, ALL RIGHTS RESERVED,<br><br> SBURB client is running. <br><br> Awaiting connection...");
		$("#servererror").html("ERROR 413-612: Could not establish connection to Skaianet. Please check your internet connection.");
		alphastate= 0;
		}
	
	}
}

function returnsburb() {
	returntomenu();
	document.getElementById("menutheme").play();
}

var topbarstatus = 0;

function topbarhover() {
	if(topbarstatus==0){
	$("#topbarmenu").fadeIn(500);
	topbarstatus=1;
	}
	else{ if(topbarstatus == 1){topbarunhover();}
	}
}

function topbarunhover() {
	$("#topbarmenu").hide();
	topbarstatus = 0;
}

function zoom() {
	alert("Cannot access non-player area!");
}

function undo() {
	alert("Cannot Undo previous action")
}

function streamstart() {
	var video = document.querySelector("#sburbuser");
	if (navigator.mediaDevices.getUserMedia) {       
	navigator.mediaDevices.getUserMedia({video: true})
	.then(function(stream) {
	video.srcObject = stream;
		})
  .catch(function(err0r) {
	console.log("Something went wrong!");
		});
	}
}