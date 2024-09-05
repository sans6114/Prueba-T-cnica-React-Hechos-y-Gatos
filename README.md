
# Prueba Técnica para Juniors y Trainees de React en Live Coding

Descripción

Esta prueba técnica consiste en realizar una aplicación React que integre dos APIs públicas relacionadas con gatos. El objetivo principal es obtener un hecho aleatorio sobre gatos y mostrar una imagen de un gato con la primera palabra del hecho. Esto involucra el manejo de peticiones asíncronas, manipulación de strings y renderizado dinámico de elementos en React.
APIs utilizadas:

    Facts Random (Hechos de gatos): https://catfact.ninja/fact
        Esta API devuelve un hecho aleatorio sobre gatos en formato JSON.

    Imagen de gato aleatoria: https://cataas.com/cat/says/hello
        Esta API genera una imagen con texto personalizado. Se usará la primera palabra del hecho aleatorio sobre gatos como el texto en la imagen.

Objetivos

    Recuperar un hecho aleatorio sobre gatos:
        Usar la API de "Facts Random" para obtener un hecho en formato JSON.

    Extraer la primera palabra del hecho:
        Manipular el string del hecho recibido para extraer la primera palabra.

    Mostrar una imagen de un gato con la primera palabra del hecho:
        Usar la API de "Cataas" para generar una imagen con la primera palabra obtenida del hecho sobre gatos.

Requisitos técnicos

    React: La prueba debe realizarse utilizando React, lo que implica el uso de componentes y el manejo del estado, así como el ciclo de vida de los componentes para gestionar las peticiones a las APIs.

    Peticiones asíncronas: El uso de fetch o alguna librería como axios para realizar las peticiones HTTP a las APIs.

    Renderizado condicional: Asegurarse de que los datos se muestren solo cuando estén disponibles, evitando errores en la interfaz.

Ejemplo de funcionamiento:

    Haces una petición a https://catfact.ninja/fact y obtienes un hecho como este:

    json

    {
      "fact": "Cats sleep 70% of their lives.",
      "length": 32
    }

    Extraes la primera palabra del hecho: Cats.

    Usas esa palabra para generar una imagen con la API de Cataas:
        Imagen solicitada: https://cataas.com/cat/says/Cats
        La imagen mostrará un gato con el texto Cats sobre la imagen.

Importancia de la prueba para el crecimiento personal

Realizar esta prueba técnica es un paso clave en el desarrollo como programador junior o trainee, ya que involucra habilidades esenciales en el desarrollo web moderno con React:

    Manejo de APIs: Aprender a interactuar con APIs es fundamental, ya que la mayoría de las aplicaciones modernas dependen de la integración con servicios externos. Esta prueba enseña cómo realizar peticiones asíncronas y manejar los datos devueltos por un servidor.

    Manipulación de datos: La habilidad de transformar y procesar datos es crucial. En esta prueba, se trabaja con cadenas de texto para extraer la primera palabra de un hecho, lo cual es un ejemplo sencillo de manipulación de datos.

    Renderizado dinámico en React: Renderizar componentes en base a datos obtenidos dinámicamente y actualizar la interfaz de manera eficiente es una habilidad esencial. Esto incluye manejar el estado de la aplicación y entender cómo React actualiza la vista en respuesta a los cambios de datos.

    Resolución de problemas: Esta prueba pone en práctica la capacidad de resolver problemas técnicos y conectar diferentes partes de una aplicación (APIs, componentes, estado, etc.).

    Desarrollo asíncrono: La capacidad de manejar peticiones asíncronas y asegurarse de que la aplicación no se rompa mientras espera datos es una habilidad fundamental para trabajar con cualquier API o backend.

    Crecimiento personal: Completar con éxito este tipo de pruebas fortalece la confianza en el uso de herramientas como React, promueve buenas prácticas y refuerza la capacidad de resolver problemas en entornos de desarrollo reales. Además, te acerca un paso más hacia ser un desarrollador más completo y preparado para enfrentar desafíos técnicos.

Conclusión

Esta prueba es un excelente ejercicio para consolidar conocimientos básicos de React, manejo de APIs y manipulación de datos. Además, pone a prueba habilidades importantes en cualquier flujo de trabajo de desarrollo web moderno. La experiencia ganada aquí será invaluable para futuros proyectos y oportunidades de crecimiento en el mundo del desarrollo frontend.

