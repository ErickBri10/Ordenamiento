//LIBRERIAS
#include <iostream>
using namespace std;

int main(){
	//COLOR
	system ("color F0");
	
	//VARIABLES
	int num1, num2, num3, num4;
	
	//DATOS SOLICITADOS AL USUARIO
	cout << "Escribe un programa que lea de la entrada estandar tres numeros. Despues debe leer un cuarto numero e indicar si el numero coincide con alguno de los introducidos con anterioridad" << endl;
	cout << "Ingresa el primer numero: ";
	cin >> num1;
	cout << "Ingresa el segundo numero: ";
	cin >> num2;
	cout << "Ingresa el tercer numero: ";
	cin >> num3;
	cout << "Ingresa el cuarto numero: ";
	cin >> num4;
	
	if (num4 == num1 || num4 == num2 || num4 == num3) {
        cout << "El cuarto numero coincide con alguno de los anteriores" << endl;
    } else {
        cout << "El cuarto numero no coincide con ninguno de los anteriores." << endl;
    }
    return 0;
}
