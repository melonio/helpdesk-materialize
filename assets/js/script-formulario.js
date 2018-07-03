// var nome;
var diaHora;
// var hora;
// var endereco;
// var motivo;
$(function(){

     $("#btn-send").on("click", function(e){
          e.preventDefault();
          var nome = $("#nome").val();

          diaHora = new Date(Date.parse($("#data").val()));
          data = diaHora.getDate() + "/" + (diaHora.getMonth()+1) + "/" + diaHora.getFullYear();
          var hora = $("#hora").val();
          var endereco = $("#endereco").val();
          var motivo = $("#motivo").val();
          var prazo = new Date($("#prazo").val());
          var sln = prazo.getDate() + "/" + (prazo.getMonth()+1) + "/" + prazo.getFullYear();
          var prioridade = $("#prioridade").val();
          $("#nome-pedido").html(nome);
          $("#data-pedido").html(data);
          $("#endereco-pedido").html(endereco);
          $("#motivo-pedido").html(motivo);
          $("#prazo-pedido").html(sln);
          switch(prioridade){
               case 1:
               prioridade = "Baixa";
               break;
               case 2:
               prioridade = "Média";
               break;
               case 3:
               prioridade = "Alta";
               break;
               default:

          }
          // $("#prazo-pedido").html(sln);
     });

     $("#btn-confirm").on("mouseup", function(){
          console.log($("#nome-pedido").html());
          console.log($("#data-pedido").html());
          console.log($("#endereco-pedido").html());
          // $("input, textarea").each(function(){
          //      $(this).val("");
          // });
          window.location.reload();
     });

});
