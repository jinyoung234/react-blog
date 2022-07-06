/* eslint-disable */
import logo from './logo.svg';
import './App.css';
// useState import
import { useState } from 'react';

function App() {
  let title = 'JINY VLOG';
  // 게시판 제목 state
  let [boardTitle, modifyTitle] = useState(['오늘의 옷 추천','오늘의 맛집 추천', '오늘의 머리 추천']);

  // 게시판 제목 수정
  const modifyBoardTitle = () => {
    modifyTitle(['오늘의 옷 추천','여자 코트 추천', '오늘의 머리 추천']);
  }   

  // 좋아요 갯수 state
  let [heart, heartPlus] = useState(0);
  
  // heart count
  const heartCount = () => {
    heartPlus(++heart);
  }

  return (
    <div className="App">
      {/* nav */}
        {/* JSX 문법 1 : className = class */}
      <header className="black-nav">
        {/* JSX 문법 2 : {}를 통해 바인딩이 가능하다. */}
        <h4>{title}</h4>
      </header>
      {/* end nav */}

      {/* title */}
      {/* JSX 문법 3 : style = {{style명 : '스타일 값'}} */}
      <section style={{display:'flex', justifyContent:'center', fontSize:'26px', marginBottom : '20px'}}>
        <h4>JINY LOG</h4>
      </section>
      {/* end title */}

      {/* board layout */}
      <section className="list">
        {/* state binding */}
        <h4>{boardTitle[0]} <span onClick={heartCount}> ❤️ </span> {heart} </h4>
        <p>2월 17일</p>
      </section>
      <section className="list">
        {/* state binding */}        
        <h4>{boardTitle[1]} <button onClick={modifyBoardTitle}> 변경 </button></h4>
        <p>2월 17일</p>
      </section>
      <section className="list">
        {/* state binding */}        
        <h4>{boardTitle[2]}</h4>
        <p>2월 17일</p>
      </section>
      {/* end board layout */}
    </div>
  );
}

export default App;
