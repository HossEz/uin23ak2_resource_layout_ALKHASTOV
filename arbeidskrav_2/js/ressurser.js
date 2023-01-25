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

// Variabelen brukes for å bygge HTML-koden for knappene som skal vise kategoriene våre.
let menuHTML = "";

// Oppretter en variabel for alle kategoriene
const categories = ["HTML", "CSS", "JavaScript", "React", "Sanity and headless CMS"];

// Løkker gjennom alle kategoriene og lager en knapp for hver kategori, 
// og legger til data-attributtet "category" til knappen. Legger disse knappene til elementet med id "categories"
categories.forEach(category => {
    menuHTML += `<button class="categorybtn" data-category="${category}">${category}</button>`;
});
// Legger til knappene i HTML-koden
document.querySelector("#categories").innerHTML = menuHTML;

// Legger til en click-event til hver knapp
document.querySelectorAll('.categorybtn').forEach(button => {
    button.addEventListener('click', event => {
        // Henter verdien av data-attributtet "category" fra knappen som ble trykket på
        const category = event.target.dataset.category;
        // Filtrerer resources-arrayet for å kun få ressursene for den valgte kategorien
        const filteredResources = resources.filter(resource => resource.category === category);
        // Lager en variabel som inneholder innholdet som skal vises i .category-content elementet
        let content = "";
        // Løkker gjennom de filtrerte ressursene og legger til kategori-tittel og tekst,
        // samt lenkene som hører til
        filteredResources.forEach(resource => {
            content += `<h2>${resource.category}</h2>`;
            content += `<p>${resource.text}</p>`;
            resource.sources.forEach(source => {
                content += `<ul><li><a href="${source.url}" target="_blank">${source.title}</a></li></ul>`;
            });
        });
        // Setter innholdet i .category-content elementet
        document.querySelector(".category-content").innerHTML = content;
        
        document.querySelectorAll(".categorybtn").forEach(tab => {
            // Fjerner "active" klassen fra alle knappene
            tab.classList.remove('active');
        });
        // Legger til "active" klassen til den trykte knappen
        event.target.classList.add('active');
        // Dette gjør at kun den trykte knappen har "active" klassen,
        // og det viser brukeren om hvilken kategori som er valgt.
    });
});
// Første kategori knapp trykkes automatisk når siden lastes inn,
//for å vise innholdet som er koblet til denne kategorien.
document.querySelector('.categorybtn').click();

