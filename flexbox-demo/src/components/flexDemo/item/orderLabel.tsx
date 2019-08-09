import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import clnx from "classnames";
import '../index.scss';

function OrderLabel({index, order}: OrderLabelProps) {
  return <View>
    <View>
      <Text className={clnx(['white', 'font-size_75', 'line-height1', 'text_center'])}>index: {index}</Text>
    </View>
    <View>
      <Text className={clnx(['white', 'font-size_75', 'line-height1', 'text_center'])}>order: {order}</Text>
    </View>
  </View>
};

OrderLabel.options = {
  addGlobalClass: true,
}

export interface OrderLabelProps extends StandardProps {
  index: number;
  order: number;
}

export default OrderLabel;
