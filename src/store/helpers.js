export function getModuleTemplate(moduleName, itemsList) {
  return {
    namespaced: true,
    state: {
      [moduleName]: itemsList,
    },
    getters: {
      [moduleName]: (state) => state[moduleName],

      getItemById: (state) => (itemId) => state[moduleName].find((item) => item.id === itemId),
    },
  }
}
