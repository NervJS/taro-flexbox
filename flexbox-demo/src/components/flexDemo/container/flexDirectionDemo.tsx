import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import FlexDirection from './flexDirection';
import clnx from "classnames";
import '../index.scss';

function FlexDirectionDemo(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>row: 默认 主轴为水平方向，起点在左端</Text>
      </View>
      <FlexDirection flexDirection='row' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>row-reverse 主轴为水平方向，起点在右端</Text>
      </View>
      <FlexDirection flexDirection='row-reverse' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>column 主轴为垂直方向，起点在上沿</Text>
      </View>
      <FlexDirection flexDirection='column' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>column-reverse 主轴为垂直方向，起点在下沿</Text>
      </View>
      <FlexDirection flexDirection='column-reverse' />
    </View>
  </View>
}

FlexDirectionDemo.options = {
  addGlobalClass: true,
}

export default FlexDirectionDemo;
