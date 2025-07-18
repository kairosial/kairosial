import { writeFileSync } from "node:fs";
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `
### 🙌 Hi, i'm Seungyeon
- 🔥 I aspire to become an **engineer who strives to deep dive in the right direction**.
- 🧑🏻‍💻 I'm an engineer with experience in research, planning, and development across government-funded labs, startups, and public projects.
- 🎓 During my master's program, I conducted research on DST(Dialogue State Tracking).
- 🚀 I wanted to become someone who could **turn ideas into reality** — that's why I decided to become a developer.
- 💪🏻 I'm passionate about **productivity** and believe in the power of **consistency**.

### 🛠️ Skills
<p>
    <img alt="Python" src ="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"/>
    <img alt="PyTorch" src ="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=PyTorch&logoColor=white"/>
    <img alt="LangChain" src ="https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=LangChain&logoColor=white"/>
    <img alt="FastAPI" src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=FastAPI&logoColor=white" />
    <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white" />
    <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white" />
    <img alt="Azure" src ="https://img.shields.io/badge/Azure-0089D6?style=for-the-badge&logoColor=white"/>
</p>
<p>
    <img alt="Git" src ="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
    <img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
    <img alt="Notion" src ="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"/>
    <img alt="Slack" src ="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/>
    <img alt="Figma" src ="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/>
    <img alt="Claude Code" src ="https://img.shields.io/badge/Claude Code-D97757?style=for-the-badge&logo=Claude&logoColor=white"/>
    <img alt="Cursor" src ="https://img.shields.io/badge/Cursor-080C12?style=for-the-badge&logoColor=white"/>
</p>
`;

// // ### 📕 Latest Blog Posts

// // rss-parser 생성
// const parser = new Parser({
//     headers: {
//         Accept: "application/rss+xml, application/xml, text/xml; q=0.1",
//     },
// });

// (async () => {
//     // 피드 목록
//     const feed = await parser.parseURL("https://kairosial.tistory.com/rss"); // 본인의 블로그 주소

//     text += `<ul>`;

//     // 최신 3개의 글의 제목과 링크를 가져온 후 text에 추가
//     for (let i = 0; i < 3; i++) {
//         const { title, link } = feed.items[i];
//         console.log(`${i + 1}번째 게시물`);
//         console.log(`추가될 제목: ${title}`);
//         console.log(`추가될 링크: ${link}`);
//         text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
//     }

//     text += `</ul>`;

//     // README.md 파일 생성
//     writeFileSync("README.md", text, "utf8", (e) => {
//         console.log(e);
//     });
//     console.log("업데이트 완료");
// })();

/* Archive (let text 부분)
![header](https://capsule-render.vercel.app/api?type=waving&height=200&color=0:A5FECB,50:20BDFF,100:5433FF&text=Hi,%20i'm%20Seungyeon&fontAlignY=30&textBg=false&reversal=false&desc=Engineer%20who%20can%20provide%20practical%20value%20to%20people&descAlignY=53&fontColor=f7f5f5)
![footer](https://capsule-render.vercel.app/api?type=waving&height=100&color=0:5433FF,50:20BDFF,100:A5FECB&section=footer&reversal=true)

<img alt="Python" src ="https://img.shields.io/badge/{기술명}-{원하는색상코드}?style={스타일}&logo={로고명}&logoColor={로고색상}"/>
*/
