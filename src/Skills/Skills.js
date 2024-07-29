import './Skills.css'
import { nextTools, toolsArray } from './Tools-array'

export const printSkills = () => {
  const appContainer = document.querySelector('#app')
  const skillsSection = document.createElement('section')
  skillsSection.className = 'skills-container'
  skillsSection.id = 'skills'

  const skillsInfo = document.createElement('div')
  skillsInfo.className = 'skills-info'

  const textSkills = document.createElement('p')
  textSkills.className = 'text-skills'
  textSkills.textContent =
    'I love to design with creativity and ingenuity, I value strong content structure, clean design patterns, and thoughtful interactions. In building JavaScript applications, I am equipped with just the right tools, and i know how to work with them to deliver fast, resilient solutions optimized for scale. Performance and scalabilty are priorities on my projects. '

  const decorativeElement = document.createElement('div')
  const decorativeElement2 = document.createElement('div')
  decorativeElement2.className = 'decorative-element2-skills'
  decorativeElement.className = 'decorative-element-skills'
  skillsInfo.append(decorativeElement, decorativeElement2, textSkills)
  skillsSection.append(skillsInfo)
  appContainer.append(skillsSection)
}

export const printTools = () => {
  const sectionTools = document.querySelector('.skills-container')
  const sectionSkills = document.createElement('section')
  sectionSkills.className = 'section-tools'
  const skillsTitle = document.createElement('h3')
  skillsTitle.textContent = 'My languages and tools:'

  const sectionNext = document.createElement('section')
  sectionNext.className = 'section-tools'
  const nextTitle = document.createElement('h3')
  nextTitle.textContent = 'I am learning:'

  const decorativeTriangle = document.createElement('div')
  decorativeTriangle.className = 'decorative-triangle'

  for (const tools of toolsArray) {
    const skillsBox = document.createElement('article')
    const img = document.createElement('img')
    const skillName = document.createElement('h4')

    img.src = tools.img
    skillName.textContent = tools.name

    skillsBox.className = 'skills-article'
    img.className = 'img-name'
    skillName.className = 'skill-name'

    skillsBox.append(img, skillName)
    sectionSkills.append(skillsBox)
    sectionTools.append(skillsTitle, sectionSkills)
  }
  for (const tool of nextTools) {
    const skillsBox = document.createElement('article')
    const img = document.createElement('img')
    const skillName = document.createElement('h4')

    img.src = tool.img
    skillName.textContent = tool.name

    skillsBox.className = 'skills-article'
    img.className = 'img-name'
    skillName.className = 'skill-name'

    skillsBox.append(img, skillName)
    sectionNext.append(skillsBox)
    sectionTools.append(nextTitle, sectionNext, decorativeTriangle)
  }
}
