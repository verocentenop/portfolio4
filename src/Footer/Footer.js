import './Footer.css'

export const printFooter = () => {
  const appContainer = document.querySelector('#app')
  const footerSection = document.createElement('section')
  footerSection.className = 'footer-section'
  footerSection.id = 'contact'

  const emailBox = document.createElement('div')
  const prom = document.createElement('p')
  prom.textContent =
    'Interested in working together? We should set up a time to talk. Coffee is on me.'
  prom.className = 'prom'
  emailBox.classList.add('email-box')
  const emailText = document.createElement('p')
  emailText.id = 'email'
  emailText.innerText = 'verocentenop@gmail.com'
  const copyButton = document.createElement('button')
  copyButton.textContent = 'Copy Email'
  copyButton.className = 'copy-button'
  copyButton.onclick = function () {
    const textarea = document.createElement('textarea')
    textarea.value = emailText.innerText
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    alert('¡Copiado!')
  }

  const rrss = document.createElement('div')
  const rrssLi = document.createElement('img')
  rrssLi.src = 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png'

  const rrssLiLink = document.createElement('a')
  rrssLiLink.href = 'https://www.linkedin.com/in/veronica-centeno-a7222b1a1/'
  rrssLiLink.target = '_blank'
  rrssLiLink.appendChild(rrssLi)
  const rrssGh = document.createElement('img')
  rrssGh.src = 'https://cdn-icons-png.flaticon.com/128/25/25657.png'
  const rrssGhLink = document.createElement('a')
  rrssGhLink.href = 'https://github.com/verocentenop'
  rrssGhLink.target = '_blank'
  rrssGhLink.appendChild(rrssGh)

  const footerP = document.createElement('p')
  footerP.textContent = '© 2024 | Verónica Centeno'
  emailBox.append(emailText, copyButton)
  rrss.append(rrssGhLink, rrssLiLink)
  footerSection.append(prom, emailBox, rrss, footerP)
  appContainer.append(footerSection)
}
