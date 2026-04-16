// Datos de servicios Exilus v2 — fuente única de verdad
// Cada servicio alimenta: /servicios, /servicios/[slug], Navbar, sitemap, Footer

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface ServiceStep {
  step: number;
  title: string;
  description: string;
}

export interface RecoveryPhase {
  phase: string;
  timeframe: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  number: string;
  tag: string;
  shortDescription: string;
  heroSubtitle: string;
  image: string;
  description: string[];
  candidateProfile: string[];
  benefits: ServiceBenefit[];
  steps: ServiceStep[];
  recovery: RecoveryPhase[];
  faqs: ServiceFAQ[];
  stats: { label: string; value: string }[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "cirugia-bariatrica-metabolica",
    name: "Cirugía Bariátrica y Metabólica",
    number: "01",
    tag: "Bariátrica",
    shortDescription:
      "Procedimientos quirúrgicos avanzados para el tratamiento definitivo de la obesidad y las enfermedades metabólicas asociadas: diabetes, hipertensión y síndrome metabólico.",
    heroSubtitle:
      "Intervenciones laparoscópicas de alta complejidad que transforman no solo el peso, sino también el metabolismo y la calidad de vida.",
    image: "/images/doctor-quirofano.jpg",
    description: [
      "La cirugía bariátrica y metabólica agrupa los procedimientos quirúrgicos más efectivos para el tratamiento de la obesidad severa y sus comorbilidades. El Dr. Salazar realiza manga gástrica, bypass gástrico, bipartición intestinal y cirugía revisional mediante técnica laparoscópica avanzada, con incisiones mínimas y recuperación acelerada.",
      "Más allá de la pérdida de peso, estos procedimientos producen cambios hormonales y metabólicos profundos. El bypass gástrico, por ejemplo, puede lograr remisión de diabetes tipo 2 en el 70-83% de los pacientes, incluso antes de que ocurra una pérdida de peso significativa.",
      "Cada caso es evaluado de forma individual por un equipo multidisciplinario que incluye cirujano, nutricionista y psicólogo, para elegir el procedimiento que mejor se adapte a la historia clínica, el estilo de vida y los objetivos de cada paciente.",
    ],
    candidateProfile: [
      "Índice de Masa Corporal (IMC) igual o mayor a 40",
      "IMC igual o mayor a 35 con comorbilidades: diabetes tipo 2, hipertensión arterial, apnea del sueño o síndrome metabólico",
      "Intentos previos de pérdida de peso sin resultados sostenidos a largo plazo",
      "Compromiso firme con los cambios de estilo de vida y el seguimiento médico",
      "Mayores de 18 años en condiciones generales aptas para cirugía bajo anestesia general",
    ],
    benefits: [
      {
        title: "Pérdida de peso sostenida",
        description:
          "Pérdida del 60-80% del exceso de peso en los primeros 12-18 meses, con resultados mantenidos a largo plazo.",
        icon: "TrendingDown",
      },
      {
        title: "Resolución de comorbilidades",
        description:
          "Mejora o remisión de diabetes tipo 2, hipertensión arterial, apnea del sueño y dislipidemia.",
        icon: "HeartPulse",
      },
      {
        title: "Técnica laparoscópica avanzada",
        description:
          "Incisiones de 5-12 mm. Menor dolor postoperatorio, menor riesgo de infección y recuperación más rápida.",
        icon: "Minimize2",
      },
      {
        title: "Cambio hormonal y metabólico",
        description:
          "Los procedimientos modifican las hormonas que regulan el apetito y el metabolismo de la glucosa.",
        icon: "Activity",
      },
      {
        title: "Equipo multidisciplinario",
        description:
          "Cirujano, nutricionista y psicólogo trabajan juntos desde la evaluación hasta el seguimiento posquirúrgico.",
        icon: "Users",
      },
      {
        title: "Resultados respaldados",
        description:
          "Más de 16 años de experiencia del Dr. Salazar en cirugía bariátrica y metabólica en Trujillo.",
        icon: "Award",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Consulta inicial y evaluación",
        description:
          "Consulta integral con el Dr. Salazar: revisión del historial médico, IMC, comorbilidades y objetivos del paciente para definir el procedimiento más adecuado.",
      },
      {
        step: 2,
        title: "Evaluación multidisciplinaria",
        description:
          "Interconsultas con nutricionista y psicólogo, más exámenes de laboratorio, endoscopía y evaluación cardiológica y anestesiológica.",
      },
      {
        step: 3,
        title: "Preparación prequirúrgica",
        description:
          "Dieta preoperatoria de 2 semanas para reducir el volumen hepático. Indicaciones específicas según el procedimiento elegido.",
      },
      {
        step: 4,
        title: "Cirugía laparoscópica",
        description:
          "Procedimiento de 60-120 minutos bajo anestesia general. 4-5 incisiones mínimas. Hospitalización en Clínica Sanna Sánchez Ferrer.",
      },
      {
        step: 5,
        title: "Seguimiento integral posquirúrgico",
        description:
          "Controles periódicos con el equipo completo: cirujano, nutricionista y psicólogo durante el primer año y más allá.",
      },
    ],
    recovery: [
      {
        phase: "Hospitalización",
        timeframe: "Día 1-3",
        description:
          "Reposo en clínica. Inicio de líquidos claros. Monitoreo continuo de signos vitales y tolerancia oral.",
      },
      {
        phase: "Primera semana",
        timeframe: "Día 4-7",
        description:
          "Alta hospitalaria. Dieta líquida estricta. Caminatas cortas para prevenir complicaciones. Reposo relativo.",
      },
      {
        phase: "Semanas 2-4",
        timeframe: "Semana 2-4",
        description:
          "Transición a dieta blanda y puré. Retorno gradual a actividades cotidianas. Sin ejercicio de impacto.",
      },
      {
        phase: "Mes 2 en adelante",
        timeframe: "Mes 2+",
        description:
          "Incorporación progresiva de alimentos sólidos. Inicio de actividad física moderada. Controles mensuales y laboratorio trimestral.",
      },
    ],
    faqs: [
      {
        question: "¿Cuál procedimiento bariátrico es el más adecuado para mí?",
        answer:
          "Depende de varios factores: tu IMC, comorbilidades, hábitos alimentarios e historia médica. El Dr. Salazar evalúa cada caso individualmente para recomendar la manga gástrica, el bypass gástrico, la bipartición intestinal u otro procedimiento según las características específicas de cada paciente.",
      },
      {
        question: "¿Cuánto peso puedo perder con la cirugía bariátrica?",
        answer:
          "En promedio, los pacientes pierden entre el 60-80% de su exceso de peso durante los primeros 12-18 meses. Los resultados varían según el procedimiento elegido, el compromiso con la dieta y el nivel de actividad física.",
      },
      {
        question: "¿La cirugía bariátrica cura la diabetes tipo 2?",
        answer:
          "El bypass gástrico logra remisión completa de la diabetes tipo 2 en el 70-83% de los pacientes. La manga gástrica también mejora significativamente el control glucémico. Estos efectos se deben en parte a cambios hormonales que ocurren de forma independiente a la pérdida de peso.",
      },
      {
        question: "¿Cuándo puedo volver a trabajar después de la cirugía?",
        answer:
          "Para trabajos de oficina, la mayoría de pacientes retoman actividades entre los 10-14 días. Para labores físicas, se recomienda esperar entre 4-6 semanas. El Dr. Salazar evaluará tu caso y dará indicaciones específicas en el alta.",
      },
    ],
    stats: [
      { label: "Pérdida de exceso de peso", value: "60-80%" },
      { label: "Remisión de diabetes (bypass)", value: "hasta 83%" },
      { label: "Tiempo de cirugía", value: "60-120 min" },
      { label: "Estancia hospitalaria", value: "2-3 días" },
    ],
  },
  {
    slug: "manejo-integral-obesidad",
    name: "Manejo Integral del Sobrepeso y Obesidad",
    number: "02",
    tag: "Obesidad",
    shortDescription:
      "Abordaje multidisciplinario y personalizado que integra evaluación médica, soporte nutricional y acompañamiento psicológico para un tratamiento completo y sostenido.",
    heroSubtitle:
      "Un equipo completo a tu lado: médico, nutricionista y psicólogo trabajando juntos para lograr resultados reales y duraderos.",
    image: "/images/doctor-consulta.jpg",
    description: [
      "El manejo integral del sobrepeso y la obesidad reconoce que perder peso de forma sostenida requiere mucho más que una dieta o un procedimiento aislado. El enfoque de Exilus combina evaluación médica completa, soporte nutricional especializado, acompañamiento psicológico y, cuando se indica, intervención quirúrgica.",
      "El Dr. Salazar coordina un equipo multidisciplinario que diseña un plan personalizado para cada paciente, considerando su historia médica, hábitos de vida, relación con la comida y objetivos individuales. El resultado es un tratamiento que ataca la obesidad desde todos los ángulos posibles.",
      "Este programa es ideal tanto para quienes buscan manejar el peso sin cirugía, como para quienes se preparan para un procedimiento bariátrico o se encuentran en la etapa de seguimiento posquirúrgico.",
    ],
    candidateProfile: [
      "Personas con sobrepeso (IMC 25-29.9) u obesidad grado I (IMC 30-34.9) que buscan un abordaje médico integral",
      "Pacientes que no califican para cirugía bariátrica o prefieren iniciar con un tratamiento no quirúrgico",
      "Personas en preparación preoperatoria para un procedimiento bariátrico",
      "Pacientes en seguimiento posquirúrgico que buscan apoyo nutricional y psicológico continuo",
      "Quienes tienen una relación compleja con la comida y requieren acompañamiento especializado",
    ],
    benefits: [
      {
        title: "Abordaje completo",
        description:
          "Médico, nutricionista y psicólogo trabajando en equipo para atacar la obesidad desde todos sus frentes.",
        icon: "Users",
      },
      {
        title: "Plan 100% personalizado",
        description:
          "No hay planes genéricos. Cada paciente recibe un programa diseñado según su historia, hábitos y objetivos.",
        icon: "Settings",
      },
      {
        title: "Soporte nutricional experto",
        description:
          "Nutricionista especializada en pacientes bariátricos que diseña planes sostenibles, no dietas restrictivas.",
        icon: "Utensils",
      },
      {
        title: "Acompañamiento psicológico",
        description:
          "Psicólogo especializado en trastornos de la conducta alimentaria para trabajar la relación con la comida.",
        icon: "HeartPulse",
      },
      {
        title: "Resultados sostenibles",
        description:
          "Cambios de hábito reales que se mantienen en el tiempo, no pérdidas de peso temporales.",
        icon: "TrendingDown",
      },
      {
        title: "Flexibilidad de tratamiento",
        description:
          "Puede incluir o no una intervención quirúrgica, según lo que el equipo y el paciente determinen como mejor opción.",
        icon: "ShieldCheck",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Evaluación médica inicial",
        description:
          "Consulta con el Dr. Salazar para revisar historial médico, analizar comorbilidades, indicar exámenes y definir el enfoque del tratamiento.",
      },
      {
        step: 2,
        title: "Consulta nutricional",
        description:
          "La nutricionista evalúa hábitos alimentarios actuales, diseña el plan de alimentación y establece metas nutricionales realistas.",
      },
      {
        step: 3,
        title: "Evaluación psicológica",
        description:
          "El psicólogo identifica la relación del paciente con la comida, factores emocionales y establece estrategias de apoyo conductual.",
      },
      {
        step: 4,
        title: "Plan integrado de tratamiento",
        description:
          "El equipo diseña en conjunto el plan personalizado: alimentación, actividad física, seguimiento médico y, si aplica, preparación quirúrgica.",
      },
      {
        step: 5,
        title: "Seguimiento y ajustes",
        description:
          "Controles regulares con el equipo completo para evaluar avances, resolver dudas y ajustar el plan según la evolución del paciente.",
      },
    ],
    recovery: [
      {
        phase: "Semana 1-2",
        timeframe: "Inicio",
        description:
          "Adaptación al nuevo plan alimentario. Seguimiento estrecho con nutricionista. Primera consulta de control médico.",
      },
      {
        phase: "Mes 1-3",
        timeframe: "Mes 1-3",
        description:
          "Controles mensuales con el equipo. Ajustes del plan según la evolución. Inicio o fortalecimiento de actividad física.",
      },
      {
        phase: "Mes 4-6",
        timeframe: "Mes 4-6",
        description:
          "Consolidación de nuevos hábitos. Evaluación de resultados intermedios. Decisión informada sobre si se requiere intervención quirúrgica.",
      },
      {
        phase: "Mes 7 en adelante",
        timeframe: "Mes 7+",
        description:
          "Seguimiento de largo plazo. Controles trimestrales. Mantenimiento de resultados con apoyo continuo del equipo.",
      },
    ],
    faqs: [
      {
        question: "¿Este programa incluye cirugía obligatoriamente?",
        answer:
          "No. La intervención quirúrgica es solo una opción dentro del programa integral, y se considera únicamente cuando el equipo y el paciente determinan que es la mejor alternativa. Muchos pacientes logran resultados significativos sin cirugía.",
      },
      {
        question: "¿Cuánto dura el programa de manejo integral?",
        answer:
          "El programa no tiene una duración fija. Se adapta a los objetivos y la evolución de cada paciente. Lo habitual es mantener seguimiento activo durante al menos 12 meses, con controles de largo plazo según la necesidad.",
      },
      {
        question: "¿Puedo acceder al programa si ya me operé y necesito apoyo?",
        answer:
          "Sí. El acompañamiento posquirúrgico es parte fundamental del programa. Muchos pacientes que ya se operaron en otra institución buscan este soporte para optimizar sus resultados y prevenir la recuperación de peso.",
      },
    ],
    stats: [
      { label: "Especialistas en el equipo", value: "3" },
      { label: "Plan completamente personalizado", value: "100%" },
      { label: "Seguimiento promedio", value: "12+ meses" },
      { label: "Incluye soporte psicológico", value: "Sí" },
    ],
  },
  {
    slug: "cirugia-laparoscopica-avanzada",
    name: "Cirugía Laparoscópica Avanzada",
    number: "03",
    tag: "Laparoscópica",
    shortDescription:
      "Técnicas mínimamente invasivas para cirugías abdominales complejas. Menos dolor, recuperación acelerada y cicatrices mínimas gracias a la laparoscopía de alta definición.",
    heroSubtitle:
      "Cirugía abdominal avanzada a través de incisiones de milímetros. La técnica que transforma la experiencia quirúrgica del paciente.",
    image: "/images/doctor-scrubs.jpg",
    description: [
      "La cirugía laparoscópica avanzada permite realizar operaciones abdominales complejas a través de incisiones de solo 5 a 12 milímetros, usando una cámara de alta definición e instrumental especializado. El resultado es una cirugía igual de efectiva que la técnica abierta tradicional, pero con una fracción del trauma quirúrgico.",
      "El Dr. Salazar cuenta con más de 16 años de experiencia en laparoscopía avanzada. Esta técnica no se limita a la cirugía bariátrica: también se aplica en colecistectomía (vesícula biliar), apendicectomía, reparación de hernias abdominales y cirugías de colon e intestino.",
      "Las ventajas sobre la cirugía abierta son contundentes: significativamente menos dolor postoperatorio, menor riesgo de infección, estancia hospitalaria más corta, retorno más rápido a las actividades normales y mejores resultados estéticos.",
    ],
    candidateProfile: [
      "Pacientes con cálculos o enfermedades de la vesícula biliar que requieren colecistectomía",
      "Cuadros de apendicitis aguda o crónica",
      "Hernias abdominales: umbilical, inguinal, incisional o epigástrica",
      "Patologías del colon e intestino que requieren intervención quirúrgica",
      "Candidatos a cirugía bariátrica (todos los procedimientos se realizan por laparoscopía)",
      "Pacientes que buscan una recuperación más rápida y menos traumática",
    ],
    benefits: [
      {
        title: "Incisiones mínimas",
        description:
          "3-5 incisiones de 5-12 mm en lugar de una incisión abdominal grande. Cicatrices prácticamente imperceptibles.",
        icon: "Minimize2",
      },
      {
        title: "Menos dolor postoperatorio",
        description:
          "Significativamente menos dolor que la cirugía abierta. Menor necesidad de analgésicos y mejor experiencia de recuperación.",
        icon: "HeartPulse",
      },
      {
        title: "Recuperación acelerada",
        description:
          "Alta hospitalaria en 24-48 horas para la mayoría de procedimientos. Retorno a actividades normales en 1-2 semanas.",
        icon: "Zap",
      },
      {
        title: "Menor riesgo de complicaciones",
        description:
          "Las incisiones pequeñas reducen el riesgo de infecciones de herida y hernias incisionales postoperatorias.",
        icon: "ShieldCheck",
      },
      {
        title: "Visión amplificada HD",
        description:
          "La cámara de alta definición proporciona una visión detallada y amplificada que mejora la precisión quirúrgica.",
        icon: "Eye",
      },
      {
        title: "+16 años de experiencia",
        description:
          "El Dr. Salazar ha realizado miles de procedimientos laparoscópicos con resultados consistentes y seguros.",
        icon: "Award",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Evaluación quirúrgica",
        description:
          "Consulta con el Dr. Salazar para evaluar la patología, estudios de imagen y determinar la viabilidad y planificación del abordaje laparoscópico.",
      },
      {
        step: 2,
        title: "Exámenes preoperatorios",
        description:
          "Laboratorio completo, evaluación cardiovascular y riesgo anestesiológico según el tipo de cirugía y el perfil del paciente.",
      },
      {
        step: 3,
        title: "Cirugía laparoscópica",
        description:
          "Bajo anestesia general: incisiones mínimas, insuflación de CO₂ para crear espacio de trabajo y cirugía con instrumental de alta precisión.",
      },
      {
        step: 4,
        title: "Recuperación hospitalaria",
        description:
          "Monitoreo postoperatorio. Inicio temprano de deambulación. Tolerancia oral progresiva según el tipo de procedimiento.",
      },
      {
        step: 5,
        title: "Control ambulatorio",
        description:
          "Consulta de seguimiento a los 7 días para revisión de heridas, retiro de puntos y evaluación de la evolución.",
      },
    ],
    recovery: [
      {
        phase: "Día de la cirugía",
        timeframe: "Día 1",
        description:
          "Recuperación de anestesia. Inicio de deambulación temprana. Tolerancia a líquidos. Observación en clínica.",
      },
      {
        phase: "Días 2-3",
        timeframe: "Día 2-3",
        description:
          "Alta hospitalaria en la mayoría de casos. Molestias leves en sitios de incisión. Alimentación progresiva.",
      },
      {
        phase: "Primera semana",
        timeframe: "Día 4-7",
        description:
          "Actividades cotidianas ligeras. Evitar esfuerzos físicos. Control médico para revisión de heridas.",
      },
      {
        phase: "Semanas 2-4",
        timeframe: "Semana 2-4",
        description:
          "Retorno completo a actividades normales. Inicio de ejercicio suave. Alta definitiva según evolución.",
      },
    ],
    faqs: [
      {
        question: "¿Todas las cirugías abdominales pueden hacerse por laparoscopía?",
        answer:
          "La gran mayoría sí, aunque hay situaciones en que la cirugía abierta es más segura: emergencias complejas, adherencias extensas o ciertos tipos de patología. El Dr. Salazar evalúa cada caso para recomendar el abordaje más adecuado.",
      },
      {
        question: "¿Qué pasa si durante la laparoscopía es necesario convertir a cirugía abierta?",
        answer:
          "En casos excepcionales (menos del 2%), puede ser necesario convertir a cirugía abierta por seguridad. El Dr. Salazar está preparado y equipado para ambas técnicas en cada intervención.",
      },
      {
        question: "¿Cuándo puedo hacer ejercicio después de la cirugía?",
        answer:
          "Para actividad ligera como caminar, desde los primeros días. Para ejercicio moderado, generalmente a partir de las 2-3 semanas. Para ejercicio intenso o de alta exigencia, se recomienda esperar 4-6 semanas según el tipo de cirugía.",
      },
    ],
    stats: [
      { label: "Tamaño de incisiones", value: "5-12 mm" },
      { label: "Alta hospitalaria", value: "24-48h" },
      { label: "Retorno a actividades", value: "1-2 sem" },
      { label: "Años de experiencia", value: "+16" },
    ],
  },
  {
    slug: "cirugia-digestiva",
    name: "Cirugía Digestiva Especializada",
    number: "04",
    tag: "Digestiva",
    shortDescription:
      "Diagnóstico y tratamiento quirúrgico de enfermedades del sistema digestivo: reflujo gastroesofágico, patologías gástricas, hepáticas y pancreáticas con tecnología de última generación.",
    heroSubtitle:
      "Cirugía del sistema digestivo con precisión, experiencia y tecnología avanzada para resolver patologías complejas.",
    image: "/images/doctor-scrubs-2.jpg",
    description: [
      "La cirugía digestiva especializada abarca el diagnóstico y tratamiento quirúrgico de enfermedades del esófago, estómago, intestino delgado, hígado, vías biliares y páncreas. El Dr. Salazar aplica técnicas laparoscópicas avanzadas para resolver estas patologías con el menor trauma posible.",
      "El reflujo gastroesofágico severo, las enfermedades gástricas crónicas, las patologías hepáticas y la cirugía pancreática requieren un nivel de especialización y experiencia que va más allá de la cirugía general. Exilus ofrece este nivel de atención especializada en Trujillo.",
      "Cada paciente recibe una evaluación completa que incluye endoscopía, estudios de imagen y laboratorio avanzado para garantizar el diagnóstico más preciso antes de cualquier decisión quirúrgica.",
    ],
    candidateProfile: [
      "Pacientes con enfermedad por reflujo gastroesofágico (ERGE) severo o hernia hiatal sintomática",
      "Úlcera péptica o gastritis crónica que requiera tratamiento quirúrgico",
      "Patología hepática: quistes hepáticos, tumores benignos o secuelas de hidatidosis",
      "Enfermedades del páncreas que requieran intervención quirúrgica",
      "Patologías del intestino delgado: obstrucción, tumores o malformaciones",
      "Pacientes que no respondieron al tratamiento médico y requieren solución definitiva",
    ],
    benefits: [
      {
        title: "Especialización avanzada",
        description:
          "El Dr. Salazar cuenta con formación y experiencia específica en cirugía digestiva compleja, incluyendo patología hepatobiliar y pancreática.",
        icon: "Award",
      },
      {
        title: "Diagnóstico preciso",
        description:
          "Evaluación completa con endoscopía, estudios de imagen avanzada y laboratorio especializado antes de cualquier decisión quirúrgica.",
        icon: "Search",
      },
      {
        title: "Abordaje mínimamente invasivo",
        description:
          "La mayoría de procedimientos digestivos se realizan por laparoscopía, con todas las ventajas de la mínima invasión.",
        icon: "Minimize2",
      },
      {
        title: "Resolución del reflujo",
        description:
          "La funduplicatura laparoscópica ofrece resolución definitiva del reflujo gastroesofágico en el 90% de los casos.",
        icon: "ShieldCheck",
      },
      {
        title: "Cirugía hepática segura",
        description:
          "Manejo de patología hepática benigna con técnicas modernas que minimizan el sangrado y aceleran la recuperación.",
        icon: "HeartPulse",
      },
      {
        title: "Seguimiento integral",
        description:
          "Control posquirúrgico riguroso con endoscopía de control y laboratorio para verificar la resolución de la patología.",
        icon: "Clock",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Evaluación especializada",
        description:
          "Consulta con el Dr. Salazar: revisión de sintomatología, historial y estudios previos. Indicación de endoscopía o imagen según el caso.",
      },
      {
        step: 2,
        title: "Estudios complementarios",
        description:
          "Endoscopía digestiva alta o baja, ecografía abdominal, tomografía o resonancia magnética según la patología a tratar.",
      },
      {
        step: 3,
        title: "Planificación quirúrgica",
        description:
          "Con todos los estudios disponibles, el Dr. Salazar diseña el plan quirúrgico más seguro y efectivo para cada caso.",
      },
      {
        step: 4,
        title: "Cirugía laparoscópica",
        description:
          "Procedimiento bajo anestesia general con técnica laparoscópica avanzada. Duración variable según la patología y su complejidad.",
      },
      {
        step: 5,
        title: "Seguimiento posquirúrgico",
        description:
          "Controles regulares con evaluación clínica, laboratorio y, cuando corresponde, endoscopía de control para confirmar la resolución.",
      },
    ],
    recovery: [
      {
        phase: "Hospitalización",
        timeframe: "Día 1-3",
        description:
          "Estancia según la complejidad del procedimiento. Monitoreo, manejo del dolor e inicio de alimentación progresiva.",
      },
      {
        phase: "Primera semana",
        timeframe: "Día 4-7",
        description:
          "Alta y reposo relativo en casa. Dieta blanda. Evitar esfuerzos. Control médico a los 7 días.",
      },
      {
        phase: "Semanas 2-4",
        timeframe: "Semana 2-4",
        description:
          "Recuperación de la actividad normal. Alimentación regular progresiva. Sin ejercicio de impacto.",
      },
      {
        phase: "Mes 2 en adelante",
        timeframe: "Mes 2+",
        description:
          "Retorno completo a actividades y alimentación normal. Controles de seguimiento según el tipo de patología operada.",
      },
    ],
    faqs: [
      {
        question: "¿El reflujo gastroesofágico se cura con cirugía?",
        answer:
          "En la mayoría de casos, sí. La funduplicatura laparoscópica (cirugía anti-reflujo) logra resolución completa del reflujo en el 90% de los pacientes, eliminando la necesidad de medicación crónica. Es la opción más adecuada cuando el tratamiento médico no es suficiente o el paciente prefiere una solución definitiva.",
      },
      {
        question: "¿Cuándo se necesita cirugía para la patología hepática?",
        answer:
          "La patología hepática benigna (quistes, hemangiomas sintomáticos, hidatidosis) puede requerir cirugía cuando produce síntomas significativos o existe riesgo de complicaciones. El Dr. Salazar evalúa cada caso para determinar si el manejo es médico o quirúrgico.",
      },
      {
        question: "¿La cirugía digestiva laparoscópica es tan efectiva como la cirugía abierta?",
        answer:
          "Sí. Para la gran mayoría de patologías digestivas, los resultados oncológicos y funcionales son equivalentes. La ventaja de la laparoscopía está en el menor trauma quirúrgico, la recuperación más rápida y la menor tasa de complicaciones de herida.",
      },
    ],
    stats: [
      { label: "Resolución de reflujo con cirugía", value: "90%" },
      { label: "Abordaje laparoscópico", value: "Mayoría" },
      { label: "Alta hospitalaria promedio", value: "2-3 días" },
      { label: "Retorno a actividades", value: "2-3 sem" },
    ],
  },
  {
    slug: "proctologia",
    name: "Proctología y Cirugía Anorrectal",
    number: "05",
    tag: "Proctología",
    shortDescription:
      "Diagnóstico y tratamiento especializado de enfermedades del colon, recto y ano: hemorroides, fisuras anales, fístulas y abscesos perianales, con técnicas modernas y mínima incomodidad.",
    heroSubtitle:
      "Atención especializada para enfermedades anorrectales. Diagnóstico certero, tratamiento efectivo y la discreción que mereces.",
    image: "/images/doctor-terno.jpg",
    description: [
      "Las enfermedades anorrectales son más frecuentes de lo que se suele reconocer, y muchos pacientes postergan la consulta por vergüenza o desconocimiento. El Dr. Salazar ofrece una consulta de proctología en un ambiente confidencial y profesional, con técnicas de diagnóstico y tratamiento modernas.",
      "Las hemorroides, las fisuras anales, las fístulas y los abscesos perianales tienen tratamientos efectivos que van desde procedimientos ambulatorios mínimamente invasivos hasta cirugías de mayor complejidad, siempre adaptados a la severidad de cada caso.",
      "El objetivo es resolver el problema de raíz con el menor malestar posible para el paciente. La mayoría de los procedimientos proctológicos modernos se realizan de forma ambulatoria o con estancias hospitalarias cortas, con una recuperación mucho más cómoda que la cirugía tradicional.",
    ],
    candidateProfile: [
      "Hemorroides internas o externas con síntomas persistentes: sangrado, prolapso o dolor",
      "Fisura anal crónica o aguda que no responde al tratamiento médico conservador",
      "Fístula anal: trayecto anómalo entre el recto y la piel perianal",
      "Absceso perianal: colección de pus en la región anal que requiere drenaje",
      "Condilomas anales (verrugas) o lesiones anorrectales que requieren diagnóstico y tratamiento",
      "Pacientes con síntomas anorrectales como sangrado, dolor, secreción o masa palpable",
    ],
    benefits: [
      {
        title: "Consulta confidencial",
        description:
          "Ambiente profesional y discreto para una consulta que muchos pacientes postergan por vergüenza innecesariamente.",
        icon: "Shield",
      },
      {
        title: "Diagnóstico preciso",
        description:
          "Evaluación clínica completa con anoscopia y rectosigmoidoscopía cuando es necesario para un diagnóstico certero.",
        icon: "Search",
      },
      {
        title: "Técnicas mínimamente invasivas",
        description:
          "Ligadura con banda elástica, escleroterapia y otros procedimientos ambulatorios modernos para hemorroides y lesiones menores.",
        icon: "Minimize2",
      },
      {
        title: "Cirugía anorrectal especializada",
        description:
          "Hemorroidectomía, fisurectomía, fistulotomía y drenaje de abscesos con las técnicas más actualizadas disponibles.",
        icon: "Award",
      },
      {
        title: "Recuperación más cómoda",
        description:
          "Los procedimientos modernos tienen protocolos de manejo del dolor que hacen la recuperación mucho más tolerable que antes.",
        icon: "HeartPulse",
      },
      {
        title: "Resolución definitiva",
        description:
          "El objetivo es tratar la causa del problema, no solo los síntomas, para evitar recurrencias a largo plazo.",
        icon: "ShieldCheck",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Consulta inicial",
        description:
          "Consulta confidencial con el Dr. Salazar: anamnesis completa, exploración física y anoscopia si es necesaria para el diagnóstico.",
      },
      {
        step: 2,
        title: "Diagnóstico y plan de tratamiento",
        description:
          "Según los hallazgos, el Dr. Salazar determina si el manejo es médico conservador, un procedimiento ambulatorio o cirugía.",
      },
      {
        step: 3,
        title: "Preparación (si aplica cirugía)",
        description:
          "Exámenes prequirúrgicos básicos. Preparación intestinal según el tipo de procedimiento. Indicaciones dietéticas previas.",
      },
      {
        step: 4,
        title: "Procedimiento o cirugía",
        description:
          "Desde procedimientos ambulatorios bajo anestesia local hasta cirugías bajo anestesia espinal o general, según la complejidad.",
      },
      {
        step: 5,
        title: "Seguimiento posquirúrgico",
        description:
          "Controles para evaluar la cicatrización, manejar el dolor y asegurar la resolución completa del problema.",
      },
    ],
    recovery: [
      {
        phase: "Día del procedimiento",
        timeframe: "Día 1",
        description:
          "Para procedimientos ambulatorios: alta el mismo día. Para cirugías mayores: hospitalización de 1-2 días. Manejo activo del dolor.",
      },
      {
        phase: "Primera semana",
        timeframe: "Día 2-7",
        description:
          "Reposo relativo. Dieta blanda con alto contenido de fibra. Baños de asiento. Analgesia según necesidad.",
      },
      {
        phase: "Semanas 2-3",
        timeframe: "Semana 2-3",
        description:
          "Reducción progresiva de molestias. Retorno gradual a actividades normales. Alimentación regular con fibra.",
      },
      {
        phase: "Mes 1 en adelante",
        timeframe: "Mes 1+",
        description:
          "Cicatrización completa. Actividad normal sin restricciones. Control de seguimiento para confirmar la resolución.",
      },
    ],
    faqs: [
      {
        question: "¿Las hemorroides siempre requieren cirugía?",
        answer:
          "No. El tratamiento depende del grado y los síntomas. Las hemorroides grado I y II frecuentemente se manejan con medidas conservadoras (dieta, baños de asiento) o procedimientos ambulatorios como la ligadura con banda elástica. La cirugía se reserva para casos más avanzados o cuando los tratamientos previos no fueron suficientes.",
      },
      {
        question: "¿Qué tan dolorosa es la recuperación de la cirugía hemorroidal?",
        answer:
          "La cirugía de hemorroides tiene fama de ser dolorosa, pero con los protocolos modernos de manejo del dolor —incluyendo anestesia local prolongada y analgesia multimodal— la recuperación es significativamente más tolerable. La mayoría de los pacientes refieren un malestar manejable, no un dolor insoportable.",
      },
      {
        question: "¿Una fístula anal se puede operar definitivamente?",
        answer:
          "Sí. La fistulotomía o fistulectomía es el tratamiento definitivo de la fístula anal. Para fístulas complejas que comprometen el esfínter, existen técnicas que preservan la continencia (colgajos de avance, LIFT). El Dr. Salazar evalúa la anatomía de cada fístula para elegir la técnica más adecuada.",
      },
      {
        question: "¿Cuándo debo consultar por síntomas anorrectales?",
        answer:
          "Ante cualquier sangrado rectal, dolor anal persistente, masa palpable en la región anal, secreción o cambio en los hábitos intestinales que se mantenga por más de 2 semanas. No postergar la consulta: el diagnóstico temprano hace el tratamiento más simple y efectivo.",
      },
    ],
    stats: [
      { label: "Alta el mismo día (procedimientos ambulatorios)", value: "Sí" },
      { label: "Hospitalización en cirugías mayores", value: "1-2 días" },
      { label: "Consulta confidencial", value: "Siempre" },
      { label: "Retorno a actividades", value: "1-3 sem" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getOtherServices(currentSlug: string): ServiceData[] {
  return SERVICES.filter((s) => s.slug !== currentSlug);
}
