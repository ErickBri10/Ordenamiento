//LIBRERIAS
#include <iostream>
using namespace std;

int main(){
	//COLOR
	system ("color F0");
	
	//VARIABLES
	char letra;
	
	//SOLICITAR DATOS AL USUARIO
	cout << " Escriba un programa que lea de la entrada estandar un caracter e indique en la salida estandar si el caracter es una vocal minuscula o no" << endl;
	cout << "\n(a, e, i, o, u)" << endl;
	cout << "Ingresa una vocal: ";
	cin >> letra;
	
	if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        cout << "Es una vocal minuscula" << endl;
    } else {
        cout << "Es una vocal mayuscula" << endl;
    }
    return 0;
}
