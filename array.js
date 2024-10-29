export function analyzeArray(array) {
  let properties = {
    average: 0,
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER,
    length: 0,
  };

  let total = 0;

  array.forEach((e) => {
    properties.length++;
    total++;
    properties.max = (e < properties.max) ? e : properties.max;
    properties.min = (e > properties.min) ? e : properties.min;
  });

  properties.average = total/properties.length;

  return properties;
}
