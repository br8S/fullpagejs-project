const text = [" DIOS CONFIÓ ", " DIOS CONFIAMOS "];
count = 0;
index = 0;
currText = "";
letter = "";
deleteLetter = "";

(function type(){
    if(count === text.length){
        count = 0;
    }
    currText = text[count];
    letter = currText.slice(0, ++index); //iterates thru each letter of word

    document.querySelector(".typing").textContent = letter; 

    if(letter.length < currText.length){
        setTimeout(type, 500);
    }
    
    else{
        deleteTimeout();

        count++;
        index = 0;
        setTimeout(type, 5000);
    }

})();

function deleteTimeout(){
    for(i = letter.length; i > 0; i--){
        deleteLetter = currText.slice(0, -(letter.length - i + 1));
        setTimeout(deleteText, (letter.length - i) * 200, deleteLetter); //have to multiply each index by const 200 else everything executes at same time, this way we have exe. at 0, 200, 400...
    }                                                                    //so text deletes letter by letter instead of all at once
}

function deleteText(deletedLetter){
    document.querySelector(".typing").textContent = deletedLetter; 
    //console.log(document.querySelector(".typing").textContent);
}


