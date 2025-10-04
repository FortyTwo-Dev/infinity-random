import { ref, type Ref } from 'vue';

export function getRandomNumberBetween(min: Ref<number>, max: Ref<number>): number {
  const range = max.value - min.value + 1;
  const bytesNeeded = Math.ceil(Math.log2(range) / 8);
  const randomBytes = new Uint8Array(bytesNeeded);

  if (typeof window !== 'undefined' && window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(randomBytes);
  } else {
    throw new Error("The crypto API is not available in this environment.");
  }

  let randomValue = 0;
  for (let i = 0; i < bytesNeeded; i++) {
    randomValue = (randomValue << 8) | randomBytes[i];
  }
  
  return min.value + (randomValue % range);
}