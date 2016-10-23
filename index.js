"use strict";

var formatRut = function(field) {
  if (!field) {
    return;
  }
  field = field.replace(/-/g,'');
  field = field.replace(/\./g,'');
  var length = field.length;
  field = 	field.substring(0, length-7) + '.' + 
  			field.substring(length-7, length-4) + '.' + 
  			field.substring(length-4, length-1) + '-' + 
  			field.substring(length-1, length);
  return field;
};

function random_rut(){
	var rut_random = '';
	var mul = 2, sum = 0, dig;
	var LENGTH = 8;

	for(var i = 0; i < LENGTH; i++){
		dig = Math.floor(Math.random()*10);

		if (dig === 0 && i === LENGTH - 1) {
			dig = 1;
		}

		sum += (dig * mul);

	    if (mul === 7) {
	    	mul = 2;
	    } else {
	    	mul++;
	    }

	    rut_random = String(dig) + rut_random;
	}

	var res = sum % 11, dvr;

	if (res===1) {
		dvr = 'k';
	} else if (res===0) {
		dvr = '0';
	} else {
		var dvi = 11-res;
		dvr = dvi + '';
	}

	rut_random = formatRut(rut_random + dvr);
	return rut_random;
}