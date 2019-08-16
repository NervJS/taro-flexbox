# 注意事项

> align-self 属性的 baseline 值, 在微信、QQ、头条小程序上会失效

## React Native

- flex-direction 属性
  - 默认值 column
- flex-wrap 属性
  - wrap-reverse 值 不支持
- flex-flow 属性 不支持
- align-content 属性
  - 需要 rn 版本 0.58+
  - 只在 flex-direction 属性为 column 或 column-reverse 时生效 (测试环境: RN V0.59.10)
- align-items 属性
  - baseline 值 不支持
- order 属性 不支持
- flex-basis 属性
  - ScrollView 组件会导致属性失效
  - 如果没有足够空间，组件不会发生收缩 (应该是设置了 flex-shrink 属性值默认为 0)
- flex 属性
  - 只能为 number 类型
  - 当 flex > 0 时，组件大小将与其弹性值成比例。因此，flex 设置为 2 的组件将占用空间的两倍作为 flex 设置为 1 的组件
  - 当 flex = 0 时，组件根据 width 和 height 确定大小，且不会发生变化。
  - 当 flex = -1 时，组件通常根据 width 和 height 确定大小。但是，如果没有足够的空间，组件将收缩到 minWidth 和 minHeight。
- align-self 属性
  - baseline 值 不支持

## 快应用

- flex
  - auto none 为无效值
- align-items 属性
  - baseline 值 不支持
- flex-flow 属性 不支持
- align-self 属性
  - baseline 值 不支持