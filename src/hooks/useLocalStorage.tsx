"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useLocalStorage<T>(initialValue: T, key: string): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initialValue);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        setValue(JSON.parse(stored) as T);
      } catch {
        localStorage.removeItem(key);
      }
    }
    setLoaded(true);
  }, [key]);

  useEffect(() => {
    if (loaded) localStorage.setItem(key, JSON.stringify(value));
  }, [value, key, loaded]);

  return [value, setValue];
}

export default useLocalStorage;
