/** Mind-map content for case study pages (XMind-style radial layout). */

export const fieldworkMindMap = {
  title: 'Fieldwork',
  branches: [
    {
      id: 'delivery',
      index: '06',
      title: '交付与保障',
      subtitle: '如何稳定发布',
      color: '#8b5cf6',
      side: 'left',
      blocks: [
        {
          title: '质量门禁',
          items: ['原型交互 fidelity', '角色权限与审计路径', '案例页 NDA 访问控制'],
        },
        {
          title: '演示部署',
          items: ['GitHub Pages 静态托管', '密码门控 demo 环境', '与 Knowledge Hub 工作区切换'],
        },
        {
          title: '标准沉淀',
          items: ['Delivery standards 页面', 'Sector gate 模板库', 'Weekly report 格式约定'],
        },
      ],
    },
    {
      id: 'dataflow',
      index: '05',
      title: '数据流',
      subtitle: '从询盘到归档',
      color: '#3b82f6',
      side: 'left',
      listStyle: 'alpha',
      blocks: [
        { marker: 'A', title: '用户配置', items: ['Brief 与附件', 'Client & site 上下文'] },
        { marker: 'B', title: '资格评估', items: ['Commercial fit', 'Scope 与 sector 判定'] },
        { marker: 'C', title: '转为项目', items: ['任命 project lead', '初始化 milestone 模板'] },
        { marker: 'D', title: '阶段交付', items: ['六阶段 lifecycle', 'Sector gate 检查点'] },
        { marker: 'E', title: '协作记录', items: ['Activity 流', 'Peek / full record 双模式'] },
        { marker: 'F', title: '输出', items: ['Weekly report 汇总', 'Closed 归档与学习'] },
      ],
    },
    {
      id: 'architecture',
      index: '04',
      title: '技术架构',
      subtitle: '如何实现',
      color: '#22c55e',
      side: 'left',
      blocks: [
        {
          title: '前端工作台',
          items: ['HTML / CSS / JavaScript 高保真原型', 'Plus Jakarta Sans + IBM Plex Mono', '响应式 table + peek 面板'],
        },
        {
          title: '导航域',
          items: ['Projects · Enquiries · Milestones', 'Company · Delivery standards', 'Weekly reports'],
        },
        {
          title: '共享系统',
          items: ['Phase model', 'Sector templates', 'Ownership & roles', 'Milestones & audit'],
        },
      ],
    },
    {
      id: 'journey',
      index: '02',
      title: '用户旅程',
      subtitle: '怎么完成作品',
      color: '#f97316',
      side: 'right',
      listStyle: 'number',
      blocks: [
        { marker: '1', title: '发现组合', items: ['按 phase 过滤', 'Client / sector 视图', 'Issue 信号前置'] },
        { marker: '2', title: '受理询盘', items: ['Brief → Client → Qualification', '附件与父项目关联'] },
        { marker: '3', title: '设定交付', items: ['任命 lead', '应用 sector 模板', '排期 milestone'] },
        { marker: '4', title: '执行与比对', items: ['列表 + peek 预览', 'Delivery tab 阶段进度', '跨项目 milestone 时间线'] },
        { marker: '5', title: '汇报进展', items: ['Weekly report 填写', 'Director 组合健康度阅读'] },
        { marker: '6', title: '验收归档', items: ['Handover', 'Closed 与经验沉淀'] },
      ],
    },
    {
      id: 'capabilities',
      index: '03',
      title: '核心能力',
      subtitle: '系统做了什么',
      color: '#eab308',
      side: 'right',
      blocks: [
        {
          title: '组合与筛选',
          items: ['Phase 计数卡片', '可筛选项目表', 'Client 分组视图'],
        },
        {
          title: '询盘与转化',
          items: ['Enquiry 队列', '资格评估向导', '一键转项目'],
        },
        {
          title: '交付控制',
          items: ['六阶段 stepper', 'Sector gate 里程碑', 'Structured brief'],
        },
        {
          title: '协作与透明',
          items: ['Row peek 预览', 'Activity 时间线', 'Weekly reports rollup'],
        },
      ],
    },
  ],
};

export const projectMindMaps = {
  'project-request-collaboration': fieldworkMindMap,
};
