import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { PlaceContentProperty } from "csstype";
import clnx from "classnames";
import '../index.scss';

function PlaceContent (props: PlaceContentProps): JSX.Element {
  const list = new Array(12).fill('');
  return <View>
    <View className={clnx(['padding1', 'yellow-bg1'])}>
      <Text className={clnx(['font-size_75', 'black2', 'italic'])}>{props.placeContent}</Text>
    </View>
    <View className={clnx(['flex', 'flex-wrap', 'flex-column', 'brand_blue-bg_5', 'padding_10', 'height12'])}
      style={{
        placeContent: props.placeContent,
    }}>
      {list.map((_e, i) => <View key={`${i}`} className={clnx([
        'flex', 'height2', 'width2', 'margin_10', 'brand_blue-bg2', 'align-center'])}>
        <Text className={clnx([
          'cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center', 'height1', 'width1'])}>{i * 1 + 1}</Text>
      </View>)}
    </View>
  </View>
}

PlaceContent.options = {
  addGlobalClass: true,
}

export default PlaceContent;

export interface PlaceContentProps extends StandardProps {
  placeContent: PlaceContentProperty;
}
