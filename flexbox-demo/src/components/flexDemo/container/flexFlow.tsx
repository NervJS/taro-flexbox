import Taro from '@tarojs/taro';
import { ScrollView, View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { FlexFlowProperty } from "csstype";
import clnx from "classnames";
import '../index.scss';

function FlexFlow (props: FlexFlowProps): JSX.Element {
  const list = new Array(9).fill('');
  return <ScrollView scrollX scrollY className={clnx(['brand_blue-bg_5'])}>
    <View className={clnx(['flex', 'padding_10', 'max-height15', 'flex-row', 'scroll'])} style={{
      flexFlow: props.flexFlow,
    }}>
      {list.map((_e, i) => <View key={`${i}`} className={clnx([
        'flex', 'height2', 'width2', 'brand_blue-bg', 'margin_10', 'align-center', 'padding_10', 'flex-shrink_0'])}>
        <Text className={clnx([
          'cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center', 'height1', 'width1'])}>{i * 1 + 1}</Text>
      </View>)}
    </View>
  </ScrollView>
}

FlexFlow.options = {
  addGlobalClass: true,
}

export default FlexFlow;

export interface FlexFlowProps extends StandardProps {
  flexFlow: FlexFlowProperty;
}
