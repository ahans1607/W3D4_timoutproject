function foo() {
    console.log("food");
}

const val = setTimeout(foo, 2000);
clearTimeout(val);

// function foo(food1, food2) {
//     console.log(food1 + " for breakfast");
//     console.log(food2 + " for lunch");
// }

// console.log(setTimeout(foo, 2000, "pancakes", "couscous"));