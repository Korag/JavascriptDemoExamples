var cWords = ["smutny","niedobry","szalony"];
var ccWords = [];
function cenzura(inStr){
for (idx in cWords){
inStr = inStr.replace(cWords[idx],"****");
}
for (idx in ccWords){
inStr = inStr.replace(ccWords[idx],"****");
}
return inStr;
}

function addCWord(word){
    ccWords.push(word);
    }
    function getCWord(){
    return cWords.concat(ccWords);
    }
    exports.cenzura=cenzura;
    exports.addCWord=addCWord;
    exports.getCWord=getCWord;