export const saveStateToLocalStorage = (products) => {
  localStorage.setItem('favoriteProducts', JSON.stringify(products))
}
