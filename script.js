function rpsGame(yourChoice){
 console.log(yourChoice);
 var humanChoice,botChoice;
humanChoice=yourChoice.id;//Human choice
botChoice=numberToChoice(ranToRps());
console.log("computer choice",botChoice);
result=decideWinner(humanChoice,botChoice)
console.log(result);
// Deecide winner(0,1)(1,1)(1,0)
message=finalMesssage(result);//Result {Message:'you win!',color:'green'}
console.log(message);
rpsFrontEnd(humanChoice,botChoice,message)
}

function ranToRps(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return['rock','paper','scissor'][number]
}
function decideWinner(yourChoice,computerChoice){
    var rpsData={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'rock':0.5,'rock':0}
    };
    var yourScore = rpsData[humanChoice][computerChoice];
    var computerScore= rpsData[computerChoice][humanChoice];
    return(yourScore,computerScore);
}
function finalMesssage(yourScore,computerScore){
    if(yourScore==0){
        return{'message':'You Win'}
    }
    else if(yourScore==0.5){
        return{'message':'Draw'}
    }
    else{
        return{'message':'Loss'}
    }
}
function rpsFrontEnd(yourChoice,botChoice,message){
    var imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    //remove all element
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');
    humanDiv.innerHtml="<img src='"+imageDatabase[yourChoice]+"height='150' width='150'>";
    botDiv.innerHtml="<img src='"+imageDatabase[botChoice]+"height='150' width='150'>";

    document.getElementById('flex-box-reps-div').appendChild(humanDiv);
    document.getElementById('flex-box-reps-div').appendChild(botDiv);
}