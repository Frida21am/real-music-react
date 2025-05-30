"use client";

import { useState, useEffect } from "react";

function useLocalStorage(initialValue: string[], key: string) {
  const getValue = () => {
    if (typeof window == "undefined") {
      return [];
    } else {
      const storage = localStorage.getItem(key);
      if (storage) {
        return JSON.parse(storage);
      }
      return initialValue;
    }
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
