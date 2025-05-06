export function oklch(color: string, opacity = 1) {
  opacity = Math.max(0, opacity);

  return `oklch(${color} / ${opacity})`;
}
