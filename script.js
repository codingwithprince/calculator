function getHistory(){
    return document.getElementById('history-value').innerText;
}
function printHistory(num){
    document.getElementById('history-value').innerText = num;
}
function getOutput(){
    return document.getElementById('output-value').innerText;
}
function printOutput(num){
    if(num == ""){
        document.getElementById('output-value').innerText = num; 
    }
    else{
    document.getElementById('output-value').innerText = getFormattedNumber(num);
    }
}
// formate number
function getFormattedNumber(num){
    if(num == '-'){
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString('en');
    return value;
} 
// reverse number formate
function reverseNumberFormate(num){
    return Number(num.replace(/,/g, ''));
}

// operators
let operators = document.getElementsByClassName('operators');
for(i = 0; i < operators.length; i++){
    operators[i].addEventListener('click',function(event){
        if(event.target.id == "clear"){
            printOutput('');
            printHistory('');
        }
       else if(event.target.id == "backspace"){
            console.log("backspace");
            let output = reverseNumberFormate(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            let output = getOutput();
            let history = getHistory()
            if(output == "" && history != ""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0, history.length-1);
                }
            }
            if(output != "" || history != ""){
                output = output == ""?
                output:reverseNumberFormate(output);
                history = history + output;
                if(event.target.id == "="){
                    let result = eval(history);
                    printOutput(result);
                    printHistory('');
                }
                else{
                    history = history + event.target.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

let numbers = document.getElementsByClassName('numbers');
for(i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click',function(event){
        let output = reverseNumberFormate(getOutput());
        if(output != NaN)//if output is a number
        {
            output = output + event.target.id;
            printOutput(output);
        }
    });
}
