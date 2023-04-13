function getComponentSidebar() {
  return [
    {
      text: '基础组件',
      items: [
        {
          text: 'Checkbox 多选框',
          link: '/component/checkbox'
        },
        {
          text: 'Select 选择器',
          link: '/component/select'
        },
        {
          text: 'Radio 单选框',
          link: '/component/radio'
        }
      ]
    }
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '基础',
      items: [
        {
          text: '安装',
          link: '/guide/installation'
        }
      ]
    }
  ]
}

export default {
  '/guide/': getGuideSidebar(),
  '/component/': getComponentSidebar()
}
