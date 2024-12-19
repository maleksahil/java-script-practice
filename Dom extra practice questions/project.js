let array = [
  {
    img: "./person1.avif",
    Name: "sahil",
    age: 19,
    idNo: 12654,
  },
  {
    img: "./person2.avif",
    Name: "adil",
    age: 24,
    idNo: 12654,
  },
  {
    img: "./person3.avif",
    Name: "riaz",
    age: 21,
    idNo: 12654,
  },
  {
    img: "./person4.avif",
    Name: "hasina",
    age: 25,
    idNo: 12654,
  },
];
let main = document.querySelector(".container");

function display() {
  let currentIndex = -1;

  let btn = document.createElement("button");
  btn.append("next");

  main.appendChild(btn);

  btn.addEventListener("click", () => {
    currentIndex++;

    let container = document.createElement('div')

    container.style.height = '300px'
    container.style.width = '200px'
    container.style.backgroundColor = 'skyblue'
    container.style.color = 'white'
  
    container.classList.add('card')


    let currentobj = array[currentIndex];

    let image = document.createElement("img");

    image.setAttribute("src", currentobj.img);

    container.appendChild(image);

    let name = document.createElement('p');

    name.textContent = currentobj.Name;

    container.appendChild(name)

    let age = document.createElement('p');

    age.textContent = currentobj.age;

    container.appendChild(age)

    let idno = document.createElement('p');

    idno.textContent = currentobj.idNo

    container.appendChild(idno)

    main.appendChild(container)
    
    console.log(currentobj);
    console.log(image);
  });
}

display();
