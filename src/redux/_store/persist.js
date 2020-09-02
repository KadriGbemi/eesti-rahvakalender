export function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem("state", serializedState);
  } catch (e) {
    return {};
  }
}

export function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");

    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (e) {
    return {};
  }
}
