/**
 * Mind-map content for case study pages (XMind-style radial layout).
 * Fieldwork — Banshan Design Engineering studio delivery platform.
 */

export const fieldworkMindMap = {
  title: 'Fieldwork',
  centerLabel: 'Banshan Design Engineering',
  branches: [
    {
      id: 'standards',
      index: '06',
      title: '交付与保障',
      subtitle: '运营标准如何落地',
      color: '#8b5cf6',
      side: 'left',
      blocks: [
        {
          title: 'Delivery standards',
          items: [
            '六阶段 lifecycle 退出标准可查',
            'Sector gate 序列写入产品而非口口相传',
            'Owner · Contributor · Director 权限边界明确',
          ],
        },
        {
          title: '业态模板',
          items: [
            'Cinema fit-out 门控序列',
            'Pet hospital 检查点',
            'Medical imaging 设备与验收节点',
          ],
        },
        {
          title: '治理与留痕',
          items: [
            '询盘转化保留上下文，无需重复录入',
            'Activity 记录评论、指派与系统事件',
            'Lead 更换或换阶段时决策仍可追溯',
          ],
        },
      ],
    },
    {
      id: 'dataflow',
      index: '05',
      title: '数据流',
      subtitle: '从询盘到 Closed',
      color: '#3b82f6',
      side: 'left',
      listStyle: 'alpha',
      blocks: [
        {
          marker: 'A',
          title: 'Brief capture',
          items: ['服务类型与范围叙述', '附件上传 · 父项目关联', 'Step 1 · New enquiry wizard'],
        },
        {
          marker: 'B',
          title: 'Client & site',
          items: ['客户与场地上下文', '站点信息进入同一询盘记录', 'Step 2 · 结构化采集'],
        },
        {
          marker: 'C',
          title: 'Qualification',
          items: ['Commercial fit 评估', 'Sector 判定（影院 / 宠物医院 / 影像等）', 'Step 3 · 任命前资格确认'],
        },
        {
          marker: 'D',
          title: 'Project record',
          items: ['Enquiry → Project 一键转化', '任命 project lead', '应用 sector 模板 · 初始化 milestones'],
        },
        {
          marker: 'E',
          title: 'Delivery loop',
          items: [
            'Delivery tab：阶段位置 + sector gates',
            'Structured brief 与交付并行可见',
            'Peek 快览 ↔ Full record 深工',
          ],
        },
        {
          marker: 'F',
          title: 'Portfolio output',
          items: ['Weekly reports 附在项目工作旁', 'Cross-project milestones 时间线', 'Handover → Closed 归档'],
        },
      ],
    },
    {
      id: 'architecture',
      index: '04',
      title: '信息架构',
      subtitle: '导航与共享模型',
      color: '#22c55e',
      side: 'left',
      blocks: [
        {
          title: 'Projects',
          items: ['Phase summary 计数', '可筛选项目表（client · lead · issues）', 'Record：Delivery · Brief · Activity'],
        },
        {
          title: 'Enquiries · Milestones',
          items: ['询盘队列与 triage 状态', 'Convert to project', '本周 due · Sector gates · Owner & phase'],
        },
        {
          title: 'Company · 原型实现',
          items: [
            'Weekly reports · Delivery standards',
            'HTML/CSS/JS 响应式高保真原型',
            'Fieldwork ↔ Knowledge Hub 工作区切换',
          ],
        },
      ],
    },
    {
      id: 'journey',
      index: '02',
      title: '用户旅程',
      subtitle: '角色如何完成交付',
      color: '#f97316',
      side: 'right',
      listStyle: 'number',
      blocks: [
        {
          marker: '1',
          title: 'Project lead',
          items: [
            'Review pipeline · 按 phase 扫组合',
            'Scope enquiry · 资格评估与转化',
            'Assign team · Track milestones · Close & report',
          ],
        },
        {
          marker: '2',
          title: 'Contributor',
          items: [
            '查看被指派工作 · 接受 brief',
            '更新进度 · 标记 blocker',
            '在 Delivery tab 跟进 sector gate',
          ],
        },
        {
          marker: '3',
          title: 'Director',
          items: [
            '扫描 portfolio 健康度',
            '审批 sector gates · 阅读 weekly reports',
            '在风险出现时介入 · 查阅 delivery standards',
          ],
        },
        {
          marker: '4',
          title: '六阶段 lifecycle',
          items: [
            'Scoping → Design → Construction',
            'Acceptance → Handover → Closed',
            'Dashboard · 表格 · Milestones 共用同一套阶段语言',
          ],
        },
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
          title: 'Portfolio 扫描',
          items: [
            'Phase boxes 快速过滤（见 dashboard GIF）',
            'Issue 信号：overdue · on hold 前置暴露',
            'Client / sector 多业态组合视图',
          ],
        },
        {
          title: 'Peek 预览决策',
          items: [
            '点选行打开侧栏 peek，列表不丢失',
            'Next milestone 与 phase stepper 置顶',
            '“Open full project” 作为显式深工入口',
          ],
        },
        {
          title: '结构化 brief',
          items: ['Client · Site · Scope · Commercial · Files', '与 delivery 工作并列，便于对齐范围'],
        },
        {
          title: '跨项目节奏',
          items: [
            'Milestones 跨项目时间线',
            'Weekly reports：sources · done · next week',
            'Directors 轻量 portfolio pulse',
          ],
        },
      ],
    },
  ],
};

export const projectMindMaps = {
  'project-request-collaboration': fieldworkMindMap,
};
