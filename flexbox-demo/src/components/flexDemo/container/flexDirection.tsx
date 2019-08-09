import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { FlexDirectionProperty } from "csstype";
import clnx from "classnames";
import '../index.scss';

function FlexDirection (props: FlexDirectionProps): JSX.Element {
  const list = [
    { class: ['pink-bg'] },
    { class: ['green-bg'] },
    { class: ['yellow-bg'] },
  ];
  return <View className={clnx(['flex', 'blue-bg3', 'padding_10'])} style={{
    flexDirection: props.flexDirection,
  }}>
    {list.map((e, i) => <View key={`${i}`} className={clnx([
      'flex', 'height2', 'width2', 'borderW', 'margin_10', 'align-center'], e.class)}>
      <Text className={clnx([
        'white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center', 'height1', 'width1'])}>
        {i * 1 + 1}
      </Text>
    </View>)}
  </View>
}

FlexDirection.options = {
  addGlobalClass: true,
}

export default FlexDirection;

export interface FlexDirectionProps extends StandardProps {
  flexDirection: FlexDirectionProperty;
}
