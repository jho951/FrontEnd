export function interpolate(
  template: string,
  variables: { [key: string]: string | number },
): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return key in variables ? String(variables[key]) : match;
  });
}
