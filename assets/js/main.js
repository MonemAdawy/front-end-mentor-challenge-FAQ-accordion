var questions=document.getElementsByClassName("p-question");
var answers=document.querySelectorAll("#p-answer");
var plus=document.querySelectorAll("#plus");
var minus=document.querySelectorAll("#minus");

answers[0].style.display="flex";
minus[0].style.display="flex";

for(let i=0;i<questions.length && i< answers.length;i++)
{
    questions[i].addEventListener("click",function(e){
        if(answers[i].style.display=="flex")
        {
            answers[i].style.display="none";
            minus[i].style.display="none";
        }
        else{
            for(let j=0 ;j< answers.length;j++){
                answers[j].style.display="none";
                minus[j].style.display="none";
            }
            answers[i].style.display="flex";
            minus[i].style.display="flex";
        }
    });
}
