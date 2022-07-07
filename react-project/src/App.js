/* eslint-disable */
import logo from './logo.svg';
import './App.css';
// useState import
import { useState } from 'react';

function App() {
  let title = 'JINY VLOG';
  // board title state
  let [boardTitle, modifyTitle] = useState([]);
  
  // 각각의 board title에 대한 state(title 클릭 시 각 title을 modal에 띄우기 위해)
  let [titleState, setTitleState] = useState(0);

  // board title modify
  const modifyBoardTitle = () => {
    let copy = [...boardTitle];
    copy[2] = '여자 코트 추천';
    modifyTitle(copy);
  }
  
  // add board title
  const addTitle = (inputState) => {
    if((inputState !== '')) {
      let copy = [...boardTitle];
      copy.unshift(inputState);
      modifyTitle(copy);
    }
  }

  // delete board title
  const deleteTitle = (index) => {
    let copy = [...boardTitle];
    copy.splice(index, 1);
    modifyTitle(copy);
  }

  // board title sort 
  const sortTitle = () => {
    let copy = [...boardTitle.sort()];
    modifyTitle(copy);
  }

  // weather state
  let [weatherState, setWeatherState] = useState([]);

  // add weatherState
  const addWeatherState = (weatherState) => {
    let copy = [...weatherState];
    const date = new Date();
    const dateData = date.toLocaleDateString('ko-kr');
    copy.unshift(dateData);
    setWeatherState(copy);
  }

  // delete WeatherState
  const deleteWeatherState = (index) => {
    let copy = [...weatherState];
    copy.splice(index,1);
    setWeatherState(copy);
  }

  // heart state
  let [heart, heartPlus] = useState([]);
  
  // heart count
  const heartCount = (index) => {
    let copy = [...heart];
    copy[index] = copy[index] + 1;
    heartPlus(copy);
  }

  // add heart -> heart setState
  const addHeart = (heart) => {
    let copy = [...heart];
    copy.unshift(0);
    heartPlus(copy);
  }

  // delete heart -> heart setState
  const deleteHeart = (index) => {
    let copy = [...heart];
    copy.splice(index, 1);
    heartPlus(copy);
  }

  // modal state (초기값 false로 설정하여 닫혀있는 상태)
  let [modal, setModal] = useState(false);

  // input state
  let [inputState, setInputState] = useState('');

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

      {/* board component */}
      {
        boardTitle.map((a, index) => {
          return (
            <section className="list">
              {/* state binding */}
              <h4 onClick={()=>{setModal(!modal); setTitleState(index) }}>{a}</h4>
              <span onClick={() => {heartCount(index)}}> ❤️ </span> {heart[index]}
              <p>{weatherState[index]}</p>
              <button onClick={()=>{deleteTitle(index); deleteHeart(index); deleteWeatherState(index);}} 
                      style={{marginBottom:'15px'}}
              >삭제</button>
            </section>
          )
        })
      }
      {/* end board component */}

      {/* writing input */}
      <div style={{marginTop:'20px', display:'flex', justifyContent:'center'}}>
        <input 
          onChange={(e)=>{ setInputState(e.target.value); }}
          type={"text"}
        ></input>
        <button 
          style={{marginLeft:'10px'}}
          onClick={()=>{ addTitle(inputState); addHeart(heart); addWeatherState(weatherState)  }}
        >add</button>
      </div>
      {/* end writing input */}

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
        modal == true ? <Modal modifyTitle={modifyTitle} titleState={titleState} boardTitle={boardTitle}></Modal> : '' 
      }
    </div>
  );
}

// modal component
function Modal(props){
  const modifyBoardTitle = () => {
    let copy = [...props.boardTitle];
    copy[2] = '여자 코트 추천';
    props.modifyTitle(copy);
  }  
  return (
  <>
    <div className="modal">
      <p>{props.boardTitle[props.titleState]}</p>
      <p>이름</p>
      <p>날짜</p>
      <button onClick={modifyBoardTitle}>글 수정</button>
    </div>
  </>    
  )
}
// end modal component

export default App;
