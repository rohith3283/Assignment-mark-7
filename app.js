var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

 
var serverURL = "https://api.funtranslations.com/translate/"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function erorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with sever! try again after some time")
}


function clickhandler() {
   var inputTEXT = txtInput.value;
   
   fetch(getTranslationURL(inputTEXT))
   .then(response => response.json())
   .then(json => {
     var translatedText = json.contents.translated;
     outputdiv.innerText = translatedText;

   })
   .catch(errorHandler)
};

 btntranslate.addEventListener("click", clickhandler)
 