//LIBRERIAS
#include <iostream>
using namespace std;

int main(){
	//COLOR 
	system ("color F0");
	
	//VARIABLES
	float num1, num2, num3, mayor;
	
	//SOLICITAR DATOS AL USUARIO
	cout << "Escriba un programa que lea tres numeros y determine cual de ellos es el mayor" << endl;
	cout << "Ingresa el primer valor: ";
	cin >> num1;
	cout << "Ingresa el segundo valor: ";
	cin >> num2;
	cout << "Ingresa el tercer valor: ";
	cin >> num3;
	
	 //PRIMER VALOR MAYOR
    mayor = num1;
    //SE COMPARA CON EL SEGUNDO
    if (num2 > mayor) {
        mayor = num2;
    }
    //SE COMPARA EL TERCERO
    if (num3 > mayor) {
        mayor = num3;
    }
    
    //RESULTADO
    cout << "El mayor es: " << mayor << endl;


}
