import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { StatusBar } from 'react-native';
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
   * 提示和声明 navigationBarTextStyle: 'black' | 'cream' 类型冲突, 需要显示声明类型
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
        key: 'flex-direction',
        title: 'flex-direction',
        subtitle: '决定主轴的方向(即 item 的排列方向)',
        contentName: 'FlexDirection',
      }, {
        key: 'flex-wrap',
        title: 'flex-wrap',
        subtitle: '定义，如果一条轴线排不下，如何换行',
        contentName: 'FlexWrap',
      }, {
        key: 'flex-flow',
        title: 'flex-flow (RN/快应用 不支持)',
        subtitle: '是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap',
        contentName: 'FlexFlow',
      }, {
        key: 'align-items',
        title: 'align-items',
        subtitle: '定义 item 在交叉轴上如何对齐',
        contentName: 'AlignItems',
      }, {
        key: 'align-content',
        title: 'align-content',
        subtitle: '定义了多根轴线的对齐方式(如果 item 只有一根轴线，该属性不起作用)',
        contentName: 'AlignContent',
      }, {
        key: 'justify-content',
        title: 'justify-content',
        subtitle: '定义了 item 在主轴上的对齐方式',
        contentName: 'JustifyContent',
      }, {
        key: 'place-content',
        title: 'place-content',
        subtitle: 'justify-content 和 align-content 属性的缩写，第一个值是属于 align-content 的；若只设置了一个值，且对 justify-content 无效，则整个值无效',
        contentName: 'PlaceContent',
      }
    ],
    itemList: [
      {
        key: 'order',
        title: 'order (RN 不支持)',
        subtitle: '定义 item 的排列顺序',
        contentName: 'Order',
      }, {
        key: 'flex-grow',
        title: 'flex-grow',
        subtitle: '定义 item 的放大比例',
        contentName: 'FlexGrow',
      }, {
        key: 'flex-shrink',
        title: 'flex-shrink',
        subtitle: '定义了 item 的缩小比例',
        contentName: 'FlexShrink',
      }, {
        key: 'flex-basis',
        title: 'flex-basis',
        subtitle: '定义了在分配多余空间之前， item 占据的主轴空间(main size)。浏览器根据这个属性，计算主轴是否有多余空间。',
        contentName: 'FlexBasis',
      }, {
        key: 'flex',
        title: 'flex',
        subtitle: 'flex-grow, flex-shrink 和 flex-basis 的简写',
        contentName: 'Flex',
      }, {
        key: 'align-self',
        title: 'align-self',
        subtitle: '允许单个 item 有与其他 item 不一样的对齐方式，可覆盖 align-items 属性',
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
      <View>
        {process.env.TARO_ENV === 'rn' ? <StatusBar backgroundColor="black" barStyle="light-content" /> : undefined}
        <View className={clnx(['max-width_root', 'margin_auto'], process.env.TARO_ENV === 'h5' ? ['line-height1'] : [])}>
          {process.env.TARO_ENV === 'h5' ? <View className={clnx([
            'flex', 'box-shadow1', 'black-bg', 'white', 'bolder', 'head', 'align-center', 'flex-column'])} style={styles.sticky}>
            <Text>FlexBox 布局</Text>
          </View> : undefined}
          <View className={clnx(['padding_10', 'brand_blue-bg_5', 'flex-column'])}>
            <View className={clnx(['padding_10'])}>
              <Text className={clnx(['font-size_75'])} decode >&emsp;&emsp;采用<Text className={clnx(['span', 'bolder'])}>Flex 布局</Text>的元素，称为<Text className={clnx(['span', 'bolder'])}>Flex 容器</Text>(flex container)。<Text className={clnx(['span', 'bolder'])}>Flex 容器</Text>的所有子元素自动成为容器成员，称为<Text className={clnx(['span', 'bolder'])}>Flex 元素</Text>(flex item)。</Text>
            </View>
            <View className={clnx(['padding_10'])}>
              <Text className={clnx(['font-size_75'])}>
                <Text className={clnx(['span', 'bolder'])} decode>&emsp;&emsp;Flex 容器</Text>默认存在两根轴: 水平的主轴(main axis)和垂直的交叉轴(cross axis)。
              </Text>
            </View>
            <View className={clnx(['padding_10'])}>
              <Text className={clnx(['font-size_75'])}>
                <Text className={clnx(['span', 'bolder'])} decode>&emsp;&emsp;Flex 元素</Text>默认沿主轴排列。主轴的开始位置(与边框的交叉点)叫做main start，结束位置叫做main end;交叉轴的开始位置叫做cross start，结束位置叫做cross end;单个 flex 元素占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。
              </Text>
            </View>
            <View className={clnx(['padding_10'])}>
              <Text className={clnx(['font-size_75'])}>
                <Text className={clnx(['bolder'])} decode>&emsp;&emsp;注意，设为 Flex 布局以后，子元素的 *float* 、 *clear* 和 *vertical-align* 属性将失效。</Text>
              </Text>
            </View>
          </View>
          <Panel key='Flex-Container' title='Flex Container 属性' list={containerList}/>
          <Panel key='Flex-Item' title='Flex Item 属性' list={itemList}/>
        </View>
      </View>
    )
  }
}

const styles: TStyle = {
  sticky: {
    position: 'sticky',
  },
}
