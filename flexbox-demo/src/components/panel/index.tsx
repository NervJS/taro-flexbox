import Taro from '@tarojs/taro';
import { View } from "@tarojs/components";
import { StandardProps } from "@tarojs/components/types/common";
import clnx from 'classnames';
import './index.scss';

function Panel(props: PanelProps) {
  const classes = props.classes || {};
  return <View className={clnx(classes.root)} style={props.style}>
      <View className={clnx(classes.title ? classes.title : ['top0', 'padding1', 'gray-bgD', 'box-shadow1'])} style={
        process.env.TARO_ENV !== 'rn' ? {
          position: 'sticky',
        } : {}
      }>
        {props.renderTitle}
      </View>
      <View className={clnx(classes.content ? classes.content : 'padding1')}>
        {props.children}
      </View>
  </View>;
}

export interface PanelProps extends StandardProps {
  classes?: {
    root?: string | string[];
    title?: string | string[];
    content?: string | string[];
  };
  children?: React.ReactNode;
  renderTitle?: string | JSX.Element;
  renderContent?: string | JSX.Element;
}

Panel.options = {
  addGlobalClass: true,
  // styleIsolation: 'apply-shared',
}

export default Panel;
