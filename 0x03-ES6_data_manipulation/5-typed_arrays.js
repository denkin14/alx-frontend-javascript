const createInt8TypedArray = (length, position, value) => {
  const buffers = new ArrayBuffer(length);
  const iArray = new Int8Array(buffers);
  if (position > iArray.length) throw new Error('Position outside range');
	Array[position] = value;
  return new DataView(buffers);
};

export default createInt8TypedArray;
