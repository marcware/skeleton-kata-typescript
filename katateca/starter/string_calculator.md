# String Calculator

## Incremental kata
Esta es una kata incremental, nos ayuda a simular un desarrollo de negocios. 

## Paso 1
Crea un método llamado **add(String numbers)** 

Se le puede pasar al método un string que contenga dos números separados por comas, y tiene que devolver la suma. 

Ejemplo: 
- "" devuelve 0 
- "1" devuelve 1 
- "1,2" devuelve 3

## Paso 2
Ahora al método **add** se le permiten un número indeterminado de valores.

## Paso 3
Permitir que se puedan utilizar diferentes separadores entre números

Ejemplo:
- El siguiente resultado es correcto: "1\n2,3" es igual a  6
- El siguiente resultado NO es correcto  "1, \ n", este resultado no se tiene que probar, solo aclarar.

## Paso 4 
Soporte para varios delimitadores:
- Para modificar un delimitador, en el principio de la cadena contrendrá el nuevo delimitador. **“//[delimiter]\n[numbers…]”**
    - Ejemplo: “//;\n1;2” el resultado es 3, el nuevo delimitador es **;**
    - La primera línea es opcional. Todos los escanarios anteriores tienen que ser compatibles.

## Paso 5 
Cuando existen números negativos tiene que saltar una excepción **“negatives not allowed”** y el número que se ha pasado. Si hay más de un número negativo, se tienen que mostrar todos.

## Paso 6 
Los número más grandes que 1000 tienen que ser ignorados, si añadimos 2+1000 = 2

## Paso 7 
El delimitador puede tener un tamaño que se desee, con el siguiente formatos. **“//[delimiter]\n”** por ejemplo 
**“//[---]\n1---2---3”** el resultado es 6

## Paso 8 
Se pueden pasar diferentes dilimitadores **“//[delim1][delim2]\n”** por ejemplo **“//[*][%]\n1*2%3”** should return 6.

## Paso 9
Asegúrate de que también puede manejar varios delimitadores con una longitud superior a un carácter.





