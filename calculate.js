function inputField(inputId){
    const inputFieldValue=document.getElementById(inputId);
    const inputFieldValueString=inputFieldValue.value ;
    const inputValue=parseFloat(inputFieldValueString);
    return inputValue;
}

function setInnerTextElement (setId,area){
    const display=document.getElementById(setId);
    display.innerText=area
}

function calculateTryangle(){
    const base=inputField('base-inputField');
    const height=inputField('height-inputField');
    if(isNaN(base)){
        alert('please input a number')
        return
    }
    const area=.5*base*height
    setInnerTextElement('display-triangle',area)
    
    
}

function rectangleCalculate (){
    const base=inputField('base-rectangle');
    const height=inputField('height-rectangle');
    const area=base*height;
    setInnerTextElement('display-rectangle',area);
}


