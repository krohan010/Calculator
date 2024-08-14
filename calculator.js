let output = document.getElementById("output");
let string = "";
let keys = document.querySelectorAll('#button');
Array.from(keys).forEach((key) =>{
    key.addEventListener("click", function(e){
        if(e.target.innerHTML == "="){
            string = eval(string);
            output.innerHTML= string;
        }
        else if(e.target.innerHTML == "C"){
            string = "";
            output.innerHTML = string;
        }
        // console.log(e.target);
        else{
        string = string + e.target.innerHTML;
        output.innerText = string;
        }
    });
});