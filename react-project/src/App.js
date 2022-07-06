/* eslint-disable */
import logo from './logo.svg';
import './App.css';
// useState import
import { useState } from 'react';

function App() {
  let title = 'JINY VLOG';
  // board title state
  let [boardTitle, modifyTitle] = useState(['2. 오늘의 옷 추천','1. 진짜 맛집 추천', '3. 오늘의 머리 추천']);

  // board title modify
  const modifyBoardTitle = () => {
    let copy = [...boardTitle];
    copy[1] = '여자 코트 추천';
    modifyTitle(copy);
  }   

  // board title sort 
  const sortTitle = () => {
    let copy = [...boardTitle.sort()];
    modifyTitle(copy);
  }

  // heart state
  let [heart, heartPlus] = useState(0);
  
  // heart count
  const heartCount = () => {
    heartPlus(++heart);
  }

  // modal state (초기값 false로 설정하여 닫혀있는 상태)
  let [modal, setModal] = useState(false);
  
  // open modal
  let openModal = () => {
    // modal의 상태를 setState로 변경함으로써 UI 상태 변경
    setModal(!modal);
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
        <h4 onClick={openModal}>{boardTitle[1]}</h4>
        <button onClick={modifyBoardTitle}> 변경 </button>
        <p>2월 17일</p>
      </section>
      <section className="list">
        {/* state binding */}        
        <h4>{boardTitle[2]}</h4>
        <p>2월 17일</p>
      </section>
      {/* end board layout */}

      {/* sortTitleButton */}
      <div 
        onClick={sortTitle}
        style={{display:'flex', justifyContent:'center', marginTop:'10px'}}
        >
        <button>정렬</button>
      </div>
      {/* end sortTitleButton */}

      {/* jsx의 조건부 바인딩 */}
      {
        // modal의 상태가 true일 때 Modal 등장
        modal == true ? <Modal></Modal> : '' 
      }
    </div>
  );
}

// modal component
const Modal = () => {
  return (
  <>
    <div className="modal">
      <p>제목</p>
      <p>날짜</p>
      <p>날짜</p>
    </div>
  </>    
  )
}
// end modal component

export default App;
