// If else if
document.getElementById("btn-4"). onclick = function () {
    document.getElementById('Statement').innerHTML = "";
    let Marks = +prompt("Enter your marks. 👇")


    if ( 100 < Marks) {
        alert('Put correct value. 😪')
        document.getElementById('output').innerText = "Put correct value. 😪";
        document.getElementById('output').style.color = "red";

    }
    else if ( 90 <= Marks) {
        alert('You Got A+. 😃')
        document.getElementById('output').innerHTML = "You Got A+. 😃";
        document.getElementById('output').style.color = "green";
    }else if( 80 <= Marks){
        alert('You Got A. 😁')
        document.getElementById('output').innerHTML = "You Got A. 😁";
        document.getElementById('output').style.color = "green";
    }else if( 70 <= Marks){
        alert('You Got B. 😊')
        document.getElementById('output').innerHTML = "You Got B. 😊";
        document.getElementById('output').style.color = "green";
    }else 
    {
        alert('You Are Fail. 😳')
        document.getElementById('output').innerHTML = "You Are Fail. 😳 ";
        document.getElementById('output').style.color = "red";

    }


}
// clear result 
document.getElementById('btn-result'). onclick = function () {
    document.getElementById('output').innerHTML = "";
}
// clear result 
document.getElementById('btn-statement'). onclick = function () {
    document.getElementById('Statement').innerHTML = "";
}
// login
document.getElementById('btn-7'). onclick = function () {
    document.getElementById('Statement').innerHTML = "";

   let username = prompt("Enter Your Username. 👇")
   let password = +prompt("Enter Your Password. 👇")
    
   if ( username === "admin" && password === 1234  ){
 document.getElementById('output').innerHTML = "you are successfully logged in"
 document.getElementById('output').style.color = "green";
   }else{
document.getElementById('output'). innerHTML = '<span class="text-danger fw-bold">Invalid value </span> Try using username = admin <br> password = 1234 '

   }
 
}
// Concatenate Some Strings
document.getElementById('btn-1').onclick = function () {
    let firstname = ("Abdul")
    let lastname = ("Rehman")
    let sum = firstname + lastname
    document.getElementById('Statement').innerHTML = '<p>"Abdul"+"Rehman"</p> '
    document.getElementById('output').innerHTML = sum ;
    document.getElementById('output').style.color = "green" ;
}
// Ask Name from User
document.getElementById('btn-2').onclick = function () {
    let firstname = prompt("Enter Your Firstname. 👇")
    let lastname = prompt("Enter Your lastname. 👇")
    let Fullname = firstname + lastname
    document.getElementById('Statement').innerHTML = "Firstname =" + firstname + "" + "<br>"+ "Lastname =" + lastname + "" + "<br>" + "Fullname = Firstname + Lastname"
    document.getElementById('output').innerHTML = Fullname ;
}
// Comparison Operators
document.getElementById('btn-3').onclick = function () {
    let num1 = prompt("Enter Your 1st value. 👇")
    let num2 = prompt("Enter Your 2nd value. 👇")
    if(num1===num2){
        document.getElementById('Statement').innerHTML = 'num1===num2'
        document.getElementById('output').innerHTML = " True Condition. 😃" ;
        document.getElementById('output').style.color = "green" ;
    }
    else{
        document.getElementById('Statement').innerHTML = 'num1!==num2'
        document.getElementById('output').innerHTML = " False Condition. 😪" ;
        document.getElementById('output').style.color = "red" ;
    }
}
// Testing Sets of Conditions

document.getElementById('btn-5').onclick = function () {
   
    let age = prompt("Enter Your age. 👇")
    let weight = prompt("Enter Your weight. 👇")
    if( age <= 16 && weight <= 25 ){
        document.getElementById('output').innerHTML = " You are baby " ;
        document.getElementById('Statement').innerHTML = 'age <= 16 && weight <= 25'
    }
    else if(age <= 25 && weight <= 80){
        document.getElementById('output').innerHTML = "You are Young Boy and  healthy" ;
        document.getElementById('Statement').innerHTML = 'age <= 25 && weight <= 80'
    }
    else if(age <= 35 && weight <= 90){
        document.getElementById('output').innerHTML = "You are Youngman and  healthy" ;
        document.getElementById('Statement').innerHTML = 'age <= 35 && weight <= 90'
    }
    else if(age <= 45 && weight <= 95){
        document.getElementById('output').innerHTML = "You are Uncle and  healthy" ;
        document.getElementById('Statement').innerHTML = 'age <= 45 && weight <= 95'
    }
    else{
        document.getElementById('output').innerHTML = "you are a Senior Citizen" ;
    }

}
// If Statements Nested
document.getElementById('btn-6').onclick = function () {
   
    let Username = prompt("Enter Your Username. 👇")
    if ( Username == "admin") {
    let password = +prompt("Enter Your Password. 👇")
    if ( password == 1234 ) {
        document.getElementById("output").innerHTML= "You are successfully logged in"
        document.getElementById("output").style.color= "green"
    }
    else {
        document.getElementById("output").innerHTML= "<span class='text-danger'> Wrong Password  </span> <br> Correct Password = 1234"
}
    }
else{
        document.getElementById("output").innerHTML= "<span class='text-danger'> Wrong Username </span> <br> Correct username = admin "
        
}
}
