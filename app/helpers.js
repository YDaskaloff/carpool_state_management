import {brands, types, issues} from './constants';

export const carGenerator = () => {
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const type = types[Math.floor(Math.random() * types.length)];
  const problem = issues[Math.floor(Math.random() * issues.length)];

  return {brand, type, problem};
};
