import './style.css'
import { printHeader } from '/src/Header/Header'
import { printHero } from '/src/Hero/Hero'
import { printSkills } from '/src/Skills/Skills'
import { printTools } from '/src/Skills/Skills'
import { printProjects } from '/src/Projects/Projects'
import { printFooter } from './src/Footer/Footer'

const init = async () => {
  printHeader()
  printHero()
  printSkills()
  printTools()
  printProjects()
  printFooter()
}
init()
