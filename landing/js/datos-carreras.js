// Datos de las 8 carreras de Vicorga Academy
const carreras = {
    "maestria-belleza": {
        nombre: "Maestría en Belleza",
        descripcion: "Programa integral de formación profesional con 10 módulos especializados. Conviértete en un estilista experto dominando todas las áreas de la belleza, desde barbería hasta colorimetría.",
        duracion: "10 meses (sábados) o 5 meses (2x semana)",
        videoId: "67gy52tNyzg",
        modulos: [
            { numero: "01", nombre: "Manicura y Pedicura", temas: ["Manicura Rusa", "Acrygel y Gel", "Diseños 3D", "Acrílico full cover"] },
            { numero: "02", nombre: "Maquillaje I - Skin Care", temas: ["Cuidado de la piel", "Biotipos cutáneos", "Hidratación avanzada", "Corriente galvánica"] },
            { numero: "03", nombre: "Maquillaje II", temas: ["Diseño de cejas", "Maquillaje de novia", "Maquillaje artístico", "Aplicación de pestañas"] },
            { numero: "04", nombre: "Lashes and Brows", temas: ["Lifting y tinturado", "Laminado de pestañas", "Técnica clásica", "Teoría de pestañas"] },
            { numero: "05", nombre: "Peinados", temas: ["Tipos de trenzas", "Peinados para eventos", "Peinado de novia", "Ondas y volúmenes"] },
            { numero: "06", nombre: "Cortes de Dama", temas: ["Corte sólido 0° y 45°", "Cortes semirredondo", "Melena Bob", "Degrafilado con navaja"] },
            { numero: "07", nombre: "Tratamientos Capilares", temas: ["Tratamiento de células madre", "Botox capilar", "Queratina", "Tricología capilar"] },
            { numero: "08", nombre: "Tratamientos Faciales", temas: ["Marco teórico", "Exfoliación avanzada", "Hidratación profunda", "Fototerapia"] },
            { numero: "09", nombre: "Barbería", temas: ["Historia de la barbería", "Taper fade", "Corte mohicano", "Ritual de la barba"] },
            { numero: "10", nombre: "Colorimetría", temas: ["Teoría del color", "Tabla del 12", "Cubrimiento de canas", "Balayage y rayitos"] }
        ],
        matricula: 80,
        mensualidad: 120,
        incluye: ["Chaqueta de la academia", "Guía de estudio", "Mochila", "Materiales para clases", "Certificado avalado"],
        horarios: [
            "Martes y Jueves 9:00 AM - 4:00 PM",
            "Sábados 9:00 AM - 4:00 PM",
            "Lunes y Miércoles 6:00 PM - 9:00 PM"
        ]
    },
        "cosmetologia": {
        nombre: "Cosmetología",
        descripcion: "Especialización en ciencias cosméticas y tratamientos estéticos avanzados. Conviértete en una experta en cosmetología, cosmiatría y dermocosmiatría. Duración: 6 meses.",
        duracion: "6 meses",
        videoId: "dummyId123",
        modulos: [
            { numero: "01", nombre: "Fundamentos de Cosmetología", temas: ["Célula y piel", "Biotipos cutáneos", "Lesiones elementales", "Dermis y epidermis"] },
            { numero: "02", nombre: "Tratamientos Faciales", temas: ["Higiene facial", "Exfoliación", "Hidratación profunda", "Masaje facial"] },
            { numero: "03", nombre: "Cosmetología Aplicada", temas: ["Productos cosméticos", "Fórmulas y principios", "Manipulación de principios activos", "Prácticas en pacientes reales"] },
            { numero: "04", nombre: "Cosmiatría", temas: ["Técnicas no invasivas", "Electroestética", "Radiofrecuencia", "Fotoenvejecimiento"] },
            { numero: "05", nombre: "Dermocosmiatría", temas: ["Dermatología básica", "Patologías de piel", "Tratamiento de acné", "Hiperpigmentación"] }
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["30% de material por módulo", "Uniforme completo", "Mochila de la academia"],
        horarios: [
            "Martes y Jueves 9:00 AM - 4:00 PM",
            "Sábados 9:00 AM - 4:00 PM"
        ]
    },

        "unas": {
        nombre: "Uñas",
        descripcion: "Maestra en taller de manicura y pedicura. Domina todas las técnicas profesionales de diseño y aplicación. Duración: 5 meses.",
        duracion: "5 meses",
        videoId: "dummyId124",
        modulos: [
            { numero: "01", nombre: "Manicura Rusa", temas: ["Técnica de manicura rusa", "Herramientas especializadas", "Cuidado de cutículas", "Diseños básicos"] },
            { numero: "02", nombre: "Técnicas Acrílico", temas: ["Acrígel básico", "Acrígel encapsulado", "Acrílico full cover", "Reparación y mantenimiento"] },
            { numero: "03", nombre: "Técnicas Gel", temas: ["Gel básico", "Gel encapsulado", "Gel builder", "Diseños en gel"] },
            { numero: "04", nombre: "Diseños y Decoración", temas: ["Diseños 3D", "Nail art", "Técnicas de degradado", "Aplicación de brillos y pedrería"] },
            { numero: "05", nombre: "Pedicura Profesional", temas: ["Pedicura higienista", "Exfoliación de pies", "Masaje y reflexología", "Diseños en pedicura"] }
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["Drill y lámparas para prácticas", "Material para prácticas en clase", "Uniforme completo", "Mochila de la academia"],
        horarios: [
            "Lunes y Miércoles 9:00 AM - 12:00 PM",
            "Martes y Jueves 9:00 AM - 12:00 PM",
            "Sábados 9:00 AM - 4:00 PM"
        ]
    },

        "lashista": {
        nombre: "Lashista",
        descripcion: "Conviértete en lashista profesional en tan solo 3 meses. Curso exclusivo de 3 módulos donde te convertirás en especialista de miradas con extensiones de pestañas.",
        duracion: "3 meses",
        videoId: "dummyId126",
        modulos: [
            { numero: "01", nombre: "Fundamentos de Lashista", temas: ["Anatomía del párpado", "Tipos de pestañas naturales", "Herramientas profesionales", "Seguridad e higiene"] },
            { numero: "02", nombre: "Técnica de Extensiones", temas: ["Técnica clásica", "Técnica volumen ruso", "Aplicación de extensiones", "Retoque y mantenimiento"] },
            { numero: "03", nombre: "Diseño y Especialización", temas: ["Diseño de mirada", "Diferentes estilos de lashes", "Lashes para eventos", "Prácticas en modelos reales"] }
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["Uniforme completo", "Mochila de la academia", "Materiales básicos para prácticas"],
        horarios: [
            "Jueves 9:00 AM - 12:00 PM"
        ]
    },
        "micropigmentacion": {
        nombre: "Micropigmentación",
        descripcion: "Aprende micropigmentación facial: cejas, labios y perfilado con técnicas de precisión. Especialización en 6 meses. Conviértete en una experta en esta técnica semipermanente.",
        duracion: "6 meses",
        videoId: "dummyId125",
        modulos: [
            { numero: "01", nombre: "Fundamentos de Micropigmentación", temas: ["Historia de la micropigmentación", "Técnicas básicas", "Equipos y herramientas", "Seguridad e higiene"] },
            { numero: "02", nombre: "Diseño de Cejas", temas: ["Análisis facial", "Formas de cejas", "Diseño personalizado", "Técnica de aplicación"] },
            { numero: "03", nombre: "Perfilado de Labios", temas: ["Teoría de labios", "Formas y proporciones", "Técnica de perfilado", "Correcciones y ajustes"] },
            { numero: "04", nombre: "Delineado de Ojos", temas: ["Anatomía del ojo", "Tipos de delineado", "Técnica de aplicación", "Efectos y estilos"] },
            { numero: "05", nombre: "Pigmentos y Cuidados", temas: ["Selección de pigmentos", "Cuidados post-procedimiento", "Retoque y mantenimiento", "Prácticas en modelos reales"] }
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["Uniforme completo", "Mochila de la academia", "Materiales básicos para prácticas"],
        horarios: [
            "Viernes 9:00 AM - 12:00 PM",
            "Viernes 2:00 PM - 5:00 PM"
        ]
    },

        "maquillaje": {
        nombre: "Maquillaje",
        descripcion: "Titúlate como maquilladora profesional en tan solo 4 meses. Domina técnicas de maquillaje artístico, de novia, y peinado profesional. Alto rendimiento.",
        duracion: "4 meses",
        videoId: "dummyId127",
        modulos: [
            { numero: "01", nombre: "Fundamentos de Maquillaje", temas: ["Teoría del color", "Biotipos de piel", "Preparación de la piel", "Herramientas y brochas"] },
            { numero: "02", nombre: "Maquillaje de Día y Noche", temas: ["Maquillaje natural", "Maquillaje de noche", "Contouring básico", "Técnicas de iluminación"] },
            { numero: "03", nombre: "Maquillaje Artístico", temas: ["Maquillaje temático", "Body art", "Efectos especiales", "Fantasía y creatividad"] },
            { numero: "04", nombre: "Maquillaje Profesional", temas: ["Maquillaje de novia", "Maquillaje para eventos", "Maquillaje televisivo", "Prácticas en modelos reales"] }
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["Uniforme completo", "Materiales para prácticas en clase", "Mochila de la academia"],
        horarios: [
            "Martes 9:00 AM - 4:00 PM"
        ]
    },

        "barberia": {
        nombre: "Barbería",
        descripcion: "Titúlate como técnico profesional en barbería en tan solo 4 meses. Domina cortes modernos, técnicas de barba y servicio profesional. Cupos limitados a 8 estudiantes.",
        duracion: "4 meses (sábados) o 3 meses (lunes-miércoles)",
        videoId: "dummyId128",
        modulos: [
            { numero: "01", nombre: "Historia y Fundamentos de Barbería", temas: ["Historia de la barbería", "Técnicas clásicas", "Herramientas profesionales", "Seguridad e higiene"] },
            { numero: "02", nombre: "Cortes Clásicos", temas: ["Corte sólido 0° y 45°", "Taper fade", "Mohicano", "Skin fade"] },
            { numero: "03", nombre: "Rituals de Barba", temas: ["Afeitado clásico", "Ritual de barba completo", "Cuidado de la barba", "Productos especializados"] },
            { numero: "04", nombre: "Cortes Modernos", temas: ["Cortes actuales", "Diseños personalizados", "Líneas y detalles", "Prácticas en clientes reales"] }
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["Máquina para prácticas en clase", "Chaqueta uniforme", "Mochila de la academia", "Certificación con aval del ministerio de trabajo (valor adicional)"],
        horarios: [
            "Sábados 9:00 AM - 4:00 PM (6 meses)",
            "Lunes y Miércoles 9:00 AM - 4:00 PM (3 meses)"
        ]
    },

    "tatuajes": {
        nombre: "Tatuajes",
        descripcion: "Aprende técnicas de tatuaje profesional, higiene, diseño y arte corporal. Conviértete en tatuador certificado con los más altos estándares de seguridad.",
        duracion: "6 meses",
        videoId: "dummyId129",
        modulos: [
            { numero: "01", nombre: "Fundamentos de Tatuaje", temas: ["Historia del tatuaje", "Anatomía de la piel", "Teoría del color", "Equipos y herramientas"] },
            { numero: "02", nombre: "Técnicas de Tatuaje", temas: ["Técnica de línea", "Técnica de sombreado", "Técnica de relleno", "Blending y degradado"] },
            { numero: "03", nombre: "Diseño y Artística", temas: ["Diseño de tatuajes", "Estilos tatuajes", "Proporciones y composición", "Adaptación al cuerpo"] },
            { numero: "04", nombre: "Higiene y Seguridad", temas: ["Esterilización de equipos", "Protocolos de higiene", "Prevención de infecciones", "Normativas legales"] },
            { numero: "05", nombre: "Prácticas Profesionales", temas: ["Prácticas en modelos", "Atención al cliente", "Cuidados post-tatuaje", "Portafolio profesional"] }
        ],
        matricula: 80,
        mensualidad: 150,
        incluye: ["Equipos básicos para prácticas", "Uniforme completo", "Mochila de la academia", "Materiales de práctica"],
        horarios: [
            "Martes y Jueves 2:00 PM - 7:00 PM",
            "Viernes 1:00 PM - 8:00 PM",
            "Sábados 10:00 AM - 6:00 PM"
        ]
    },