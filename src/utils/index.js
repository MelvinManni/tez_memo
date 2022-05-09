export const CONTRACT_ADDRESS = "KT19reqmrieauywZK2SsJsxKyhYLscwfU4Qb";

export function formatPkhString(pkh = "") {
  return pkh.substring(0, 5) + "..." + pkh.substring(pkh.length - 4);
}
