const researchData = {
  '计算机科学': [
    {
      title: '基于机器学习的图像识别系统',
      description: '开发一个使用深度学习算法识别图像中物体的系统，可以应用于自动驾驶、安防监控等领域。',
      requiredSkills: ['Python编程', 'TensorFlow/PyTorch框架', '神经网络原理', '数据处理'],
      expectedOutcomes: '完成一个可运行的图像识别模型，并提交技术报告',
      timeline: '3-6个月：1-2个月学习基础，2-3个月开发，1个月优化'
    },
    {
      title: '区块链应用开发',
      description: '设计并实现一个基于区块链的去中心化应用(DApp)，可以用于供应链追踪、数字资产管理等场景。',
      requiredSkills: ['Solidity智能合约', 'Web3开发', '以太坊框架', '密码学基础'],
      expectedOutcomes: '完成一个可部署的智能合约和前端界面',
      timeline: '4-8个月：2个月学习，3个月开发，3个月测试优化'
    },
    {
      title: '自然语言处理聊天机器人',
      description: '构建一个能够理解自然语言并进行智能对话的聊天机器人，可用于客服、教育辅助等场景。',
      requiredSkills: ['NLP算法', 'Python', 'Transformers库', '对话系统设计'],
      expectedOutcomes: '实现一个具备上下文理解能力的聊天机器人',
      timeline: '3-6个月'
    },
    {
      title: '移动应用开发项目',
      description: '开发一款面向特定用户群体的移动应用，解决实际生活中的问题，如健康管理、学习工具等。',
      requiredSkills: ['React Native/Flutter', 'UI/UX设计', 'API开发', '版本控制'],
      expectedOutcomes: '完成一款可在App Store/Google Play上架的应用',
      timeline: '4-8个月'
    }
  ],
  '生物学': [
    {
      title: '基因编辑技术研究',
      description: '学习CRISPR-Cas9基因编辑技术的基础知识，设计针对特定基因的编辑方案。',
      requiredSkills: ['分子生物学', '基因工程', '实验操作', '数据分析'],
      expectedOutcomes: '完成实验方案设计和数据分析报告',
      timeline: '6-12个月'
    },
    {
      title: '生态环境调查研究',
      description: '对特定区域的生态环境进行调查研究，分析生物多样性和环境因素的关系。',
      requiredSkills: ['生态学', '统计学', '野外调查方法', 'GIS技术'],
      expectedOutcomes: '提交生态环境调查报告和建议方案',
      timeline: '6-12个月'
    },
    {
      title: '生物信息学数据分析',
      description: '利用生物信息学工具分析基因组数据，发现潜在的基因变异和疾病关联。',
      requiredSkills: ['生物信息学', 'R/Python编程', '统计学', '基因组学'],
      expectedOutcomes: '完成数据分析并撰写研究报告',
      timeline: '4-8个月'
    },
    {
      title: '药物研发模拟',
      description: '学习计算机辅助药物设计方法，模拟小分子与靶蛋白的相互作用。',
      requiredSkills: ['药物化学', '分子对接', '分子动力学', '计算化学软件'],
      expectedOutcomes: '完成药物筛选模拟报告',
      timeline: '4-8个月'
    }
  ],
  '经济学': [
    {
      title: '宏观经济数据分析',
      description: '收集并分析宏观经济数据，研究经济周期、通货膨胀等经济现象。',
      requiredSkills: ['计量经济学', 'R/Stata', '经济理论', '数据可视化'],
      expectedOutcomes: '完成经济分析报告和数据可视化作品',
      timeline: '3-6个月'
    },
    {
      title: '行为经济学实验',
      description: '设计并实施行为经济学实验，研究人们的决策行为和经济偏好。',
      requiredSkills: ['行为经济学', '实验设计', '统计学', '问卷调查'],
      expectedOutcomes: '完成实验报告和学术论文',
      timeline: '4-8个月'
    },
    {
      title: '金融建模项目',
      description: '建立金融模型进行投资组合优化、风险评估或市场预测。',
      requiredSkills: ['金融学', 'Python/MATLAB', '时间序列分析', '机器学习'],
      expectedOutcomes: '完成可演示的金融模型',
      timeline: '4-8个月'
    },
    {
      title: '产业竞争力研究',
      description: '分析特定产业的竞争优势和发展趋势，提出战略建议。',
      requiredSkills: ['产业经济学', 'PEST/SWOT分析', '案例研究', '报告撰写'],
      expectedOutcomes: '完成产业分析报告',
      timeline: '3-6个月'
    }
  ],
  'default': [
    {
      title: '跨学科创新研究项目',
      description: '结合多个学科领域知识，解决一个现实世界的问题。',
      requiredSkills: ['跨学科思维', '研究方法', '创新思维', '项目管理'],
      expectedOutcomes: '完成项目报告和成果展示',
      timeline: '6-12个月'
    },
    {
      title: '社会调研项目',
      description: '针对社会问题进行深入调研，提出解决方案。',
      requiredSkills: ['调研方法', '数据分析', '报告撰写', '公众演讲'],
      expectedOutcomes: '完成调研报告',
      timeline: '4-8个月'
    },
    {
      title: '技术创新项目',
      description: '运用技术创新解决实际问题，可以是软件开发、硬件设计等。',
      requiredSkills: ['技术开发能力', '项目管理', '团队协作', '文档撰写'],
      expectedOutcomes: '完成可运行的技术产品',
      timeline: '6-12个月'
    },
    {
      title: '学术研究入门',
      description: '跟随导师参与学术研究项目，学习科研方法和学术写作。',
      requiredSkills: ['文献检索', '学术写作', '实验技能', '批判性思维'],
      expectedOutcomes: '完成研究总结或论文初稿',
      timeline: '6-12个月'
    }
  ]
}

function generateResearchSuggestions(req, res) {
  const { majorDirection, personalBackground, hobbies, habits } = req.body
  
  if (!majorDirection) {
    return res.status(400).json({ message: '请输入目标专业方向' })
  }
  
  const suggestions = researchData[majorDirection] || researchData['default']
  
  const personalizedSuggestions = suggestions.map(s => ({
    ...s,
    description: s.description + (personalBackground ? ` 结合您${personalBackground}的背景，此项目非常适合您。` : '')
  }))
  
  setTimeout(() => {
    res.json({ suggestions: personalizedSuggestions })
  }, 1000)
}

export { generateResearchSuggestions }
