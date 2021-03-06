import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import clnx from "classnames";
import '../index.scss';
import { windowWidth } from '../../../constant';
import { TStyle } from 'types/common';

function FlexShrink(): JSX.Element {
  return <View style={styles.root}>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>
          默认: 0 如果空间不足，该 flex 元素将缩小 负值对该属性无效
        </Text>
      </View>
      <View className={clnx(['flex', 'brand_blue-bg_5', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexShrink}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexShrink3}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>3</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexShrink1}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexShrink2}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>2</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexShrink3}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>3</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexShrink}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['flex', 'brand_blue-bg_5', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexShrink}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexShrink3}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>3</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexShrink1}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexShrink2}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>2</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>
          如果所 flex 元素的flex-shrink属性都为1，当空间不足时，都将等比例缩小
        </Text>
      </View>
      <View className={clnx(['flex', 'brand_blue-bg_5', 'padding_10', 'max-height15', 'flex-row'])}>
        {(new Array(8).fill('')).map((_e, i) => <View  key={`${i}`} className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexShrink1}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>)}
      </View>
    </View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>
          如果一个 flex 元素的flex-shrink属性为0，其他 flex 元素都为1，则空间不足时，前者不缩小
        </Text>
      </View>
      <View className={clnx(['flex', 'brand_blue-bg_5', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexShrink}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
        {(new Array(7).fill('')).map((_e, i) => <View key={`${i}`} className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexShrink1}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>)}
      </View>
    </View>
  </View>
}

FlexShrink.options = {
  addGlobalClass: true,
}

const styles: TStyle = {
  root: {
    width: process.env.TARO_ENV === 'h5' ? '100%' : windowWidth,
  },
  flexShrink: {
    flexShrink: 0,
  },
  flexShrink1: {
    flexShrink: 1,
  },
  flexShrink2: {
    flexShrink: 2,
  },
  flexShrink3: {
    flexShrink: 3,
  },
}

export default FlexShrink;