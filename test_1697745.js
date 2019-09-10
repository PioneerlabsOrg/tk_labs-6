function caesarCipher(str, key = 3) {
   return str
       .toUpperCase();
       
}


function main() {
   var line = "";
   while(line !== null){
    line = readline();

    if(line !== null ){
        print(caesarCipher(line))
        
    }
}


}
