const games = [
    {
        img:
            "https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price: "$19.99",
        name: "God of War",
        description:
            "Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform: "playstation"
    },
    {
        img:
            "https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price: "$14.99",
        name: "Killer Instinct",
        description:
            "Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform: "xbox"
    },
    {
        img:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price: "$49.99",
        name: "Donkey Kong Country: Tropical Freeze",
        description:
            "A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform: "switch"
    }
];

function popUp(index) {
    var that = this;
    this.ele = document.createElement("div");
    this.ele.classList.add("popUp");

    this.prdImg = document.createElement("img");
    this.prdImg.setAttribute("src", games[index].img);

    this.nameEle = document.createElement("p");
    this.nameEle.innerHTML = games[index].name;

    this.priceEle = document.createElement("p");
    this.priceEle.innerHTML = games[index].price;

    this.descEle = document.createElement("p");
    this.descEle.innerHTML = games[index].description;

    this.platEle = document.createElement("p");
    this.platEle.innerHTML = games[index].platform;

    this.ele.append(this.prdImg);
    this.ele.append(this.nameEle);
    this.ele.append(this.priceEle);
    this.ele.append(this.descEle);
    this.ele.append(this.platEle);

    this.ele.addEventListener("click", function()  {
        that.ele.remove();
    });

    document.body.appendChild(this.ele);
}

function create() {
    var that = this;
    this.gamesArray = [];
    this.ele = document.createElement("div");
    this.ele.classList.add("games");

    games.forEach((_, i) =>{
        let product = new Product(i);

        product.ele.addEventListener("click", function() {
            var up = new popUp(i);
        });

        that.ele.appendChild(product.ele);
    });

    document.body.appendChild(this.ele);
}

function Product(id) {
    let that = this;
    this.ele = document.createElement("div");

    this.prdImg = document.createElement("img");
    this.prdImg.setAttribute("src", games[id].img);
    this.prdImg.classList.add("prdImg");

    this.nameEle = document.createElement("p");
    this.nameEle.innerHTML = games[id].name;

    this.priceEle = document.createElement("price");
    this.priceEle.innerHTML = games[id].price;

    this.ele.classList.add("product");
    this.ele.append(this.prdImg);
    this.ele.append(this.nameEle);
    this.ele.append(this.priceEle);


    this.ele.addEventListener("mouseover", function()  {
        that.ele.style.borderColor = games[id].color;
    });

    this.ele.addEventListener("mouseout", function() {
        that.ele.style.borderColor = games[id].color;
    });
}

var allGames = new create();

