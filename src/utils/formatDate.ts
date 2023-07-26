export function formatDate(input: string, onlyYear: boolean = false) {
  const date = new Date(input);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);

  if (onlyYear) {
    return `${year}`;
  } else {
    `${day} ${month} ${year}`;
  }
}
