export const phoneMask = () => {
  return {
    regex: /(\d*)/,
    pattern: (match, p1, string) => {
      return `${val(p1)}`;
    },
  };
}

function regex (string) {
  return new RegExp(string);
}

function val(p) {
  const len = p.length;
  let str;
  if (len > 0 && len <= 3) {
    return p.replace(regex(`(\\d{${len}})`), ' ($1)');
  }
  if (len > 3 && len <= 6) {
    return p.replace(regex(`(\\d{3})(\\d{${len - 3}})`), ' ($1) $2');
  }
  if (len > 6 && len <= 8) {
    return p.replace(regex(`(\\d{3})(\\d{3})(\\d{${len - 6}})`), ' ($1) $2-$3');
  }
  if (len > 8 && len <= 10) {
    return p.replace(regex(`(\\d{3})(\\d{3})(\\d{2})(\\d{${len - 8}})`), ' ($1) $2-$3-$4');
  }
  return p;
}
