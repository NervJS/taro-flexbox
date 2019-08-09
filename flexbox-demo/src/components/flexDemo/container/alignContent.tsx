import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { AlignContentProperty } from "csstype";
import clnx from "classnames";
import '../index.scss';

function AlignContent (props: AlignContentProps): JSX.Element {
  const list = [
    { class: ['pink-bg', 'width4'] },
    { class: ['green-bg', 'width3'] },
    { class: ['yellow-bg', 'width5'] },
    { class: ['green-bg', 'width3'] },
    { class: ['yellow-bg', 'width5'] },
    { class: ['green-bg', 'width3'] },
    { class: ['pink-bg', 'width4'] }];
  return <View className={clnx(['flex', 'flex-wrap', 'blue-bg3', 'padding_10', 'min-height10'],
      process.env.TARO_ENV === 'rn' ? 'flex-column' : 'flex-row')}
    style={{
      alignContent: props.alignContent,
  }}>
    {list.map((e, i) => <View key={`${i}`} className={clnx([
      'flex', 'height2', 'borderW', 'margin_10', 'align-center'], e.class)}>
      <Text className={clnx([
        'white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center', 'height1', 'width1'])}>{i * 1 + 1}</Text>
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