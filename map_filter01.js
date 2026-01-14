

# 문제 1 : 삑 그리고 다음

개발자 원두는 랜덤으로 바코드 숫자를 만들어주는 기능을 개발하고 있습니다.
바코드는 0부터 9까지의 숫자 13자리로 이루어져 있습니다.

바코드에 들어갈 숫자들이 담긴 배열이 주어질 때
모든 0을 배열의 끝으로, 나머지는 순서를 유지한 배열을 return하는 함수 solution을 완성해주세요.

**제한 사항**
- 배열 barcode의 길이는 13입니다.
- 각 숫자는 0 이상 9 이하의 정수입니다.

**입출력 예**

| barcode | return |
| --- | --- |
| [8, 8, 0, 1, 2, 3, 4, 5, 6, 0, 1, 0, 5] | [8, 8, 1, 2, 3, 4, 5, 6, 1, 5, 0, 0, 0] |
| [0, 7, 6, 0, 0, 4, 6, 9, 0, 2, 5, 0, 1] | [7, 6, 4, 6, 9, 2, 5, 1, 0, 0, 0, 0, 0] |


function solution(barcode){
// 여기에 코드를 작성하세요.
	
	
}
solution([8, 8, 0, 1, 2, 3, 4, 5, 6, 0, 1, 0, 5]);
// [8, 8, 1, 2, 3, 4, 5, 6, 1, 5, 0, 0, 0]
solution([0, 7, 6, 0, 0, 4, 6, 9, 0, 2, 5, 0, 1]);
// [7, 6, 4, 6, 9, 2, 5, 1, 0, 0, 0, 0, 0]


# 풀이

function solution(barcode) {
  let zeroArr = barcode.filter( (value) => value === 0);
  let remainArr = barcode.filter( (value) => value !== 0);

  console.log([...remainArr, ...zeroArr]);
};
solution([8, 8, 0, 1, 2, 3, 4, 5, 6, 0, 1, 0, 5]);
solution([0, 7, 6, 0, 0, 4, 6, 9, 0, 2, 5, 0, 1]);


# 문제 2 : 선배~ 밥 사주세요~!

회사 각각의 방을 나타내는 지도에 
선배 개발자의 위치가 1로 표시된 2차원 배열 **map**이 주어질 때,

선배 개발자가 위치한 방의 숫자와 몇 번 자리에 있는지를 찾아
**”선배님은 x번 방, y번 자리에 있습니다.”** 라는 문구를 return 하는 solution 함수를 완성하세요.

만약, 선배 개발자의 위치를 찾지 못한 경우에는
**”선배님을 찾을 수가 없습니다.”** 라는 문구를 return 해주세요.

**제한 사항**
- 배열 map은 길이 1 이상, 10 이하인 2차원 배열입니다.
- 배열 map 안에 있는 배열의 각 요소는 0 또는 1인 number입니다.
- 각 방의 자리 수는 1 이상 3 이하입니다.
- 방 번호와 자리 번호는 배열의 왼쪽에서 1부터 시작하여 1씩 증가합니다.
예를 들어, 배열 map에서 index 0에 해당하는 배열 안의 index 1의 위치는
1번째 방의 2번 자리를 의미합니다.

**입출력 예**

| map | return |
| --- | --- |
| [
  [0, 0], [0], [0, 1, 0], [0, 0]
] | “선배님은 3번째 방, 2번 자리에 있습니다.” |
| [
  [0], [0, 0], [0], [0, 0], [0, 0]
] | “선배님을 찾을 수가 없습니다.” |


function solution(map){
// 여기에 코드를 작성하세요.
	
}
solution([[0, 0], [0], [0, 1, 0], [0, 0]]);
// “선배님은 3번째 방, 2번 자리에 있습니다.”
solution([[0], [0, 0], [0], [0, 0], [0, 0]]);
// “선배님을 찾을 수가 없습니다.”


// 이중 for문으로 나온 답
function solution(mapping) {
    for (let i = 0; i < mapping.length; i++) {
        for (let j = 0; j < mapping[i].length; j++) {
            if (mapping[i][j]) {
                console.log(`${i + 1}번째 방, ${j + 1}번째 자리에 있습니다`);
            }
        }
    }
}
solution([[0, 0], [0], [0, 1, 0], [0, 0]]);
solution([[0], [0, 0], [0], [0, 0], [0, 0]]);



// gemini에 물어보고 도움 받아서 나온 map + filter + forEach를 사용한 답
function solution(mapping) {
	const maps = mapping.map((value, index) => {
		const seniorIndex = value.indexOf(1);
		
		return seniorIndex !== -1 ? `${index + 1}번째 방, ${seniorIndex + 1}번째 자리에 있습니다` : "선배님을 찾을 수가 없습니다";
	});
    const finalResult = maps.filter(v => v !== null);

    finalResult.forEach(msg => console.log(msg));
}
solution([[0, 0], [0], [0, 1, 0], [0, 0]]);
solution([[0], [0, 0], [0], [0, 0], [0, 0]]);
