import './Projects.css'
import { arrayProjects } from './arrayProjects'

export const printProjects = () => {
  const appContainer = document.querySelector('#app')
  const projectsSection = document.createElement('section')
  projectsSection.className = 'projects-section '
  projectsSection.id = 'projects'

  for (const project of arrayProjects) {
    const projectBox = document.createElement('article')
    projectBox.className = 'project-Box'
    const buttonsBox = document.createElement('div')
    buttonsBox.className = 'buttons'
    const projectName = document.createElement('h4')
    const img = document.createElement('img')
    const projectP = document.createElement('p')
    const projectA = document.createElement('a')
    const codeLink = document.createElement('a')

    img.src = project.img
    projectName.textContent = project.name
    projectP.textContent = project.p
    projectA.href = project.link
    projectA.textContent = 'Visit the website'
    codeLink.href = project.code
    codeLink.textContent = 'See code'

    projectBox.className = 'project-article'
    img.className = 'project-img'
    projectName.className = 'project-name'

    projectBox.append(projectName, img, projectP, buttonsBox)
    buttonsBox.append(projectA, codeLink)
    projectsSection.append(projectBox)
  }
  appContainer.append(projectsSection)
}
