export default function appendToEachArrayValue(array, appendString) {
  const myarray = [];
  for (const idx of array) {
    const value = idx;
    myarray.push(appendString + value);
  }

  return myarray;
}
