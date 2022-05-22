![img](<https://play-lh.googleusercontent.com/-qEPfyE1YbXiN8cIeLz-g7ucimmWKlJZRmM5NHq7stQumgScitV-53_rusBcoaWrxZg>)

# Project

> 멜론 클론코딩을 만들어보자!

# 🛠 개발 환경

![img](https://img.shields.io/badge/typescript-4.3.5-blue)
![img](https://img.shields.io/badge/ts--node-10.0.0-green)
![img](https://img.shields.io/badge/Mongoose-5.13.2-yellowgreen)

# 📧API 명세서

[API 명세서 링크](https://www.notion.so/q-bit/API-955cbaac6630491c98ca48d21cf6f16c)

## ⚙️ Dependencies

```json
{
  "name": "melon-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "ts-node src",
    "build": "tsc && node dist"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/mongoose": "^5.11.97",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "mongoose": "^5.13.2",
    "yarn": "^1.22.10"
  },
  "devDependencies": {
    "@types/express": "^4.17.12",
    "@types/node": "^16.0.0",
    "ts-node": "^10.0.0",
    "typescript": "^4.3.5"
  }
}
```

# ✉️ Commit Messge Rules

**서버** 들의 **Git Commit Message Rules**

- 반영사항을 바로 확인할 수 있도록 작은 기능 하나라도 구현되면 커밋을 권장합니다.
- 기능 구현이 완벽하지 않을 땐, 각자 브랜치에 커밋을 해주세요.

### 커밋 메시지 태그 모음

```
- feat    : 기능 (새로운 기능)
- fix     : 버그 (버그 수정)
- update  : 코드 (코드 수정, 추가, 보완)
- refactor: 리팩토링
- style   : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
- docs    : 문서 (문서 추가, 수정, 삭제)
- test    : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
- chore   : 그 외 변경사항 (주석 추가,삭제 등)
```

### **커밋 타입**

- `태그: 설명` 형식으로 커밋 메시지를 작성합니다.
- 태그는 영어를 쓰고 첫 문자는 대문자로 작성합니다.

좋은 예 >

```
  Feat: 검색 api 추가
```

나쁜 예 >

```
  검색 api 추가
```

## **💻 Github mangement**

**서버** 들의 WorkFlow : **Gitflow Workflow**

- Main과 Develop 브랜치
  
  메인(main): 메인 브랜치
  
  개발(develop): 기능들의 통합 브랜치  

  개발 브랜치 아래 기능별 브랜치를 만들어 작성합니다. 
   
- Gitflow 규칙
  - Main에 직접적인 commit, push는 금지합니다. 
  - 커밋 메세지는 다른 사람들이 봐도 이해할 수 있게 써주세요.
  - 풀리퀘스트를 통해 코드 리뷰를 해봅시다.
  - 기능 개발 시 개발 브랜치에서 feat/기능 으로 브랜치를 파서 관리합니다.
  - feat은 자세한 기능 한 가지를 담당하며, 기능 개발이 완료되면 각자의 브랜치로 Pull Request를 보냅니다. 
  - 각자가 기간 동안 맡은 역할을 전부 수행하면, 각자 브랜치에서 develop브랜치로 Pull Request를 보냅니다.  
  **develop 브랜치로의 Pull Request는 상대방의 코드리뷰 후에 merge할 수 있습니다.**

# Developers
| 박정무 | 최승빈 |

