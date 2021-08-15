export default (id: number) => {
  const newId = id.toString();

  if (newId.length === 1) return `00${newId}`;
  if (newId.length === 2) return `0${newId}`;
  return `${newId}`;
};
