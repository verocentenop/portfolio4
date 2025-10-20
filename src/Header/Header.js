import './Header.css'

export const printHeader = () => {
  const appContainer = document.querySelector('#app')
  const headerContainer = document.createElement('header')
  headerContainer.className = 'header'
  const img = document.createElement('img')
  img.className = 'logo-image'

  img.src =
    'https://res.cloudinary.com/dzqoduh1s/image/upload/v1760972780/logo_cpuagu.png'

  img.alt = 'logo'

  const nav = document.createElement('nav')
  const navlinks = document.createElement('ul')
  navlinks.innerHTML = `<li> <a href="#" id="homeLink">Home</a></li>
                        <li> <a href="#" id="skillsLink">Skills</a></li>
                        <li> <a href="#" id="projectsLink">Projects</a></li>
                        <li> <a href="#" id="contactLink">Contact</a></li>`
  nav.append(navlinks)
  headerContainer.append(img, nav)
  appContainer.append(headerContainer)

  document.getElementById('homeLink').addEventListener('click', (event) => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' })
  })

  document.getElementById('skillsLink').addEventListener('click', (event) => {
    event.preventDefault()
    toggleSection('skills')
  })

  document.getElementById('projectsLink').addEventListener('click', (event) => {
    event.preventDefault()
    toggleSection('projects')
  })

  document.getElementById('contactLink').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  })
}

const toggleSection = (sectionId) => {
  const sections = ['skills', 'projects']
  sections.forEach((id) => {
    const section = document.getElementById(id)
    if (sectionId === id) {
      section.classList.remove('hidden')
      section.scrollIntoView({ behavior: 'smooth' })
    } else {
      section.classList.add('hidden')
    }
  })
}
