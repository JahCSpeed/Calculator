let eval = "0";
let leftSide = "",rightSide = "";
function inputNumber(){
  let number = event.target.innerHTML;
  if((eval == "0" || eval == "-0" )){
    if(eval == "-0" ){
      eval = "-" + number.trim();
    }else{
      eval = number.trim();
    }
    
  }else{
    eval = eval + number.trim();
  }
  updateDisplay();
}
function enterOpp(){
  let number = event.target.innerHTML;
  eval = eval + event.target.id.toString().trim();
  updateDisplay();
}
function updateDisplay(){
  let screen = document.getElementById("screen");
  screen.value = (eval);
}
function inputDecimal(){
  if(eval.indexOf(".") == -1){
    eval = eval + event.target.innerHTML.trim();
    updateDisplay();
  }
}
function changeSign(){

  if(eval[0] != "-"){
    eval = "-" + eval;
  }else{
    eval= eval.substring(1);
  }
  updateDisplay();
}
function clearAll(){
  eval = "0";
  updateDisplay();

}
function applyPercentage(){
  let screen = document.getElementById("screen");
  let tempNumber = math.evaluate(eval + "/100");
  eval = tempNumber.toString();
  updateDisplay();
}

function evaluate(){
  eval = math.evaluate(eval);
  updateDisplay();
}

function onLoad(){
  updateDisplay();
  let num_buttons = document.getElementsByClassName("number");
  let decimal_button = document.getElementById("decimal").addEventListener(
    "click",
    function(){
      inputDecimal()
    },
    false
  );
  let clear_button = document.getElementById("clear").addEventListener(
    "click",
    function(){
      clearAll()
    },
    false
  );
  let sign_button = document.getElementById("sign").addEventListener(
    "click",
    function(){
      changeSign()
    },
    false
  );
  let percent_button = document.getElementById("percent").addEventListener(
    "click",
    function(){
      applyPercentage();
    },
    false
  );
  let eval_button = document.getElementById("equals").addEventListener(
    "click",
    function(){
      evaluate();
    },
    false
  );
  let opp_buttons = document.getElementsByClassName("button opp");
  
  for(let i = 0; i < num_buttons.length; i++){
    num_buttons[i].addEventListener("click",function() {inputNumber()},false);
  }
  for(let i = 0; i < opp_buttons.length; i++){
    opp_buttons[i].addEventListener("click",function() {enterOpp()},false);
  }
}
function test() {
     
  // Original string
  var a = 4;
  var b = 4;

  // Finding the multiplication
  var value = eval(new String(a * b));
  console.log(value);
}