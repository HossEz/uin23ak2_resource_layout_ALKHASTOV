const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]


const HtmlResources = resources.filter(resource => resource.category === "HTML", );
const CssResources = resources.filter(resource => resource.category === "CSS");
const JavascriptResources = resources.filter(resource => resource.category === "JavaScript");
const ReactResources = resources.filter(resource => resource.category === "React");
const SanityResources = resources.filter(resource => resource.category === "Sanity and headless CMS");

let menuHTML = ""
let menuHTML2 = ""

HtmlResources.map(category => {
    menuHTML += `<button id="html-button" class="categorybtn">${category.category}</button>`;
    menuHTML2 += `<h2>${category.category}</h2>`
    menuHTML2 += `<p>${category.text}</p>`;
category.sources.map(sources => {
    menuHTML2 += `<ul><li><a href="${sources.url}">${sources.title}</a></li></ul>`
}); 
});
CssResources.map(category => {
    menuHTML += `<button id="css-button" class="categorybtn">${category.category}</button>`;
});
JavascriptResources.map(category => {
    menuHTML += `<button id="javascript-button" class="categorybtn">${category.category}</button>`;
});
ReactResources.map(category => {
    menuHTML += `<button id="react-button" class="categorybtn">${category.category}</button>`;
});
SanityResources.map(category => {
    menuHTML += `<button id="sanity-button" class="categorybtn">${category.category}</button>`;
});

document.querySelector("#categories").innerHTML = menuHTML;
document.querySelector(".category-content").innerHTML = menuHTML2;

const htmlButton = document.getElementById("html-button")
const cssButton = document.getElementById("css-button")
const javascriptButton = document.getElementById("javascript-button")
const reactButton = document.getElementById("react-button")
const sanityButton = document.getElementById("sanity-button")

document.getElementById("html-button").classList.toggle("active");
htmlButton.addEventListener("click", () => {
    let htmlContent = "";
    HtmlResources.map(resource => {
    htmlContent += `<h2>${resource.category}</h2>`;
    htmlContent += `<p>${resource.text}</p>`;
    resource.sources.map(source => {
    htmlContent += `<ul><li><a href="${source.url}">${source.title}</a></li></ul>`;
    });
    });
    document.querySelector(".category-content").innerHTML = htmlContent;
    });

cssButton.addEventListener("click", () => {
    let cssContent = "";

    CssResources.map(resource => {
    cssContent += `<h2>${resource.category}</h2>`;
    cssContent += `<p>${resource.text}</p>`;
    resource.sources.map(source => {
    cssContent += `<ul><li><a href="${source.url}">${source.title}</a></li></ul>`;
    });
    });
    document.querySelector(".category-content").innerHTML = cssContent;
    });

javascriptButton.addEventListener("click", () => {
    let javascriptContent = "";
    JavascriptResources.map(resource => {
    javascriptContent += `<h2>${resource.category}</h2>`;
    javascriptContent += `<p>${resource.text}</p>`;
    resource.sources.map(source => {
    javascriptContent += `<ul><li><a href="${source.url}">${source.title}</a></li></ul>`;
    });
    });
    document.querySelector(".category-content").innerHTML = javascriptContent;
    });

reactButton.addEventListener("click", () => {
    let reactContent = "";
    ReactResources.map(resource => {
    reactContent += `<h2>${resource.category}</h2>`;
    reactContent += `<p>${resource.text}</p>`;
    resource.sources.map(source => {
    reactContent += `<ul><li><a href="${source.url}">${source.title}</a></li></ul>`;
    });
    });
    document.querySelector(".category-content").innerHTML = reactContent;
    });

sanityButton.addEventListener("click", () => {
    let sanityContent = "";
    SanityResources.map(resource => {
    sanityContent += `<h2>${resource.category}</h2>`;
    sanityContent += `<p>${resource.text}</p>`;
    resource.sources.map(source => {
    sanityContent += `<ul><li><a href="${source.url}">${source.title}</a></li></ul>`;
    });
    });
    document.querySelector(".category-content").innerHTML = sanityContent;
    });
    
    
const categoryTabs = document.querySelectorAll('.categorybtn')

categoryTabs.forEach(category => {
    category.addEventListener('click', event => {
        categoryTabs.forEach(category => {
            category.classList.remove('active');
        });
        event.target.classList.add('active');
    });
});



