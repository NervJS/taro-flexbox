import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Panel from '../../components/flexDemo';
import clnx from 'classnames';
import './index.scss';
import { TStyle } from 'types/common';


export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: 'FlexBox 布局'
  }

  static options = {
    addGlobalClass: true,
  }

  state = {
    containerList: [
      {
        title: 'flex-direction',
        subtitle: '决定主轴的方向(即 item 的排列方向)',
        contentName: 'FlexDirection',
      }, {
        title: 'flex-wrap',
        subtitle: '定义，如果一条轴线排不下，如何换行',
        contentName: 'FlexWrap',
      }, {
        title: 'flex-flow (RN/快应用 不支持)',
        subtitle: '是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap',
        contentName: 'FlexFlow',
      }, {
        title: 'justify-content',
        subtitle: '定义了 item 在主轴上的对齐方式',
        contentName: 'JustifyContent',
      }, {
        title: 'align-items',
        subtitle: '定义 item 在交叉轴上如何对齐',
        contentName: 'AlignItems',
      }, {
        title: 'align-content',
        subtitle: '定义了多根轴线的对齐方式(如果 item 只有一根轴线，该属性不起作用)',
        contentName: 'AlignContent',
      },
    ],
    itemList: [
      {
        title: 'order (RN 不支持)',
        subtitle: '定义 item 的排列顺序',
        contentName: 'Order',
      }, {
        title: 'flex-grow',
        subtitle: '定义 item 的放大比例',
        contentName: 'FlexGrow',
      }, {
        title: 'flex-shrink',
        subtitle: '定义了 item 的缩小比例',
        contentName: 'FlexShrink',
      }, {
        title: 'flex-basis',
        subtitle: '定义了在分配多余空间之前， item 占据的主轴空间(main size)。浏览器根据这个属性，计算主轴是否有多余空间。',
        contentName: 'FlexBasis',
      }, {
        title: 'flex',
        subtitle: 'flex-grow, flex-shrink 和 flex-basis的简写',
        contentName: 'Flex',
      }, {
        title: 'align-self',
        subtitle: '允许单个 item 有与其他 item 不一样的对齐方式，可覆盖align-items属性',
        contentName: 'AlignSelf',
      },
    ],
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { containerList, itemList } = this.state;
    return (
      <View className={clnx(['max-width_root', 'margin_auto'], process.env.TARO_ENV === 'h5' ? ['line-height1'] : [])}>
        {process.env.TARO_ENV === 'h5' ? <View className={clnx([
          'flex', 'box-shadow1', 'white-bg', 'bolder', 'head', 'align-center', 'flex-column'])} style={styles.sticky}>
          <Text>FlexBox 布局</Text>
        </View> : undefined}
        <View className={clnx(['padding_10', 'gray-bgEF', 'flex-column'])}>
          <View>
            <Text className={clnx(['font-size_75'])} decode >&emsp;&emsp;采用<Text className={clnx(['span', 'bolder'])}>Flex 布局</Text>的元素，称为<Text className={clnx(['span', 'bolder'])}>Flex 容器</Text>(flex container)。<Text className={clnx(['span', 'bolder'])}>Flex 容器</Text>的所有子元素自动成为容器成员，称为<Text className={clnx(['span', 'bolder'])}>Flex 项目</Text>(flex item)。</Text>
          </View>
          <View>
            <Text className={clnx(['font-size_75'])}>
              <Text className={clnx(['span', 'bolder'])} decode>&emsp;&emsp;Flex 容器</Text>默认存在两根轴: 水平的主轴(main axis)和垂直的交叉轴(cross axis)。
            </Text>
          </View>
          <View>
            <Text className={clnx(['font-size_75'])}>
              <Text className={clnx(['span', 'bolder'])} decode>&emsp;&emsp;Flex 项目</Text>默认沿主轴排列。主轴的开始位置(与边框的交叉点)叫做main start，结束位置叫做main end;交叉轴的开始位置叫做cross start，结束位置叫做cross end;单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。
            </Text>
          </View>
          <View>
            <Text className={clnx(['font-size_75'])}>
              <Text className={clnx(['alert'])} decode>&emsp;&emsp;注意，设为 Flex 布局以后，子元素的 *float* 、 *clear* 和 *vertical-align* 属性将失效。</Text>
            </Text>
          </View>
        </View>
        <Panel key='Flex Container' title='Flex Container 属性' list={containerList}/>
        <Panel key='Flex Item' title='Flex Item 属性' list={itemList}/>
      </View>
    )
  }
}

const styles: TStyle = {
  sticky: {
    position: 'sticky',
  },
}
