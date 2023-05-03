function button(num){
    let result = document.getElementById('result')
    result.value +=num;
}

function calculation(){
    let result1 = document.getElementById('result').value;

    let total= eval(result1);
    document.getElementById('result').value=total;
}

function clr(){
    document.getElementById('result').value=''
}