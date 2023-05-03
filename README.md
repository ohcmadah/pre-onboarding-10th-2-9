# 원티드 프리온보딩 프론트엔드 10차 2주차 과제

## 캐싱

### Cache 클래스 구현

🔗 [PR #8](https://github.com/ohcmadah/pre-onboarding-10th-2-9/pull/8)

- `cache`
  ```ts
  { [key: string]: expireTime: number; data: unknown }
  ```
  key에는 검색어가 들어간다.
- `staleTime`: number
  해당 ms동안은 가지고 있는 데이터를 반환하도록 한다. (기본 5분)

### 만료 시간 구현

1. `set` method 호출 시간 + `staleTime`을 `expireTime`에 저장해 둔다.
2. `get` method 호출 시 `expireTime`이 과거라면 삭제, 미래라면 가지고 있는 데이터를 반환한다.

### 추천 검색어 가져오는 Custom Hook 생성

- Custom Hook 내부에서 cache를 사용하여 페이지나 컴포넌트에서는 관리할 필요가 없도록 한다.

### 기타

- `useRecommendations.tsx`가 아닌 `useAPI.tsx`와 같이 의존성을 최대한 제거한 Custom Hook을 만들까 고민하였다. 하지만 API 호출이 하나인 프로젝트임을 감안하여 사용하기 편하고, 구현하기 단순한 쪽으로 개발하였다. 따라서 Recommendation type에 의존성이 존재한다.

---

## API 호출 횟수

🔗 [PR #6](https://github.com/ohcmadah/pre-onboarding-10th-2-9/pull/6)

### debounce 함수 구현

콜백 함수와 시간을 받아 setTimeout을 설정하도록 구현하였다. lodash, underscore를 참고하여 구현해 보려고 하였지만 필요 이상으로 복잡해 지는 것 같아 일단은 가장 단순한 형태로 작성하였다.

### 적용

- `useRecommendations.tsx` Custom Hook에서 사용했다.
- `useEffect` 내부에서 API 호출 부분을 감싸주었다.
- 의존성 배열의 값이 바뀔 때 cleanup 함수가 실행되는 것을 이용하여, 설정한 시간 내에 검색어가 변경된다면 clearTimeout으로 중단해준 뒤 다시 타이머를 설정했다.

### debounce vs throttle

- debounce는 정해진 시간 안에 입력이 발생할 경우 API 호출을 미룬다. 입력이 일정 시간 멈췄을 때 호출한다.
- throttle은 정해진 시간이 지나면 API를 호출한다.

debounce가 성능상 이점을 가져갈 수 있을 것이라고 판단하였다. throttle보다 떨어질 수 있는 사용자 경험은 시간을 짧게 설정하는 것으로 보완할 수 있지 않을까 생각했다.

### 기타

API 호출 부분에 적용할 것인지, input onChange에 적용할 것인지 고민하였다.

onChange에 적용 시 화면에 보여지는 state를 하나 더 관리할 필요가 있는 것 같아 API 호출 부분에 적용하게 되었다.

---

## 키보드로 추천 검색어 이동

### 사용법

키보드 방향키(↑, ↓)을 이용해 추천 검색어를 이동할 수 있다.

🔗 [PR #10](https://github.com/ohcmadah/pre-onboarding-10th-2-9/pull/10)

### Context 추가

검색어, 추천 검색어 리스트, activeIndex를 공유하는 `SearchBarContext`를 추가하였다.  
index 조정 로직은 Context 파일 내부에 존재하며, keyDown 이벤트 핸들러에서는 dispatch를 통해 이벤트 키를 넘겨주기만 한다.

### utils/keyboard.ts

방향키 이벤트 키는 `utils/keyboard.ts`에 enum으로 추가해 관리하였다.

## 기타

한국어 입력 후 방향키를 누르면 keyDown event가 두 번 발생하는 문제가 있었다. 이는 `e.nativeEvent.isComposing`을 이용해 해결하였다.
