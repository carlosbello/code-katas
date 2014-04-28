# Katayuno del sábado 26/04/2014

Solución del Coding Kata organizado por http://aprendiendotdd.com
en el espacio cedido por http://www.materiagriscoworking.com/

## El problema

> Nota: Este no es el planteamiento (ni el nombre) exacto del problema, sino
  una adaptación del mismo.

- El usuario debe adivinar en menos de 15 intentos un código de 4 carácteres 
  compuesto solo por los caracteres R, M, A, V, N, I
- Cada vez que el usuario indique un código se le dará una pista sobre cuán
  acertado está, indicando por cada carácter:
  * Una 'X', si el carácter está en la posición correcta
  * Un '*', si el carácter está fuera de posición

Por ejemplo, si el código es MANI y el usuario indica NANA, se devolverá la 
pista'XX', o si indica MIRV, se devolverá 'X*'.