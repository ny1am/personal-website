const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatDate(str: string) {
  return dateFormatter.format(new Date(str));
}
