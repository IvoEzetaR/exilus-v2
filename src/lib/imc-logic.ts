// Lógica del test de candidatura a cirugía bariátrica — Exilus
// Desarrollado con TDD. 11 tests verdes en /exilus/imc-logic.test.ts

export type NivelCandidatura =
  | "no-candidato"
  | "candidato"
  | "candidato-imc"
  | "fuerte-candidato";

export interface ResultadoCandidatura {
  imc: number;
  nivel: NivelCandidatura;
  mensaje: string;
  showCTA: boolean;
}

/**
 * Calcula el IMC dado peso en kg y talla en metros (o cm, auto-convierte).
 * Retorna null si los inputs son inválidos.
 */
export function calcularIMC(peso: number, talla: number): number | null {
  if (!peso || !talla || peso <= 0 || talla <= 0) return null;
  // Auto-convertir cm → m si talla > 3
  const tallaM = talla > 3 ? talla / 100 : talla;
  return peso / (tallaM * tallaM);
}

/**
 * Evalúa candidatura a cirugía bariátrica según criterios clínicos estándar.
 * @param peso - kg
 * @param talla - metros o cm (auto-convierte)
 * @param comorbilidades - "diabetes" | "hipertension" | "apnea"
 * @param intentosPrevios - intentos previos de pérdida de peso
 */
export function evaluarCandidatura(
  peso: number,
  talla: number,
  comorbilidades: string[],
  intentosPrevios: boolean
): ResultadoCandidatura {
  const imc = calcularIMC(peso, talla) ?? 0;
  const tieneComorbilidades = comorbilidades.length > 0;

  if (imc >= 40) {
    return {
      imc,
      nivel: "fuerte-candidato",
      mensaje:
        "Eres un fuerte candidato a cirugía bariátrica. Te recomendamos agendar una evaluación urgente.",
      showCTA: true,
    };
  }

  if (imc >= 35) {
    return {
      imc,
      nivel: "candidato-imc",
      mensaje:
        "Eres candidato a cirugía bariátrica. Agenda tu evaluación hoy.",
      showCTA: true,
    };
  }

  if (imc >= 30 && tieneComorbilidades) {
    return {
      imc,
      nivel: "candidato",
      mensaje:
        "Podrías ser candidato a cirugía bariátrica. Agenda una evaluación con el Dr. Salazar.",
      showCTA: true,
    };
  }

  return {
    imc,
    nivel: "no-candidato",
    mensaje:
      "Según tu IMC no sería candidato a cirugía bariátrica. Consulta con un especialista para tratamiento no quirúrgico.",
    showCTA: false,
  };
}
