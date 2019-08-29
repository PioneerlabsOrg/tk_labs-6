var line = ""
while(line != null){
	try{
	line = readline().split("\n")
	var res = ""
	var s = input.toString()
	for(var i=0; i<s.length; i++){
		var c = s.charAt(i);
		if(c != undefined){
			res += runCipher(c)
		}
	}
	print(res)
	} catch(e){
		line = null
	}
	
}

function splitInLetter___423423423423423423423423432___4242342343242432(input){
	
}

function runCipher(input){
  var cipherText = input;
  var cipherOffset = 3;
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var fullAlphabet = alphabet + alphabet + alphabet;
  cipherOffset = (cipherOffset % alphabet.length);
  var cipherFinish = '';

  for(i=0; i<cipherText.length; i++){
     var letter = cipherText[i];
     var upper = (letter == letter.toUpperCase());
     letter = letter.toLowerCase();
     var index = alphabet.indexOf(letter);
     if(index == -1){
       cipherFinish += letter;
     } else {
       index = ((index + cipherOffset) + alphabet.length);
       var nextLetter = fullAlphabet[index];
       if(upper) nextLetter = nextLetter.toUpperCase();
       cipherFinish += nextLetter;
     }
  }
  
  return cipherFinish;
}
