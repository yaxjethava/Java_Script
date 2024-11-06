let row = document.querySelector(".wrapper");

function Cars_details(img, name, model, price) {
    this.img = img;
    this.name = name;
    this.model = model;
    this.price = price;
}

// card details sender into constructor function
let cars_card_create = [
    new Cars_details('https://spn-sta.spinny.com/blog/20220228142243/ezgif.com-gif-maker-98-5.jpg?compress=true&quality=80&w=576&dpr=2.6', 'Mercedes AMG GT R', 2019, 150),
    new Cars_details('https://carwow-uk-wp-3.imgix.net/01_296_GTB_34_ant-scaled-e1707920146931.jpg?auto=format&cs=tinysrgb&fit=crop&h=&ixlib=rb-1.1.0&q=60&w=1600', 'Ferrari 296 GTB', 2020, 160)
]


cars_card_create.forEach((val) => {

    //main card div
    let main_div = document.createElement('div');
    main_div.className = "main-card-box";

    let img_div = document.createElement('div');
    img_div.className = "img";

    let image = document.createElement('img');
    image.src =`${val.img}`
    img_div.appendChild(image);

    //add img div into card
    main_div.appendChild(img_div);

    //containt main div
    let containt = document.createElement('div');
    containt.className = 'containt';

    let heading = document.createElement('h3');
    heading.textContent = val.name;
    containt.appendChild(heading);

    let model = document.createElement('p');
    model.className = 'model';
    model.textContent = 'Model: ';

    //span of model
    let model_span = document.createElement('span');
    model_span.textContent = val.model;
    model.append(model_span);//add this span into model para
    containt.appendChild(model); // add model para into containt

    let price_div = document.createElement('p');
    price_div.className = 'price';
    price_div.textContent = 'Price: $';

    let price_span = document.createElement('span');
    price_span.textContent = val.price;
    price_div.append(price_span);//add this span into price para

    containt.appendChild(price_div); // add model para into containt

    main_div.appendChild(containt);//add all containt into main card div

    row.appendChild(main_div);//add that card into row
})