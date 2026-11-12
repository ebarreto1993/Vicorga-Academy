// Función para llenar horarios (ahora usa los datos dinámicos de carreras)
function llenarHorarios(nombreCarrera) {
    const horarioSelect = document.getElementById('horario-hero');
    horarioSelect.innerHTML = '<option value="">Selecciona el horario</option>';
    
    // Buscar la carrera en el objeto carreras y usar sus horarios
    for (const key in carreras) {
        if (carreras[key].nombre === nombreCarrera) {
            carreras[key].horarios.forEach(horario => {
                const option = document.createElement('option');
                option.value = horario;
                option.textContent = horario;
                horarioSelect.appendChild(option);
            });
            break;
        }
    }
}

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
    document.querySelector('.course-hero')?.classList.toggle('course-hero-belleza', carreraParam === 'maestria-belleza');
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
    const modulosList = document.querySelector('.modulos-list');
    if (modulosList) {
        modulosList.innerHTML = '';
        carreraData.modulos.forEach(modulo => {
            const row = document.createElement('div');
            row.className = 'modulo-row animate-slide-up';
            row.innerHTML = `
                <div class="modulo-left">
                    <span class="modulo-num">${modulo.numero}</span>
                    <i class="${modulo.icono} modulo-icon"></i>
                </div>
                <div class="modulo-center">
                    <h4>${modulo.nombre}</h4>
                    <ul>
                        ${modulo.temas.map(tema => `<li>${tema}</li>`).join('')}
                    </ul>
                </div>
                <div class="modulo-arrow"><i class="fas fa-arrow-right"></i></div>
                <div class="modulo-image-wrapper">
                    <img src="${modulo.imagen}" alt="${modulo.nombre}">
                </div>
            `;
            modulosList.appendChild(row);
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
                <strong>✓ INCLUYE:</strong><br>
                ${carreraData.incluye.map(item => `• ${item}`).join('<br>')} <br><br>
                
                <strong>💳 MÉTODOS DE PAGO:</strong><br>
                <strong>Banco Pichincha:</strong> Cta. Ahorros 2100197919<br>
                <strong>Banco Austro:</strong> Cta. Ahorros 0200485416<br>
                <strong>Cooperativa Azuayo:</strong> Cta. Ahorros 2656300<br>
                <strong>Banco Guayaquil:</strong> Cta. Ahorros 23362869<br><br>
                <em>A nombre de: Joselyn Zuelen Pineda Cordova<br>
                Cédula: #0152089298</em><br><br>
                
                <strong>⚠️ NOTAS IMPORTANTES:</strong><br>
                • Examen final obligatorio para recibir tu certificación<br>
                • Puedes reservar tu cupo con $20 e ir haciendo abonos poco a poco<br>
                • La matrícula y pensión deben estar pagadas hasta el día de inicio<br>
                <strong>• Los valores cancelados o abonados NO son reembolsables bajo ningún motivo.</strong>
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


// Función para llenar horarios (ahora usa los datos dinámicos de carreras)
function llenarHorarios(nombreCarrera) {
    const horarioSelect = document.getElementById('horario-hero');
    horarioSelect.innerHTML = '<option value="">Selecciona el horario</option>';
    
    // Buscar la carrera en el objeto carreras y usar sus horarios
    for (const key in carreras) {
        if (carreras[key].nombre === nombreCarrera) {
            carreras[key].horarios.forEach(horario => {
                const option = document.createElement('option');
                option.value = horario;
                option.textContent = horario;
                horarioSelect.appendChild(option);
            });
            break;
        }
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
