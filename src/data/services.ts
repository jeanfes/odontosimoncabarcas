import type { Service } from "../interfaces/service";

export const services: Service[] = [
  {
    image:
      "https://images.unsplash.com/photo-1606813902773-05c1eebd6b49?auto=format&fit=crop&w=800&q=80",
    alt: "Limpieza dental",
    tag: "Limpieza",
    title: "Limpieza profesional y profilaxis",
    intro:
      "Limpieza dental profesional para eliminar sarro, manchas superficiales y prevenir enfermedades periodontales. Ideal como mantenimiento regular para mantener una sonrisa sana.",
    images: [
      "https://images.unsplash.com/photo-1520012218364-4f7c0d38e6c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    ],
    description: "Limpieza dental profesional para una sonrisa saludable.",
    sections: [
      {
        title: "¿Qué incluye?",
        list: [
          "Remoción de sarro y placa",
          "Pulido y fluorización",
          "Recomendaciones de higiene personalizada",
        ],
      },
      {
        title: "Beneficios",
        paragraphs: [
          "Previene la aparición de caries y enfermedades de las encías.",
          "Mejora la apariencia de las superficies dentales y reduce sensibilidad.",
        ],
        imageIndex: 1,
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1588776814546-ec7c0e3bb0b4?auto=format&fit=crop&w=800&q=80",
    alt: "Ortodoncia",
    tag: "Ortodoncia",
    title: "Ortodoncia — alineación y estética dental",
    intro:
      "La ortodoncia es una especialidad odontológica que corrige la posición de los dientes y huesos maxilares, logrando sonrisas funcionales y estéticas. Ofrecemos múltiples alternativas de tratamiento para todas las edades.",
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588774069165-3bfc88d3e68c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Tratamientos de ortodoncia personalizados que mejoran la estética dental y la salud bucal, adaptados a niños, adolescentes y adultos.",
    sections: [
      {
        title: "Opciones de tratamiento",
        list: [
          "Brackets metálicos: resistentes y eficaces, ideales para casos complejos.",
          "Brackets cerámicos: discretos y estéticos, se mimetizan con el color del diente.",
          "Alineadores invisibles: removibles, cómodos y casi imperceptibles.",
        ],
      },
      {
        title: "Proceso del tratamiento",
        paragraphs: [
          "El tratamiento comienza con una evaluación clínica, radiografías y fotografías intraorales que permiten diseñar un plan adaptado a cada paciente.",
          "Una vez definido el plan, se inicia la colocación de brackets o alineadores, acompañada de controles mensuales para realizar ajustes y asegurar el avance correcto.",
          "La duración promedio del tratamiento varía entre 12 y 24 meses, dependiendo de la complejidad del caso.",
        ],
        imageIndex: 1,
      },
      {
        title: "Beneficios de la ortodoncia",
        paragraphs: [
          "Mejora estética de la sonrisa, aumentando la confianza y seguridad del paciente.",
          "Corrige problemas funcionales como mordida abierta, cruzada o sobremordida.",
          "Facilita la higiene dental, reduciendo el riesgo de caries y enfermedades periodontales.",
          "Previene desgastes irregulares y problemas en la articulación temporomandibular.",
        ],
        imageIndex: 2,
      },
      {
        title: "Cuidados durante el tratamiento",
        list: [
          "Mantener una higiene oral estricta con cepillo interdental y enjuague.",
          "Evitar alimentos muy duros o pegajosos que puedan dañar los brackets.",
          "Asistir a todas las citas de control para garantizar resultados óptimos.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1606814004375-9b28c52f4fb3?auto=format&fit=crop&w=800&q=80",
    alt: "Blanqueamiento",
    tag: "Blanqueamiento",
    title: "Blanqueamiento dental profesional",
    intro:
      "Tratamientos de blanqueamiento en consultorio y protocolos en casa para lograr resultados visibles y seguros.",
    images: [
      "https://images.unsplash.com/photo-1588776814023-bb9c0d23fdb7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601000938259-9e9e9e9e9e9e?auto=format&fit=crop&w=1200&q=80",
    ],
    description: "Blanqueamiento dental para una sonrisa más brillante.",
    sections: [
      {
        title: "¿Cómo funciona?",
        paragraphs: [
          "Aplicamos agentes blanqueadores controlados que actúan sobre las manchas extrínsecas e intrínsecas.",
          "Opciones en consultorio y tratamientos domiciliarios supervisados.",
        ],
      },
      {
        title: "Beneficios",
        list: [
          "Resultados visibles desde la primera sesión",
          "Mayor confianza en tu sonrisa",
          "Tratamientos seguros y personalizados",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1605617613955-2f3c3e5aa45f?auto=format&fit=crop&w=800&q=80",
    alt: "Implantes dentales",
    tag: "Implantes",
    title: "Implantes dentales — restauración funcional",
    intro:
      "Solución para reemplazar piezas perdidas con prótesis fijas sobre implantes — recupera función y estética.",
    images: [
      "https://images.unsplash.com/photo-1606813902064-c6b2a8e1c9e4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601000938380-9a7f4e1b7a53?auto=format&fit=crop&w=1200&q=80",
    ],
    description: "Implantes dentales para restaurar piezas perdidas.",
    sections: [
      {
        title: "Fases del tratamiento",
        list: [
          "Evaluación y planificación 3D",
          "Colocación del implante",
          "Rehabilitación protésica",
        ],
      },
      {
        title: "Ventajas",
        paragraphs: [
          "Estabilidad a largo plazo y apariencia natural.",
          "Preservación de hueso y mejor función masticatoria.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1629904853893-c2c8981a1c3c?auto=format&fit=crop&w=800&q=80",
    alt: "Odontopediatría",
    tag: "Odontopediatría",
    title: "Odontopediatría — cuidado dental infantil",
    intro:
      "Atención especializada para niños con técnicas adaptadas que generan confianza y previenen problemas a futuro.",
    images: [
      "https://images.unsplash.com/photo-1598257006621-4c4e1f9fca90?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1629904853471-34f33a5a0f65?auto=format&fit=crop&w=1200&q=80",
    ],
    description: "Cuidado bucal integral para los más pequeños.",
    sections: [
      {
        title: "¿Qué incluye?",
        list: [
          "Sellantes y fluorización",
          "Detección temprana de caries",
          "Educación en hábitos saludables",
        ],
      },
      {
        title: "Beneficios",
        paragraphs: [
          "Prevención de problemas dentales desde edades tempranas.",
          "Consultas amigables que reducen el miedo al odontólogo.",
        ],
        imageIndex: 1,
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1629904853882-fd3f09f927d7?auto=format&fit=crop&w=800&q=80",
    alt: "Periodoncia",
    tag: "Periodoncia",
    title: "Periodoncia — tratamiento de encías",
    intro:
      "Tratamientos especializados para prevenir, diagnosticar y controlar enfermedades de las encías y tejidos de soporte.",
    images: [
      "https://images.unsplash.com/photo-1605617613955-2f3c3e5aa45f?auto=format&fit=crop&w=1200&q=80",
    ],
    description: "Salud de las encías para evitar pérdida dental prematura.",
    sections: [
      {
        title: "Servicios",
        list: [
          "Tratamiento de gingivitis y periodontitis",
          "Cirugía periodontal",
          "Mantenimiento periodontal",
        ],
      },
      {
        title: "Beneficios",
        paragraphs: [
          "Mejora la salud bucal general.",
          "Previene movilidad y pérdida de piezas dentales.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1629904853983-8f6bb7a3d5d1?auto=format&fit=crop&w=800&q=80",
    alt: "Endodoncia",
    tag: "Endodoncia",
    title: "Endodoncia — tratamiento de conductos",
    intro:
      "Procedimiento para salvar dientes dañados o infectados eliminando el tejido pulpar comprometido.",
    images: [
      "https://images.unsplash.com/photo-1605617613955-2f3c3e5aa45f?auto=format&fit=crop&w=1200&q=80",
    ],
    description: "Tratamiento eficaz para conservar piezas dentales dañadas.",
    sections: [
      {
        title: "¿Cuándo se indica?",
        list: [
          "Dolor intenso o prolongado",
          "Caries profunda",
          "Fracturas que afectan la pulpa",
        ],
      },
      {
        title: "Beneficios",
        paragraphs: [
          "Conserva el diente natural y su función.",
          "Alivia el dolor y la sensibilidad.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1629904854003-2bba9a1c7e1c?auto=format&fit=crop&w=800&q=80",
    alt: "Prótesis dental",
    tag: "Prótesis",
    title: "Prótesis dentales — recuperación estética y funcional",
    intro:
      "Restauraciones removibles o fijas para reemplazar dientes ausentes y mejorar la sonrisa.",
    images: [
      "https://images.unsplash.com/photo-1606813902190-414f1a1b7a8c?auto=format&fit=crop&w=1200&q=80",
    ],
    description: "Soluciones protésicas adaptadas a cada paciente.",
    sections: [
      {
        title: "Tipos de prótesis",
        list: ["Prótesis removibles", "Prótesis fijas", "Prótesis híbridas"],
      },
      {
        title: "Beneficios",
        paragraphs: [
          "Recupera la función masticatoria y la estética.",
          "Mejora la calidad de vida del paciente.",
        ],
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1629904854025-d7a7078fca15?auto=format&fit=crop&w=800&q=80",
    alt: "Cirugía oral",
    tag: "Cirugía",
    title: "Cirugía oral — procedimientos especializados",
    intro:
      "Intervenciones quirúrgicas como extracciones de terceros molares, frenectomías y biopsias.",
    images: [
      "https://images.unsplash.com/photo-1606813902401-4f6c1a1b7a53?auto=format&fit=crop&w=1200&q=80",
    ],
    description: "Cirugías dentales para tratar casos complejos y mejorar la salud bucal.",
    sections: [
      {
        title: "Procedimientos comunes",
        list: [
          "Extracción de muelas del juicio",
          "Frenectomías",
          "Cirugía de quistes y tumores",
          "Biopsias diagnósticas",
        ],
      },
      {
        title: "Beneficios",
        paragraphs: [
          "Resuelve problemas dentales complejos de forma segura.",
          "Mejora la funcionalidad y previene complicaciones.",
        ],
      },
    ],
  },
];
