
//Recuperando o input após ele receber o focus
const inputUser = document.querySelector("input[type ='text']");
//Adicionando o evento de focus no inputUser
inputUser.addEventListener("focus", ()=>{
    //inputUser.setAttribute("NOME DO ATRIBUTO", "VALOR DO ATRIBUTO");
    inputUser.setAttribute("style", "outline-color:#ff0000;");
});

inputUser.addEventListener("keyup", ()=>{
    //Enquanto o usuário digitar, vamos contar a quantidade de caractéres que existe no campo, enquanto a quantidade for menor que 5, manteremos o outline na cor vermelha, assim que a quantidade atingir 5 ou mais mudamos a cor para verde.

    if(inputUser.value.length < 5){
        inputUser.setAttribute("style","outline-color:#ff0000;");
    }else{
        inputUser.setAttribute("style","outline-color:#00ff00;");
    }

} );

eyePass.addEventListener("click", ()=>{
    const inputPass = document.querySelector("input[name='txtPass']");

    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type","text");
    }else{
        inputPass.setAttribute("type","password");
    }
    
});