var quesobj = [{ 'ques':'Full form HTML?',answer:{'a':'Hypertext Markup Language','b':'Hypertext Main Language','c':'Hightext Markup Language','d':'Hightext Main Language'}, correct : 'a'},
               { 'ques':'Full form XML?',answer:{'a':'Encoding Markup Language','b':'Excessive Markup Language','c':'Extensible Markup Language','d':'Extensible Main Language'}, correct: 'c'},
               { 'ques':'class in CSS is declared by',answer:{'a':'#className','b':'className','c':'class className','d':'.className'}, correct: 'd'},
               { 'ques':'Invetor of Javascript',answer:{'a': 'Douglas Crockford','b': 'Sheryl Sandberg','c': 'Brendan Eich','d':'Mark Zuckerberg'}, correct: 'c'},
               { 'ques':'Crome is ',answer:{'a':'Web site','b':'Application','c':'Tools','d':'Browser'}, correct: 'd'}]

var counter=1;
var checkanswer = [];

document.getElementById('prev').style.visibility = "hidden";
document.getElementById('submit').style.visibility = "hidden";

function start(){
    document.getElementById('instr').style.display='none';
    document.getElementById('ques').style.display='block';
    document.getElementById('opt').style.display='block';
    document.getElementById('nav').style.display='block';
    showques();
}

function showques(){
    if(counter==1){
        document.getElementById('prev').style.visibility = "hidden";
        document.getElementById('next').style.visibility = "visible";
        document.getElementById('submit').style.visibility = "hidden";
    }
    else if(counter==quesobj.length)
    {
        document.getElementById('next').style.visibility = "hidden";
        document.getElementById('prev').style.visibility = "visible";
        document.getElementById('submit').style.visibility = "visible";
    }
    else{
        document.getElementById('prev').style.visibility = "visible";
        document.getElementById('next').style.visibility = "visible";
        document.getElementById('submit').style.visibility = "hidden";
    }
    
    document.getElementById('ques').innerHTML=counter+". "+quesobj[counter-1].ques;
    document.getElementById('opa').innerHTML=" "+quesobj[counter-1].answer.a;
    document.getElementById('opb').innerHTML=" "+quesobj[counter-1].answer.b;
    document.getElementById('opc').innerHTML=" "+quesobj[counter-1].answer.c;
    document.getElementById('opd').innerHTML=" "+quesobj[counter-1].answer.d;
}

function nextques(){
    let op=document.querySelector('#opt');
    var val = 'input[name=answer]:checked';
    const ans = quesobj[counter-1].answer;
    checkanswer[counter-1]=(op.querySelector(val)||{}).value;
    counter++;
    showques();
}

function prevques(){
    counter--;
    showques();
}

function result(){
    let op=document.querySelector('#opt');
    var val = 'input[name=answer]:checked';
    const ans = quesobj[counter-1].answer;
    checkanswer[counter-1]=(op.querySelector(val)||{}).value;
    var i=0, count=0;
    
    quesobj.forEach((item)=>{
        if(checkanswer[i]===item.correct)
        {
            count++;
        }
        i++;
    });
    document.getElementById('quiz').style.display = 'none';
    document.getElementById("res").style.display = 'block';
    document.getElementById("show").innerHTML="Correct answer : "+count;
}
