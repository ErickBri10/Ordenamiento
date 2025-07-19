//LIBRERIAS
#include<iostream>
using namespace std;

int main(){
	//COLOR
	system ("color F0");
	
	//VARIABLES
	float num1, num2;
	
	//SOLICITAR DATOS AL USUARIO
	cout << "Escriba un programa que lea dos numeros y determine cual de ellos es el mayor" << endl;
	cout << "Ingresa el primer valor: ";
	cin >> num1;
	cout << "Ingresa el segundo valor: ";
	cin >> num2;
	
	//CONDICION PARA DETERMINAR CUAL ES EL MAYOR
    if (num1 > num2) {
        cout << "El mayor es: " << num1 << endl;
    } else if (num2 > num1) {
        cout << "El mayor es: " << num2 << endl;
    //CUANDO SE INGRESEN NUMEROS IGUALES
    } else {
        cout << "Son iguales los numeros" << endl;
    }	
	return 0;
}
