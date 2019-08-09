import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import FlexWrap from "./flexWrap";
import NotSupport from '../NotSupport';
import clnx from "classnames";
import '../index.scss';

function FlexWrapDemo(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>nowrap: 默认 不换行</Text>
      </View>
      <FlexWrap flexWrap='nowrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>wrap 换行，第一行在上方</Text>
      </View>
      <FlexWrap flexWrap='wrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>wrap-reverse 换行，第一行在下方 (RN 不支持)</Text>
      </View>
      {process.env.TARO_ENV === 'rn' ?
        <NotSupport /> : <FlexWrap flexWrap='wrap-reverse' />
      }
    </View>
  </View>
}

FlexWrapDemo.options = {
  addGlobalClass: true,
}

export default FlexWrapDemo;
