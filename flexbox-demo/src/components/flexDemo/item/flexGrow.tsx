import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import clnx from "classnames";
import '../index.scss';
import { TStyle } from 'types/common';

function FlexGrow(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>
          默认: 0 如果存在剩余空间，不放大
        </Text>
      </View>
      <View className={clnx(['flex', 'brand_blue-bg_5', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexGrow}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexGrow}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexGrow}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>0</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>
          如果所 flex 元素的flex-grow属性都为1，则它们将等分剩余空间(如果有的话)
        </Text>
      </View>
      <View className={clnx(['flex', 'brand_blue-bg_5', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexGrow1}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexGrow1}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexGrow1}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>
          如果一个 flex 元素的 flex-grow 属性为2，其他 flex 元素都为1，则前者占据的剩余空间将比其他项多一倍
        </Text>
      </View>
      <View className={clnx(['flex', 'brand_blue-bg_5', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexGrow1}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexGrow2}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>2</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexGrow1}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
        </View>
      </View>
    </View>
  </View>
}

FlexGrow.options = {
  addGlobalClass: true,
}

const styles: TStyle = {
  flexGrow: {
    flexGrow: 0,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  flexGrow2: {
    flexGrow: 2,
  },
}

export default FlexGrow;