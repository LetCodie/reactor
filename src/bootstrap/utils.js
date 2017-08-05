export function classify(k, v) {
  v = ` ${v}`;
  let value = v.split(' ').map( (val) => {
    if( val[0]==='-' ) return `${k}${val}`;
    else return val;
  }).join(" ");

  return `${k} ${value}`;
}
