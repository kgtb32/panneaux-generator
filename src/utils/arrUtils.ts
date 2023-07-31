export function updateInArray<T>(
  arr: Array<T>,
  index: number,
  newValue: T
): Array<T> {
  arr[index] = newValue;
  return [...arr];
}
