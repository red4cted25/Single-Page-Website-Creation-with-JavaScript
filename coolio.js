const body = document.getElementsByTagName('body')[0]

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

// Footer VARIABLES
const footer = document.createElement('footer')
const divFooterContent = document.createElement('div')
const divFooterItem = document.createElement('div')

// Header CONTENT
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
divSearch.classList.add("search-bar")
inputSearch.type = "text"
inputSearch.placeholder = "Spaceflights at..."
buttonSearch.classList.add("search-bar-button")
buttonSearch.type = "submit"
buttonSearch.innerHTML = "SEARCH"

// Logo CONTENT
h1Main.classList.add("main-logo")
h1Main.id = "Home"
h1Main.innerHTML = "EXO"
h2Bottom.classList.add("bottom-logo")
h2Bottom.innerHTML = "Starliners"

// Gallery CONTENT
sectionVideo.classList.add("video-gallery")
divVideo.classList.add("video")
iFrameVideo.width = "960"
iFrameVideo.height = "540"
iFrameVideo.src = "https://www.youtube.com/embed/921VbEMAwwY"
iFrameVideo.allowFullscreen = true
sectionImage.classList.add("image-gallery")
divImageAstro.classList.add("image")
imgAstro.src = "./Assets/astronauts.jpg"
imgAstro.alt = "Astronauts working"
imgAstro.width = "300"
imgAstro.height = "300"
divImageChute.classList.add("image")
imgChute.src = "./Assets/demoChutes.jpg"
imgChute.alt = "Demo parachutes"
imgChute.width = "300"
imgChute.height = "300"
divImageLanding.classList.add("image")
imgLanding.src = "./Assets/moonLanding.jpg"
imgLanding.alt = "Our rocket on the moon"
imgLanding.width = "300"
imgLanding.height = "300"
divImageRocket.classList.add("image")
imgRocket.src = "./Assets/reuseableRockets.jpg"
imgRocket.alt = "Showcasing reusable rockets"
imgRocket.width = "300"
imgRocket.height = "300"
divImageLaunch.classList.add("image")
imgLaunch.src = "./Assets/rocketLaunch.jpg"
imgLaunch.alt = "A rocket launch at SpaceX"
imgLaunch.width = "300"
imgLaunch.height = "300"
divImageDock.classList.add("image")
imgDock.src = "./Assets/spaceshipDock.jpg"
imgDock.alt = "The Dragon Spaceship docking to the ISS"
imgDock.width = "300"
imgDock.height = "300"

// Services CONTENT
sectionServices.classList.add("grid-container")
sectionServices.id = "services"
divGridServices.classList.add("grid-item")
h2GridServices.innerHTML = "Our Services"
pGridServices.innerHTML = "Journey to other worlds on our first-rate reusable rockets, or have items shipped interplanetary."
divGridUpgrades.classList.add("grid-item")
h2GridUpgrades.innerHtml = "Optional Upgrades"
pGridUpgrades.innerHTML = "Want to have the entire journey to just your group? Fly in a starship just for you! (Extra fees may apply)"
divGridPrices.classList.add("grid-item")
h2GridPrices.innerHTML = "Prices"
pGridPrices1.innerHTML = "Lunar flights start at 6k per person."
pGridPrices2.innerHTML = "Martian flights start at 36k per person."
pGridPrices3.innerHTML = "Contact our service team for discounted flights on cargo starships."

// Footer CONTENT
divFooterContent.classList.add('footer-content')
divFooterItem.classList.add('footer-item')
divFooterItem.innerHTML = "Credit: Lucas Saner and Nico Diaz | Contact: lsaner720@west-mec.org, ndiaz413@west-mec.org | ©Copyright 2037 to SpaceX for all content."

// Header STRUCTURE
body.appendChild(header)
header.appendChild(nav)
nav.appendChild(ul)
ul.appendChild(navHome)
navHome.appendChild(navAHome)
ul.appendChild(navGallery)
navGallery.appendChild(navAGallery)
ul.appendChild(navServices)
navServices.appendChild(navAServices)
ul.appendChild(navOrder)
navOrder.appendChild(navAOrder)
ul.appendChild(divSearch)
divSearch.appendChild(inputSearch)
divSearch.appendChild(buttonSearch)

// Logo STRUCTURE
body.appendChild(h1Main)
body.appendChild(h2Bottom)

// Gallery STRUCTURE
body.appendChild(sectionVideo)
sectionVideo.appendChild(divVideo)
divVideo.appendChild(iFrameVideo)
body.appendChild(sectionImage)
sectionImage.appendChild(divImageAstro)
divImageAstro.appendChild(imgAstro)
sectionImage.appendChild(divImageChute)
divImageChute.appendChild(imgChute)
sectionImage.appendChild(divImageLanding)
divImageLanding.appendChild(imgLanding)
sectionImage.appendChild(divImageLaunch)
divImageLaunch.appendChild(imgLaunch)
sectionImage.appendChild(divImageDock)
divImageDock.appendChild(imgDock)

// Services STRUCTURE
body.appendChild(sectionServices)
sectionServices.appendChild(divGridServices)
divGridServices.appendChild(h2GridServices)
divGridServices.appendChild(pGridServices)
sectionServices.appendChild(divGridUpgrades)
divGridUpgrades.appendChild(h2GridUpgrades)
divGridUpgrades.appendChild(pGridUpgrades)
sectionServices.appendChild(divGridPrices)
divGridPrices.appendChild(h2GridPrices)
divGridPrices.appendChild(pGridPrices1)
divGridPrices.appendChild(pGridPrices2)
divGridPrices.appendChild(pGridPrices3)
sectionServices.appendChild(divGridReviews)
divGridReviews.appendChild(h2GridReviews)
divGridReviews.appendChild(pGridReviews1)
divGridReviews.appendChild(pGridReviews2)
divGridReviews.appendChild(pGridReviews3)

