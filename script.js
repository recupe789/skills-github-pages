document.addEventListener('DOMContentLoaded', function() {
    const listaElementos = document.getElementById('elementos-lista');
    const areaDescripcion = document.getElementById('descripcion-elemento');
    const itemsLista = listaElementos.querySelectorAll('li');

    // Objeto con las descripciones de cada elemento
    const descripciones = {
        objetivos: "<strong>Objetivos:</strong> Definen QUÉ se busca lograr con el proyecto. Deben ser específicos, medibles, alcanzables, relevantes y temporales (SMART).",
        alcance: "<strong>Alcance:</strong> Delimita QUÉ trabajo se incluye y QUÉ NO se incluye en el proyecto. Define los límites y los entregables principales.",
        entregables: "<strong>Entregables:</strong> Son los productos, servicios o resultados TANGIBLES que genera el proyecto. Por ejemplo, un software, un informe, un prototipo.",
        cronograma: "<strong>Cronograma:</strong> Es la planificación del TIEMPO. Muestra las tareas, su duración, el orden en que se harán (dependencias) y las fechas clave (hitos).",
        recursos: "<strong>Recursos:</strong> Son TODO lo necesario para ejecutar el proyecto: personas (equipo), dinero (presupuesto), materiales, equipos, software, etc.",
        presupuesto: "<strong>Presupuesto:</strong> Es la estimación detallada de los COSTOS del proyecto. Incluye salarios, materiales, licencias, viajes, etc.",
        equipo: "<strong>Equipo del Proyecto:</strong> Son las PERSONAS que realizarán el trabajo. Es importante definir sus roles y responsabilidades.",
        interesados: "<strong>Interesados (Stakeholders):</strong> Cualquier persona o grupo afectado por el proyecto (positiva o negativamente). Incluye al cliente, usuarios, patrocinador, equipo, etc.",
        riesgos: "<strong>Riesgos:</strong> Son eventos INCERTOS que podrían afectar los objetivos del proyecto (positiva o negativamente). Se deben identificar, analizar y planificar respuestas.",
        comunicacion: "<strong>Comunicación:</strong> Define CÓMO, CUÁNDO, A QUIÉN y QUÉ información se compartirá durante el proyecto. Es vital para mantener a todos informados.",
        calidad: "<strong>Calidad:</strong> Establece los ESTÁNDARES y criterios que deben cumplir los entregables y los procesos del proyecto para satisfacer las necesidades.",
        cierre: "<strong>Cierre:</strong> Es la fase final. Incluye la aceptación formal de los entregables, evaluación del desempeño, documentación de lecciones aprendidas y disolución del equipo."
    };

    listaElementos.addEventListener('click', function(evento) {
        // Verificar si se hizo clic en un elemento LI
        if (evento.target.tagName === 'LI') {
            const elementoSeleccionado = evento.target.getAttribute('data-elemento');

            // Actualizar el área de descripción
            if (descripciones[elementoSeleccionado]) {
                areaDescripcion.innerHTML = `<p>${descripciones[elementoSeleccionado]}</p>`;
            } else {
                areaDescripcion.innerHTML = '<p>Descripción no encontrada.</p>';
            }

            // (Opcional) Resaltar el elemento seleccionado
            // Quitar la clase 'activo' de todos los items
            itemsLista.forEach(item => item.classList.remove('activo'));
            // Añadir la clase 'activo' al item clickeado
            evento.target.classList.add('activo');
        }
    });
});