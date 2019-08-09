import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { AlignItemsProperty } from "csstype";
import clnx from 'classnames';
import '../index.scss';

function AlignItems (props: AlignItemsProps): JSX.Element {
  const list = [
    { label: 1, class: ['pink-bg', 'height4'] },
    { label: 2, class: ['green-bg', 'height3'] },
    { label: 3, class: ['yellow-bg', 'height5'] }];
  return <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'min-height6', 'flex-row'])} style={{
    alignItems: props.alignItems,
  }}>
    {list.map((e, i) => <View key={`${i}`} className={clnx([
      'flex', 'width2', 'borderW', 'margin_10', 'align-center'] , props.alignItems === 'stretch' ? e.class[0] : e.class)} >
      <Text className={clnx([
        'white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center', 'height1', 'width1'])}>{e.label}</Text>
    </View>)}
  </View>
}

AlignItems.options = {
  addGlobalClass: true,
}

export default AlignItems;

export interface AlignItemsProps extends StandardProps {
  alignItems: AlignItemsProperty;
}