export function createTranslator(dict: Record<string, string>) {
  return (key: string): string => {
    if (key in dict) {
      return dict[key as keyof typeof dict];
    }
    return key;
  };
}
