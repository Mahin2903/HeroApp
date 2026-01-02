const STORAGE_KEY = "readList";

const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem(STORAGE_KEY);
  return storedAppSTR ? JSON.parse(storedAppSTR) : [];
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();

  if (storedAppData.includes(id)) {
    alert("Already added");
  } else {
    storedAppData.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedAppData));
  }
};

const removeStoredApp = (id) => {
  const storedApps = getStoredApp()
    .map(Number)             
    .filter(appId => appId !== Number(id));

  localStorage.setItem(STORAGE_KEY, JSON.stringify(storedApps));
};

export { addToStoredDB, getStoredApp, removeStoredApp };