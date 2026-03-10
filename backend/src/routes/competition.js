const competitionData = {
  '数学': [
    {
      id: 'imo',
      name: '国际数学奥林匹克 (IMO)',
      subject: '数学',
      organizer: '国际数学奥林匹克委员会',
      format: '个人参赛，6道题，分两天的考试',
      dates: '每年7月',
      eligibility: '高中学生，年龄不超过20岁',
      knowledgeScope: [
        '数论：整除性、同余、不定方程',
        '代数：多项式、函数、不等式',
        '几何：平面几何、立体几何',
        '组合数学：计数、图论、组合几何'
      ],
      pastPapers: [
        { year: 2023, title: '第64届IMO试题' },
        { year: 2022, title: '第63届IMO试题' },
        { year: 2021, title: '第62届IMO试题' }
      ]
    },
    {
      id: 'putnam',
      name: '威廉·洛威尔·普特南数学竞赛 (Putnam)',
      subject: '数学',
      organizer: '美国数学协会',
      format: '个人参赛，12道题，分两场考试',
      dates: '每年12月第一个周六',
      eligibility: '美国和加拿大本科生',
      knowledgeScope: [
        '微积分和高等微积分',
        '线性代数',
        '抽象代数',
        '数论',
        '组合数学'
      ],
      pastPapers: [
        { year: 2023, title: '第84届Putnam竞赛试题' },
        { year: 2022, title: '第83届Putnam竞赛试题' }
      ]
    },
    {
      id: 'hiemo',
      name: '中国数学奥林匹克 (CMO)',
      subject: '数学',
      organizer: '中国数学奥林匹克委员会',
      format: '个人参赛，6道题，分两场考试',
      dates: '每年11月',
      eligibility: '中国高中学生',
      knowledgeScope: [
        '数论',
        '代数',
        '几何',
        '组合数学'
      ],
      pastPapers: [
        { year: 2023, title: '第39届CMO试题' },
        { year: 2022, title: '第38届CMO试题' }
      ]
    }
  ],
  '物理': [
    {
      id: 'ipho',
      name: '国际物理奥林匹克 (IPhO)',
      subject: '物理',
      organizer: '国际物理奥林匹克委员会',
      format: '个人参赛，理论题+实验题',
      dates: '每年7月',
      eligibility: '高中学生',
      knowledgeScope: [
        '力学：牛顿定律、能量、动量',
        '电磁学：电场、磁场、电路',
        '热力学：热力学定律、气体理论',
        '光学：几何光学、波动光学',
        '近代物理：相对论、量子力学基础'
      ],
      pastPapers: [
        { year: 2023, title: '第53届IPhO试题' },
        { year: 2022, title: '第52届IPhO试题' }
      ]
    },
    {
      id: 'apho',
      name: '亚洲物理奥林匹克 (APhO)',
      subject: '物理',
      organizer: '亚洲物理奥林匹克委员会',
      format: '个人参赛，理论题+实验题',
      dates: '每年5月',
      eligibility: '亚洲地区高中学生',
      knowledgeScope: [
        '与IPhO相同',
        '附加：物理竞赛解题技巧'
      ],
      pastPapers: [
        { year: 2023, title: '第24届APhO试题' },
        { year: 2022, title: '第23届APhO试题' }
      ]
    }
  ],
  '化学': [
    {
      id: 'icho',
      name: '国际化学奥林匹克 (IChO)',
      subject: '化学',
      organizer: '国际化学奥林匹克委员会',
      format: '个人参赛，理论题+实验题',
      dates: '每年7月',
      eligibility: '高中学生',
      knowledgeScope: [
        '无机化学：元素化学、配位化学',
        '有机化学：官能团反应、合成路线',
        '物理化学：热化学、电化学、动力学',
        '分析化学：滴定、光谱分析',
        '实验技能：分离、纯化、合成'
      ],
      pastPapers: [
        { year: 2023, title: '第55届IChO试题' },
        { year: 2022, title: '第54届IChO试题' }
      ]
    }
  ],
  '生物': [
    {
      id: 'ibo',
      name: '国际生物奥林匹克 (IBO)',
      subject: '生物',
      organizer: '国际生物奥林匹克委员会',
      format: '个人参赛，理论题+实验题',
      dates: '每年7月',
      eligibility: '高中学生',
      knowledgeScope: [
        '细胞生物学：细胞结构、代谢',
        '遗传学：孟德尔遗传、分子遗传',
        '生态学：种群生态、生态系统',
        '动物学/植物学：形态解剖',
        '实验技术：显微观察、PCR'
      ],
      pastPapers: [
        { year: 2023, title: '第34届IBO试题' },
        { year: 2022, title: '第33届IBO试题' }
      ]
    }
  ],
  '计算机': [
    {
      id: 'ioi',
      name: '国际信息学奥林匹克 (IOI)',
      subject: '计算机',
      organizer: '国际信息学奥林匹克委员会',
      format: '个人参赛，算法编程题目',
      dates: '每年8月',
      eligibility: '高中学生',
      knowledgeScope: [
        '算法基础：排序、搜索、递归',
        '数据结构：数组、链表、树、图',
        '图论：最短路径、网络流',
        '动态规划',
        '贪心算法'
      ],
      pastPapers: [
        { year: 2023, title: '第35届IOI试题' },
        { year: 2022, title: '第34届IOI试题' }
      ]
    },
    {
      id: 'usaco',
      name: '美国计算机奥林匹克 (USACO)',
      subject: '计算机',
      organizer: 'USACO',
      format: '在线比赛，算法编程题目',
      dates: '每年12月-3月（分4轮）',
      eligibility: '全球中学生',
      knowledgeScope: [
        '基础编程',
        '算法与数据结构',
        '高级算法：DP、图论',
        '竞赛技巧'
      ],
      pastPapers: [
        { year: 2023, title: '2022-2023赛季试题' },
        { year: 2022, title: '2021-2022赛季试题' }
      ]
    }
  ]
}

function searchCompetitions(req, res) {
  const { subject } = req.query
  
  if (!subject) {
    return res.status(400).json({ message: '请输入学科名称' })
  }
  
  const normalizedSubject = subject.toLowerCase()
  const competitions = competitionData[normalizedSubject] || competitionData[subject] || []
  
  setTimeout(() => {
    res.json({ competitions })
  }, 500)
}

function getCompetitionDetail(req, res) {
  const { id } = req.params
  
  for (const subject in competitionData) {
    const competition = competitionData[subject].find(c => c.id === id)
    if (competition) {
      return res.json(competition)
    }
  }
  
  return res.status(404).json({ message: '未找到该竞赛信息' })
}

export { searchCompetitions, getCompetitionDetail }
