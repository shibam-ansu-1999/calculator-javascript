$(document).ready(function (){

    let firstNumber,secondNumber,operator;

    $('.number').click(function (){

        let result = $('#result').text();
        let currentNumber = $(this).text();

        let newResult = Number(result + currentNumber);

        $('#result').text(newResult);
    });
    $('#point').click(function (){
        let result = $('#result').text();
        let currentNumber = $(this).text();
        let newResult =result + currentNumber;
        $('#result').text(newResult);
    })
    $('#zero').click(function (){
        let result = $('#result').text();
        let currentNumber = $(this).text();
        let newResult =result + currentNumber;
        $('#result').text(newResult);
    })
    $('#backSpace').click(function (){
        let result = $('#result').text();
        let x = result.length - 1;
        let newResult = result.substring(0,x);
        $('#result').text(newResult);
    })


    $('.operator').click(function (){
        firstNumber = Number($('#result').text());

        operator = $(this).text();

        $('#result').text(0);
    });

    $('#clear').click(function(){
        $('#result').text(0);
    });

    $('#equal').click(function (){
        secondNumber = Number($('#result').text());

        if(operator === '+'){
            $('#result').text(firstNumber + secondNumber);
        }
        else if(operator === '-'){
            $('#result').text(firstNumber - secondNumber);
        }
        else if(operator === '*'){
            $('#result').text(firstNumber * secondNumber);
        }
        else if(operator === '/'){
            $('#result').text((firstNumber / secondNumber).toFixed(3));
        }
        else if(operator === '^'){
            $('#result').text(firstNumber ** secondNumber);
        }
        else if(operator === '%'){
            $('#result').text(firstNumber / 100);
        }

    })

})