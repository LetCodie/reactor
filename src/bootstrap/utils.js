export function classify(v) {
  if(v[0]==='-') v = ` ${v}`;
  let value = v.split(' ').join(` btn`);
  return `btn${value}`;
}
