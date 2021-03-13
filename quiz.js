var response = [];
var timer;
let currentSlide=0;
const quizs = document.getElementById('quiz');
const questions = [
    { question:'Full form HTML?',options:{a:'Hypertext Markup Language',b:'Hypertext Main Language',c:'Hightext Markup Language',d:'Hightext Main Language'}, answer : 'a'},
    { question:'Full form XML?',options:{a:'Encoding Markup Language',b:'Excessive Markup Language',c:'Extensible Markup Language',d:'Extensible Main Language'}, answer: 'c'},
    { question:'In CSS, class is declared by',options:{a:'#className',b:'className',c:'class className',d:'.className'}, answer: 'd'},
    { question:'Invetor of Javascript',options:{a: 'Douglas Crockford',b: 'Sheryl Sandberg',c: 'Brendan Eich',d:'Mark Zuckerberg'}, answer: 'c'},
    { question:'Javascript was invented in year ',options:{a:'2005',b:'1995',c:'1997',d:'1990'}, answer: 'b'},
    { question:'Full form HTML?',options:{a:'Hypertext Markup Language',b:'Hypertext Main Language',c:'Hightext Markup Language',d:'Hightext Main Language'}, answer : 'a'},
    { question:'Full form XML?',options:{a:'Encoding Markup Language',b:'Excessive Markup Language',c:'Extensible Markup Language',d:'Extensible Main Language'}, answer: 'c'},
    { question:'In CSS, class is declared by',options:{a:'#className',b:'className',c:'class className',d:'.className'}, answer: 'd'},
    { question:'Invetor of Javascript',options:{a: 'Douglas Crockford',b: 'Sheryl Sandberg',c: 'Brendan Eich',d:'Mark Zuckerberg'}, answer: 'c'},
    { question:'Javascript was invented in year ',options:{a:'2005',b:'1995',c:'1997',d:'1990'}, answer: 'b'}
];

const previous = document.getElementById("previous");
const next = document.getElementById("next");
const submit = document.getElementById('submit');	

function makequiz(){
    const output = [];
    questions.forEach((cquestion, number) => {
        const answers = [];
        for(letter in cquestion.options){
            answers.push(
                "<div class='options'><label><input type='radio' name='question"+number+"' value='"+letter+"'> "+cquestion.options[letter]+"</label></div>"
            );
        }
        if(number==0)
            output.push(
                "<div class='slide active-slide'><div class='question'>"+cquestion.question+"</div><div class='answers'>"+answers.join('')+"</div></div>"
            );
        else
            output.push(
                "<div class='slide'><div class='question'>"+cquestion.question+"</div><div class='answers'>"+answers.join('')+"</div></div>"
            );
    });
    quizs.innerHTML = output.join('');
}
makequiz();

function start(){
    document.getElementById('instruction').style.display='none';
    document.getElementById('showquiz').style.display='block';
    showSlide(0);
    timer = new Date();
    timer.setMinutes(timer.getMinutes()+10);
    timer.setSeconds(timer.getSeconds()+1);
    var x = setInterval(function() {
                var now = new Date().getTime();
                var distance = timer - now;
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                document.getElementById("timer").innerHTML = minutes + ":" + seconds;
                if(minutes<1){
                    document.getElementById("timer").style.backgroundColor = "#f00";
                }
                if (distance < 0) {
                    clearInterval(x);
                    showResults();
                }
            }, 1000);    
}

const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
        previous.style.display = 'none';
    }
    else{
        previous.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
        next.style.display = 'none';
        submit.style.display = 'inline-block';
    }
    else{
        next.style.display = 'inline-block';
        submit.style.display = 'none';
    }
}

function nextSlide() {
    const answerContainers = quizs.querySelectorAll('.answers');
    const answerContainer = answerContainers[currentSlide];
    const selected = 'input[name=question'+currentSlide+']:checked';
    const userResponse = (answerContainer.querySelector(selected) || {}).value;
    response[currentSlide]=userResponse;
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

function showResults(){
    let correctResponse = 0;
    const answerContainers = quizs.querySelectorAll('.answers');
    const answerContainer = answerContainers[currentSlide];
    const selected = 'input[name=question'+currentSlide+']:checked';
    const userResponse = (answerContainer.querySelector(selected) || {}).value;
    response[currentSlide]=userResponse;
    let i=0, count=0;
    questions.forEach(question => {
        if(response[i]==question.answer)
            correctResponse++;
        i++;
    });
    document.getElementById('timer').style.display="none";
    document.getElementById('result').style.display='block';
    document.getElementById('showquiz').style.display='none';
    if(correctResponse<=3)
        document.getElementById('res').style.backgroundColor = "#f00";
    else if(correctResponse<=7)
        document.getElementById('res').style.backgroundColor = "yellow";
    document.getElementById('show').innerHTML = correctResponse+' out of '+questions.length;
}