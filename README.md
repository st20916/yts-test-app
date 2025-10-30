# 영화
## API
* 리스트
  - **URL :** `https://yts.mx/api/v2/list_movies.json`

* 상세보기
  - **URL :** `https://yts.mx/api/v2/movie_details.json?movie_id=id값`


## 서버 API 통신
* API 연결
* 통신 상태
  - 통신 중 ... isLoading = true
  - 통신 성공 시, OK (status : 200)
    - 최초 1회 mount는 데이터 표출

* 통신 완료
  - isLoading = false


## 비동기 처리
* async - await
  - 통신 상태에 들어가 있는 **함수 기반**에서만 사용
  - 작성 안 하면, 최초 1회 mount 떄는 보여지나 그 이후 에러
  - **async :** 항상 Promise 객체 반환
  - **await :** Promise 반환 될 때까지 코드 실행 일시 중지, 성공적으로 완료된 후 결과 반환

* callback

---

# 2025.10.30
## 조건부 렌더링 시 주의
* 결과 Return 시 한 **객체, 배열 덩어리(자료형)**로 보내던가 **결과 값 하나**를 보내야 함
* 반환 1개
  - 괄호 없이 작성

* 반환 n개
  - () 묶어줘야 함
  - 최상위 요소는 한 개만 존재해야 함

* 스크립트로 작성해야 할 시 다시 `{}` 작성


## Closure
* return 함수
* 함수 내에서 모든 동작을 정의
* **대표 :** React


## 지역 변수를 사용하는 이유 ?
* 블록이 끝나면 변수는 사라짐
  - **Private (은닉성)**


## Vite 로 Github Pages 배포 방법
1. `npm run build`
2. `npm i gh-pages --save-dev` 설치