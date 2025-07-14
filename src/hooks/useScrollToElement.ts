export const scrollToElement = (element: HTMLDivElement, offset?: number) => {
  if (!offset) {
    offset = 0;
  }
  const elementPosition = element.offsetTop;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};
