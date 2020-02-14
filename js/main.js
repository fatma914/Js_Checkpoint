function makeBold(){
    if( document.getElementById("divfeedback").style.fontWeight == "bold"){
        document.getElementById("divfeedback").style.fontWeight = "100";
    }
    else{
    document.getElementById("divfeedback").style.fontWeight = "bold";
    }
}

function makeItalic(){
    if(document.getElementById("divfeedback").style.fontStyle == "italic"){
        document.getElementById("divfeedback").style.fontStyle = "normal";
    }
    else{
    document.getElementById("divfeedback").style.fontStyle = "italic";
    }
}

function makeunderline(){
    if( document.getElementById("divfeedback").style.textDecoration == "underline"){
        document.getElementById("divfeedback").style.textDecoration = "none";
    }
    else{
    document.getElementById("divfeedback").style.textDecoration = "underline";
    }
}

function changeSize(){
    
    document.getElementById("divfeedback").style.fontSize =  document.getElementById("selectsize").value;
}

function changePolice(){
    document.getElementById("divfeedback").style.fontFamily =  document.getElementById("selectpolice").value;
}

