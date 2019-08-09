import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import NotSupport from '../NotSupport';
import clnx from "classnames";
import '../index.scss';

function AlignSelf(): JSX.Element {
  return <View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>
          默认: auto 继承父元素的align-items属性，如果没有父元素，则等同于stretch
        </Text>
      </View>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'flex-column'])}>
        <View className={clnx(['flex', 'self-auto', 'height2', 'borderW', 'blue-bg2', 'margin_10', 'align-center', 'padding3', 'flex-shrink_0'])}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>auto</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>
          该属性可能取6个值，除了auto，其他都与align-items属性完全一致。
        </Text>
      </View>
      <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'flex-column'])}>
        <View className={clnx(['flex', 'self-start', 'height2', 'width2', 'borderW', 'blue-bg2', 'margin_10', 'align-center', 'padding3', 'flex-shrink_0', 'width5'])}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>flex-start</Text>
        </View>
        <View className={clnx(['flex', 'self-center', 'height2', 'width2', 'borderW', 'blue-bg2', 'margin_10', 'align-center', 'padding3', 'flex-shrink_0', 'width5'])}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>center</Text>
        </View>
        <View className={clnx(['flex', 'self-end', 'height2', 'width2', 'borderW', 'blue-bg2', 'margin_10', 'align-center', 'padding3', 'flex-shrink_0', 'width5'])}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>flex-end</Text>
        </View>
        <View className={clnx(['flex', 'self-stretch', 'height2', 'borderW', 'blue-bg2', 'margin_10', 'align-center', 'padding3', 'flex-shrink_0'])}>
          <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>flex-stretch</Text>
        </View>
      </View>
    </View>
    <View className={clnx(['margin_box'])}>
      <View className={clnx(['padding1', 'yellow-bg2'])}>
        <Text className={clnx(['font-size_75'])}>
          baseline
        </Text>
      </View>
      {process.env.TARO_ENV === 'rn' ?
        <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'flex-row'])}>
            <NotSupport />
        </View> :
        <View className={clnx(['flex', 'blue-bg3', 'padding_10', 'max-height15', 'flex-row'])}>
          <View className={clnx(['flex', 'self-baseline', 'height2', 'width2', 'borderW', 'blue-bg2', 'margin_10', 'align-center', 'padding3', 'flex-shrink_0', 'height7'])}>
            <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>1</Text>
          </View>
          <View className={clnx(['flex', 'self-baseline', 'height2', 'width2', 'borderW', 'blue-bg2', 'margin_10', 'align-center', 'padding3', 'flex-shrink_0', 'height5'])}>
            <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>2</Text>
          </View>
          <View className={clnx(['flex', 'self-baseline', 'height2', 'width2', 'borderW', 'blue-bg2', 'margin_10', 'align-center', 'padding3', 'flex-shrink_0', 'height3'])}>
            <Text className={clnx(['white', 'font-size_75', 'line-height1', 'margin_auto', 'text_center'])}>3</Text>
          </View>
        </View>
      }
    </View>
  </View>
}

AlignSelf.options = {
  addGlobalClass: true,
}

export default AlignSelf;