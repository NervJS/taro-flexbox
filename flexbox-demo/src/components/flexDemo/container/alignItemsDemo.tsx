import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import AlignItems from './alignItems';
import NotSupport from '../NotSupport';
import clnx from "classnames";
import '../index.scss';

function AlignItemsDemo (): JSX.Element {
  return <View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>stretch: 默认 如果项目未设置高度或设为auto，将占满整个容器的高度</Text>
      </View>
      <AlignItems alignItems='stretch' />
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>flex-start 交叉轴的起点对齐</Text>
      </View>
      <AlignItems alignItems='flex-start' />
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>flex-end 交叉轴的终点对齐</Text>
      </View>
      <AlignItems alignItems='flex-end' />
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>center 交叉轴的中点对齐</Text>
      </View>
      <AlignItems alignItems='center' />
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>baseline 项目的第一行文字的基线对齐 (RN/快应用 不支持)</Text>
      </View>
      {process.env.TARO_ENV === 'rn' || process.env.TARO_ENV === 'quickapp' ?
        <NotSupport /> : <AlignItems alignItems='baseline' />
      }
    </View>
  </View>
}

AlignItemsDemo.options = {
  addGlobalClass: true,
}

export default AlignItemsDemo;
