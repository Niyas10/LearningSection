const data = [
    { name: "niyas" },
    { name: "nihal", age: 22 }
];

data.forEach((x) => {
    console.log(x.name + (x.age || ""));
});
