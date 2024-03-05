const body = document.getElementsByTagName('body')[0]

// Body STYLE
body.style.margin = "0";
body.style.padding = "0";
body.style.backgroundImage = "url('./Assets/endless-constellation.svg')";
body.style.backgroundRepeat = "repeat";
body.style.backgroundPosition = "center center";
body.style.overflowX = "hidden";

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
nav.className = "sticky"
ul.className = "nav-links"
navAHome.href = "#Home"
navAHome.innerHTML = "Home"
navAGallery.href = "#Gallery"
navAGallery.innerHTML = "Gallery"
navAServices.href = "#Services"
navAServices.innerHTML = "Services"
navAOrder.href = "#Order"
navAOrder.innerHTML = "Order"
divSearch.className ="search-bar"
inputSearch.type = "text"
inputSearch.placeholder = "Spaceflights at..."
buttonSearch.className ="search-bar-button"
buttonSearch.type = "submit"
buttonSearch.innerHTML = "SEARCH"

// Header STYLE
header.style.color = "#fff";
header.style.padding = "10px 0";
nav.style.position = "fixed";
nav.style.top = "0";
nav.style.zIndex = "100";
// Attempt at styling header
const navLinks = document.querySelectorAll(".nav-links li");
navLinks.forEach(link => {
    link.style.margin = "20px 15px";
});
const navAnchors = document.querySelectorAll(".nav-links a");
navAnchors.forEach(anchor => {
    anchor.style.textDecoration = "none";
    anchor.style.color = "#fff";
    anchor.style.fontWeight = "bold";
    anchor.style.transition = "color 0.3s, background-color 0.3s";
    anchor.style.padding = "20px 20px";
    anchor.style.borderRadius = "5px";
    anchor.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    anchor.addEventListener("mouseover", () => {
        anchor.style.color = "#00489a";
        anchor.style.backgroundColor = "#151515";
    });
    anchor.addEventListener("mouseout", () => {
        anchor.style.color = "#fff";
        anchor.style.backgroundColor = "transparent";
    });
});

// Logo CONTENT
h1Main.className ="main-logo"
h1Main.id = "Home"
h1Main.innerHTML = "EXO"
h2Bottom.className ="bottom-logo"
h2Bottom.innerHTML = "Starliners"

// Gallery CONTENT
sectionVideo.className ="video-gallery"
divVideo.className ="video"
iFrameVideo.width = "960"
iFrameVideo.height = "540"
iFrameVideo.src = "https://www.youtube.com/embed/921VbEMAwwY"
iFrameVideo.allowFullscreen = true
sectionImage.className ="image-gallery"
divImageAstro.className ="image"
imgAstro.src = "./Assets/astronauts.jpg"
imgAstro.alt = "Astronauts working"
imgAstro.width = "300"
imgAstro.height = "300"
divImageChute.className ="image"
imgChute.src = "./Assets/demoChutes.jpg"
imgChute.alt = "Demo parachutes"
imgChute.width = "300"
imgChute.height = "300"
divImageLanding.className ="image"
imgLanding.src = "./Assets/moonLanding.jpg"
imgLanding.alt = "Our rocket on the moon"
imgLanding.width = "300"
imgLanding.height = "300"
divImageRocket.className ="image"
imgRocket.src = "./Assets/reuseableRockets.jpg"
imgRocket.alt = "Showcasing reusable rockets"
imgRocket.width = "300"
imgRocket.height = "300"
divImageLaunch.className ="image"
imgLaunch.src = "./Assets/rocketLaunch.jpg"
imgLaunch.alt = "A rocket launch at SpaceX"
imgLaunch.width = "300"
imgLaunch.height = "300"
divImageDock.className ="image"
imgDock.src = "./Assets/spaceshipDock.jpg"
imgDock.alt = "The Dragon Spaceship docking to the ISS"
imgDock.width = "300"
imgDock.height = "300"

// Gallery STYLE
sectionImage.style.display = "flex";
sectionImage.style.flexWrap = "wrap";
sectionImage.style.justifyContent = "space-between";
sectionImage.style.gap = "20px";
sectionImage.style.marginLeft = "10%";
sectionImage.style.marginTop = "800px";
document.querySelectorAll(".image").forEach(image => {
    image.style.flexBasis = "calc(33.33% - 20px)";
})

// Services CONTENT
sectionServices.className ="grid-container"
sectionServices.id = "services"
divGridServices.className ="grid-item"
h2GridServices.innerHTML = "Our Services"
pGridServices.innerHTML = "Journey to other worlds on our first-rate reusable rockets, or have items shipped interplanetary."
divGridUpgrades.className ="grid-item"
h2GridUpgrades.innerHtml = "Optional Upgrades"
pGridUpgrades.innerHTML = "Want to have the entire journey to just your group? Fly in a starship just for you! (Extra fees may apply)"
divGridPrices.className ="grid-item"
h2GridPrices.innerHTML = "Prices"
pGridPrices1.innerHTML = "Lunar flights start at 6k per person."
pGridPrices2.innerHTML = "Martian flights start at 36k per person."
pGridPrices3.innerHTML = "Contact our service team for discounted flights on cargo starships."
h2GridReviews.innerHTML = "Customer Reviews"
pGridReviews1.innerHTML = '"Life changing experience, it really makes you realize how speacial our planet is." - Neil D. Tyson'
pGridReviews2.innerHTML = '"Our family got to experience the best vacation of all time, shooting for a mars vacation soon! - Ace Kronos'
pGridReviews3.innerHTML = '"The sunset is otherwordly when your out there. PUN INTENDED >:P" - Jay Tsunami'

// Services STYLE
sectionServices.style.display = "grid";
sectionServices.style.marginTop = "20%";
sectionServices.style.gridTemplateColumns = "repeat(2, 1fr)";
sectionServices.style.gridGap = "20px";
sectionServices.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
sectionServices.style.marginBottom = "20%";
document.querySelectorAll(".grid-item").forEach(item => {
    item.style.backgroundColor = "#2b2b2b";
    item.style.padding = "20px";
    item.style.border = "5px solid #000000";
    item.style.color = "white";
    item.style.fontFamily = "modern";
})

// Footer CONTENT
divFooterContent.className ='footer-content'
divFooterItem.className ='footer-item'
divFooterItem.innerHTML = "Credit: Lucas Saner and Nico Diaz | Contact: lsaner720@west-mec.org, ndiaz413@west-mec.org | ©Copyright 2037 to SpaceX for all content."

// Footer STYLE
footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
footer.style.padding = "20px 0";
footer.style.marginTop = "340px";
divFooterContent.style.justifyContent = "space-around";
divFooterContent.style.fontFamily = "modern";
divFooterItem.style.fontFamily = "modern";
divFooterItem.style.display = "flex";
divFooterItem.style.justifyContent = "center";
divFooterItem.style.alignItems = "center";
divFooterItem.style.textAlign = "center";
divFooterItem.style.fontSize = "20px";
divFooterItem.style.textShadow = "5px 5px 4px rgba(27, 27, 27, 0.5)";
divFooterItem.style.paddingLeft = "50px";
divFooterItem.style.width = "100%";

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

// Footer STRUCTURE
body.appendChild(footer)
footer.appendChild(divFooterContent)
divFooterContent.appendChild(divFooterItem)