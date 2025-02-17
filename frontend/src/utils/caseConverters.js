export const camelToSnakeCase = (str) => {
  if (typeof str !== 'string') return str;
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
};

export const convertKeysToSnakeCase = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;
  
  return Object.keys(obj).reduce((acc, key) => {
    const snakeKey = typeof key === 'string' ? camelToSnakeCase(key) : key;
    acc[snakeKey] = obj[key];
    return acc;
  }, {});
};
