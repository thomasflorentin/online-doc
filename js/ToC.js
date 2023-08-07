const tableOfContent = []

let mdContent = document.querySelector("zero-md").shadowRoot.lastChild

let allh2 = mdContent.querySelectorAll("h2")
let allh3 = mdContent.querySelectorAll("h3")
let allTitles = []

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
        createToC()
    } else {
      setTimeout(pullContent, 100); // try again in 100 milliseconds
    }
}



// ToC tuto : https://stackoverflow.com/questions/187619/is-there-a-javascript-solution-to-generating-a-table-of-contents-for-a-page

let createToC = () => {
    let newDiv = document.createElement('div')
    allTitles.forEach((el) => {
        newDiv.appendChild(el)
    })
    newDiv.classList.add('displayNone')
    document.body.appendChild(newDiv);
    
    let toc = "";
    let level = 0;
    
    newDiv.innerHTML =
        newDiv.innerHTML.replace(
            /<h([\d])>([^<]+)<\/h([\d])>/gi,
            function (str, openLevel, titleText, closeLevel) {
                console.log(str + openLevel + titleText + closeLevel);
                if (openLevel != closeLevel) {
                    return str;
                }
    
                if (openLevel > level) {
                    toc += (new Array(openLevel - level + 1)).join("<ul>");
                } else if (openLevel < level) {
                    toc += (new Array(level - openLevel + 1)).join("</ul>");
                }
    
                level = parseInt(openLevel);
    
                let anchor = titleText.replace(/ /g, "-");
                toc += "<li><a href=\"#" + anchor + "\">" + titleText + "</a></li>";
    
                return "<h" + openLevel + "><a name=\"" + anchor + "\">" + titleText + "</a></h" + closeLevel + ">";
            }
        );
    
    if (level) {
        toc += (new Array(level + 1)).join("</ul>");
    }
    
    document.querySelector('.single__intro--summary').innerHTML += toc;
    console.log(newDiv);
    console.log(toc);
}

pullContent();