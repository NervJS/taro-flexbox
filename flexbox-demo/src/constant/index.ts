import Taro from "@tarojs/taro";

const info: Taro.getSystemInfoSync.Return = Taro.getSystemInfoSync();

export const windowWidth = info ? info.windowWidth : 1000;
export const screenWidth = info ? info.screenWidth : 1000;