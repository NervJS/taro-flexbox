import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import FlexFlow from "./flexFlow";
import NotSupport from '../NotSupport';
import clnx from "classnames";
import '../index.scss';

function FlexFlowDemo(): JSX.Element {
  if (process.env.TARO_ENV === 'rn' || process.env.TARO_ENV === 'quickapp') {
    return <View className={clnx(['margin_box'])}>
      <NotSupport />
    </View>;
  }
  return <View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>row nowrap: 默认</Text>
      </View>
      <FlexFlow flexFlow='row nowrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>row wrap</Text>
      </View>
      <FlexFlow flexFlow='row wrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>row wrap-reverse</Text>
      </View>
      <FlexFlow flexFlow='row wrap-reverse' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>row-reverse nowrap</Text>
      </View>
      <FlexFlow flexFlow='row-reverse nowrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>row-reverse wrap</Text>
      </View>
      <FlexFlow flexFlow='row-reverse wrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>row-reverse wrap-reverse</Text>
      </View>
      <FlexFlow flexFlow='row-reverse wrap-reverse' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>column nowrap</Text>
      </View>
      <FlexFlow flexFlow='column nowrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>column wrap</Text>
      </View>
      <FlexFlow flexFlow='column wrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>column wrap-reverse</Text>
      </View>
      <FlexFlow flexFlow='column wrap-reverse' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>column-reverse nowrap</Text>
      </View>
      <FlexFlow flexFlow='column-reverse nowrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>column-reverse wrap</Text>
      </View>
      <FlexFlow flexFlow='column-reverse wrap' />
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>column-reverse wrap-reverse</Text>
      </View>
      <FlexFlow flexFlow='column-reverse wrap-reverse' />
    </View>
  </View>
}

FlexFlowDemo.options = {
  addGlobalClass: true,
}

export default FlexFlowDemo;
