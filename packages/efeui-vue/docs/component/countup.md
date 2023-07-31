# CountUp 统计数值

## 基础用法

<preview path="../examples/countup/basic.vue"></preview>

## 通过前缀和后缀添加单位

<preview path="../examples/countup/unit.vue"></preview>

## 前缀和后缀使用插槽

<preview path="../examples/countup/slot.vue"></preview>

## CountUp Attributes

| 属性    | 说明                       | 类型                                                            | 可选值 | 默认值 |
| ------- | -------------------------- | --------------------------------------------------------------- | ------ | ------ |
| end-val | 想要达到的值               | number                                                          | -      | 0      |
| options | 用于精细控制的可选配置对象 | [CountUpOptions](https://github.com/inorganik/CountUp.js#usage) | -      | -      |

## CountUp Slots

| 插槽名 | 说明             | 类型 |
| ------ | ---------------- | ---- |
| prefix | 预置到结果的内容 | -    |
| suffix | 附加到结果的内容 | -    |
