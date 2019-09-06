import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import PlaceContent from "./placeContent";
import NotSupport from '../NotSupport';
import clnx from "classnames";
import '../index.scss';

function PlaceContentDemo(): JSX.Element {
  if (process.env.TARO_ENV === 'rn') {
    return <View className={clnx(['margin_box'])}>
      <NotSupport />
    </View>;
  }
  return <View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>位置对齐</Text>
      </View>
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>align-content 属性不接受 left 和 right 值</Text>
      </View>
      <PlaceContent placeContent='center start' />
      <PlaceContent placeContent='start center' />
      <PlaceContent placeContent='end left' />
      <PlaceContent placeContent='flex-start center' />
      <PlaceContent placeContent='flex-end center' />
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>基线对齐</Text>
      </View>
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>justify-content 属性不接受 baseline 值</Text>
      </View>
      <PlaceContent placeContent='baseline center' />
      <PlaceContent placeContent='first baseline space-evenly' />
      <PlaceContent placeContent='last baseline right' />
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>分散对齐</Text>
      </View>
      <PlaceContent placeContent='space-between space-evenly' />
      <PlaceContent placeContent='space-around space-evenly' />
      <PlaceContent placeContent='space-evenly stretch' />
      <PlaceContent placeContent='stretch space-evenly' />
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>全局值</Text>
      </View>
      <PlaceContent placeContent='inherit' />
      <PlaceContent placeContent='initial' />
      <PlaceContent placeContent='unset' />
    </View>
  </View>
}

PlaceContentDemo.options = {
  addGlobalClass: true,
}

export default PlaceContentDemo;
