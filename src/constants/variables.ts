export const pathOptions = [
{

  ternary: new Set<string>(["Semestre", "Modalidad", "Estrato socioeconómico"]),
  path: 'sme'
},
{
  ternary: new Set<string>(["Carrera universitaria", "Modalidad", "Estrato socioeconómico"]),
  path: 'pme'
},
{
  ternary: new Set<string>(["Carrera universitaria","Semestre", "Modalidad"]),
  path: 'psm'
},
{
  ternary: new Set<string>(["Carrera universitaria","Semestre", "Estrato socioeconómico"]),
  path: 'pse'
}

]
