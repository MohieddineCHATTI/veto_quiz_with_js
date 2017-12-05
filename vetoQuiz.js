var all_qst=[
    {
        qst: "what s the capital city of Algeria ?",
        opt1: "algeirs",
        opt2: "biskra",
        opt3: "feliache",
        opt4: "cabinet vet dhal3a",
        correct_answers: ["algeirs"]
    },
    {
        qst: "numbers that are lowwer than 10 ?",
        opt1: "5",
        opt2: "7",
        opt3: "13",
        opt4: "100",
        correct_answers: ["5", "7"]
    },
    {
        qst: "the day after saturday ?",
        opt1: "friday",
        opt2: "wednesday",
        opt3: "monday",
        opt4: "none of the above",
        correct_answers: ["none of the above"]
    },
    {
        qst: "what s the best country in the world ?",
        opt1: "algeria",
        opt2: "togo",
        opt3: "us",
        opt4: "germany",
        correct_answers: ["algeria"]
    }
    
    
    
    
    
    
];
    
    
    var i=0;
var checked=[];
// next question function
    function next_qst(){
checked=[];
if (i<all_qst.length){
console.log('app is workin working');
document.getElementById("qst").innerHTML=(all_qst[i].qst);
document.getElementById("opt1").innerHTML=(all_qst[i].opt1);
document.getElementById("opt2").innerHTML=(all_qst[i].opt2);
document.getElementById("opt3").innerHTML=(all_qst[i].opt3);
document.getElementById("opt4").innerHTML=(all_qst[i].opt4);
i++; 
} 
var t=15;
     
var count = setInterval(function timing(){
if (t>0){
t--;
console.log("t is "+t);
} else {
    console.log("time is up");
    clearInterval(count);
}

},1000) ; 
        
        
    };

$("[id^=opt]").click(function(){
if (!checked.includes($(this).text())){
    checked.push($(this).text());
} else {
    checked.splice(checked.indexOf($(this).text()),1);
}
 console.log(checked);
});
var score = 0;
function ans_check(){
console.log(checked.sort());
console.log(all_qst[i-1].correct_answers.sort());
/*if (checked.sort()==all_qst[i-1].correct_answers.sort()){
    console.log(true);
}else{
    console.log(false);
}*/
    if (checked.length==all_qst[i-1].correct_answers.length){
    var k=0;
    var checking = true;
    do{
        if (checked.sort()[k]!=all_qst[i-1].correct_answers.sort()[k])
        checking= false;
        k++
    } while (checking==true && k<checked.length)
    }
        else{
            checking=false;
        }
        console.log(checking);
}









