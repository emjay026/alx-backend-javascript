export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Invalid endpoint');
  }

  // Check if the endpoint is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0); // Initialize the count to 0 if it's a new endpoint
  }

  // Get the current count and increment it
  const currentCount = weakMap.get(endpoint);
  weakMap.set(endpoint, currentCount + 1);

  // Throw an error if the count is >= 5
  if (currentCount + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
