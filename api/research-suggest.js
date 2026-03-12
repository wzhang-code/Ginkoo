import OpenAI from 'openai'

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com/v1',
  apiKey: 'sk-c63189a4045d45919e3c21d1f3aa5a52'
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { majorDirection, personalBackground, hobbies, habits } = req.body
  
  if (!majorDirection) {
    return res.status(400).json({ message: '请选择目标专业方向' })
  }
  
  const userContext = []
  if (personalBackground) userContext.push(`学术背景: ${personalBackground}`)
  if (hobbies) userContext.push(`兴趣爱好: ${hobbies}`)
  if (habits) userContext.push(`个人特点: ${habits}`)
  
  const prompt = `你是一个学术研究顾问。请根据以下信息，为学生生成4个定制化的研究项目建议。

学生信息：
- 目标专业: ${majorDirection}
${userContext.length > 0 ? '- ' + userContext.join('\n- ') : ''}

要求：
1. 每个建议必须包含：title（项目标题）、description（项目描述，2-3句话）、requiredSkills（所需技能数组，4-6项）、expectedOutcomes（预期成果）、timeline（推荐时间线）
2. 项目要结合学生的个人背景和兴趣特点
3. 项目难度要适合本科生水平
4. 使用英文输出 title 和 requiredSkills，中文输出其他字段

请以 JSON 数组格式输出，格式如下：
[{"title": "...", "description": "...", "requiredSkills": ["...", "..."], "expectedOutcomes": "...", "timeline": "..."}]`

  try {
    const completion = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: '你是一个专业的学术研究顾问，擅长为学生提供研究项目建议。' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' }
    })
    
    const suggestions = JSON.parse(completion.choices[0].message.content)
    
    res.json({ 
      suggestions: Array.isArray(suggestions) ? suggestions : [],
      major: majorDirection
    })
  } catch (error) {
    console.error('AI 生成失败:', error)
    res.status(500).json({ message: '生成失败，请稍后重试' })
  }
}
