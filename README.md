# skeleton-kata-typescript
Proyecto para empezar un repo de zero

## Instalación 

```bash
sudo npm install -g yarn
```

Json --> comando que tiene que estar instalado global. 

```bash
$ yarn install
```

```bash
$ yarn test
```

## Metodología
Para realizar los test utilizaremos TDD. 
Por cada iteración crearemos un commit describiendo que iteración hemos realizado de TDD.

Ejemplo:
- Paso 1 test falla:
    - git commit -a -m "RED Send one return one"
- Paso 2 test pasa:
    - git commit -a -m "GREEN Send one return one"
- Paso 3 refactor:
    - git commit -a -m "BLUE Magic Numbers"

## Lint

## Katateca

### Starter
1. [FizzBuzz](katateca/starter/fizz_buzz.md) Test Unitario
2. [String Calculator](katateca/starter/string_calculator.md) Test Unitario
3. [DNI](katateca/starter/dni.md) Test Unitario - Excepciones - ValueObject
4. [Arabic_to_roman](katateca/starter/arabic_to_roman.md)


### Patrones de diseño
1. [Fizz Buzz con Chain of Responsability](katateca/patrones_de_diseño/chain_of_responsability_fizz_buzz.md) Test Unitario