while((line = readline()) !== null){
	 
	print(caesarCipher(line))

}

function caesarCipher(str, key = 3) {
   return str
       .toUpperCase()
       .replace(/[A-Z]/g, char => String.fromCharCode((char.charCodeAt(0) - 65 + key ) % 26 + 65));
}