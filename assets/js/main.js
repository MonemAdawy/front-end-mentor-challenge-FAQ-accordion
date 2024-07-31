var questions=document.getElementsByClassName("p-question");
var answers=document.querySelectorAll("#p-answer");
var plus=document.querySelectorAll("#plus");
var minus=document.querySelectorAll("#minus");

answers[0].style.display="flex";
minus[0].style.display="flex";
questions[0].style.color="#AD28EB";

for(let i=0;i<questions.length && i< answers.length;i++)
{
    questions[i].addEventListener("click",function(e){
        if(answers[i].style.display=="flex")
        {
            answers[i].style.display="none";
            minus[i].style.display="none";
            questions[i].style.color="hsl(292, 42%, 14%)";
        }
        else{
            for(let j=0 ;j< answers.length;j++){
                answers[j].style.display="none";
                minus[j].style.display="none";
                questions[j].style.color="hsl(292, 42%, 14%)";
            }
            answers[i].style.display="flex";
            minus[i].style.display="flex";
            questions[i].style.color="#AD28EB";
        }
    });
}
