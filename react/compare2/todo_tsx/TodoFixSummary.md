## Todo 컴포넌트 오류 정리

### 1. `React` 기본 import 사용
- **위치**: `src/App.tsx`, `src/component/TodoEditor.tsx`, `src/component/TodoList.tsx`, `src/component/TodoItem.tsx`
- **문제**: React 17+ JSX 자동 변환을 사용하는데 `React` 기본 import를 그대로 두어 `TS6133`(사용되지 않은 변수) 경고가 발생함.
- **해결**: `useState`, `useRef` 등 필요한 훅만 개별 import 하도록 수정.

### 2. 타입 전용 import 미사용
- **위치**: `src/App.tsx`, `src/component/TodoList.tsx`
- **문제**: `verbatimModuleSyntax` 옵션 활성화 상태에서 `Todo` 타입을 값 import 방식으로 가져와 `TS1484` 오류가 발생함.
- **해결**: `import type { Todo } from ...` 형태로 타입 전용 import 사용.

### 3. 이벤트 타입 명시 방식
- **위치**: `src/component/TodoEditor.tsx`, `src/component/TodoList.tsx`
- **문제**: `React.ChangeEvent` 등 네임스페이스 기반 타입 참조가 남아 있었음.
- **해결**: `ChangeEvent`, `KeyboardEvent` 타입을 훅과 함께 import 하여 사용.

