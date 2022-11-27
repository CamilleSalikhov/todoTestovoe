const getLocalStorage = () => {

    try {
        const persistState = localStorage.getItem('MY_APP_STATE');
        if (persistState === null) {
          return undefined;
        }
        return JSON.parse(persistState);
      } catch (err) {
        return undefined;
      }

}

const setLocalStorage = (state) => {
    try {
        const persistState = JSON.stringify(state);
        localStorage.setItem('MY_APP_STATE', persistState);
      } catch {
        return undefined;
      }
  }

  export {getLocalStorage, setLocalStorage}