let row = document.getElementById('first-row');

console.log(row);


function addNewCard() {

    // make main box of card
    let main_box = document.createElement('div');
    main_box.className = 'card-main-box';

    ///////// image div of card
    let imgDiv = document.createElement('div');
    imgDiv.className = 'img';

    // image add into imgDiv
    let img = document.createElement('img');
    img.src = prompt('Enter image link');//get img link from user
    imgDiv.appendChild(img);//add img into imgDiv

    // add imgDiv into Main Box of Card
    main_box.appendChild(imgDiv);

    ///////////// make div for containt Div
    let containt = document.createElement('div');
    containt.className = 'containt';

    //make <h2> in container Div
    let h2 = document.createElement('h2');
    h2.textContent = prompt('Enter Car Name');//take value from user
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
    price_div.textContent = `$ ${prompt('Enter the price')}M`;//add price into price Div
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
}