
## Principios de Solid

Supongamos que tenemos una aplicación que tiene sacar la sumatoria de las Areas y Perimetrios de Rectangulos

### Single Responsibility Principle (SRP)

Una Clase solo tiene que tener una sola funcionalidad , solo tiene un objetivo en su vida

### Open CLosed Principle (OCP)

El codigo debe de estar abierto para la extension pero cerrado para su edicion

### Liskow Substitution Principle (LSP)

Una Clase AA que hereda comportamientos de una clase A (padre), no debe modificar el comportamiento de el padre
La Clase AA (sub-clase o hija) solo debe añadir comportamiento.

### Interface Segregation Principle (ISP)

AL modelar las interfaces debemos de asegurarnos de dividir las funcionalidades para que una clase no tenga funcionalidades
que no le competen.