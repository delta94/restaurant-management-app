import firestore from '@react-native-firebase/firestore';

export const getFloorList = async (
  setFloorList: Function,
  setIsLoading: Function,
  restaurantID: string,
) => {
  setIsLoading(true);
  console.log('1224', restaurantID);
  firestore()
    .collection('floors')
    .where('restaurantID', '==', restaurantID)
    .onSnapshot((documentSnapshot) => {
      let result: { id: string; data: any }[] = [];
      documentSnapshot.forEach((document) => {
        result.push({
          id: document.id,
          data: document.data(),
        });
      });
      result.sort((a, b) => a.data.floor > b.data.floor);
      setFloorList(result);
      setIsLoading(false);
    });
};
