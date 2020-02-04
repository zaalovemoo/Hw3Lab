var q = document.getElementById("Newgame");
var y = Math.floor(Math.random()*100)+1; 
var countnum = 1; 
let remaining;
q.style.display = "none";  
document.getElementById("submit").onclick = function(){ 
    var x = document.getElementById("guessField").value; 
    if(countnum<=10){
        if(x > 100 || x < 1){
            document.querySelector('.result').textContent = "Please Enter Number  1-100"; 
        }else{
            document.querySelector('.turn').textContent = 10 - countnum + " turn left";
            if(x == y){     
                document.querySelector('.result').textContent   = "Congratulation The Number is " + y;                   
                q.style.display = "block";
            }else if(x > y){     
                countnum++;
                document.querySelector('.result').textContent = "Last guess was too high"; 
            }else{ 
                countnum++; 
                document.querySelector('.result').textContent = "Last guess was too low"; 
                } 
                if(countnum== 2){
                    remaining = x;
                }else{
                    remaining += ", "+x;
                }
            document.querySelector('.history').textContent = remaining;    
        }       
    }

    if(countnum == 11){
        q.style.display = "block"; 
        document.querySelector('.result').textContent = "Game Over The Number is " + y ; 
    }

}



            
    