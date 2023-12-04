export function backgroundTimeChecker(colour1, colour2) {
  const currentTime = new Date().getHours();

  const colour = currentTime >= 8 && currentTime < 18 ? colour1 : colour2;

  return colour;
}
