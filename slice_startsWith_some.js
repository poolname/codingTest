# 문제 - siri야 연관 검색어 보여줘~

개발자 원두는 사용자가 검색창에 검색어를 한 글자씩 작성하면
해당 검색어를 포함한 추천 검색어를 추천해주는 프로그램을 만들려고 합니다.

여러 가지 데이터들을 모아 추천해주고 싶은 검색어 목록은 배열로 이미 완성하였습니다.
하지만 추천 목록을 언제까지 노출해야 할지 고민입니다.

사용자가 작성하려고 하는 검색어를 의미하는 문자열 **search**와
추천해줄 검색어 목록을 의미하는 배열 **recommends**가 주어질 때
검색어 목록에 전부 해당하는 가장 긴 문자열을 return하는 함수 solution을 완성하세요.

예를 들어, search로 “flutter”와 recommends로 [”flower”, “flow”, “flight”]가 주어졌을 때,
flutter에서 각각의 단어와 처음부터 겹치는 가장 긴 문자는 “fl”이므로 “fl”까지 입력될 때까지는
검색어 목록을 보여주도록 solution 함수에서 문자열 “fl”을 return합니다.

만약, 겹치는 문자가 없다면 빈 문자열을 return 해주세요

**제한 사항**
- search는 길이 1 이상 200 이하인 문자열입니다.
- 배열 recommends의 길이는 3 이상 100 이하입니다.
- 배열 recommends의 각 요소의 길이는 1 이상 200 이하인 문자열입니다.
- search와 배열 recommends의 단어들은 영어 소문자로만 구성되어 있습니다.

**입출력 예**

| search | recommends | return |
| --- | --- | --- |
| “flutter” | ["flower", "flow", "flight"] | “fl” |
| “apple” | ["dog", "racecar", "car"] | “” |


function solution(search, recommends){
// 여기에 코드를 작성하세요.
	
	
}

solution("flutter", ["flower", "flow", "flight"]); // "fl"
solution("apple", ["dad", "racecar", "car"]); // ""




function solution(search, recommends) {
  let result = ""; // 빈 문자열 저장하는 곳

  for (let i = 1; i <= search.length; i++) { // i를 1부터 search(flutter, apple) 단어 개수만큼 반복
    const sliceStr = search.slice(0, i); // 인덱스 0부터 시작해서 f, fl, flu, flut, flutt, flutte, flutter 슬라이스 하기
    const someStr = recommends.some( (value) => value.toLowerCase().startsWith(sliceStr.toLowerCase())); // 위의 sliceStr과 배열의 같은 문자 부분만 찾아서 맞는 부분은 true, 틀린 부분은 false
    
    // slice의 str과 비교해서 true 찾기
    if (someStr === true) { // true가 나온 부분은 result에 저장
      result = sliceStr;
    } else { // 그 외의 false는 break로 정지
      break;
    }
  }
  return result || "Not Found"; // 들어간 내용은 result를 반환하고 내용이 없으면 Not Found를 반환
}
console.log(solution("flutter", ["flow", "flare", "float"]));
console.log(solution("Apple", ["bio", "technology", "usa"]));


- 결과는 fl, "" 이었으나 return에서 추가하여 Not Found로 바꿈
- someStr 안에 value.toLowerCase().startsWith(sliceStr.toLowerCase()) 를 추가하는 이유는 "ApPLe", "flUttEr"로 이상하게 넣어도 문자를 변환해서 찾을 수 있기 때문에 두곳에 toLowerCase)를 추가
- 
