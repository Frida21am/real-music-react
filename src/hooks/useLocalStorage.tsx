"use client";

import { useState, useEffect } from "react";

function useLocalStorage(
  initialValue: string[],
  key: string
): [string[], (val: string[]) => void] {
  const [value, setValue] = useState<string[]>(initialValue);

  // Загружаем значение из localStorage только на клиенте
  useEffect(() => {
    const storage = localStorage.getItem(key);
    if (storage) {
      try {
        setValue(JSON.parse(storage));
      } catch (e) {
        console.error("Ошибка при разборе localStorage:", e);
      }
    }
  }, [key]);

  // Сохраняем значение в localStorage при изменении
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
