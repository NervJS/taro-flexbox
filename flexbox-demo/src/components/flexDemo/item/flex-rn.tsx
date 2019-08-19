import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import clnx from "classnames";
import '../index.scss';
import { TStyle } from 'types/common';

function Flex(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>
          默认: 0 1 auto (后两个属性可选) 该属性有两个快捷值: auto (1 1 auto) 和 none (0 0 auto) 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。(RN 只支持数字)
        </Text>
      </View>
      <View className={clnx(['flex', 'brand_blue-bg_5', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flex}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flex}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['flex', 'brand_blue-bg_5', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flex_0}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flex_0}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['flex', 'brand_blue-bg_5', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flex_0}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flex_0}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flex}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flex}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
      </View>
    </View>
  </View>
}

Flex.options = {
  addGlobalClass: true,
}

const styles: TStyle = {
  flex: {
    flex: 1,
  },
  flex_0: {
    flex: 0,
  },
}

export default Flex;
