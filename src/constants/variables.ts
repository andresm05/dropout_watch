export const pathOptions = [
{

  ternary: new Set<string>(["Créditos acumulados", "Modalidad", "Estrato socioeconómico"]),
  path: 'sme'
},
{
  ternary: new Set<string>(["Carrera universitaria", "Modalidad", "Estrato socioeconómico"]),
  path: 'pme'
},
{
  ternary: new Set<string>(["Carrera universitaria","Créditos acumulados", "Modalidad"]),
  path: 'psm'
},
{
  ternary: new Set<string>(["Carrera universitaria","Créditos acumulados", "Estrato socioeconómico"]),
  path: 'pse'
}

]
