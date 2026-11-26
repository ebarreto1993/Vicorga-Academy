// Carreras del centro de formación artesanal
const carreras = {
    "maestria-belleza": {
        "nombre": "MAESTRA/O DE TALLER EN BELLEZA",
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
                    "Técnicas de 3d (flores y rosas)"
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
                    "Hidratación con corriente galvánica (Practicas en pacientes reales)"
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
                    "prácticas en maniquí y modelos reales"
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
                    "Fijación, texturización y acabados profesionales."
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
        "mensualidad": 150,
        "incluye": [
            "Uniforme de la academia",
            "Mochila de la academia",
            "30% de los materiales para clases"
        ],
        "horarios": []
    },
    "barberia": {
        "nombre": "MAESTRA/O DE TALLER EN BARBERÍA",
        "descripcion": "Carrera de Barbería del centro de formación artesanal particular Vicorga Academy. Aprende cortes clásicos y modernos, técnicas de barba y atención profesional. Duración: 1 año.",
        "duracion": "1 año (12 meses)",
        "videoId": "FaFkNU3nGTk",
        "modulos": [
            {
                "numero": "1",
                "nombre": "Introducción a la Barbería",
                "imagen": "assets/images/modulos_barberia/m1.jpg",
                "temas": [
                    "Fundamentos de la barbería profesional",
                    "Servicios de un barbero",
                    "Bioseguridad en la barbería y reconocimiento de alzas (clase práctica)",
                    "Manejo de máquina, tijeras y navaja",
                    "Ergonomía, posturas y prevención de lesiones laborales",
                    "Presentación profesional y trato con clientes",
                    "Prácticas de uso de herramientas",
                    "Cortes básicos"
                ]
            },
            {
                "numero": "2",
                "nombre": "Cortes tradicionales",
                "imagen": "assets/images/modulos_barberia/m2.jpeg",
                "temas": [
                    "Anatomía del cráneo y zonas de trabajo",
                    "Seccionamientos y particiones básicas (clase práctica)",
                    "Dirección de crecimiento y lectura del cabello",
                    "Guías de longitud y formas",
                    "Corte uniforme con máquina",
                    "Técnicas básicas de máquina sobre peine",
                    "Cortes tradicionales de una y dos longitudes",
                    "Contornos, patillas, nuca y líneas de terminación",
                    "Introducción al sombreado y suavizado de marcas",
                    "Prácticas supervisadas con modelo"
                ]
            },
            {
                "numero": "3",
                "nombre": "Tijeras y estructuras",
                "imagen": "assets/images/modulos_barberia/m3.jpeg",
                "temas": [
                    "Particiones, subsecciones y distribuciones",
                    "Proyección, elevaciones y ángulos de 0°, 45°, 90° y 180°",
                    "Línea guía fija y móvil; control de longitudes",
                    "Estructuras sólidas y en capas",
                    "Técnica tijera sobre peine y control de volumen",
                    "Cortes clásicos con acabado profesional",
                    "Introducción al visagismo del corte masculino"
                ]
            },
            {
                "numero": "4",
                "nombre": "Sombreados y desvanecidos",
                "imagen": "assets/images/modulos_barberia/m4.jpeg",
                "temas": [
                    "Técnicas de difuminado y lectura de líneas",
                    "Control de la palanca, alzas intermedias y herramientas de detalle",
                    "Sombreado ascendente",
                    "Mid fade: desvanecido medio",
                    "Low fade: desvanecido bajo",
                    "High fade: desvanecido alto",
                    "Conexiones y cambio de plano"
                ]
            },
            {
                "numero": "5",
                "nombre": "Sombreados avanzados",
                "imagen": "assets/images/modulos_barberia/m5.jpeg",
                "temas": [
                    "Taper fade: medio, alto y bajo",
                    "Sombreado en V",
                    "Burst fade",
                    "Mullet y modern mullet",
                    "Manejo de volumen y densidades",
                    "Cortes con textura",
                    "Diseños y figuras"
                ]
            },
            {
                "numero": "6",
                "nombre": "Tricología y tratamientos",
                "imagen": "assets/images/modulos_barberia/m6.jpeg",
                "temas": [
                    "Tricología y aplicación en barbería",
                    "Tipos de cabello",
                    "Enfermedades capilares",
                    "Exfoliación capilar",
                    "Productos para el cuidado capilar",
                    "Tratamientos para cabellos secos y grasos"
                ]
            },
            {
                "numero": "7",
                "nombre": "Barba y cuidado facial",
                "imagen": "assets/images/modulos_barberia/m7.jpg",
                "temas": [
                    "Tipos de barba y bigote",
                    "Diseños de barba según visagismo",
                    "Recorte, perfilado y degradado en barba",
                    "Preparación de la piel y ritual de afeitado",
                    "Diseño y limpieza de cejas",
                    "Limpieza facial básica y cuidado de la piel"
                ]
            },
            {
                "numero": "8",
                "nombre": "Visagismo, peinados y asesoría de imagen",
                "imagen": "assets/images/modulos_barberia/m8.jpeg",
                "temas": [
                    "Visagismo avanzado",
                    "Tipos de rostro, cráneo y perfil",
                    "Elección de cortes según tipo de cabello y crecimiento",
                    "Técnicas de secado y cepillado",
                    "Peinados clásicos",
                    "Peinados con acabados modernos",
                    "Selección de productos para moldeado, peinado y fijado",
                    "Asesoría integral de corte y barba"
                ]
            },
            {
                "numero": "9",
                "nombre": "Permacología y transformaciones",
                "imagen": "assets/images/modulos_barberia/m9.mp4",
                "temas": [
                    "Texturizado con tijeras y técnica de corte",
                    "Peinados y definición de cabello ondulado y rizado",
                    "Permacología de ondulación permanente",
                    "Selección de productos",
                    "Contraindicaciones",
                    "Bigudíes y técnicas de armado",
                    "Integración de corte con ondulación permanente"
                ]
            },
            {
                "numero": "10",
                "nombre": "Colorimetría",
                "imagen": "assets/images/modulos_barberia/m10.jpeg",
                "temas": [
                    "Introducción a la colorimetría y teoría del color",
                    "Estrella cromática y leyes del color",
                    "Alturas de tonos, matices y reflejos",
                    "Tonos fríos y cálidos y neutralización",
                    "Decoloración y fórmulas",
                    "Cubrimiento de canas en cabello y barba",
                    "Tono sobre tono",
                    "Mechas",
                    "Decoloración global"
                ]
            },
            {
                "numero": "11",
                "nombre": "Redes sociales y marketing",
                "imagen": "assets/images/modulos_barberia/m11.jpg",
                "temas": [
                    "Creación de tu página de Instagram",
                    "Fotografía para barberos",
                    "Creación de videos de cortes de cabello",
                    "Iluminación y ángulos",
                    "Aplicaciones más usadas para edición de fotos y video",
                    "Creación de copys",
                    "Creación de tu primer reel"
                ]
            },
            {
                "numero": "12",
                "nombre": "Prácticas profesionales y gestión de un barbero profesional",
                "imagen": "assets/images/modulos_barberia/m12.mp4",
                "temas": [
                    "Protocolo de servicios",
                    "Cálculo básico de precios",
                    "Venta de productos en barbería",
                    "Revisión de técnicas aprendidas",
                    "Prácticas avanzadas",
                    "Evaluación final"
                ]
            }
        ],
        "matricula": 80,
        "mensualidad": 150,
        "incluye": [
            "Máquina de corte profesional",
            "uniforme de la academia",
            "Mochila de la academia"
        ],
        "horarios": []
    },
    "unas": {
        "nombre": "MAESTRA/O DE TALLER EN MANICURISTA Y PEDICURISTA",
        "descripcion": "Carrera de Técnica en Uñas del centro de formación artesanal particular Vicorga Academy. Aprende manicura, pedicura y técnicas profesionales de diseño y aplicación. Duración: 1 año.",
        "duracion": "1 año (12 meses)",
        "videoId": "dummyId003",
        "modulos": [
            {
                "numero": "1",
                "nombre": "VIP Russian – Manicure on Fire",
                "imagen": "assets/images/modulos_uñas/m1.jpeg",
                "temas": [
                    "Manicura combinada",
                    "Uso de drill y sus fresas",
                    "Gramajes correctos",
                    "Esmaltados perfectos",
                    "Nivelación con rubber",
                    "Diseños de mano alzada"
                ]
            },
            {
                "numero": "2",
                "nombre": "Pedicura",
                "imagen": "assets/images/modulos_uñas/m2.jpeg",
                "temas": [
                    "Limpieza correcta",
                    "Manejo de fresas y productos",
                    "Bioseguridad y enfermedades",
                    "Esmaltados perfectos",
                    "Reconstrucciones"
                ]
            },
            {
                "numero": "3",
                "nombre": "Fotografía",
                "imagen": "assets/images/modulos_uñas/m3.jpg",
                "temas": [
                    "Toma de fotografía: ángulos e iluminación",
                    "Corrección de detalles en fotografía",
                    "Aplicaciones más usadas para edición",
                    "Creación de tu primer reel"
                ]
            },
            {
                "numero": "4",
                "nombre": "Soft Gel Beginner",
                "imagen": "assets/images/modulos_uñas/m4.jpeg",
                "temas": [
                    "Teoría de tips",
                    "Colocación adecuada del tip soft",
                    "Diseños y técnicas en tendencia con este nuevo sistema"
                ]
            },
            {
                "numero": "5",
                "nombre": "Builder Gel – Gel de construcción",
                "imagen": "assets/images/modulos_uñas/m5.jpeg",
                "temas": [
                    "Teoría del gel de construcción",
                    "Manejo del producto",
                    "Uñas básicas y encapsuladas",
                    "Estructuras de salón"
                ]
            },
            {
                "numero": "6",
                "nombre": "Marketing de redes",
                "imagen": "assets/images/modulos_uñas/m6.jpeg",
                "temas": [
                    "Creación de logo",
                    "Creación de tu página de Instagram",
                    "Cómo utilizar Edits y generar un copy"
                ]
            },
            {
                "numero": "7",
                "nombre": "Polygel Hyper Natural",
                "imagen": "assets/images/modulos_uñas/m7.jpeg",
                "temas": [
                    "Teoría de polygel",
                    "Manejo del producto",
                    "Estructuras de salón",
                    "Diseños y técnicas en polygel",
                    "Reversa y mosaicos"
                ]
            },
            {
                "numero": "8",
                "nombre": "Sistema Dual – Técnicas en tendencia",
                "imagen": "assets/images/modulos_uñas/m8.jpeg",
                "temas": [
                    "Teoría de cápsulas",
                    "Manejo del producto",
                    "Técnica híbrida",
                    "Full cover",
                    "Baby shine",
                    "Diseños y encapsulados"
                ]
            },
            {
                "numero": "9",
                "nombre": "Perfeccionamiento de Dual Sandwich",
                "imagen": "assets/images/modulos_uñas/m9.jpg",
                "temas": [
                    "Prácticas en dedos de silicona",
                    "Todas las estructuras de salón: cuadrada, almond, coffin y stiletto"
                ]
            },
            {
                "numero": "10",
                "nombre": "Acrílico Hyper Realista",
                "imagen": "assets/images/modulos_uñas/m10.jpeg",
                "temas": [
                    "Teoría y manejo del producto",
                    "Full cover",
                    "Baby shine",
                    "Baby glitter",
                    "Técnica ombré"
                ]
            },
            {
                "numero": "11",
                "nombre": "Acrílico – Perfeccionamiento",
                "imagen": "assets/images/modulos_uñas/m11.jpg",
                "temas": [
                    "Not polish",
                    "Reversa más one stroke",
                    "Doble reversa",
                    "Técnicas en 3D y 4D"
                ]
            },
            {
                "numero": "12",
                "nombre": "Expert Nails",
                "imagen": "assets/images/modulos_uñas/m12.jpeg",
                "temas": [
                    "Estructuras de fantasía",
                    "Decoloración en alto relieve",
                    "Preparación de tesis y examen final"
                ]
            }
        ],
        "matricula": 80,
        "mensualidad": 150,
        "incluye": [
            "30% de los materiales para clases",
            "Uniforme de la academia",
            "Mochila de la academia"
        ],
        "horarios": []
    },
    "cosmetologia": {
        "nombre": "MAESTRA/O DE TALLER EN COSMIATRÍA",
        "descripcion": "Carrera de Cosmiatría del centro de formación artesanal particular Vicorga Academy. Formación en ciencias cosméticas, cuidado de la piel y tratamientos estéticos. Duración: 1 año.",
        "duracion": "1 año (12 meses)",
        "videoId": "6HDYJQtG69Y",
        "modulos": [
            {
                "numero": "1",
                "nombre": "Enfoque cosmetológico",
                "imagen": "assets/images/modulos_cosmiatria/m1.jpeg",
                "temas": [
                    "Anatomía y fisiología del tejido tegumentario.",
                    "Anamnesis – Biotipos y Fototipos.",
                    "Características visual y táctil de las tipologías cutáneas",
                    "Lesiones elementales primarias y secundarias",
                    "Aparatología- Alta Frecuencia-Analizador de piel microscópico- vapor -",
                    "Ozonoterapia",
                    "Prácticas de Limpieza Profunda en pacientes",
                    "Prácticas de Limpieza Profunda en pacientes con paleta ultrasónica"
                ]
            },
            {
                "numero": "2",
                "nombre": "Hidratación",
                "imagen": "assets/images/modulos_cosmiatria/m2.jpeg",
                "temas": [
                    "Conceptos básicos de Hidratación y Humectación de la piel",
                    "Factores desencadenantes de la deshidratación",
                    "Radicales Libres, apoptosis celular",
                    "Productos y principios activos hidratantes y humectantes.",
                    "Corriente Ionizable",
                    "Prácticas de Limpieza facial Profunda con microdermoabrasión",
                    "Prácticas de hidratación con pacientes reales"
                ]
            },
            {
                "numero": "3",
                "nombre": "Envejecimiento cutáneo",
                "imagen": "assets/images/modulos_cosmiatria/m3.jpeg",
                "temas": [
                    "Involución de la piel",
                    "Factores desencadenantes",
                    "Características de Pieles Involutivas.",
                    "Estrés Oxidativo",
                    "Protocolo y controversias de las manifestaciones de la piel.",
                    "Contraindicaciones y ventajas",
                    "Radiofrecuencia, monopolar, bipolar y tripolar.",
                    "Prácticas en pacientes reales para efecto lifting."
                ]
            },
            {
                "numero": "4",
                "nombre": "Peeling",
                "imagen": "assets/images/modulos_cosmiatria/m4.jpeg",
                "temas": [
                    "Fundamentos básicos de la Renovación Celular",
                    "Técnicas de Exfoliación, físicas, químicas y mecánicas.",
                    "Uso de Alfa-hidroxiácidos",
                    "Uso de los Beta-hidroxiácidos",
                    "Contraindicaciones, ventajas, y factores del procedimiento",
                    "Protocolos",
                    "Práctica en pacientes."
                ]
            },
            {
                "numero": "5",
                "nombre": "Despigmentación facial",
                "imagen": "assets/images/modulos_cosmiatria/m5.jpeg",
                "temas": [
                    "Trastornos Pigmentarios",
                    "Proceso de la Melanogénesis",
                    "Tipos de Melanina",
                    "Factores Influyentes en la Pigmentación",
                    "Discromías por pigmento Melánico",
                    "Protocolo de Actuación",
                    "Indicaciones según la Pigmentación",
                    "Contraindicaciones previo al diagnóstico inicial",
                    "Práctica en paciente adecuado."
                ]
            },
            {
                "numero": "6",
                "nombre": "Acné",
                "imagen": "assets/images/modulos_cosmiatria/m6.jpg",
                "temas": [
                    "Alteraciones de la glándula sebácea.",
                    "Mecanismo de producción del sebo",
                    "Unidad Pilosebacea",
                    "Etimología",
                    "Clasificación de los grados de ACNÉ",
                    "Tratamiento específico",
                    "Protocolo de Actuación",
                    "Práctica en pacientes con manifestaciones propias de ACNÉ."
                ]
            },
            {
                "numero": "7",
                "nombre": "Actualización de peeling y técnicas de aparatología",
                "imagen": "assets/images/modulos_cosmiatria/m7.jpeg",
                "temas": [
                    "Técnica de dermaplaning",
                    "Manejo, Uso y Tratamientos con Dermaplaning",
                    "Contraindicaciones y Cuidados posteriores",
                    "Protocolos combinados",
                    "Bioestimulacion facial (dermapen)",
                    "Tratamientos cosmiatricos con Dermapen",
                    "Contraindicaciones",
                    "Tratamiento antiage",
                    "Tratamiento en secuelas post inflamatorias",
                    "Actualización de peeling químico",
                    "Uso y manejo de ácidos cosmiátricos",
                    "Manejo de Cocteles Contraindicaciones",
                    "Técnicas de Aplicación Combinadas",
                    "Sinergia de ácidos dermatocosmeticos",
                    "Peeling íntimo",
                    "Técnica en electrocauterio",
                    "Manejo, uso y tratamientos con dermaplaning",
                    "Contraindicaciones y cuidados posteriores",
                    "Diagnóstico de nevus, acrocordones y quistes de millium",
                    "Protocolos combinados"
                ]
            },
            {
                "numero": "8",
                "nombre": "Corporal electroestetica avanzada",
                "imagen": "assets/images/modulos_cosmiatria/m8.jpeg",
                "temas": [
                    "Introducción a la estética corporal.",
                    "Aparato locomotor",
                    "Factores desencadenantes de la Obesidad",
                    "Definición de Obesidad y Sobrepeso",
                    "Apertura de canales",
                    "Drenaje Linfático decubito prono y decubito supino",
                    "Maniobras de Masaje Reductor",
                    "Maderoterapia",
                    "Mecanismo de aparatologías combinadas",
                    "Modelación de cintura",
                    "Glúteos",
                    "Termoterapia",
                    "Vacumterapia",
                    "Gimnasia pasiva",
                    "Cavitación",
                    "Radiofrecuencia corporal"
                ]
            },
            {
                "numero": "9",
                "nombre": "Inyectoterapia - sueroterapia – mesoterapia",
                "imagen": "assets/images/modulos_cosmiatria/m9.jpeg",
                "temas": [
                    "INYECTOLOGIA Y SUEROTERAPIA",
                    "Infiltración",
                    "Tipos de Inyecciones y sus Ángulos",
                    "Bioseguridad",
                    "Sueroterapia en tratamientos estéticos",
                    "Técnicas de aplicación",
                    "Canalización de vena para sueroterapia",
                    "Principios activos homeopáticos",
                    "Acción de la mega dosis vitamina C",
                    "MESOTERAPIA FACIAL",
                    "Principios activos del uso facial",
                    "Tratamientos de antiage",
                    "Tratamientos antiacné",
                    "Tratamientos reafirmantes",
                    "Tratamientos despigmentantes",
                    "Corrección de ojeras y líneas de expresión",
                    "Técnicas de aplicación facial",
                    "Manejo y uso de enzimas recombinantes",
                    "MESOTERAPIA CORPORAL",
                    "Principios activos del uso corporal",
                    "Tratamiento lipolítico",
                    "Tratamiento reafirmante",
                    "Tratamiento de regeneración dérmica",
                    "Uso correcto de los anestésicos en mesoterapia"
                ]
            },
            {
                "numero": "10",
                "nombre": "P.R.P",
                "imagen": "assets/images/modulos_cosmiatria/m10.jpeg",
                "temas": [
                    "Exámenes de laboratorio en interpretación de resultados",
                    "Análisis de hemograma completo",
                    "Análisis de perfil hormonal",
                    "Identificación de paciente patológico",
                    "Plasma rico en plaquetas",
                    "Mecanismo de acción del PRP",
                    "Canalización de vena para toma de muestra",
                    "Tratamientos, rejuvenecimiento, regeneración dérmica",
                    "Manejo de la centrifuga",
                    "Activación de los factores de crecimiento",
                    "Técnicas de aplicación, contraindicaciones",
                    "Anamnesis"
                ]
            },
            {
                "numero": "11",
                "nombre": "Aparatología de avanzada",
                "imagen": "assets/images/modulos_cosmiatria/m11.jpeg",
                "temas": [
                    "Ultrasonido, cavitación, ultra cavitación; tipos, usos, manejo",
                    "Presoterapia; contraindicaciones y mecanismos de acción",
                    "Radiofrecuencia; tipos usos y manejos",
                    "Criolipolisis; contraindicaciones, usos y manejo",
                    "HIFU portátil y profesional; contraindicaciones, usos y manejo",
                    "Luz pulsada intensa (IPL); tratamientos, y contraindicaciones y mecanismos de acción",
                    "Picosecond; Carboxiterapia, uso y manejo.",
                    "Emsculp, uso y manejo."
                ]
            },
            {
                "numero": "12",
                "nombre": "uso y manejo de peptonas facial y corporal",
                "imagen": "assets/images/modulos_cosmiatria/m12.jpg",
                "temas": [
                    "Mecanismo de acción y uso médico / estético de las peptonas",
                    "Rejuvenecimiento facial con peptonas",
                    "Reafirmación y tonificación de glúteos",
                    "Anatomía y estimulación del Músculo glúteo",
                    "Uso adecuado de peptonas en hipertrofia muscular",
                    "Vías de administración"
                ]
            }
        ],
        "matricula": 80,
        "mensualidad": 150,
        "incluye": [
            "30% de material para prácticas en clases por módulo",
            "Uniforme de la academia",
            "Mochila de la academia"
        ],
        "horarios": []
    }
};
