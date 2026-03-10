const majorData = {
  '计算机科学': {
    name: '计算机科学',
    requiredSubjects: ['数学', '物理', '英语', '计算机基础'],
    typicalCourses: [
      '数据结构与算法',
      '计算机组成原理',
      '操作系统',
      '计算机网络',
      '数据库系统',
      '软件工程',
      '人工智能',
      '机器学习'
    ],
    employmentDirections: [
      '软件开发工程师',
      '算法工程师',
      '数据科学家',
      '网络安全工程师',
      '产品经理'
    ],
    knownCompanies: [
      'Google',
      'Microsoft',
      'Apple',
      'Amazon',
      'Meta',
      '腾讯',
      '阿里巴巴',
      '字节跳动'
    ],
    researchAreas: [
      '人工智能与机器学习',
      '计算机系统与架构',
      '网络安全与隐私',
      '人机交互',
      '分布式计算'
    ]
  },
  '工程': {
    name: '工程',
    requiredSubjects: ['数学', '物理', '化学', '英语'],
    typicalCourses: [
      '微积分',
      '线性代数',
      '概率统计',
      '工程力学',
      '电路原理',
      '电子技术',
      '信号与系统',
      '控制工程'
    ],
    employmentDirections: [
      '机械工程师',
      '电气工程师',
      '土木工程师',
      '电子工程师',
      '项目管理'
    ],
    knownCompanies: [
      'Boeing',
      'Siemens',
      'General Electric',
      'Toyota',
      '华为',
      '国家电网',
      '中国中车',
      '三一重工'
    ],
    researchAreas: [
      '新能源技术',
      '智能制造',
      '机器人技术',
      '材料工程',
      '交通运输工程'
    ]
  },
  '商科': {
    name: '商科',
    requiredSubjects: ['数学', '英语', '经济学', '会计学基础'],
    typicalCourses: [
      '微观经济学',
      '宏观经济学',
      '市场营销',
      '财务管理',
      '会计学',
      '组织行为学',
      '商业伦理',
      '战略管理'
    ],
    employmentDirections: [
      '投资银行分析师',
      '管理咨询顾问',
      '市场营销经理',
      '财务分析师',
      '企业家'
    ],
    knownCompanies: [
      'McKinsey & Company',
      'Goldman Sachs',
      'Morgan Stanley',
      'BCG',
      ' Bain & Company',
      '四大会计师事务所',
      '各行业领先企业'
    ],
    researchAreas: [
      '企业战略与组织',
      '金融市场与投资',
      '消费者行为',
      '供应链管理',
      '创业与创新'
    ]
  },
  '医学': {
    name: '医学',
    requiredSubjects: ['生物', '化学', '物理', '英语', '数学'],
    typicalCourses: [
      '人体解剖学',
      '生理学',
      '生物化学',
      '病理学',
      '药理学',
      '临床诊断学',
      '内科学',
      '外科学'
    ],
    employmentDirections: [
      '临床医生',
      '医学研究员',
      '公共卫生专家',
      '医疗管理',
      '医疗器械研发'
    ],
    knownCompanies: [
      'Mayo Clinic',
      'Johns Hopkins Hospital',
      'Pfizer',
      'Johnson & Johnson',
      'Novartis',
      '北京协和医院',
      '华山医院',
      '湘雅医院'
    ],
    researchAreas: [
      '精准医疗',
      '基因治疗',
      '药物研发',
      '流行病学',
      '神经科学'
    ]
  },
  '经济学': {
    name: '经济学',
    requiredSubjects: ['数学', '英语', '经济学基础', '统计学基础'],
    typicalCourses: [
      '微观经济学',
      '宏观经济学',
      '计量经济学',
      '货币银行学',
      '国际经济学',
      '发展经济学',
      '博弈论',
      '金融经济学'
    ],
    employmentDirections: [
      '经济学家',
      '金融分析师',
      '政策分析师',
      '风险管理师',
      '投资顾问'
    ],
    knownCompanies: [
      '国际货币基金组织',
      '世界银行',
      '各国央行',
      '高盛',
      '摩根士丹利',
      '中金公司',
      '国家发改委',
      '智库机构'
    ],
    researchAreas: [
      '行为经济学',
      '实验经济学',
      '发展经济学',
      '金融经济学',
      '公共政策'
    ]
  },
  '物理学': {
    name: '物理学',
    requiredSubjects: ['数学', '物理', '英语', '化学'],
    typicalCourses: [
      '经典力学',
      '电磁学',
      '量子力学',
      '热力学与统计物理',
      '固体物理',
      '数学物理方法',
      '粒子物理',
      '相对论'
    ],
    employmentDirections: [
      '科研人员',
      '大学教授',
      '数据分析师',
      '金融量化分析师',
      '技术顾问'
    ],
    knownCompanies: [
      'CERN',
      'NASA',
      'IBM Research',
      '贝尔实验室',
      '华为中央研究院',
      '中国科学院',
      '国家实验室',
      '能源公司'
    ],
    researchAreas: [
      '粒子物理与宇宙学',
      '凝聚态物理',
      '量子信息与量子计算',
      '光学与光子学',
      '能源材料'
    ]
  },
  '化学': {
    name: '化学',
    requiredSubjects: ['数学', '化学', '物理', '英语'],
    typicalCourses: [
      '有机化学',
      '无机化学',
      '物理化学',
      '分析化学',
      '生物化学',
      '高分子化学',
      '材料化学',
      '化学工程原理'
    ],
    employmentDirections: [
      '化学研究员',
      '制药工程师',
      '材料科学家',
      '环境科学家',
      '质量控制工程师'
    ],
    knownCompanies: [
      'BASF',
      'Dow Chemical',
      'DuPont',
      'Pfizer',
      '拜耳',
      '中国石化',
      '万华化学',
      '宁德时代'
    ],
    researchAreas: [
      '绿色化学',
      '药物化学',
      '纳米材料',
      '催化化学',
      '电化学'
    ]
  },
  '生物学': {
    name: '生物学',
    requiredSubjects: ['生物', '化学', '数学', '英语', '物理'],
    typicalCourses: [
      '细胞生物学',
      '分子生物学',
      '遗传学',
      '生物化学',
      '生态学',
      '微生物学',
      '动物学',
      '植物学'
    ],
    employmentDirections: [
      '生物研究员',
      '生物技术工程师',
      '医药研发',
      '环境保护',
      '农业技术'
    ],
    knownCompanies: [
      'Genentech',
      'Amgen',
      'Merck',
      '华大基因',
      '恒瑞医药',
      '先正达',
      '孟山都',
      '中国科学院生物研究所'
    ],
    researchAreas: [
      '基因编辑技术',
      '合成生物学',
      '精准医学',
      '脑科学与神经生物学',
      '生物多样性'
    ]
  },
  '数学': {
    name: '数学',
    requiredSubjects: ['数学', '英语', '物理', '计算机基础'],
    typicalCourses: [
      '分析学',
      '代数',
      '几何学',
      '拓扑学',
      '概率论',
      '数理统计',
      '数值分析',
      '运筹学'
    ],
    employmentDirections: [
      '金融分析师',
      '数据科学家',
      '密码学家',
      '大学教授',
      '量化交易员'
    ],
    knownCompanies: [
      'Goldman Sachs',
      'Morgan Stanley',
      'Google',
      'Microsoft',
      '四大咨询公司',
      '对冲基金',
      '投行',
      '科技公司研究部门'
    ],
    researchAreas: [
      '数论与密码学',
      '代数几何',
      '概率论与随机过程',
      '数值计算',
      '优化理论'
    ]
  },
  '心理学': {
    name: '心理学',
    requiredSubjects: ['英语', '生物', '数学', '社会学基础'],
    typicalCourses: [
      '普通心理学',
      '发展心理学',
      '社会心理学',
      '认知心理学',
      '心理统计学',
      '实验心理学',
      '心理测量',
      '咨询心理学'
    ],
    employmentDirections: [
      '心理咨询师',
      '用户体验研究员',
      '人力资源专员',
      '市场研究分析师',
      '教育心理学专家'
    ],
    knownCompanies: [
      '心理咨询中心',
      '高校心理中心',
      '互联网公司用户研究部门',
      '咨询公司',
      '医疗机构心理科',
      '人力资源公司',
      '市场研究公司',
      ' EAP服务公司'
    ],
    researchAreas: [
      '认知神经科学',
      '临床心理学',
      '社会心理学',
      '发展心理学',
      '工业与组织心理学'
    ]
  }
}

function getMajorInfo(req, res) {
  const { name } = req.params
  
  const majorInfo = majorData[name]
  
  if (!majorInfo) {
    return res.status(404).json({ message: '未找到该专业的信息' })
  }
  
  setTimeout(() => {
    res.json(majorInfo)
  }, 500)
}

export { getMajorInfo }
