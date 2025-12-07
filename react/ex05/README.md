# 포트폴리오 웹사이트

개인 포트폴리오 웹사이트입니다. React와 Vite를 사용하여 구축되었습니다.

## 기능

- 🎨 현대적이고 반응형 디자인
- 📱 모바일 친화적 레이아웃
- ⚡ 빠른 로딩 속도 (Vite)
- 🎯 부드러운 스크롤 애니메이션
- 📧 연락처 폼

## 섹션

- **홈 (Hero)**: 소개 및 주요 정보
- **소개 (About)**: 자기소개 및 통계
- **기술 (Skills)**: 기술 스택 및 숙련도
- **프로젝트 (Projects)**: 포트폴리오 프로젝트
- **연락처 (Contact)**: 연락처 정보 및 문의 폼

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 확인하세요.

### 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 미리보기

```bash
npm run preview
```

## 커스터마이징

### 개인 정보 수정

1. **Hero 컴포넌트** (`src/components/Hero.jsx`): 이름, 직업, 소셜 미디어 링크 수정
2. **About 컴포넌트** (`src/components/About.jsx`): 자기소개 및 통계 수정
3. **Skills 컴포넌트** (`src/components/Skills.jsx`): 기술 스택 및 숙련도 수정
4. **Projects 컴포넌트** (`src/components/Projects.jsx`): 프로젝트 정보 수정
5. **Contact 컴포넌트** (`src/components/Contact.jsx`): 연락처 정보 수정

### 색상 테마 변경

`src/index.css` 파일의 CSS 변수를 수정하여 색상 테마를 변경할 수 있습니다:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

## 기술 스택

- React 18
- Vite
- React Icons
- CSS3

## 라이선스

MIT
