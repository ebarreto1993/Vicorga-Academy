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

// Actualizar horarios cuando cambia la carrera
document.getElementById('carrera-hero').addEventListener('change', function() {
    const carreraSeleccionada = this.value;
    const horarioSelect = document.getElementById('horario-hero');
    
    horarioSelect.innerHTML = '<option value="">Selecciona el horario</option>';
    
    if (carreraSeleccionada && carrerasHorarios[carreraSeleccionada]) {
        carrerasHorarios[carreraSeleccionada].forEach(horario => {
            const option = document.createElement('option');
            option.value = horario;
            option.textContent = horario;
            horarioSelect.appendChild(option);
        });
    }
});

// Enviar formulario a WhatsApp
document.getElementById('inscripcion-form-hero').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre-hero').value;
    const apellido = document.getElementById('apellido-hero').value;
    const email = document.getElementById('email-hero').value;
    const cedula = document.getElementById('cedula-hero').value;
    const telefono = document.getElementById('telefono-hero').value;
    const direccion = document.getElementById('direccion-hero').value;
    const carrera = document.getElementById('carrera-hero').value;
    const horario = document.getElementById('horario-hero').value;
    
    const mensaje = `Hola, me interesa inscribirme:%0A%0ANombre: ${nombre} ${apellido}%0ACorreo: ${email}%0ACédula: ${cedula}%0ATelefono: ${telefono}%0ADirección: ${direccion}%0ACarrera: ${carrera}%0AHorario: ${horario}`;
    
    window.open(`https://wa.me/593989330599?text=${mensaje}`, '_blank');
});

// Validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validar cédula ecuatoriana (10 dígitos)
function validarCedula(cedula) {
    return /^\d{10}$/.test(cedula);
}

// Validar teléfono (mínimo 10 dígitos)
function validarTelefono(telefono) {
    return /^\d{10,}$/.test(telefono.replace(/\D/g, ''));
}

// Enviar formulario a WhatsApp
document.getElementById('inscripcion-form-hero').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre-hero').value.trim();
    const apellido = document.getElementById('apellido-hero').value.trim();
    const email = document.getElementById('email-hero').value.trim();
    const cedula = document.getElementById('cedula-hero').value.trim();
    const telefono = document.getElementById('telefono-hero').value.trim();
    const direccion = document.getElementById('direccion-hero').value.trim();
    const carrera = document.getElementById('carrera-hero').value;
    const horario = document.getElementById('horario-hero').value;
    
    // Validaciones
    if (!nombre || !apellido) {
        alert('Por favor completa nombre y apellido');
        return;
    }
    
    if (!validarEmail(email)) {
        alert('Por favor ingresa un correo válido (ej: correo@ejemplo.com)');
        return;
    }
    
    if (!validarCedula(cedula)) {
        alert('La cédula debe tener 10 dígitos');
        return;
    }
    
    if (!validarTelefono(telefono)) {
        alert('El teléfono debe tener al menos 10 dígitos');
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
    
    // Si todo es válido, enviar a WhatsApp
    const mensaje = `Hola, me interesa inscribirme:%0A%0ANombre: ${nombre} ${apellido}%0ACorreo: ${email}%0ACédula: ${cedula}%0ATeléfono: ${telefono}%0ADirección: ${direccion}%0ACarrera: ${carrera}%0AHorario: ${horario}`;
    
    window.open(`https://wa.me/593989330599?text=${mensaje}`, '_blank');
});