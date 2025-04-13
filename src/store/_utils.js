export const saveStateToLocalStorage = (products, key) => {
  localStorage.setItem(key, JSON.stringify(products))
}
