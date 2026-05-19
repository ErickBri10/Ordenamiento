//LIBRERIAS
#include <iostream>
using namespace std;

int main(){
	//COLOR
	system ("color F0");
	
	//VARIABLES
	int edad;
	
	//SOLICITAR DATOS AL USUARIO
	cout << "Escriba un programa que solicite una edad (un entero) e indique en la salida estandar si la edad introducida esta en el rango [18-35]" << endl;
	cout << "Ingresa tu edad: ";
	cin >> edad;
	
	//CONDICION DEL DATO INGRESADO ESTE ENTRE 18 Y 35
	if (edad >= 18 && edad <= 35) {
        cout << "La edad esta en el rango (18-35)" << endl;
    //CONDICION DE QUE EL DATO INGRESADO NO ESTA EN EL RANGO
    } else {
        cout << "La edad no esta en el rango (18-35)" << endl;
    }
    return 0;
}
