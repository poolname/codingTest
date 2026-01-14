# 문제 1 : 우 to the 영 to the 우

개발자 원두는 퇴근하고 드라마 보는 것을 좋아합니다.
요즘에는 ‘이상한 변호사 우영우’ 드라마를 보고 있습니다.

드라마 주인공인 우영우는 자신을 소개할 때
“기러기 토마토? 스위스 인도인 별똥별 우영우”라고 소개합니다.

우영우식 소개법에 감명받은 원두는 이렇게 거꾸로 해도 똑같은 단어를 찾아보기 위해
친구들에게 추천을 받았습니다.

친구들에게 추천받은 word가 주어질 때
추천받은 단어가 거꾸로 해도 똑같은 단어인지 
true, false로 return하는 함수 solution을 완성하세요.

**제한 사항**
- word는 길이 1 이상 100 이하의 문자열입니다.
- word에 공백이 포함된 경우는 없습니다.
- word는 한글 혹은 영어로만 구성되어 있습니다.

**입출력 예**

| word | return |
| --- | --- |
| ‘역삼역’ | true |
| ‘고양이’ | false |


function solution(word) {
// 여기에 코드를 작성하세요
	
	
}

solution("역삼역"); // true
solution("고양이"); // false

# 문제풀이

function solution(word) {
  const reverseWord = word.split("").reverse().join("");
  console.log(word === reverseWord ? "true" : "false");
}
solution("역삼역");
solution("고양이");
solution("토마토");
solution("별똥별");
