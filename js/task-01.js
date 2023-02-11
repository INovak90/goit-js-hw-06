console.log("Number of categories:", categories.querySelectorAll(".item").length);
console.log("Category:", categories.querySelector(".item > h2").textContent);
console.log("Elements:", categories.querySelector(".item > ul").children.length);
const secondElement = categories.querySelectorAll(".item")[1];
console.log("Category:", secondElement.firstElementChild.textContent);
console.log("Elements:", secondElement.querySelectorAll("li").length);
const thirdElement = categories.querySelectorAll(".item")[2];
console.log("Category:", thirdElement.firstElementChild.textContent);
console.log("Elements:", thirdElement.querySelectorAll("li").length);