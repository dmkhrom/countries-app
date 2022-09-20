const persistDataServices = () => {
  const setToStorage = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const getStorageValue = <T>(key: string, initialValue: T): T => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialValue;
  };

  return { setToStorage, getStorageValue };
};

export default persistDataServices;
