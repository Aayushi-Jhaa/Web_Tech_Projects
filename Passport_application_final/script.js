function cap() //Create the captcha for validation
{
    var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
                 ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
                 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!','@','#','$','%','^','&','*','+'];
    var a = alpha[Math.floor(Math.random()*71)];
    var b = alpha[Math.floor(Math.random()*71)];
    var c = alpha[Math.floor(Math.random()*71)];
    var d = alpha[Math.floor(Math.random()*71)];
    var e = alpha[Math.floor(Math.random()*71)];
    var f = alpha[Math.floor(Math.random()*71)];

    var final = a+b+c+d+e+f;
    console.log(final)
    document.getElementById('display-code').value = final;
}


function validCap(){
    var stg1 = document.getElementById('display-code').value;
    var stg2 = document.getElementById('textinput').value;
    if(stg1==stg2){
      alert("Form is validated Succesfully");
      return true;
    }
    else{
      alert("Please enter a valid captcha");
      return false;
    }
}

const App = () =>{
    cap();
    validCap();
}

App();

