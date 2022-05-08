export function formatPkhString(pkh = "") {
  return pkh.substring(0, 5) + "..." + pkh.substring(pkh.length - 4);
}
