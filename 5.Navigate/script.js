//Select the last child of the <ol> tag and put it at the beginning of the list

const ol = document.querySelector('ol');
const a = ol.lastElementChild; 
const b = ol.firstElementChild; 

ol.insertBefore(a, b);

//Move the <h2> of the third section in the second one and vice-versa

const sectiontwo = document.querySelector('main').children[1]
const sectionthree = document.querySelector('main').children[2]

const pSecond = sectiontwo.children[1]
const pThree = sectionthree.children[1]

const h2second = sectionthree.children[0]
const divThird= sectionthree.children[0]
const h2three = sectiontwo.children[0]

sectiontwo.insertBefore(h2second, pSecond)
sectionthree.insertBefore(h2three, pThree)

//Delete the last section from the DOM, we don't need it anyways

sectionthree.remove(); 

