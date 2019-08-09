import Taro from "@tarojs/taro";

const info: Taro.getSystemInfoSync.Return = Taro.getSystemInfoSync();

export const windowWidth = info.windowWidth;
export const screenWidth = info.screenWidth;