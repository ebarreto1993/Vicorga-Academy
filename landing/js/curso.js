// Datos de carreras con horarios
const carrerasHorarios = {
    "Maestría en Belleza": [
        "Martes y Jueves 9:00 AM - 4:00 PM",
        "Sábados 9:00 AM - 4:00 PM",
        "Lunes y Miércoles 6:00 PM - 9:00 PM"
    ],
    "Cosmetología": [
        "Lunes y Miércoles 10:00 AM - 3:00 PM",
        "Viernes 8:00 AM - 5:00 PM",
        "Sábados 2:00 PM - 7:00 PM"
    ],
    "Uñas": [
        "Martes y Jueves 1:00 PM - 6:00 PM",
        "Sábados 10:00 AM - 3:00 PM",
        "Miércoles 9:00 AM - 2:00 PM"
    ],
    "Lashista": [
        "Lunes y Miércoles 2:00 PM - 7:00 PM",
        "Viernes 9:00 AM - 4:00 PM",
        "Sábados 11:00 AM - 4:00 PM"
    ],
    "Micropigmentación": [
        "Martes 8:00 AM - 3:00 PM",
        "Jueves 10:00 AM - 5:00 PM",
        "Sábados 9:00 AM - 2:00 PM"
    ],
    "Maquillaje": [
        "Lunes y Miércoles 11:00 AM - 4:00 PM",
        "Viernes 1:00 PM - 6:00 PM",
        "Sábados 10:00 AM - 5:00 PM"
    ],
    "Barbería": [
        "Martes a Viernes 9:00 AM - 5:00 PM",
        "Sábados 8:00 AM - 3:00 PM",
        "Lunes 3:00 PM - 8:00 PM"
    ],
    "Tatuajes": [
        "Martes y Jueves 2:00 PM - 7:00 PM",
        "Viernes 1:00 PM - 8:00 PM",
        "Sábados 10:00 AM - 6:00 PM"
    ]
};

// Obtener parámetro de URL
const params = new URLSearchParams(window.location.search);
const carreraParam = params.get('carrera') || 'maestria-belleza';
const carreraData = carreras[carreraParam];

// Si la carrera no existe, redirigir
if (!carreraData) {
    window.location.href = 'curso.html?carrera=maestria-belleza';
}

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    
    // Actualizar hero
    const h1 = document.querySelector('.course-hero h1');
    if (h1) {
        const palabras = carreraData.nombre.split(' ');
        const primera = palabras[0];
        const resto = palabras.slice(1).join(' ');
        h1.innerHTML = primera + ' <span>' + resto + '</span>';
    }
    
    // Actualizar descripción
    const descripcion = document.querySelector('.course-hero > .container.course-hero-content > .hero-grid > .hero-text > p');
    if (descripcion) {
        descripcion.textContent = carreraData.descripcion;
    }
    
    // Actualizar video
    const iframe = document.querySelector('.video-container iframe');
    if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${carreraData.videoId}`;
    }
    
    // Actualizar módulos
    const modulosGrid = document.querySelector('.modulos-grid');
    if (modulosGrid) {
        modulosGrid.innerHTML = '';
        carreraData.modulos.forEach(modulo => {
            const card = document.createElement('div');
            card.className = 'modulo-card';
            card.innerHTML = `
                <span class="modulo-num">${modulo.numero}</span>
                <h4>${modulo.nombre}</h4>
                <ul>
                    ${modulo.temas.map(tema => `<li>${tema}</li>`).join('')}
                </ul>
            `;
            modulosGrid.appendChild(card);
        });
    }
    
    // Actualizar precios
    const pricingBox = document.querySelector('.pricing-box');
    if (pricingBox) {
        pricingBox.innerHTML = `
            <div class="pricing-item">
                <span class="pricing-label">Matrícula</span>
                <span class="pricing-value">$${carreraData.matricula}</span>
            </div>
            <div class="pricing-item">
                <span class="pricing-label">Mensualidad</span>
                <span class="pricing-value">$${carreraData.mensualidad}</span>
            </div>
            <div class="pricing-note">
                <strong>Incluye:</strong><br>
                ${carreraData.incluye.map(item => `✓ ${item}`).join('<br>')}
            </div>
        `;
    }
    
    // Pre-llenar carrera y horarios
    const carreraSelect = document.getElementById('carrera-hero');
    if (carreraSelect) {
        carreraSelect.value = carreraData.nombre;
        llenarHorarios(carreraData.nombre);
    }
    
});

// Función para llenar horarios
function llenarHorarios(nombreCarrera) {
    const horarioSelect = document.getElementById('horario-hero');
    if (!horarioSelect) return;
    
    horarioSelect.innerHTML = '<option value="">Selecciona el horario</option>';
    
    if (carrerasHorarios[nombreCarrera]) {
        carrerasHorarios[nombreCarrera].forEach(horario => {
            const option = document.createElement('option');
            option.value = horario;
            option.textContent = horario;
            horarioSelect.appendChild(option);
        });
    }
}

// Event listener para cambiar horarios
document.addEventListener('DOMContentLoaded', function() {
    const carreraSelect = document.getElementById('carrera-hero');
    if (carreraSelect) {
        carreraSelect.addEventListener('change', function() {
            if (this.value) {
                llenarHorarios(this.value);
            }
        });
    }
});

// Enviar formulario a WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inscripcion-form-hero');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre-hero').value.trim();
            const apellido = document.getElementById('apellido-hero').value.trim();
            const direccion = document.getElementById('direccion-hero').value.trim();
            const carrera = document.getElementById('carrera-hero').value;
            const horario = document.getElementById('horario-hero').value;
            
            if (!nombre || !apellido) {
                alert('Por favor completa nombre y apellido');
                return;
            }
            
            if (!direccion) {
                alert('Por favor completa la dirección');
                return;
            }
            
            if (!carrera) {
                alert('Por favor selecciona una carrera');
                return;
            }
            
            if (!horario) {
                alert('Por favor selecciona un horario');
                return;
            }
            
            const mensaje = `Hola, me interesa inscribirme:%0A%0ANombre: ${nombre} ${apellido}%0ADirección: ${direccion}%0ACarrera: ${carrera}%0AHorario: ${horario}`;
            
            window.open(`https://wa.me/593989330599?text=${mensaje}`, '_blank');
        });
    }
});