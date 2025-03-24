// console.log(Window);
// console.log(window);
// console.log(document);
// console.log(document.body);
// console.log(document.head);

// console.log(document.documentElement);
// const all = document.querySelector("html");

// console.log("firstChild: ",document.body.firstChild);
// console.log("lastChild:",document.body.lastChild);
// console.log(document.querySelector('#current').parentNode);

// console.log("Sibling:", document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);

}