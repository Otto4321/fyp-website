//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var MIXquestions = [
    {
    question: "這裏是哪一個區?",
    type: "multiple_choice",
    choices: ["A) 荃灣區", "B) 葵青區", "C) 油尖旺區", "D) 灣仔區"],
    answer: 2
    },
    {
    question: "今天是何年?",
    type: "multiple_choice",
    choices: ["A) 2022", "B) 2023", "C) 2024", "D) 2025"],
    answer: 3
    },
    {
    question: "近年全球最嚴重的疾病?",
    type: "multiple_choice",
    choices: ["A) 流感", "B) COVID-19", "C) 傷風", "D) 感冒"],
    answer: 2
    },
    {
    question: "他/她是誰?",
    type: "object_recognition",
    image_file: "./images/chiefexecutive.png",
    choices: ["A) 梁振英", "B) 鄧炳強", "C) 陳茂波", "D) 李家超"],
    answer: 4
    },
    {
    question: "辨認以下物件:",
    type: "object_recognition",
    image_file: "./images/watch.png",
    choices: ["A) 手錶", "B) 電話", "C) 電腦", "D) 耳機"],
    answer: 1
    },
    {
    question: "是否經常忘記東西放在哪裡?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 2
    },
    {
    question: "是否經常在找東西?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 2
    },
    {
    question: "你還記得你的的第一次約會嗎?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 1
    },
    {
    question: "你平時搭巴士或者小巴是否會答錯站?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 2
    },
    {
    question: "你是否會擔心鄰居會傷害你或偷你東西?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 2
    },
    {
    question: "你是否會擔心家人送你去老人院嗎?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 2
    },
    {
    question: "你是否有看到房間有其他人嗎?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 2
    },
    {
    question: "你是否會想經常離開家裡嗎?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 2
    },
    {
    question: "你是否會想經常在待家裡嗎?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 2
    },
    {
    question: "你在家中找不到東西時是否會生氣嗎?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 2
    },
    {
    question: "你在夜晚時會經常外出嗎?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 2
    },
    {
    question: "你在吃飯時是否需要人協助嗎?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 2
    },
    {
    question: "如果你之前會煮飯，你現在是否還會煮飯嗎?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 1
    },
    {
    question: "你是否會花費大量時間在選擇衣服上嗎?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 2
    },
    {
    question: "你是否會經常打錯電話或send錯whatsapp給其他人嗎?",
    type: "true_false",
    choices: ["A) 是", "B) 否"],
    answer: 2
    }
    ];

var SPMSQquestions=[];






//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang = "MIXquestions";
    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";

    updateQuestion();
    
    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (let i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];
    }/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
            
        score+=1;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
        
    }else{

        score+=0;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div";
    }

    if (countQues<window[lang].length-1){
        countQues++;
        updateQuestion();
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";
    }

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="You Solved "+(countQues+1)+" questions of "+document.getElementById("language").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" were Right and "+((countQues+1)-correct)+" were Wrong";
    
    document.getElementById("display-final-score").innerHTML="Your Final Score is: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Remark: OutStanding ! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Remark: Good, Keep Improving.";
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Remark: Satisfactory, Learn More.";
    }else{
        document.querySelector(".remark").innerHTML="Remark: Unsatisfactory, Try Again.";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

function updateQuestion() {
    if(window[lang][countQues].type === "true_false") {
        document.getElementById("opt2").style.display = "none";
        document.getElementById("lb2").style.display = "none";
        document.getElementById("opt3").style.display = "none";
        document.getElementById("lb3").style.display = "none";
    } else {
        document.getElementById("opt2").style.display = "unset";
        document.getElementById("lb2").style.display = "unset";
        document.getElementById("opt3").style.display = "unset";
        document.getElementById("lb3").style.display = "unset";
    }

    if(window[lang][countQues].type === "object_recognition") {
        document.querySelector(".question").innerHTML = `
            <h1>${window[lang][countQues].question}</h1>
            <img src="${window[lang][countQues].image_file}" alt="Object to recognize">
        `;
    } else {
        document.querySelector(".question").innerHTML = `<h1>${window[lang][countQues].question}</h1>`;
    }

    for (let i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
    }

    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;

    document.querySelector(".quiz").style.display = "block";
    window.location.href = "#score";
}

/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

/*Smooth Scroll End*/


document.querySelector(".go-to-main").addEventListener("click", function() {
    window.location.href = "main.html";
});