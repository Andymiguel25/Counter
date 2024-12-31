// set initial
var x = 0

// increase
function increment(){
    x++ ;
    document.getElementById("value").textContent = x
    document.getElementById("value").style.color = conditions()
}

// decrease
function decrement(){
    x-- ;
    document.getElementById("value").textContent = x
    document.getElementById("value").style.color = conditions()
}

// reload
function reset(){
    x = 0
    document.getElementById("value").textContent = x;
    document.getElementById("value").style.color = conditions()
}


function conditions(){
   if(x > 0){
    document.getElementById("value").style.color= "green";
    }else if (x < 0){
        document.getElementById("value").style.color= "red";
    }else{
        document.getElementById("value").style.color = "hsl(209, 61%, 16%)"
    }

}