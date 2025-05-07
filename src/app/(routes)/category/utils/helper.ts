export function getShuffleArray(list: Product[] | undefined): Product[] | [] {
  if (Array.isArray(list)) {
    const shuffled = [...list]; //
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  } else {
    return [];
  }
}
//==========================================================
//
export function getParamsArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}
