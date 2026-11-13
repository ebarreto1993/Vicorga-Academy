// Cuatro carreras del centro de formación artesanal
const carreras = {
    "maestria-belleza": {
        "nombre": "Maestra en Belleza",
        "descripcion": "Carrera de Maestra en Belleza del centro de formación artesanal particular Vicorga Academy. Formación integral con 12 módulos especializados para desarrollar tus habilidades profesionales. Duración: 1 año.",
        "duracion": "1 año (12 meses)",
        "videoId": "sV3_Bk5__3A",
        "modulos": [
            {
                "numero": "01 y 02",
                "nombre": "Manicura y Pedicura",
                "icono": "fas fa-hand-sparkles",
                "imagen": "https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?w=600",
                "temas": [
                    "Manicura Rusa",
                    "Esmaltado Perfecto",
                    "Nivelación con Rubber",
                    "Tecnica de soft Gel",
                    "Sistema Dual",
                    "Quimica Basica del Acrílico",
                    "Full cover en Acrílico",
                    "Baby Boomer",
                    "Not polish",
                    "Baby glitter y base shine",
                    "Técnicas de 3d (flores y rosas)",
                ]
            },
            {
                "numero": "03",
                "nombre": "Faciales / Skin Care",
                "icono": "fas fa-spa",
                "imagen": "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?w=600",
                "temas": [
                    "Célula /Piel",
                    "Lesiones elementales",
                    "Biotipos y fototipos cutáneos",
                    "conceptos basicos de hidratación",
                    "Productos y principios activos",
                    "Aparatologia basica",
                    "Limpiezas faciales (practicas en pacientes reales)",
                    "Hidratación con corriente galvánica (Practicas en pacientes reales)",
                ]
            },
            {
                "numero": "04",
                "nombre": "Maquillaje",
                "icono": "fas fa-eye",
                "imagen": "https://images.pexels.com/photos/2688992/pexels-photo-2688992.jpeg?w=600",
                "temas": [
                    "Diseño de cejas",
                    "Maquillaje de novia",
                    "Maquillaje artístico",
                    "Aplicación de pestañas"
                ]
            },
            {
                "numero": "05",
                "nombre": "Lashes and Brows",
                "icono": "fas fa-feather",
                "imagen": "https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?w=600",
                "temas": [
                    "Lifting y tinturado",
                    "Laminado de pestañas",
                    "Técnica clásica",
                    "Teoría de pestañas"
                ]
            },
            {
                "numero": "06",
                "nombre": "Peinados",
                "icono": "fas fa-wind",
                "imagen": "https://images.pexels.com/photos/3966514/pexels-photo-3966514.jpeg?w=600",
                "temas": [
                    "Tipos de trenzas",
                    "Peinados para eventos",
                    "Peinado de novia",
                    "Ondas y volúmenes"
                ]
            },
            {
                "numero": "07",
                "nombre": "Cortes de Dama",
                "icono": "fas fa-scissors",
                "imagen": "https://images.pexels.com/photos/3962275/pexels-photo-3962275.jpeg?w=600",
                "temas": [
                    "Corte sólido 0° y 45°",
                    "Cortes semirredondo",
                    "Melena Bob",
                    "Degrafilado con navaja"
                ]
            },
            {
                "numero": "08",
                "nombre": "Tratamientos Capilares",
                "icono": "fas fa-wand-magic-sparkles",
                "imagen": "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=600",
                "temas": [
                    "Tratamiento de células madre",
                    "Botox capilar",
                    "Queratina",
                    "Tricología capilar"
                ]
            },
            {
                "numero": "09",
                "nombre": "Tratamientos Faciales",
                "icono": "fas fa-face-smile",
                "imagen": "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=600",
                "temas": [
                    "Marco teórico",
                    "Exfoliación avanzada",
                    "Hidratación profunda",
                    "Fototerapia"
                ]
            },
            {
                "numero": "10 y 11",
                "nombre": "Barbería",
                "icono": "fas fa-razor",
                "imagen": "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?w=600",
                "temas": [
                    "Historia de la barbería",
                    "Taper fade",
                    "Corte mohicano",
                    "Ritual de la barba"
                ]
            },
            {
                "numero": "12",
                "nombre": "Colorimetría",
                "icono": "fas fa-palette",
                "imagen": "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?w=600",
                "temas": [
                    "Teoría del color",
                    "Tabla del 12",
                    "Cubrimiento de canas",
                    "Balayage y rayitos"
                ]
            }
        ],
        "matricula": 80,
        "mensualidad": 180,
        "incluye": [
            "Chaqueta de la academia",
            "Guía de estudio",
            "Mochila",
            "Materiales para clases",
            "Certificado avalado"
        ],
        "horarios": [
            "Martes y Jueves 15 de octubre 9:00 AM - 4:00 PM",
            "Sábados 18 de octubre 9:00 AM - 4:00 PM",
            "Lunes y Miércoles 13 de octubre 6:00 PM - 9:00 PM"
        ]
    },
    "barberia": {
        "nombre": "Barbería",
        "descripcion": "Carrera de Barbería del centro de formación artesanal. Aprende cortes clásicos y modernos, técnicas de barba y atención profesional. Duración: 1 año.",
        "duracion": "1 año (12 meses)",
        "videoId": "dummyId007",
        "modulos": [
            {
                "numero": "01",
                "nombre": "Historia y Fundamentos de Barbería",
                "icono": "fas fa-book",
                "imagen": "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?w=600",
                "temas": [
                    "Historia de la barbería",
                    "Técnicas clásicas",
                    "Herramientas profesionales",
                    "Seguridad e higiene"
                ]
            },
            {
                "numero": "02",
                "nombre": "Cortes Clásicos",
                "icono": "fas fa-scissors",
                "imagen": "https://images.pexels.com/photos/1813273/pexels-photo-1813273.jpeg?w=600",
                "temas": [
                    "Corte sólido 0° y 45°",
                    "Taper fade",
                    "Mohicano",
                    "Skin fade"
                ]
            },
            {
                "numero": "03",
                "nombre": "Rituals de Barba",
                "icono": "fas fa-razor",
                "imagen": "https://images.pexels.com/photos/1813274/pexels-photo-1813274.jpeg?w=600",
                "temas": [
                    "Afeitado clásico",
                    "Ritual de barba completo",
                    "Cuidado de la barba",
                    "Productos especializados"
                ]
            },
            {
                "numero": "04",
                "nombre": "Cortes Modernos",
                "icono": "fas fa-wand-magic-sparkles",
                "imagen": "https://images.pexels.com/photos/1813275/pexels-photo-1813275.jpeg?w=600",
                "temas": [
                    "Cortes actuales",
                    "Diseños personalizados",
                    "Líneas y detalles",
                    "Prácticas en clientes reales"
                ]
            }
        ],
        "matricula": 80,
        "mensualidad": 180,
        "incluye": [
            "Máquina para prácticas en clase",
            "Chaqueta uniforme",
            "Mochila de la academia",
            "Certificación con aval del ministerio de trabajo (valor adicional)"
        ],
        "horarios": [
            "Sábados 29 de agosto 9:00 AM - 4:00 PM",
            "Lunes y Miércoles 28 de septiembre 9:00 AM - 4:00 PM"
        ]
    },
    "unas": {
        "nombre": "Uñas",
        "descripcion": "Carrera de Uñas del centro de formación artesanal. Aprende manicura, pedicura y técnicas profesionales de diseño y aplicación. Duración: 1 año.",
        "duracion": "1 año (12 meses)",
        "videoId": "dummyId003",
        "modulos": [
            {
                "numero": "01",
                "nombre": "Manicura Rusa",
                "icono": "fas fa-hand-sparkles",
                "imagen": "https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?w=600",
                "temas": [
                    "Técnica de manicura rusa",
                    "Herramientas especializadas",
                    "Cuidado de cutículas",
                    "Diseños básicos"
                ]
            },
            {
                "numero": "02",
                "nombre": "Técnicas Acrílico",
                "icono": "fas fa-palette",
                "imagen": "https://images.pexels.com/photos/3997387/pexels-photo-3997387.jpeg?w=600",
                "temas": [
                    "Acrígel básico",
                    "Acrígel encapsulado",
                    "Acrílico full cover",
                    "Reparación y mantenimiento"
                ]
            },
            {
                "numero": "03",
                "nombre": "Técnicas Gel",
                "icono": "fas fa-lightbulb",
                "imagen": "https://images.pexels.com/photos/3997388/pexels-photo-3997388.jpeg?w=600",
                "temas": [
                    "Gel básico",
                    "Gel encapsulado",
                    "Gel builder",
                    "Diseños en gel"
                ]
            },
            {
                "numero": "04",
                "nombre": "Diseños y Decoración",
                "icono": "fas fa-sparkles",
                "imagen": "https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?w=600",
                "temas": [
                    "Diseños 3D",
                    "Nail art",
                    "Técnicas de degradado",
                    "Aplicación de brillos y pedrería"
                ]
            },
            {
                "numero": "05",
                "nombre": "Pedicura Profesional",
                "icono": "fas fa-shoe-prints",
                "imagen": "https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg?w=600",
                "temas": [
                    "Pedicura higienista",
                    "Exfoliación de pies",
                    "Masaje y reflexología",
                    "Diseños en pedicura"
                ]
            }
        ],
        "matricula": 80,
        "mensualidad": 180,
        "incluye": [
            "Drill y lámparas para prácticas",
            "Material para prácticas en clase",
            "Uniforme completo",
            "Mochila de la academia"
        ],
        "horarios": [
            "Lunes y Miércoles 30 de septiembre 9:00 AM - 12:00 PM",
            "Martes y Jueves 1 de octubre 9:00 AM - 12:00 PM",
            "Sábados 4 de octubre 9:00 AM - 4:00 PM"
        ]
    },
    "cosmetologia": {
        "nombre": "Cosmetología",
        "descripcion": "Carrera de Cosmetología del centro de formación artesanal. Formación en ciencias cosméticas, cuidado de la piel y tratamientos estéticos. Duración: 1 año.",
        "duracion": "1 año (12 meses)",
        "videoId": "dummyId002",
        "modulos": [
            {
                "numero": "01",
                "nombre": "Fundamentos de Cosmetología",
                "icono": "fas fa-flask",
                "imagen": "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=600",
                "temas": [
                    "Célula y piel",
                    "Biotipos cutáneos",
                    "Lesiones elementales",
                    "Dermis y epidermis"
                ]
            },
            {
                "numero": "02",
                "nombre": "Tratamientos Faciales",
                "icono": "fas fa-face-smile",
                "imagen": "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?w=600",
                "temas": [
                    "Higiene facial",
                    "Exfoliación",
                    "Hidratación profunda",
                    "Masaje facial"
                ]
            },
            {
                "numero": "03",
                "nombre": "Cosmetología Aplicada",
                "icono": "fas fa-vial",
                "imagen": "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?w=600",
                "temas": [
                    "Productos cosméticos",
                    "Fórmulas y principios",
                    "Manipulación de principios activos",
                    "Prácticas en pacientes reales"
                ]
            },
            {
                "numero": "04",
                "nombre": "Cosmiatría",
                "icono": "fas fa-wand-magic-sparkles",
                "imagen": "https://images.pexels.com/photos/3945682/pexels-photo-3945682.jpeg?w=600",
                "temas": [
                    "Técnicas no invasivas",
                    "Electroestética",
                    "Radiofrecuencia",
                    "Fotoenvejecimiento"
                ]
            },
            {
                "numero": "05",
                "nombre": "Dermocosmiatría",
                "icono": "fas fa-microscope",
                "imagen": "https://images.pexels.com/photos/3807516/pexels-photo-3807516.jpeg?w=600",
                "temas": [
                    "Dermatología básica",
                    "Patologías de piel",
                    "Tratamiento de acné",
                    "Hiperpigmentación"
                ]
            }
        ],
        "matricula": 80,
        "mensualidad": 180,
        "incluye": [
            "30% de material para prácticas en clases por módulo",
            "Uniforme completo",
            "Mochila de la academia"
        ],
        "horarios": [
            "Martes y Jueves 29 de septiembre 9:00 AM - 4:00 PM",
            "Sábados 3 de octubre 9:00 AM - 4:00 PM"
        ]
    }
};
