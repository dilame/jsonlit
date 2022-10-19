export function jsonLit(strings: TemplateStringsArray, ...args: any[]) {
  let totalElements = strings.length + args.length;
  let intertwined = new Array(totalElements);

  for (let i = 0, j = 0; i < args.length; j += 2, i++) {
    intertwined[j] = strings[i];
    if (Array.isArray(args[i])) {
      intertwined[j + 1] = JSON.stringify(args[i]);
    } else {
      intertwined[j + 1] = JSON.stringify(args[i], null, 2);
    }
  }

  intertwined[totalElements - 1] = strings[strings.length - 1];

  return intertwined.join('');
}
