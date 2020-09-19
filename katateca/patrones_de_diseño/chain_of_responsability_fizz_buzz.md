# Patrones de diseño


Chain of responsability Fizz Buzz [Github](https://github.com/marcware/chain_of_responsability_fizz_buzz).


# Fizz Buzz

Nos han pasado un programa que imprima los números del 1 al 100, pero aplicando las siguientes normas:

- Devuelve __Fizz__ si el número es divisible por 3.
- Devuelve __Buzz__ si el número es divisible por 5.
- Devuelve __FizzBuzz__ si el número es divisible por 3 y por 5.


Ejemplo:

1 2 __Fizz__ 4 __Buzz__ __Fizz__ 7 8 __Fizz__ __Buzz__ 11 __Fizz__ 13 14 __FizzBuzz__ 16 17 __Fizz__ 19 __Buzz__ ... etc

Tenemos que refactorizar este código.Para resolver correctamente esta Kata se tiene que aplicar el patrón
- [Chain of Responsibility](https://refactoring.guru/es/design-patterns/chain-of-responsibility)
- [Chain of Responsibility en TypeScript](https://refactoring.guru/es/design-patterns/chain-of-responsibility/typescript/example)

Cumplimos con los Principio SOLID:
-  Principio de Única Responsabilidad (SRP)
-  Principio Abierto/Cerrado (OCP)