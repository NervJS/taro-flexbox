import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import JustifyContent from "./justifyContent";
import clnx from "classnames";
import '../index.scss';

function JustifyContentDemo(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>flex-start: 默认 左对齐</Text>
      </View>
      <JustifyContent justifyContent='flex-start' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>flex-end 右对齐</Text>
      </View>
      <JustifyContent justifyContent='flex-end' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>center 居中</Text>
      </View>
      <JustifyContent justifyContent='center' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>space-between 两端对齐，项目之间的间隔都相等</Text>
      </View>
      <JustifyContent justifyContent='space-between' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>space-around 每个项目两侧的间隔相等(所以，项目之间的间隔比项目与边框的间隔大一倍)</Text>
      </View>
      <JustifyContent justifyContent='space-around' />
    </View>
  </View>
}

JustifyContentDemo.options = {
  addGlobalClass: true,
}

export default JustifyContentDemo;
