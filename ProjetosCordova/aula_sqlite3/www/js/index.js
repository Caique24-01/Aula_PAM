document.addEventListener('deviceready', onDeviceReady, false);

let db ;
function inserir(){
    let userName = document.getElementById("txtLogin").value;
    let userPass = document.getElementById("txtPassword").value;

    db.transaction(function(tx){
        console.log(tx);
        tx.executeSql('INSERT INTO usuarios VALUES (?,?)', [userName, userPass]);
    },
    function(err){
        console.log(err.message);
    },
    function(){
        alert("Inserido com sucesso")
    });
};
function listar(){
    db.executeSql(
        'SELECT login AS uLoginName, pass AS uPassword FROM usuarios', [], function(rs) {
            alert(JSON.stringify(rs));
            alert(rs.rows.length);
            let i = 0;
            for(i = 0; i < rs.rows.length; i++){
                alert("item "+i);
                let recordItem = rs.rows.item(i);
                alert(JSON.stringify(recordItem));
            }                
    }, function(error) {
        alert('Erro no SELECT: ' + error.message);
    }, function(){
        alert("Listado com sucesso");
    }
    );
};

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //Confere se tem o objeto sqlitePlugin 
    console.log(window.sqlitePlugin);
    //Adicionar função para o evento do botão inserir 
    document.getElementById("btnInserir").addEventListener("click", inserir);
    //Adicionar função para o evento do botão listar 
    document.getElementById("btnListar").addEventListener("click", listar);
    //criar e abrir o banco de dados 
    let dadosDoBanco = {
        name:"my.db",
        location:"default",            
        androidDatabaseProvider:"system"
    }; 
    db = window.sqlitePlugin.openDatabase(dadosDoBanco)
    //criar tabela com duas colunas 
    db.transaction(function(tx){
        console.log(tx);
        tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios (login, pass)');
    },
    function(err){
        console.log(err.message);
    },
    function(){
        alert("Tabela criada com sucesso")
    });
}