//CALENDÁRIO DATEPICKER
$(document).ready(function(){
    $('.datepicker').datepicker();
});

//RELÓGIO TIMEPICKER
$(document).ready(function(){
    $('.timepicker').timepicker();
});

//SELETOR DE PRIORIDADE
$(document).ready(function(){
    $('select').formSelect();
});

//CONTADOR DE CARACTERES
$(document).ready(function() {
    $("input.validate, textarea").each(function(){
         $(this).characterCounter();
    });
    $("input").each(function(){
         if(!($(this).hasClass("validate")))
         {
              $(this).addClass("validate");
         }
    });
    $("textarea").attr("data-length", "500");
    $("#endereco").attr("data-length", "300");
});

//AUTO-COMPLETE OFF
$(".validate").each(function(){
     $(this).attr("autocomplete", "off");
});

//MODAL
$(document).ready(function(){
    $('.modal').modal();
});
