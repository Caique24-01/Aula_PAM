let app = { 

    contatoSelecionado : null,

    inicializar: function(){
        console.log("iniciar");
        document.addEventListener('deviceready', app.onMyDeviceReady, false);
        document.addEventListener('resume', app.retornoAoPrimeiroPlano, false);
    },
   onMyDeviceReady: function() {
        console.log('######Running cordova-' + cordova.platformId + '@' + cordova.version);
        document.getElementById(" bntSelecionaContato").addEventListener('click', app.selecionarContato)
    },
    retornoAoPrimeiroPlano: function(onResumeEvent){
        console.log("####retorno Ao Primeiro Plano");
    },
    selecionarContato : function(){
        console.log("SelecionarContato");
        navigator.contacts.pickContact(function(c){
            console.log("#####Contato Selecionado");
            console.log(c);
            app.contatoSelecionado = c;
            console.log(c.displayName);
            let spanElement = document.getElementById("nomeDoContato").innerHTML = c.displayName;
            console.log(spanElement);

            console.log(c.photos)  
            let imgElement = document.getElementById("imgDoContato");
            console.log("Tag Img");
            console.log(imgElement);
            console.log("Value do obj Imagem do array photos");
            console.log(c.photos[0].value);
            imgElement.src = c.photos[0].value;     
        },function(err){
            console.log("#####Contato não Selecionado");
            console.log(err);
        });
    }

}
app.inicializar();
