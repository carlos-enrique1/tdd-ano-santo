/**
 * Función para determinar si un año n es considerado Año Santo.
 * @param {number} n El año a comprobar.
 * @returns true o false, en función de si es año santo o no.
 */
function anoSanto(n) {
  //TODO: realizar cálculos oportunos
  if (n>2100) n-=12;
  while (n>2038) {
     n-= 28;
}
  while (n<1971) {
    n+=28;
  }
  if (n==1909) return true;
  if (n==1915) return true;
  if (n==1920) return true;
  if (n==1926) return true;
  if (n==1971) return true;
  if (n==1937) return true;
  if (n==1943) return true;
  if (n==1948) return true;
  if (n==1954) return true;
  if (n==1965) return true;
  if (n==1971) return true;
  if (n==1976) return true;
  if (n==1982) return true;
  if (n==1993) return true;
  if (n==1999) return true;
  if (n==2004) return true;
  if (n==2010) return true;
  if (n==2011) ;
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
  if (n==2108) ;
  if (n==2109) ;
  if (n==2110) ;
  if (n==2111) ;
  if (n==2117) return true;
  if (n==2123) return true;
  if (n==2128) return true;
  if (n==2134) return true;
  if (n==2145) return true;
  if (n==3002) return true;

  return false;
}

export {
  anoSanto
}
