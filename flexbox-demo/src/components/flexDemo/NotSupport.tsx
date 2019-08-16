import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { StandardProps } from "@tarojs/components/types/common";
import clnx from "classnames";
import './index.scss';

function NotSupport(): JSX.Element {
  return <View className={clnx(['padding1', 'brand_blue-bg_5'])}>
  <Text className={clnx(['font-size_75', 'cream', 'text_center'])}>当前环境不支持</Text>
</View>
}

export interface NotSupportProps extends StandardProps {}

NotSupport.options = {
  addGlobalClass: true,
}

export default NotSupport;