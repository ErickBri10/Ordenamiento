//LIBRERIAS
#include <iostream>
using namespace std;

int main(){
	//COLOR
	system ("color F0");
	
	//VARIABLES
	int num1;
	
	//SOLICITAT DATOS AL USUARIO
	cout << "Realice un programa que lea un valor entero y determine si se trata de un numero par o impar" << endl;
	cout << "Ingrese el numero: ";
	cin >> num1;

	//CONDICION PARA SABER SI UN NUMERO ES PAR MEDIANTE RESIDUO ES IGUAL A CERO ES PAR
	if (num1 % 2 == 0) {
        cout << "El numero " << num1 << " es par." << endl;
    //SI NO ES PAR ES INPAR
    } else {
        cout << "El numero " << num1 << " es impar." << endl;
    }
    return 0;
}
