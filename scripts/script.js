$(document).ready(function() {
	$("#wrapper:first-of-type>button:first-of-type").click(function() {
		setTimeout(function() {
	    	$('img').show();
	    	$('img').fadeOut(500);
	    });
		$("#wrapper:first-of-type").hide();
		$("#wrapper:last-of-type").show();
	});
	$("#wrapper:last-of-type>button:first-of-type").click(function() {
		setTimeout(function() {
	    	$('img').show();
	    	$('img').fadeOut(500);
	    });
		$("#wrapper:last-of-type").hide();
		$("#wrapper:first-of-type").show();
	});
	$("#wrapper:first-of-type>button:last-of-type").click(function() {
	$("#wrapper:first-of-type>div").css("height", "100%").empty();
        var value = $("#wrapper:first-of-type>input").val().toUpperCase();
        var chars = value.split('');
        for (i = 0; i < chars.length; i++) {
        	switch (chars[i]) {
	        	case 'A': $("#wrapper:first-of-type>div").append("<span>.- </span>"); break;
		        case 'B': $("#wrapper:first-of-type>div").append("<span>-... </span>"); break;
		        case 'C': $("#wrapper:first-of-type>div").append("<span>-.-. </span>"); break;
		        case 'D': $("#wrapper:first-of-type>div").append("<span>-.. </span>"); break;
		        case 'E': $("#wrapper:first-of-type>div").append("<span>. </span>"); break;
		        case 'F': $("#wrapper:first-of-type>div").append("<span>..-. </span>"); break;
		        case 'G': $("#wrapper:first-of-type>div").append("<span>--. </span>"); break;
		        case 'H': $("#wrapper:first-of-type>div").append("<span>.... </span>"); break;
		        case 'I': $("#wrapper:first-of-type>div").append("<span>.. </span>"); break;
		        case 'J': $("#wrapper:first-of-type>div").append("<span>.--- </span>"); break;
		        case 'K': $("#wrapper:first-of-type>div").append("<span>-.- </span>"); break;
		        case 'L': $("#wrapper:first-of-type>div").append("<span>.-.. </span>"); break;
		        case 'M': $("#wrapper:first-of-type>div").append("<span>-- </span>"); break;
		        case 'N': $("#wrapper:first-of-type>div").append("<span>-. </span>"); break;
		        case 'O': $("#wrapper:first-of-type>div").append("<span>--- </span>"); break;
		        case 'P': $("#wrapper:first-of-type>div").append("<span>.--. </span>"); break;
		        case 'Q': $("#wrapper:first-of-type>div").append("<span>--.- </span>"); break;
		        case 'R': $("#wrapper:first-of-type>div").append("<span>.-. </span>"); break;
		        case 'S': $("#wrapper:first-of-type>div").append("<span>... </span>"); break;
		        case 'T': $("#wrapper:first-of-type>div").append("<span>- </span>"); break;
		        case 'U': $("#wrapper:first-of-type>div").append("<span>..- </span>"); break;
		        case 'V': $("#wrapper:first-of-type>div").append("<span>...- </span>"); break;
		        case 'W': $("#wrapper:first-of-type>div").append("<span>.-- </span>"); break;
		        case 'X': $("#wrapper:first-of-type>div").append("<span>-..- </span>"); break;
		        case 'Y': $("#wrapper:first-of-type>div").append("<span>-.-- </span>"); break;
		        case 'Z': $("#wrapper:first-of-type>div").append("<span>--.. </span>"); break;
		        case '0': $("#wrapper:first-of-type>div").append("<span>----- </span>"); break;
		        case '1': $("#wrapper:first-of-type>div").append("<span>.---- </span>"); break;
		        case '2': $("#wrapper:first-of-type>div").append("<span>..--- </span>"); break;
		        case '3': $("#wrapper:first-of-type>div").append("<span>...-- </span>"); break;
		        case '4': $("#wrapper:first-of-type>div").append("<span>.---- </span>"); break;
		        case '5': $("#wrapper:first-of-type>div").append("<span>..... </span>"); break;
		        case '6': $("#wrapper:first-of-type>div").append("<span>-.... </span>"); break;
		        case '7': $("#wrapper:first-of-type>div").append("<span>--... </span>"); break;
		        case '8': $("#wrapper:first-of-type>div").append("<span>---.. </span>"); break;
		        case '9': $("#wrapper:first-of-type>div").append("<span>----. </span>"); break;
		        case '/': $("#wrapper:first-of-type>div").append("<span> / </span>"); break;
		        case ',': $("#wrapper:first-of-type>div").append("<span>--..-- </span>"); break;
		        case '?': $("#wrapper:first-of-type>div").append("<span>..--.. </span>"); break;
		        case '.': $("#wrapper:first-of-type>div").append("<span>.-.-.- </span>"); break;
		        default: $("#wrapper:first-of-type>div").append("<span> / </span>"); break;
	        }
        }
    });
    $("#wrapper:last-of-type>button:last-of-type").click(function() {
	$("#wrapper:last-of-type>div").css("height", "100%").empty();
        var Newvalue = $("#wrapper:last-of-type>input").val().toUpperCase();
        var Newchars = Newvalue.split(' ');
        for (i = 0; i < Newchars.length; i++) {
        	switch (Newchars[i]) {
	        	case '.-': $("#wrapper:last-of-type>div").append("<span>A</span>"); break;
		        case '-...': $("#wrapper:last-of-type>div").append("<span>B</span>"); break;
		        case '-.-.': $("#wrapper:last-of-type>div").append("<span>C</span>"); break;
		        case '-..': $("#wrapper:last-of-type>div").append("<span>D</span>"); break;
		        case '.': $("#wrapper:last-of-type>div").append("<span>E</span>"); break;
		        case '..-.': $("#wrapper:last-of-type>div").append("<span>F</span>"); break;
		        case '--.': $("#wrapper:last-of-type>div").append("<span>G</span>"); break;
		        case '....': $("#wrapper:last-of-type>div").append("<span>H</span>"); break;
		        case '..': $("#wrapper:last-of-type>div").append("<span>I</span>"); break;
		        case '---.': $("#wrapper:last-of-type>div").append("<span>J</span>"); break;
		        case '-.-': $("#wrapper:last-of-type>div").append("<span>K</span>"); break;
		        case '.-..': $("#wrapper:last-of-type>div").append("<span>L</span>"); break;
		        case '--': $("#wrapper:last-of-type>div").append("<span>M</span>"); break;
		        case '-.': $("#wrapper:last-of-type>div").append("<span>N</span>"); break;
		        case '---': $("#wrapper:last-of-type>div").append("<span>O</span>"); break;
		        case '.--.': $("#wrapper:last-of-type>div").append("<span>P</span>"); break;
		        case '--.-': $("#wrapper:last-of-type>div").append("<span>Q</span>"); break;
		        case '.-.': $("#wrapper:last-of-type>div").append("<span>R</span>"); break;
		        case '...': $("#wrapper:last-of-type>div").append("<span>S</span>"); break;
		        case '-': $("#wrapper:last-of-type>div").append("<span>T</span>"); break;
		        case '..-': $("#wrapper:last-of-type>div").append("<span>U</span>"); break;
		        case '...-': $("#wrapper:last-of-type>div").append("<span>V</span>"); break;
		        case '.--': $("#wrapper:last-of-type>div").append("<span>W</span>"); break;
		        case '-..-': $("#wrapper:last-of-type>div").append("<span>X</span>"); break;
		        case '-.--': $("#wrapper:last-of-type>div").append("<span>Y</span>"); break;
		        case '--..': $("#wrapper:last-of-type>div").append("<span>Z</span>"); break;
		        case '-----': $("#wrapper:last-of-type>div").append("<span>0</span>"); break;
		        case '.----': $("#wrapper:last-of-type>div").append("<span>1</span>"); break;
		        case '..---': $("#wrapper:last-of-type>div").append("<span>2</span>"); break;
		        case '...--': $("#wrapper:last-of-type>div").append("<span>3</span>"); break;
		        case '....-': $("#wrapper:last-of-type>div").append("<span>4</span>"); break;
		        case '.....': $("#wrapper:last-of-type>div").append("<span>5</span>"); break;
		        case '-....': $("#wrapper:last-of-type>div").append("<span>6</span>"); break;
		        case '--...': $("#wrapper:last-of-type>div").append("<span>7</span>"); break;
		        case '---..': $("#wrapper:last-of-type>div").append("<span>8</span>"); break;
		        case '----.': $("#wrapper:last-of-type>div").append("<span>9</span>"); break;
		        case '/': $("#wrapper:last-of-type>div").append("<span> / </span>"); break;
		        case '--..--': $("#wrapper:last-of-type>div").append("<span>, </span>"); break;
		        case '..--..': $("#wrapper:last-of-type>div").append("<span>? </span>"); break;
		        case '.-.-.-': $("#wrapper:last-of-type>div").append("<span>. </span>"); break;
		        default: $("#wrapper:last-of-type>div").append("<span> </span>"); break;
	        }
        }
    });
});