function generateEssay(req, res) {
  const { targetSchool, targetMajor, wordCount, additionalRequirements } = req.body
  
  if (!req.file) {
    return res.status(400).json({ message: '请上传CV文件' })
  }
  
  if (!targetMajor) {
    return res.status(400).json({ message: '请输入目标专业' })
  }
  
  const essays = {
    '计算机科学': {
      base: `From a young age, I have been fascinated by the power of technology to transform lives. My passion for ${targetMajor} began when I wrote my first line of code in middle school, and since then, I have been dedicated to exploring the endless possibilities in this field.${targetSchool ? ` Applying to ${targetSchool} represents the next step in my academic journey, where I hope to deepen my understanding of computing and contribute to cutting-edge research.` : ''}`,
      additional: `Throughout my academic career, I have developed strong analytical and problem-solving skills through various projects and competitions. ${additionalRequirements || 'I am particularly interested in exploring the intersection of AI and real-world applications.'} This program will provide me with the knowledge and resources to turn my passion into a meaningful career.`
    },
    '工程': {
      base: `My interest in ${targetMajor} stems from a desire to build things that make a difference in the world. From disassembling electronics as a child to participating in engineering competitions in high school, I have always been driven by curiosity and a hands-on approach to learning.${targetSchool ? ` I am particularly drawn to ${targetSchool} because of its renowned engineering program and emphasis on practical innovation.` : ''}`,
      additional: `${additionalRequirements || 'I am excited about the opportunity to work on real-world engineering challenges and contribute to sustainable solutions.'} Through this program, I hope to develop the technical expertise and leadership skills necessary to become a professional engineer.`
    },
    '商科': {
      base: `Business has always been the language that drives global progress. My interest in ${targetMajor} was sparked by my observations of how companies innovate and create value in the modern economy.${targetSchool ? ` I am eager to join ${targetSchool} to learn from world-class faculty and collaborate with ambitious peers.` : ''}`,
      additional: `${additionalRequirements || 'I am particularly interested in how technology is reshaping business models and consumer behavior.'} This program will equip me with the strategic thinking and analytical skills needed to thrive in the dynamic business world.`
    },
    '医学': {
      base: `The desire to help others has been the guiding principle of my academic journey towards ${targetMajor}. Witnessing the impact of healthcare professionals in my community inspired me to pursue a career where I can make a tangible difference in people's lives.${targetSchool ? ` ${targetSchool}'s distinguished medical program aligns perfectly with my career aspirations.` : ''}`,
      additional: `${additionalRequirements || 'I am committed to lifelong learning and compassionate patient care.'} I believe this program will provide me with the clinical skills and research opportunities to become a competent and ethical medical professional.`
    }
  }
  
  const majorKey = Object.keys(essays).find(key => targetMajor.toLowerCase().includes(key.toLowerCase()))
  const essayTemplate = essays[majorKey] || essays['商科']
  
  let essay = essayTemplate.base + ' ' + essayTemplate.additional
  
  const words = essay.split(/\s+/).filter(w => w.length > 0)
  if (words.length > wordCount) {
    essay = words.slice(0, wordCount).join(' ') + '...'
  }
  
  essay += '\n\nI am confident that my academic background, combined with my passion and dedication, will make me a valuable contributor to this program. I look forward to the opportunity to contribute to and learn from the academic community.'
  
  setTimeout(() => {
    res.json({ essay })
  }, 1500)
}

export { generateEssay }
