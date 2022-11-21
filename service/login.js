
let usuario =document.getElementById('input-user');
let senha =document.getElementById('input-password');
let botao =document.getElementById('botao');
usuario = 'brendaferreirasantos26@gmail.com';
senha = 123456;

function validar (){



if(usuario && senha){

   console.log('ok');

}else{
    console.log('errado');
}

}

botao.addEventListener('click', validar);

