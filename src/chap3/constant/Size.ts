export const Size = {
  TALL: 'TALL',
  GRANDE: 'GRANDE',
  VENTI: 'VENTI',
} as const;

export type Size = (typeof Size)[keyof typeof Size];
