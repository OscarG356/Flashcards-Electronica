export const flashcardsData = [
  // Ley de Ohm
  {
    id: 1,
    pregunta: "¿Cuál es la fórmula de la Ley de Ohm?",
    respuesta: "V = I × R\nDonde V es voltaje (volts), I es corriente (amperes) y R es resistencia (ohms)",
    categoria: "Leyes"
  },
  {
    id: 2,
    pregunta: "Si un circuito tiene 12V y 3A, ¿cuál es la resistencia?",
    respuesta: "R = V / I = 12V / 3A = 4Ω",
    categoria: "Leyes"
  },
  
  // Circuitos en Serie y Paralelo
  {
    id: 3,
    pregunta: "¿Cómo se calcula la resistencia total en un circuito en serie?",
    respuesta: "Rt = R1 + R2 + R3 + ...\nLa resistencia total es la suma de todas las resistencias",
    categoria: "Circuitos"
  },
  {
    id: 4,
    pregunta: "¿Cómo se calcula la resistencia total en un circuito en paralelo?",
    respuesta: "1/Rt = 1/R1 + 1/R2 + 1/R3 + ...\nPara dos resistencias: Rt = (R1 × R2) / (R1 + R2)",
    categoria: "Circuitos"
  },
  {
    id: 5,
    pregunta: "En un circuito en serie, ¿cómo se comporta la corriente?",
    respuesta: "La corriente es la misma en todos los componentes del circuito en serie",
    categoria: "Circuitos"
  },
  {
    id: 6,
    pregunta: "En un circuito en paralelo, ¿cómo se comporta el voltaje?",
    respuesta: "El voltaje es el mismo en todas las ramas paralelas",
    categoria: "Circuitos"
  },

  // Colores de Resistencias
  {
    id: 7,
    pregunta: "¿Qué representan los colores Negro, Marrón, Rojo en una resistencia?",
    respuesta: "Negro = 0, Marrón = 1, Rojo = 2\nEjemplo: Negro-Marrón-Rojo = 01 × 10² = 1000Ω = 1kΩ",
    categoria: "Resistencias"
  },
  {
    id: 8,
    pregunta: "¿Cuáles son los colores para los valores 3, 4, 5 en resistencias?",
    respuesta: "3 = Naranja, 4 = Amarillo, 5 = Verde",
    categoria: "Resistencias"
  },
  {
    id: 9,
    pregunta: "¿Qué significa una banda dorada en una resistencia?",
    respuesta: "La banda dorada indica una tolerancia del ±5%",
    categoria: "Resistencias"
  },
  {
    id: 10,
    pregunta: "¿Cuál es el valor de una resistencia Rojo-Rojo-Marrón-Oro?",
    respuesta: "22 × 10¹ = 220Ω con tolerancia ±5%",
    categoria: "Resistencias"
  },

  // Componentes Básicos
  {
    id: 11,
    pregunta: "¿Cuál es la función principal de un diodo?",
    respuesta: "Permitir el paso de corriente en una sola dirección (del ánodo al cátodo)",
    categoria: "Componentes"
  },
  {
    id: 12,
    pregunta: "¿Qué es un capacitor y cuál es su unidad de medida?",
    respuesta: "Un capacitor almacena energía eléctrica. Su unidad es el Faradio (F), comúnmente μF, nF, pF",
    categoria: "Componentes"
  },
  {
    id: 13,
    pregunta: "¿Cuáles son las tres terminales de un transistor BJT?",
    respuesta: "Base (B), Colector (C) y Emisor (E)",
    categoria: "Componentes"
  },
  {
    id: 14,
    pregunta: "¿Qué es un inductor y cuál es su unidad?",
    respuesta: "Un inductor almacena energía en un campo magnético cuando circula corriente. Su unidad es el Henrio (H)",
    categoria: "Componentes"
  },

  // Teoremas de Thevenin y Norton
  {
    id: 15,
    pregunta: "¿Qué establece el Teorema de Thevenin?",
    respuesta: "Cualquier red lineal con dos terminales puede reemplazarse por una fuente de voltaje (Vth) en serie con una resistencia (Rth)",
    categoria: "Teoremas"
  },
  {
    id: 16,
    pregunta: "¿Qué establece el Teorema de Norton?",
    respuesta: "Cualquier red lineal con dos terminales puede reemplazarse por una fuente de corriente (In) en paralelo con una resistencia (Rn)",
    categoria: "Teoremas"
  },
  {
    id: 17,
    pregunta: "¿Cómo se calcula la resistencia de Thevenin?",
    respuesta: "Se desactivan todas las fuentes independientes (voltaje = cortocircuito, corriente = circuito abierto) y se calcula la resistencia vista desde los terminales",
    categoria: "Teoremas"
  },

  // Potencia AC/DC
  {
    id: 18,
    pregunta: "¿Cuál es la fórmula de potencia en DC?",
    respuesta: "P = V × I = I²R = V²/R\nDonde P es potencia en watts",
    categoria: "Potencia"
  },
  {
    id: 19,
    pregunta: "¿Qué es la potencia aparente en AC?",
    respuesta: "S = V × I (en VA - voltamperios)\nEs la potencia total en un circuito AC",
    categoria: "Potencia"
  },
  {
    id: 20,
    pregunta: "¿Qué es el factor de potencia?",
    respuesta: "cos(φ) = P/S\nRelación entre potencia activa y potencia aparente en AC",
    categoria: "Potencia"
  },
  {
    id: 21,
    pregunta: "¿Cuál es la diferencia entre potencia activa y reactiva?",
    respuesta: "Potencia Activa (P): se convierte en trabajo útil (W)\nPotencia Reactiva (Q): se almacena y libera en campos magnéticos/eléctricos (VAR)",
    categoria: "Potencia"
  },

  // Adicionales
  {
    id: 22,
    pregunta: "¿Qué es la impedancia en AC?",
    respuesta: "Z = R + jX\nOposición total al flujo de corriente AC, incluye resistencia (R) y reactancia (X)",
    categoria: "AC"
  },
  {
    id: 23,
    pregunta: "¿Cuál es la frecuencia de la red eléctrica en España?",
    respuesta: "50 Hz (hercios)",
    categoria: "AC"
  },
  {
    id: 24,
    pregunta: "¿Qué significa LED y cuál es su principio de funcionamiento?",
    respuesta: "Light Emitting Diode (Diodo Emisor de Luz). Emite luz cuando los electrones se recombinan con huecos en el material semiconductor",
    categoria: "Componentes"
  }
];

export const categories = [
  "Todas",
  "Leyes",
  "Circuitos", 
  "Resistencias",
  "Componentes",
  "Teoremas",
  "Potencia",
  "AC"
];