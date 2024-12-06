let row = document.getElementById('first-row');
// let form = document.getElementById('form');
// let inputs = form.querySelectorAll('input');
// let labels = form.querySelectorAll('label');
// let output = document.getElementById('output');

let obj = [

    //  Koenigsegg Jesko
    {
        image: "./Koenigsegg Jesko.jpg",
        heading: "Koenigsegg Jesko",
        price: 750
    },

    //  PAGANI HUAYRA
    {
        image: "./PAGANI HUAYRA.jpg",
        heading: "PAGANI HUAYRA",
        price: 350
    },

    //  Bugatti Chiron
    {
        image: "./bugatti chiron.jpg",
        heading: "Bugatti Chiron",
        price: 300
    },

    //For Urus
    {
        image: "./urus.jpeg",
        heading: "Lambo URUS",
        price: 150
    },

    //Ferrari
    {
        image: "./Ferrari Laferrari.jpg",
        heading: "Ferrari Laferrari",
        price: 140
    },

    //Lamborghini Revuelto
    {
        image: "./Lamborghini Revuelto.jpg",
        heading: "Lamborghini Revuelto",
        price: 145
    },

    //mercedish AMG GT
    {
        image: "./mercedish GLS.png",
        heading: "Mercedes AMG GT",
        price: 120
    },

    //BMW i8
    {
        image: "./BMW i8.jpg",
        heading: "BMW i8",
        price: 135
    },

    //RR Ghost
    {
        image: "./rr.jpg",
        heading: "Rolls Roys Ghost",
        price: 155
    },

    //RR Phantom
    {
        image: "./rr2.jpg",
        heading: "Rolls Roys Phantom",
        price: 256
    },

    //Bentley-Flying
    {
        image: "./Bentley-Flying.jpg",
        heading: "Bentley-Flying",
        price: 315
    },

    //Audi A6 E-Tron 
    {
        image: "./A6 e-Torn Audi.jpg",
        heading: "Audi A6 E-Tron",
        price: 89
    },

    //  Porsche Cayenne
    {
        image: "./Porsche Cayenne.jpg",
        heading: "Porsche Cayenne ",
        price: 282
    },

    //  Jeep-wrangler
    {
        image: "./Jeep-wrangler.jpg",
        heading: "Jeep-wrangler",
        price: 145
    },

    // fortuner legender
    {
        image: "./Legender.png",
        heading: "Fortuner Legender",
        price: 100
    },

    // Mahindra Scorpio
    {
        image: "./scorpi.jpg",
        heading: "Mahindra Scorpio",
        price: 80
    }
    
]


// forEach loop for making dynamic cards 
obj.forEach((value) => {

    // make main box of card
    let main_box = document.createElement('div');
    main_box.className = 'card-main-box';

    ///////// image div of card
    let imgDiv = document.createElement('div');
    imgDiv.className = 'img';

    // image add into imgDiv
    let img = document.createElement('img');
    img.src = value.image;//get img link from Obaject
    imgDiv.appendChild(img);//add img into imgDiv

    // add imgDiv into Main Box of Card
    main_box.appendChild(imgDiv);

    ///////////// make div for containt Div
    let containt = document.createElement('div');
    containt.className = 'containt';

    //make <h2> in container Div
    let h2 = document.createElement('h2');
    h2.textContent = value.heading;//take value from Object
    containt.appendChild(h2); //add h2 tag into container

    ///////make div for icons

    let icons_box = document.createElement('div');
    icons_box.className = 'icons-box';
    //add html code directly for defalut icons with innerHTML
    icons_box.innerHTML = '  <div class="icon"><i class="fa-brands fa-searchengin"></i></div><div class="icon"> <i class="fa-solid fa-sliders"></i></div> <div class="icon"><i class="fa-solid fa-droplet"></i></div> <div class="icon"> <i class="fa-solid fa-chart-simple"></i></div>'
    //icons_box into container
    containt.appendChild(icons_box);

    //make price div
    let price_div = document.createElement('div');
    price_div.className = 'price';
    price_div.textContent = `$ ${value.price}M`;//add price into price Div from Object
    containt.appendChild(price_div);//add price_div into container

    ///////make buttons DIV

    let buttons_box = document.createElement('div');
    buttons_box.className = 'buttons-box';

    //make buttons into buttons_box with innerHTML
    buttons_box.innerHTML = ' <button class="View">View it</button>  <button class="buy">Take it</button>'

    //add defaults buttons in buttons_box
    containt.appendChild(buttons_box);


    ///// add container into Main_box
    main_box.appendChild(containt);
    /////**add full card into row */
    row.appendChild(main_box);

})



// /////form submition events  /////////

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     form.style.display = 'none';
//     output.style.display = 'block'


//     ////// main div of output of form
//     let display_photo_main_div = document.createElement('div');
//     display_photo_main_div.className = 'display_photo';

//     ////create div form DP photo and name 
//     let dp_div = document.createElement('div');
//     dp_div.className = 'dp_div';

//     //create img for dp div photo
//     let img_dp = document    .createElement('img');
//     img_dp.src = inputs[inputs.length-1].value;// for taking last value of input
//     dp_div.appendChild(img_dp);//add this img into dp_div

//     //add whole dp_div into main div
//     display_photo_main_div.appendChild(dp_div);



//     /////// craete h3 for user hello user name

//     let heading3 = document.createElement('h3');//make h3
//     let span = document.createElement('span');//make span tag
//     span.textContent = 'Hello,';//add Hello into sapn

//     heading3.appendChild(span);//add this span into h3

//     heading3.append(`${inputs[0].value} ${inputs[1].value}`);//add user nfnmae and lname After span

//     //add this h3 into main div
//     display_photo_main_div.appendChild(heading3);


//     /////////make details main div of user
//     let details_div = document.createElement('div');
//     details_div.className = 'details_user';

//     for (let i = 2; i < inputs.length - 1; i++) {
//         let paragraph = document.createElement('p');
//         let strong = document.createElement('strong');

//         strong.textContent = `${labels[i].textContent} :`;
//         paragraph.appendChild(strong);

//         paragraph.append(inputs[i].value);

//         details_div.appendChild(paragraph);
//     }
//     //add details div into main div
//     display_photo_main_div.appendChild(details_div);


//     //////add all code into output div of HTML

//     output.appendChild(display_photo_main_div);

//     console.log(output);

// })