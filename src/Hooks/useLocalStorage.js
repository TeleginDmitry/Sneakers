import React, { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  function localFunction() {
    const checkStorage = localStorage.getItem(key);

    if (checkStorage) {
      return JSON.parse(checkStorage);
    }

    return initialValue;
  }

  const [value, setValue] = useState(localFunction);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}


export default useLocalStorage