
export const setItem = async ( key: string, value: string ) => {
    try {
      localStorage.setItem( key, value );
    } catch (e) {
      // saving error
    }
}

export const setItemObject = async ( key: string, value: any ) => {
    try {
      const jsonValue = JSON.stringify( value );
      localStorage.setItem( key, jsonValue );
    } catch (e) {
      // saving error
    }
}

export const getItem = async ( key: string ) => {
    try {
      const value = localStorage.getItem( key );
      return value ?? null;
    } catch(e) {
      // error reading value
    }
}

export const getItemObject = async ( key: string ) => {
  try {
    const value = localStorage.getItem( key );
    return value ? JSON.parse(value) : null;
  } catch(e) {
    // error reading value
  }
}

export const removeItem = async ( key: string ) => {
  try {
    localStorage.removeItem( key );
  } catch(e) {
    // error reading value
  }
}
 

export const cleanStorage = async () => {
  try {
    localStorage.clear();
  } catch(e) {
    // error reading value
  }
}