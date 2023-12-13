var items = [
    {name: 'Straberry Cream', img: './img/straberry_cream.jpg'},
    {name: 'Matcha Cream', img: './img/matcha_cream.jpg'},
    {name: 'Caramel Apple Cinnamon', img: './img/caramel_apple_cinnamon.jpg'},
    {name: 'Original', img: './img/original.jpg'},
    {name: 'Chocolate Truffle', img: './img/chocolate_truffle.jpg'},
    {name: 'Ube', img: './img/ube.jpg'},
    // {name: 'Taro', img: './img/taro.jpg'},
    {name: 'Cookie Cream', img: './img/cookie_cream.jpg'},
    {name: 'Black Sesame', img: './img/black_sesame.jpg'},
    // {name: 'Lavender', img: './img/lavender.jpg'},
    {name: 'Salty Caramel Macchiato', img: './img/salty_caramel_macchiato.jpg'},
];

var html = '';
for(var each of items) {
    var _html = `
        <div class="col-lg-3 col-md-6 mb-4 pb-2">
            <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                <div class="position-relative rounded-circle mt-n3 mb-4" style="width: 150px; height: 150px;">
                    <img class="w-100 h-100" src="${each.img}" style="object-fit: cover; border-radius: 15% !important;">
                </div>
                <h5 class="font-weight-bold mb-4" style="height: 30px;">${each.name}</h5>
                <a href="https://www.ordertogo.com/restaurants/loliwafflebellevue/mesh" target="_blank" class="btn btn-sm btn-secondary">Order Now</a>
            </div>
        </div>
    `;
    html += _html;
}

$('.menuDiv').html(html);