function convertNumberToWords(number){
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const thousands = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion', 'sexdecillion'];

    if(number === 0) return 'zero';
    if(number < 0) return 'negative ' + convertNumberToWords(Math.abs(number));

    let words = " ";
    for(let i = 0; i < thousands.length; i++){
        const currentThousand = number % 1000;
        if(currentThousand !== 0){
            if(i === 0){
                words = convertNumberToWordsInHundred(currentThousand) + " " + thousands[i] + " " + words;
            } else {
                words = convertNumberToWordsInHundred(currentThousand) + " " + thousands[i] + " " + words;
            }
        }
        number = Math.floor(number / 1000);
    }
    return words.trim();
}

function convertNumberToWordsInHundred(number){
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let words = " ";
    if(number % 100 < 10 || number % 100 >= 20){
        words = ones[number % 10];
        number = Math.floor(number / 10);
        words = tens[number % 10] + " " + words;
        number = Math.floor(number / 10);
    }else{
        words = teens[number % 10];
        number = Math.floor(number / 100);
    }

    if(number === 0) return words;
    return ones[number] + " hundred " + words;
}

const numberInput = document.querySelector('.numberInput');
const numberToWord = document.querySelector('.numberToWord');
numberInput.addEventListener('keyup', () => {
    numberToWord.innerHTML = "<b>" + numberInput.value + "</b> in words: " + convertNumberToWords(numberInput.value) + " dollars ";
})



    

