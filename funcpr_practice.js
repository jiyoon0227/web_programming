// 1 . 쇼핑 카트의 총 금액 계산하기

const cart = [
    { item: "노트북", price: 1200000, quantity: 1 },
    { item: "마우스", price: 35000, quantity: 2 },
    { item: "키보드", price: 89000, quantity: 1 }
];

let totalPrice = 0;
for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity; 
}

console.log("Total Price:", totalPrice); 

let totalPriceForEach = 0;

cart.forEach((product) => {
  totalPriceForEach += product.price * product.quantity;
});

console.log("Total Price:", totalPriceForEach);

const totalPriceReduce = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,    0);
    console.log("Total Price:", totalPriceReduce); 

const itemTotals = cart.map((product) => ({
    item: product.item,
    total: product.price * product.quantity,
    }));
    console.log("제품별 금액:", itemTotals);

// 2 . 이름 목록 변환하기

const names = ['alice', 'bob', 'charlie'];

const uppercasedNames = names.map(
    (name) => name.toUpperCase());
console.log(uppercasedNames); 


const capitalStartNames = names.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalStartNames); 