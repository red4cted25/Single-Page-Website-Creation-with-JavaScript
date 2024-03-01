const body = document.getElementsByTagName('body')

// Create header tag + insides VARIABLES
const header = document.createElement('header')
const nav = document.createElement('nav')
const ul = document.createElement('ul')
const navHome = document.createElement('li')
const navAHome = document.createElement('a')
const navGallery = document.createElement('li')
const navAGallery = document.createElement('a')
const navServices = document.createElement('li')
const navAServices = document.createElement('a')
const navOrder = document.createElement('li')
const navAOrder = document.createElement('a')
const divSearch = document.createElement('div')
const inputSearch = document.createElement('input')
const buttonSearch = document.createElement('button')

// Logo VARIABLES
const h1Main = document.createElement('h1')
const h2Bottom = document.createElement('h2')

// Gallerys VARIABLES
const sectionVideo = document.createElement('section')
const sectionImage = document.createElement('section')
const divVideo = document.createElement('div')
const iFrameVideo = document.createElement('iframe')
const divImageAstro = document.createElement('div')
const imgAstro = document.createElement('img')
const divImageChute = document.createElement('div')
const imgChute = document.createElement('img')
const divImageLanding = document.createElement('div')
const imgLanding = document.createElement('img')
const divImageRocket = document.createElement('div')
const imgRocket = document.createElement('img')
const divImageLaunch = document.createElement('div')
const imgLaunch = document.createElement('img')
const divImageDock = document.createElement('div')
const imgDock = document.createElement('img')

// Services VARIABLES
const sectionServices = document.createElement('section')
const divGridServices = document.createElement('div')
const h2GridServices = document.createElement('h2')
const pGridServices = document.createElement('p')
const divGridUpgrades = document.createElement('div')
const h2GridUpgrades = document.createElement('h2')
const pGridUpgrades = document.createElement('p')
const divGridPrices = document.createElement('div')
const h2GridPrices = document.createElement('h2')
const pGridPrices1 = document.createElement('p')
const pGridPrices2 = document.createElement('p')
const pGridPrices3 = document.createElement('p')
const divGridReviews = document.createElement('div')
const h2GridReviews = document.createElement('h2')
const pGridReviews1 = document.createElement('p')
const pGridReviews2 = document.createElement('p')
const pGridReviews3 = document.createElement('p')

// Header Content
nav.classList.add("sticky")
ul.classList.add("nav-links")
navAHome.href = "#Home"
navAHome.innerHTML = "Home"
navAGallery.href = "#Gallery"
navAGallery.innerHTML = "Gallery"
navAServices.href = "#Services"
navAServices.innerHTML = "Services"
navAOrder.href = "#Order"
navAOrder.innerHTML = "Order"


// Header STRUCTURE
document.body.appendChild(header)
document.header.appendChild(nav)
document.nav.appendChild(ul)
document.ul.appendChild(navHome)
document.navHome.appendChild(navAHome)
document.ul.appendChild(navGallery)
document.navGallery.appendChild(navAGallery)
document.ul.appendChild(navServices)
document.nacServices.appendChild(navAServices)
document.ul.appendChild(navOrder)
document.navOrder.appendChild(navAOrder)
document.ul.appendChild(divSearch)
document.divSearch.appendChild(inputSearch)
document.divSearch.appendChild(buttonSearch)

// Logo STRUCTURE
document.body.appendChild(h1Main)
document.body.appendChild(h2Bottom)

// Gallery STRUCTURE
document.body.appendChild(sectionVideo)
document.sectionVideo.appendChild(divVideo)
document.divVideo.appendChild(iFrameVideo)
document.body.appendChild(sectionImage)
document.sectionImage.appendChild(divImageAstro)
document.divImageAstro.appendChild(imgAstro)
document.sectionImage.appendChild(divImageChute)
document.divImageChute.appendChild(imgChute)
document.sectionImage.appendChild(divImageLanding)
document.divImageLanding.appendChild(imgLanding)
document.sectionImage.appendChild(divImageLaunch)
document.divImageLaunch.appendChild(imgLaunch)
document.sectionImage.appendChild(divImageDock)
document.divImageDock.appendChild(imgDock)

// Services STRUCTURE
document.body.appendChild(sectionServices)
document.sectionServices.appendChild(divGridServices)
document.divGridServices.appendChild(h2GridServices)
document.divGridServices.appendChild(pGridServices)
document.sectionUpgrades.appendChild(divGridUpgrades)
document.divGridUpgrades.appendChild(h2GridUpgrades)
document.divGridUpgrades.appendChild(pGridUpgrades)
document.sectionServices.appendChild(divGridPrices)
document.divGridPrices.appendChild(h2GridPrices)
document.divGridPrices.appendChild(pGridPrices1)
document.divGridPrices.appendChild(pGridPrices2)
document.divGridPrices.appendChild(pGridPrices3)
document.sectionServices.appendChild(divGridReviews)
document.divGridReviews.appendChild(h2GridReviews)
document.divGridReviews.appendChild(pGridReviews1)
document.divGridReviews.appendChild(pGridReviews2)
document.divGridReviews.appendChild(pGridReviews3)

