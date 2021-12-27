var form = document.getElementById("forms")
var pas1 = document.getElementById("pass1");
var pas2 = document.getElementById("pass2");

form.addEventListener("submit", function(event)
    {
        if(pas1!=pas2){
            var x = document.getElementById("snackbar");
            pas_length = pas1.value.split("").length
            if (pas_length <9){
                event.preventDefault();
                x.innerHTML= "password must be greater than 9 character"
            }
            else if(pas_length >20){
                event.preventDefault();
                x.innerHTML = "password must be smaller than 20 character"
            }
            else if(pas1.value!=pas2.value){
                event.preventDefault();
                x.innerHTML = "Password needs to be same"
            }
            else{
                return false
            }
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }
    }
)
