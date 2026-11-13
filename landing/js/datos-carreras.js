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
                    "Técnica de soft Gel",
                    "Sistema Dual",
                    "Química Básica del Acrílico",
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
                    "Célula / Piel",
                    "Lesiones elementales",
                    "Biotipos y fototipos cutáneos",
                    "conceptos básicos de hidratación",
                    "Productos y principios activos",
                    "Aparatologia básica",
                    "Limpiezas faciales (prácticas en pacientes reales)",
                    "Hidratación con corriente galvánica (Practicas en pacientes reales)",
                ]
            },
            {
                "numero": "04",
                "nombre": "Maquillaje",
                "icono": "fas fa-eye",
                "imagen": "https://images.pexels.com/photos/2688992/pexels-photo-2688992.jpeg?w=600",
                "temas": [
                    "Diseño de cejas - visagismo",
                    "Tipos de depilación",
                    "Preparación y limpieza de piel",
                    "Piel perfecta",
                    "Laboratorio de productos y herramientas",
                    "Maquillaje de día y noche",
                    "Maquillaje de novia",
                    "Maquillaje artístico"
                ]
            },
            {
                "numero": "05",
                "nombre": "Lashes and Brows",
                "icono": "fas fa-feather",
                "imagen": "https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?w=600",
                "temas": [
                    "Visagismo",
                    "Depilación con hilo",
                    "Laminado de cejas",
                    "Pigmentación de cejas con henna y tintes",
                    "Lifting de pestañas coreano",
                    "Teoría de curvaturas, grosor y tamaños para colocación de pestañas pelo a pelo",
                    "prácticas en maniquí y modelos reales",
                ]
            },
            {
                "numero": "06 y 07",
                "nombre": "Peinados",
                "icono": "fas fa-wind",
                "imagen": "https://images.pexels.com/photos/3966514/pexels-photo-3966514.jpeg?w=600",
                "temas": [
                    "Técnicas de cepillado y planchado de cabello",
                    "Manejo de herramientas y productos",
                    "Trenzas espiga",
                    "Trenzas de 3 cabos",
                    "Trenzas 4 cabos",
                    "Trenzas de cascada",
                    "Coletas altas y bajas ",
                    "Peinados de niñas",
                    "Tipos de ondas",
                    "Peinados semirrecogido",
                    "Peinado vintage",
                    "Peinados de gala ",
                    "Recogidos pulidos ",
                    "Peinado recogido alto",
                    "Peinado de novia",
                    "Peinado de xv años",
                    "Fijación, texturización y acabados profesionales.",
                ]
            },
            {
                "numero": "08",
                "nombre": "Cortes de Dama",
                "icono": "fas fa-scissors",
                "imagen": "https://images.pexels.com/photos/3962275/pexels-photo-3962275.jpeg?w=600",
                "temas": [
                    "Corte sólido 0° y 45°",
                    "Cerquillos, flequillos",
                    "Cortes semiredondo",
                    "Corte en v",
                    "Elevación 90° y 180°",
                    "Corte pluma",
                    "Melena",
                    "Bob",
                    "Entresacado y degrafilado con navaja",
                    "Corte pixie",
                    "corte de señora"
                ]
            },
            {
                "numero": "09",
                "nombre": "Tratamientos Capilares",
                "icono": "fas fa-wand-magic-sparkles",
                "imagen": "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?w=600",
                "temas": [
                    "Marco teórico de tratamientos exfoliación del cabello ",
                    "Tratamiento de células madre",
                    "Tratamiento de repolarización",
                    "Tratamiento botox",
                    "Tricología capilar",
                    "Teoría de permacología practica de permanente (montaje de bigudí) ",
                    "Practica de porcelanización (queratina)"
                ]
            },
            
            {
                "numero": "10 y 11",
                "nombre": "Barbería",
                "icono": "fas fa-razor",
                "imagen": "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?w=600",
                "temas": [
                    "Historia de la barbería",
                    "Manejo y uso de las herramientas",
                    "Corte normal alza #2",
                    "Corte alza #1",
                    "Corte alza #0.5",
                    "Corte mid-fade #0",
                    "Skin fade/ navaja",
                    "Corte comb over",
                    "Teoría del taper fade",
                    "Blow out – taper fade",
                    "Corte mohicano",
                    "Corte a tijera",
                    "Ritual de la barba"
                ]
            },
            {
                "numero": "12",
                "nombre": "Colorimetría",
                "icono": "fas fa-palette",
                "imagen": "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?w=600",
                "temas": [
                    "Marco teórico de la colorimetría",
                    "Formulaciones y leyes del color",
                    "Creación de colores tabla del 12",
                    "Cubrimiento de canas",
                    "Tono sobre tono",
                    "Rayitos y marmoleado",
                    "Balayage"
                ]
            }
        ],
        "matricula": 80,
        "mensualidad": 180,
        "incluye": [
            "Uniforme de la academia",
            "Mochila de la academia",
            "30% de los materiales para clases"
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
            "Máquina de corte profesional",
            "uniforme de la academia",
            "Mochila de la academia"
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
            "30% de los materiales para clases",
            "Uniforme de la academia",
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
            "Uniforme de la academia",
            "Mochila de la academia"
        ],
        "horarios": [
            "Martes y Jueves 29 de septiembre 9:00 AM - 4:00 PM",
            "Sábados 3 de octubre 9:00 AM - 4:00 PM"
        ]
    }
};
