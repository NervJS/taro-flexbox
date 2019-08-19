import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import AlignContent from "./alignContent";
// import NotSupport from '../NotSupport';
import clnx from "classnames";
import '../index.scss';

function AlignContentDemo (): JSX.Element {
  // if (process.env.TARO_ENV === 'rn') {
  //   return <View className={clnx(['margin_box'])}>
  //     <NotSupport />
  //   </View>;
  // }
  return <View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>stretch: 默认 轴线占满整个交叉轴</Text>
      </View>
      <AlignContent alignContent='stretch' />
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>flex-start 与交叉轴的起点对齐</Text>
      </View>
      <AlignContent alignContent='flex-start' />
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>flex-end 与交叉轴的终点对齐</Text>
      </View>
      <AlignContent alignContent='flex-end' />
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>center 与交叉轴的中点对齐</Text>
      </View>
      <AlignContent alignContent='center' />
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>space-between 与交叉轴两端对齐，轴线之间的间隔平均分布</Text>
      </View>
      <AlignContent alignContent='space-between' />
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>space-around 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍</Text>
      </View>
      <AlignContent alignContent='space-around' />
    </View>
  </View>
}

AlignContentDemo.options = {
  addGlobalClass: true,
}

export default AlignContentDemo;