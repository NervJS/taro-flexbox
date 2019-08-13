import Taro from '@tarojs/taro';
import { ScrollView, View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import { FlexWrapProperty } from "csstype";
import clnx from "classnames";
import '../index.scss';
import { windowWidth } from '../../../constant';
import { TStyle } from 'types/common';

function FlexWrap (props: FlexWrapProps): JSX.Element {
  const list = new Array(9).fill('');
  const isBlock: boolean = process.env.TARO_ENV === 'rn' && props.flexWrap === 'wrap-reverse';
  return <ScrollView scrollX className={clnx(['blue-bg3'])} style={styles.root}>
    <View className={clnx(['flex', 'padding_10', 'max-height15', 'flex-row'])} style={Object.assign(isBlock ? {} : {
      flexWrap: props.flexWrap,
    }, styles.root)}>
      {list.map((_e, i) => <View key={`${i}`} className={clnx([
        'flex', 'height2', 'width2', 'borderW', 'blue-bg2', 'margin_10', 'align-center', 'padding_10', 'flex-shrink_0'])}>
        <Text className={clnx([
          'white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center', 'height1', 'width1'])}>{i * 1 + 1}</Text>
      </View>)}
    </View>
  </ScrollView>
}

FlexWrap.options = {
  addGlobalClass: true,
}

const styles: TStyle = {
  root: {
    width: process.env.TARO_ENV === 'h5' ? '100%' : windowWidth,
  },
}

export default FlexWrap;

export interface FlexWrapProps extends StandardProps {
  flexWrap: FlexWrapProperty;
}