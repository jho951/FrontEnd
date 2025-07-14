export function interpolate(template, variables) {
    return template.replace(/\{(\w+)\}/g, (match, key) => {
        return key in variables ? String(variables[key]) : match;
    });
}
