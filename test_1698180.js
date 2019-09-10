while((line = readline()) !== null){
	doEncryption(line.split("\n"));
}

function doEncryption(input){
	var result = "";
	var string = input.toString()
	for(var i=0; i<string.length; i++){
		var char = string.charAt(i);
		if(char !== undefined){
			result += encrypt(char);
		}
	}
	print(result);
}

function encrypt(input){
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
