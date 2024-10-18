/**
 * Funciones reutilizables Jquery
 */
$.fn.formAObjeto = function() {
	var o = {};
	var aCamposForm = this.serializeArray();
	$.each(aCamposForm, function() {
	       if (o[this.name]) {
	           if (!o[this.name].push) {
	               o[this.name] = [o[this.name]];
	           }
	           o[this.name].push(this.value || '');
	       } else {
	           o[this.name] = this.value || '';
	       }
	});
	return o;
}

$.fn.muestraMsgError = function(){
	$.each(this,function(key,value){
		$('#'+key).after('<small class="error">'+value+'</small>');
	});
}

function muestraMensajeExito(idMensaje,texto){
	  $('.error').remove();
      $('#'+idMensaje).removeClass("alert-danger");
      $('#'+idMensaje).addClass("alert-success");
      $('#'+idMensaje).html(texto);
      $('#'+idMensaje).show();
}

function muestraMensajeError(idMensaje,texto){
	$('#'+idMensaje).html(texto);
	$('#'+idMensaje).removeClass("alert-success");
	$('#'+idMensaje).addClass("alert-danger");
	$('#'+idMensaje).show();
}

function agregaMsgError(mapErrores){
	$.each(mapErrores,function(key,value){
    		$('#'+key).after('<small class="error">'+value+'</small>');
    });
}

function clearMensajesForm(formu){
	$('#' + formu +'small').remove();
}

function clearMensajeById(idMensaje){
    $('#' +idMensaje).empty();
    $('#' +idMensaje).hide();
}

function hayDatosCargadosEnDIV(nombreDiv){
	 var rta=false;
	 $('#'+nombreDiv+' input:text').each(function(key, value) {
			
		 if(this.value!=""){
			 rta= true;
		 }
			 
			
	});		
	 $('#'+nombreDiv+' input:checkbox').each(function(key, value) {
			
		 if(this.checked){
			 rta= true;
		 }
			 
			
	});
	 $('#'+nombreDiv+' select').each(function(key, value) {
			
		 if(this.value!=""){
			 rta= true;
		 }
			 
			
	});		
	 return rta;
}

