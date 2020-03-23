import AsyncStorage from '@react-native-community/async-storage';

export const setData = async (keyName: string, data: string): Promise<any> => {
  try {
    await AsyncStorage.setItem(keyName, data);
  } catch (e) {
    console.log(e);

    throw new Error(e);
  }
};

export const getData = async (keyName: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(keyName);
    return value;
  } catch (e) {
    console.log(e);

    throw new Error(e);
  }
};

export const mergeData = async (
  keyName: string,
  body: string,
): Promise<void> => {
  try {
    // console.log(body);
    await AsyncStorage.mergeItem(keyName, body);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const removeData = async (keyName: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(keyName);
  } catch (e) {
    // remove error
    console.log(e);
    throw new Error(e);
  }
};
