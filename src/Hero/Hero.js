import './Hero.css'

export const printHero = () => {
  const appContainer = document.querySelector('#app')
  const heroSection = document.createElement('section')
  const heroInfo = document.createElement('article')
  heroInfo.className = 'hero-info'
  heroSection.className = 'hero-container'
  heroSection.id = 'home'

  const h1 = document.createElement('h1')
  h1.textContent = 'Verónica Centeno'
  const h2 = document.createElement('h2')
  h2.textContent = 'Full Stack Developer'

  const heroP = document.createElement('p')
  heroP.textContent =
    " Hi, I'm Veronica, nice to meet you. I'm a full-stack developer and I enjoy creating robust, scalable products with excellent user experiences and solid backend support. "

  const heroImg = document.createElement('img')
  heroImg.src = 'https://res.cloudinary.com/dzqoduh1s/image/upload/v1722323945/my-photo_dxvf5a.png'
  heroImg.alt = 'my-photo'

  const decorativeElement = document.createElement('div')
  const decorativeElement2 = document.createElement('div')
  decorativeElement2.className = 'decorative-element2'
  decorativeElement.className = 'decorative-element'

  heroInfo.append(h1, h2, heroP)
  decorativeElement.append(decorativeElement2)
  heroSection.append(heroInfo, heroImg, decorativeElement)
  appContainer.append(heroSection)
}
