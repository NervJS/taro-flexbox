import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { AlignContentProperty } from "csstype";
import clnx from "classnames";
import '../index.scss';

function AlignContent (props: AlignContentProps): JSX.Element {
  const list = [
    { class: ['brand_blue-bg3', 'width4'] },
    { class: ['brand_blue-bg2', 'width3'] },
    { class: ['brand_blue-bg1', 'width5'] },
    { class: ['brand_blue-bg2', 'width3'] },
    { class: ['brand_blue-bg1', 'width5'] },
    { class: ['brand_blue-bg2', 'width3'] },
    { class: ['brand_blue-bg3', 'width4'] }];
  return <View className={clnx(['flex', 'flex-wrap', 'brand_blue-bg_5', 'padding_10', 'min-height10'],
      process.env.TARO_ENV === 'rn' ? 'flex-column' : 'flex-row')}
    style={{
      alignContent: props.alignContent,
  }}>
    {list.map((e, i) => <View key={`${i}`} className={clnx([
      'flex', 'height2', 'margin_10', 'align-center'], e.class)}>
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