$(document).ready(function() {
    $("button").click(function() {
	$("#wrapper>div").css("height", "100%").empty();
        var value = $("input").val().toUpperCase();
        // var chars = { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ",", "/", "?", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"};
        var chars = value.split('');
        for (i = 0; i < chars.length; i++) {
        	switch (chars[i]) {
	        	case 'A': $("#wrapper>div").append("<span>.- </span>"); break;
		        case 'B': $("#wrapper>div").append("<span>-... </span>"); break;
		        case 'C': $("#wrapper>div").append("<span>-.-. </span>"); break;
		        case 'D': $("#wrapper>div").append("<span>-.. </span>"); break;
		        case 'E': $("#wrapper>div").append("<span>. </span>"); break;
		        case 'F': $("#wrapper>div").append("<span>..-. </span>"); break;
		        case 'G': $("#wrapper>div").append("<span>--. </span>"); break;
		        case 'H': $("#wrapper>div").append("<span>.... </span>"); break;
		        case 'I': $("#wrapper>div").append("<span>.. </span>"); break;
		        case 'J': $("#wrapper>div").append("<span>.--- </span>"); break;
		        case 'K': $("#wrapper>div").append("<span>-.- </span>"); break;
		        case 'L': $("#wrapper>div").append("<span>.-.. </span>"); break;
		        case 'M': $("#wrapper>div").append("<span>-- </span>"); break;
		        case 'N': $("#wrapper>div").append("<span>-. </span>"); break;
		        case 'O': $("#wrapper>div").append("<span>--- </span>"); break;
		        case 'P': $("#wrapper>div").append("<span>.--. </span>"); break;
		        case 'Q': $("#wrapper>div").append("<span>--.- </span>"); break;
		        case 'R': $("#wrapper>div").append("<span>.-. </span>"); break;
		        case 'S': $("#wrapper>div").append("<span>... </span>"); break;
		        case 'T': $("#wrapper>div").append("<span>- </span>"); break;
		        case 'U': $("#wrapper>div").append("<span>..- </span>"); break;
		        case 'V': $("#wrapper>div").append("<span>...- </span>"); break;
		        case 'W': $("#wrapper>div").append("<span>.-- </span>"); break;
		        case 'X': $("#wrapper>div").append("<span>-..- </span>"); break;
		        case 'Y': $("#wrapper>div").append("<span>-.-- </span>"); break;
		        case 'Z': $("#wrapper>div").append("<span>--.. </span>"); break;
		        case '0': $("#wrapper>div").append("<span>----- </span>"); break;
		        case '1': $("#wrapper>div").append("<span>.---- </span>"); break;
		        case '2': $("#wrapper>div").append("<span>..--- </span>"); break;
		        case '3': $("#wrapper>div").append("<span>...-- </span>"); break;
		        case '4': $("#wrapper>div").append("<span>.---- </span>"); break;
		        case '5': $("#wrapper>div").append("<span>..... </span>"); break;
		        case '6': $("#wrapper>div").append("<span>-.... </span>"); break;
		        case '7': $("#wrapper>div").append("<span>--... </span>"); break;
		        case '8': $("#wrapper>div").append("<span>---.. </span>"); break;
		        case '9': $("#wrapper>div").append("<span>----. </span>"); break;
		        case '/': $("#wrapper>div").append("<span> / </span>"); break;
		        case ',': $("#wrapper>div").append("<span>--..-- </span>"); break;
		        case '?': $("#wrapper>div").append("<span>..--.. </span>"); break;
		        case '.': $("#wrapper>div").append("<span>.-.-.- </span>"); break;
		        default: $("#wrapper>div").append("<span> / </span>"); break;
	        }
        }
    });
});