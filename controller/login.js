

function logar(){
    var login = document.getElementById('email').value;
    var senha =document.getElementById('senha').value;

    if(login == "admin" && senha == "1234"){
        alert("sucesso");
        location.href="index.html";
    }else{
        alert("Usuario ou senha incorretos");
    }
}