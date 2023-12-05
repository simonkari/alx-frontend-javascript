export const weakMap = new WeakMap();
let count = 1;

export function queryAPI(endPoint) {
  // Set or update the query count for the specified endpoint in the WeakMap.
  weakMap.set(endPoint, count);
  count += 1;
  // Get the current query count for the endpoint.
  const queryCount = weakMap.get(endPoint);
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
