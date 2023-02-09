1. ### La página tiene un orden de tabulación logico

**Comprobado.**
El orden de la tabulación de la página web es correcto. Sin embargo, ha sido necesario hacer focuseable algunos elementos ya que al tabular no se podía visualizar claramente cuál estaba siendo destacado. 

 2. ### Los controles interactivos son focuseables desde el teclado 

**Comprobado.** Como se ha mencionado anteriormente, la sección del portfolio (cuyas imágenes contienen un enlace a github) no era enfocable desde el teclado y este problema se ha solucionado manualmente. Además, el menú desplegable que aparece cuando la pantalla llega a un tamaño concreto tampoco era interactivo desde el teclado. 

3. ### Los elementos interactivos indican su propósito y su estado

**Comprobado.** Cada elemento interactivo se puede tabular y cuando está seleccionado se resalta con un cuadrado alrededor de él, por lo cual los usuarios saben que pueden interactuar con dicho elemento. Los elementos no interactivos no se destacan al tabular sobre ellos. 

4. ### El enfoque del usuario se dirige al nuevo contenido agregado a la página

**No aplica**. No se añade nuevo contenido a la página web. 

5. ### El foco del usuario no queda atrapado accidentalmente en una región

**Comprobado.** Se ha comprobado manualmente navegando hacia y desde todos los elementos de la página usando solo el teclado. Se ha navegado hacia adelante y hacia atrás de la página pasando por todos los elementos interactivos con éxito. 

6. ### Los controles personalizados tienen etiquetas asociadas

**Comprobado.** Los controles interactivos personalizados son enfocables. Como usamos Javascript para convertir un <div> en un menú desplegable, éste no se inserta automáticamente en el orden de tabulación y por tanto, no es interactivo. Este inconveniente se ha solucionado manualmente. 

7. ### Los controles personalizados tienen roles ARIA 

**Comprobado.** Se han añadido roles ARIA a los elementos no semánticos que son díficiles de identificar de otra manera utilizando la estructura del documento HTML con tal de hacerlos accesibles. 

8. ### El orden visual en la página sigue el orden DOM 

**Comprobado.** El DOM generado a partir del código HTML contiene la estructura correcta. El orden de tabulación es correcto y el contenido fuera de la pantalla está correctamtente oculto de la navegación. 

9. ### El contenido fuera de la pantalla está oculto a la tecnología de asistencia 

**No aplica.** No hay contenido fuera de la pantalla. 

10. ### Los elementos destacados de HTML5 se utilizan para mejorar la navegación

**Comprobado.** Se utilizan elementos "landmarks" para mejorar la experiencia de navegación web para los usuarios de tecnología de asistencia, ya que los elementos como main o nav actúan como puntos de referencia a las que pueden saltar los lectores de pantalla. 