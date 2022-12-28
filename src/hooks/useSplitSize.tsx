"use client"

import { useLocalStorage } from '@mantine/hooks';

export function useSplitSize() {
  const [splitSize, setSplitSize] = useLocalStorage<number>({
    key: 'split-size',
    defaultValue: 50,
  });


  return { splitSize, setSplitSize };
}