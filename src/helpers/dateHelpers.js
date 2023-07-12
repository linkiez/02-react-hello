export function getAgeFrom(birthDate) {
  const today = new Date();
  const birthDateAsDate = new Date(birthDate);
  let age = today.getFullYear() - birthDateAsDate.getFullYear();
  const monthDifference = today.getMonth() - birthDateAsDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDateAsDate.getDate())
  ) {
    age--;
  }
  return age;
}
