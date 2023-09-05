username = "cristiano ronaldo";
password = "123567";


function confirmar() {
    var lgn = document.getElementById('login');
    var pwd = document.getElementById('password');
    
    if(lgn == username & pwd == password) {
        alert('Seja bem vindo')
    } 
    else {
        alert('refaça o Login')
    }
}