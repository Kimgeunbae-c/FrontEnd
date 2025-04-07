// 1.함수선언방식으로 두 개의 숫자를 받아서 더한 결과를 리턴하는 함수 작성
function num1(x, y) {
  return x + y;
}
console.log(num1(5, 5));
// 2.함수표현식으로 1번 변경
const num2 = function (x, y) {
  return x + y;
};
console.log(num2(7, 7));
// 3. 1~10까지 더하는 작업을 함수 표현식으로 작성
let sum = 0;
const num3 = function () {
  for (let i = 0; i < 11; i++) {
    sum += i;
  }
  return sum;
};
console.log(num3());
// 4. 3의 배수 찾기
//  3의 배수라면 박수 출력, 아니라면 통과
const num4 = function (x) {
  if (x % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};
num4(3);
num4(4);

// 5. 4번 개선
//  9의 배수인 경우 박수 x 2 출력
const num5 = function (x) {
  if (x % 9 == 0) {
    console.log("박수두번");
  } else if (x % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};
num5(3);
num5(6);
num5(9);

// 6. 공인중개사 시험 점수를 입력하면 합격 여부를 알려주는 함수
//  과목은 2과목이라 하고, 두 과목 합해서 120 점 이상이면 합격
//  한 과목이 40점 미만이면 과락으로 불합격

function num6(x, y) {
  const a = x + y;
  if (x >= 40 && y >= 40 && a >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}
num6(40, 80);
num6(30, 80);
