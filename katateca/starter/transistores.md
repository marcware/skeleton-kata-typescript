# Transistores

Si desea construir algo usando una Raspberry Pi, probablemente uses resistencias. 
Para este ejercicio, necesita saber dos cosas sobre ellos:

Cada resistencia tiene un valor de resistencia.
Las resistencias son pequeñas, tan pequeñas que si imprimiera el valor de resistencia en ellas, sería difícil de leer.

Para solucionar este problema, los fabricantes imprimen bandas codificadas por colores en las resistencias para indicar sus valores de resistencia. Cada banda tiene una posición y un valor numérico. Por ejemplo, si imprimieran una banda marrón (valor 1) seguida de una banda verde (valor 5), se traduciría al número 15.

En este ejercicio, creará un programa útil para que no tenga que recordar los valores de las bandas. El programa tomará los nombres de los colores como entrada y generará un número de dos dígitos, ¡incluso si la entrada es de más de dos colores!

Del ejemplo anterior: marrón-verde debería devolver 15 marrón-verde-violeta debería devolver 15 también, ignorando el tercer color.
Si solo pasamo un color nos devolverá le mensaje :
> Deben estar presentes al menos dos colores

Los colores se asignan a los números del 0 al 9 en la secuencia: 
- 0 -> Negro
- 1 -> Marrón 
- 2 -> Rojo 
- 3 -> Naranja 
- 4 -> Amarillo 
- 5 -> Verde 
- 6 -> Azul 
- 7 -> Violeta 
- 8 -> Gris 
- 9 -> Blanco

