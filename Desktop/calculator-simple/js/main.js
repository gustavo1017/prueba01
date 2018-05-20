/*Funcion javascript
Logica de la calculadora en un solo objeto calculadora*/
function Calculator(){
this.memoria = '';
this.numero_uno = "";
this.numero_dos = "";
this.resultado="";
//this.operators = ['+','-','*','/','='];
this.operador="";
this.captura_numero_uno = function (){
this.numero_uno= this.memoria;
this.memoria= '';
//console.log(this.numero_uno)
}
this.captura_numero_dos = function(){
  this.numero_dos=this.memoria;
  this.memoria='';
}
this.operar = function(a,b,operador){
  switch (operador) {
    case '+':
      this.resultado=a+b;
      return this.resultado;
    //  console.log(this.resultado);
      break;
      case '-':
      this.resultado=a-b;
        return this.resultado;
        break;
        case 'x':
        this.resultado=a*b;
          return this.resultado;;
          break;
          case '/':
          this.resultado=a/b
            return this.resultado;
            break;
    default:
  }
}
this.ejecutar= function(a){
switch (a) {
  case '+':
  this.captura_numero_uno();
  this.operador="+";
    break;
    case '-':
    this.captura_numero_uno();
    this.operador="-";
      break;
      case 'x':
      this.captura_numero_uno();
      this.operador="x";
        break;
        case '/':
          this.captura_numero_uno();
          this.operador="/";
          break;
          case '=':
          this.captura_numero_dos();
          this.memoria = this.operar(parseInt(this.numero_uno),parseInt(this.numero_dos),this.operador);
            break;
            case 'CE':
            this.memoria = "";
            this.numero_uno="";
            this.numero_dos="";
            this.operador="";
            this.resultado="";
              break;
  default:
}
}

}
/*Codigo JQuery Para la funcionabilidad de la calculadora*/
var calcu = new Calculator();
$(function(){
$('.digit').on('click', function(){
  digito = $(this).text();
  calcu.memoria += digito;
  $('.form-control').val(calcu.memoria);
});


$('.operator').on('click', function(){
		var signo = $(this).html();
    calcu.ejecutar(signo);
$('.form-control').val(calcu.memoria);
});


});
