import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import clnx from "classnames";
import '../index.scss';
import { windowWidth } from '../../../constant';
import { TStyle } from 'types/common';

function FlexBasis(): JSX.Element {
  return <View style={styles.root}>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg1'])}>
        <Text className={clnx(['font-size_75', 'black2'])}>
          默认: auto flex 元素的本来大小 它可以设为跟width或height属性一样的值(比如350px)，则 flex 元素将占据固定空间。
        </Text>
      </View>
      <View className={clnx(['flex', 'brand_blue-bg_5', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexBasis}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>auto</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexBasis25}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>25%</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexBasis50}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>50%</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexBasis75}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>75%</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['flex', 'brand_blue-bg_5', 'padding_10', 'max-height15', 'flex-row'])}>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexBasis}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>auto</Text>
        </View>
        <View className={clnx(['flex', 'height2', 'width4', 'brand_blue-bg', 'margin_10', 'align-center'])} style={styles.flexBasis25}>
          <Text className={clnx(['cream', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>25%</Text>
        </View>
      </View>
    </View>
  </View>
}

FlexBasis.options = {
  addGlobalClass: true,
}

const styles: TStyle = {
  root: {
    width: process.env.TARO_ENV === 'h5' ? '100%' : windowWidth,
  },
  flexBasis: {
    flexBasis: 'auto',
  },
  flexBasis25: {
    flexBasis: '25%',
  },
  flexBasis50: {
    flexBasis: '50%',
  },
  flexBasis75: {
    flexBasis: '75%',
  },
}

export default FlexBasis;
