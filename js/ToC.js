let mdContent = document.querySelector("zero-md").shadowRoot.lastChild

let allh2,
allh3
let allTitles = []
const tocContainer = document.querySelector('.ToC');
// const tocContainer = document.createElement('div')

function generateToc() {
    console.log(allTitles);
    allTitles.forEach((title) => {
        const level = parseInt(title.tagName.substring(1)); // Obtient le niveau du titre (1 pour h1, 2 pour h2, etc.)
        const indentation = '&emsp;'.repeat(level - 1); // Génère des tabulations en fonction du niveau

        const tocItem = document.createElement('div');
        tocItem.innerHTML = `${indentation}<a href="#${title.id}">${title.textContent}</a>`;
        tocContainer.appendChild(tocItem);
    });
}

function pullContent () {
    allh2 = mdContent.querySelectorAll("h2")
    allh3 = mdContent.querySelectorAll("h3")
    
    if (allh2.length) {
        allh2.forEach(element => {
            allTitles.push(element)
        });
        allh3.forEach(element => {
            allTitles.push(element)
        });
        allTitles.forEach((element) => {
            element.classList.add('mdTitle')
        })
        allTitles = []
        let goodOrderTitles = mdContent.querySelectorAll(".mdTitle")
        goodOrderTitles.forEach(element => {
            allTitles.push(element)
        });
        generateToc();
    } else {
      setTimeout(pullContent, 100); // try again in 100 milliseconds
    }
}



pullContent();


