function email (valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		alert('email no valido por favor ingrese un email valido');
	}
	else alert('usted acaba de registrarse gracias');
	}