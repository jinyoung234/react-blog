import './App.css';
// useState import
import { useState } from 'react';

function App() {
  let title = 'JINY VLOG';
  // state 생성
  let [boardTitle] = useState(['오늘의 옷 추천','오늘의 맛집 추천', '오늘의 머리 추천']);
  
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
        <h4>{boardTitle[0]}</h4>
        <p>2월 17일</p>
      </section>
      <section className="list">
        {/* state binding */}        
        <h4>{boardTitle[1]}</h4>
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
