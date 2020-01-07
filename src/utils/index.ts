// import * as Font from 'expo-font';

// export const fetchFonts = () => {
//   return Font.loadAsync({
//     'gibson-bold': require('../../assets/fonts/gibson-bold.ttf'),
//     'gibson-regular': require('../../assets/fonts/gibson-regular.ttf')
//   });
// }

const pad = (n:number, width: number, z: number = 0) => 
  n.toString().length >= width ? 
    n : 
    new Array(width - n.toString().length + 1).join(z.toString()) + n;

export const minutesAndSeconds = (position: number) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
]);