const products = [
  { id: 0, price: 70000, title: "Blosson Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 80000, title: "Black Monastery" },
];

// 화면 영역 찾아오기
const cols = document.querySelectorAll(".col-sm-4");
cols.forEach((col) => {
  // console.log(col);

  // h5, p
  console.log(col.querySelector("h5").textContent);
  console.log(col.querySelector("p").textContent);
});

// 배열안의 정보를 이용해 화면에 보여주기
// products.forEach((item, idx) => {
//   // 배열요소 가져오기
//   console.log(idx, "", item);
//   // 객체 접근
//   console.log(item.title);
// });

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   console.log(products[i].title);
// }

cols.forEach((item, idx) => {
  col.querySelector("h5").textContent = products[idx].title;
  col.querySelector("p").textContent = products[idx].title;
});

// 두번째 방법
const row = document.querySelector(".row");
let tags = "";
products.forEach((item, idx) => {
  tags += '<div class="col-sm-4>';
  tats += 'img src="https://placehold.co/600" alt="" class="w-100"';
  tats += "<h5>${item.title}</h5>";
  tats += "<p>가격 : ${item.price}</p>";
  tats += "</div>";
});
// console.log(tags);
// row 자식으로
row.insertAdjacentHTML("afterbegin", tags);
