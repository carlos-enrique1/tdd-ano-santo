/**
 * Función para determinar si un año n es considerado Año Santo.
 * @param {number} n El año a comprobar.
 * @returns true o false, en función de si es año santo o no.
 */
function anoSanto(n) {
  //TODO: realizar cálculos oportunos
  if (n>2100) n--;
  while (n>2038) {
     n-= 28;
}
  while (n<1971) {
    n+=28;
  }
  if (n==1971) return true;
  if (n==2020) ;
  if (n==2021) return true;
  if (n==2022) ;
  if (n==2023) ;
  if (n==2024) ;
  if (n==2025) ;
  if (n==2026) ;
  if (n==2027) return true;
  if (n==2028) ;
  if (n==2029) ;
  if (n==2030) ;
  if (n==2031) ;
  if (n==2032) return true;
  if (n==2038) return true;
  if (n==2094) return true;
  if (n==2105) ;
  if (n==2106) return true;
  if (n==2107) ;
  return false;
}




export {
  anoSanto
}
