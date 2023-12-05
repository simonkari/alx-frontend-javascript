export const weakMap = new WeakMap();
let count = 1;

export function queryAPI(endPoint) {
  // Set or update the query count for the specified endpoint in the WeakMap.
  weakMap.set(endPoint, count);
  
  // Increment the global query count.
  count += 1;

  // Get the current query count for the endpoint.
  const queryCount = weakMap.get(endPoint);

  // Check if the query count exceeds the threshold (5).
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
