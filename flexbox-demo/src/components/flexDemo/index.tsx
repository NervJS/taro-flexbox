import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { StandardProps } from "@tarojs/components/types/common";
import Panel from '../panel';
import PickContent from './Content';
import clnx from "classnames";
import './index.scss';

function RenderPanel(props: PanelProps): JSX.Element {
  return <Panel 
    classes={{ title: clnx(['z-index2', 'top0', 'black-bg8', 'padding1'], process.env.TARO_ENV === 'rn' ? 'height2_5' : 'height2'), content: clnx('padding2') }}
    renderTitle={
      process.env.TARO_ENV !== 'h5' ?
      <Text className={clnx(['font-size1_25', 'line-height2', 'white', 'bolder'])}>{props.title}</Text> :
      <h2 id={`#${props.key}`}><a href={`#${props.key}`}><Text className={clnx(['font-size1_25', 'line-height2', 'white', 'bolder'])}>{props.title}</Text></a></h2>
    }>
    {props.list.map(e => {
      return <Panel
        key={e.key}
        classes={{ title: clnx(['z-index1', 'black-bg2', 'padding1'], process.env.TARO_ENV !== 'rn' ? ['top98'] : []), content: clnx('padding2') }}
        renderTitle={
          process.env.TARO_ENV !== 'h5' ? <View>
            <View>
              <Text className={clnx(['font-size1', 'cream', 'bolder'])}>{e.title}</Text>
            </View>
            <View>
              <Text className={clnx(['font-size_75', 'wall'])}>{e.subtitle}</Text>
            </View>
          </View>
          : <h5 id={`#${props.key}-${e.key}`}>
            <a href={`#${props.key}-${e.key}`}>
              <View>
                <Text className={clnx(['font-size1', 'cream', 'bolder'])}>{e.title}</Text>
              </View>
              <View>
                <Text className={clnx(['font-size_75', 'wall'])}>{e.subtitle}</Text>
              </View>
            </a>
          </h5>
        }
      >
        <PickContent name={e.contentName}/>
      </Panel>
    })}
  </Panel>
}

export interface PanelProps extends StandardProps {
    title: string;
    list: any[];
}

RenderPanel.options = {
  addGlobalClass: true,
  // styleIsolation: 'shared',
}

export default RenderPanel;