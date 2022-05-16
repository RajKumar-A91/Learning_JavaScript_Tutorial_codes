//DOM: Document Object Model manipulation in javaScript:
document
//returns total html document In which this script is located.
document.location
//returns entire information of html document in which this script is located.

//we use "document" to access html elements.
//we have some methods to manipulate html document.

//to get full element

let ele=document.getElementById('click');
//returns total html element with given ID;
console.log(ele);


let elemClass=document.getElementsByClassName('container');
//returns group of html elements with class name 'container';
// we can access first element of html with class name container by indexing
// elemClass[0];

console.log(elemClass);

elemClass[1].style.color='white';
elemClass[1].classList.add('bg-Primary');
//In the above statement we have added elemClass[1] with bg-primary class, so the element with bg-primary will be effected with the style defined in bg-primary.


elemClass[0].classList.add('ARK');

//we can also a particular class from class_list
//syntax: variable_name[index_of_class].classList.remove("Class_name");
elemClass[1].classList.remove('bg-Primary');

//we can also retreive or access HTML by innerHTML
console.log(elemClass[0].innerHTML);//returns the Total html of a elemClass[0]
console.log(elemClass[0].innerText);//returns the text in that html element.
console.log(ele.innerHTML);
console.log(ele.innerText);


//we can access element by its tagname
let e=document.getElementsByTagName('h1');
console.log(e);

let tn=document.getElementsByTagName('div');
console.log(tn);

//we can child element in an html element
let createdElement=document.createElement('p');
createdElement.innerText="This is created element dudes!!!";
tn[0].appendChild(createdElement);
//we can also replace and createdElement with another createdElement:
let createdElement2=document.createElement('b');
createdElement2.innerText="This is created bold for replacement of firstly created element see the magic!!";
tn[0].replaceChild(createdElement2,createdElement);
//createdElement gets replaced by createdElement2.


//we can also remove child which
//removeChild(element);
tn[0].removeChild(createdElement2);

//we can get title of document:
//document.title
console.log(document.title);//gives the title of html document
console.log(document.location);//gives the location of html document.
console.log(document.url);//also gives the url of the html document.
console.log(document.scripts);//returns no.of scripts in html document.
console.log(document.links);//returns links in html document.
console.log(document.images);//returns images in html document.
console.log(document.forms);//returns forms in html document.
console.log(document.domain);//returns domain of the html document.


//Selecting using query:
let sel=document.querySelector('.container');
//the above statement returns the first container class element:
console.log(sel);
sel=document.querySelectorAll('.container');
//the above statement returns the all container class element:
console.log(sel);
