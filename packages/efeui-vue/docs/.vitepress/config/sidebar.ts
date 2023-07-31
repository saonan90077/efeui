const getComponentSidebar = () => {
  return [
    {
      text: '通用组件',
      items: [
        {
          text: 'Checkbox 多选框组',
          link: '/component/checkbox',
        },
        {
          text: 'Radio 单选框组',
          link: '/component/radio',
        },
        {
          text: 'Select 选择器',
          link: '/component/select',
        },
        {
          text: 'InputRange 范围输入框',
          link: '/component/input-range',
        },
        {
          text: 'Form 表单',
          link: '/component/form',
        },
      ],
    },
    {
      text: '数据展示',
      items: [
        {
          text: 'CountUp 统计数值',
          link: '/component/countup',
        },
        {
          text: 'Ellipsis 文本省略',
          link: '/component/ellipsis',
        },
        {
          text: 'TagPlus 标签',
          link: '/component/tag-plus',
        },
        {
          text: 'Table 表格',
          link: '/component/table',
        },
      ],
    },
    {
      text: '反馈组件',
      items: [
        {
          text: 'Dialog 对话框',
          link: '/component/dialog',
        },
        {
          text: 'FormDialog 表单对话框',
          link: '/component/form-dialog',
        },
      ],
    },
    {
      text: '业务组件',
      items: [
        {
          text: 'PageTable 查询表格',
          link: '/component/page-table',
        },
        {
          text: 'PageView 展示页',
          link: '/component/page-view',
        },
      ],
    },
  ]
}

export default {
  '/component/': getComponentSidebar(),
}
