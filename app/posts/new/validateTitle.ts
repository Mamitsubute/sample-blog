export function validateTitle(title: string): string {
  if (title.length >= 30) {
    return 'Title must be less than 30 characters.';
  }
  return '';
}
