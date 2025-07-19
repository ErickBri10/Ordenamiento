//LIBRERIAS
#include <iostream>
using namespace std;

int main(){
	//COLOR
	system ("color F0");
	
	//VARIABLES
	float num1;
	
	cout << "Comprobar si un numero digitado por el usuario es positivo o negativo" << endl;
	cout << "Ingresa un numero: ";
	cin >> num1;
	
	//CONDICION SI ES MAYOR A CERO
	if (num1 > 0) {
        cout << "El numero es positivo" << endl;
    //CONDICION SI ES MENOR A CERO
    } else if (num1 < 0) {
        cout << "El numero es negativo" << endl;
    //NUMERO INGRESADO ES CERO
    } else {
        cout << "El numero es cero" << endl;
    }
    return 0;
}
