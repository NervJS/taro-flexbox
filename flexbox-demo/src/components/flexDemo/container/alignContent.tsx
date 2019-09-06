import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { AlignContentProperty } from "csstype";
import clnx from "classnames";
import '../index.scss';

function AlignContent (props: AlignContentProps): JSX.Element {
  const list = new Array(12).fill('');
  return <View className={clnx(['flex', 'flex-wrap', 'flex-column', 'brand_blue-bg_5', 'padding_10', 'height12'])}
    style={{
      alignContent: props.alignContent,
  }}>
    {list.map((_e, i) => <View key={`${i}`} className={clnx([
      'flex', 'height2', 'width2', 'margin_10', 'brand_blue-bg2', 'align-center'])}>
      <Text className={clnx([
        'cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center', 'height1', 'width1'])}>{i * 1 + 1}</Text>
    </View>)}
  </View>
}

AlignContent.options = {
  addGlobalClass: true,
}

export default AlignContent;

export interface AlignContentProps extends StandardProps {
  alignContent: AlignContentProperty;
}