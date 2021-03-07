var quesobj = [{ 'ques':'What is HTML?','a':'HTML1','b':'HTML2','c':'HTML3','d':'HTML4'},
               { 'ques':'What is XML?','a':'XML1','b':'XML2','c':'XML3','d':'XML4'}]

var counter=1;

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
    document.getElementById('opa').innerHTML=" "+quesobj[counter-1].a;
    document.getElementById('opb').innerHTML=" "+quesobj[counter-1].b;
    document.getElementById('opc').innerHTML=" "+quesobj[counter-1].c;
    document.getElementById('opd').innerHTML=" "+quesobj[counter-1].d;
}

function nextques(){
    //console.log(val);
    counter++;
    showques();
}

function prevques(){
    counter--;
    showques();
}