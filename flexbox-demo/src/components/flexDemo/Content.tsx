import Taro from "@tarojs/taro";
import { StandardProps } from "@tarojs/components/types/common";
import FlexDirectionDemo from './container/flexDirectionDemo';
import FlexWrapDemo from './container/flexWrapDemo';
import FlexFlowDemo from './container/flexFlowDemo';
import JustifyContentDemo from './container/justifyContentDemo';
import AlignItemsDemo from './container/alignItemsDemo';
import AlignContentDemo from './container/alignContentDemo';
import OrderDemo from './item/order';
import FlexGrowDemo from './item/flexGrow';
import FlexShrinkDemo from './item/flexShrink';
import FlexBasisDemo from './item/flexBasis';
import FlexDemo from './item/flex';
import AlignSelfDemo from './item/alignSelf';
import './index.scss';

function PickContent({name}: ContentProps): JSX.Element {
  let Content: JSX.Element | null = null;
  switch (name) {
    case 'FlexDirection': {
      Content = <FlexDirectionDemo />;
      break;
    }
    case 'FlexWrap': {
      Content = <FlexWrapDemo />;
      break;
    }
    case 'FlexFlow': {
      Content = <FlexFlowDemo />;
      break;
    }
    case 'JustifyContent': {
      Content = <JustifyContentDemo />;
      break;
    }
    case 'AlignItems': {
      Content = <AlignItemsDemo />;
      break;
    }
    case 'AlignContent': {
      Content = <AlignContentDemo />;
      break;
    }
    case 'Order': {
      Content = <OrderDemo />;
      break;
    }
    case 'FlexGrow': {
      Content = <FlexGrowDemo />;
      break;
    }
    case 'FlexShrink': {
      Content = <FlexShrinkDemo />;
      break;
    }
    case 'FlexBasis': {
      Content = <FlexBasisDemo />;
      break;
    }
    case 'Flex': {
      Content = <FlexDemo />;
      break;
    }
    case 'AlignSelf': {
      Content = <AlignSelfDemo />;
      break;
    }
    default: {
      Content = <FlexDirectionDemo />;
      break;
    }
  }
  return Content!;
}

export interface ContentProps extends StandardProps {
  name: string;
}

export default PickContent;