let row = document.getElementById('first-row');

let obj = [

    //  Koenigsegg Jesko
    {
        image:"./Koenigsegg Jesko.jpg" ,
        heading:"Koenigsegg Jesko",
        price: 750
    },

    //  PAGANI HUAYRA
    {
        image:"./PAGANI HUAYRA.jpg",
        heading:"PAGANI HUAYRA",
        price: 350
    },

    //  Bugatti Chiron
    {
        image:"./bugatti chiron.jpg",
        heading:"Bugatti Chiron",
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
        image:"./Jeep-wrangler.jpg" ,
        heading: "Jeep-wrangler",
        price: 145
    },

    //  Jeep-wrangler
    {
        image:"./Legender.png" ,
        heading: "Fortuner Legender",
        price: 100
    }

]


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
