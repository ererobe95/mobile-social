import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

//height percentage
const hp = (percentage: number): number => {
  return (percentage*deviceHeight) / 100
}

//width percentage
const wp = (percentage: number): number => {
  return (percentage*deviceWidth) / 100
}