import './App.css';

function App() {
  let title = 'JINY VLOG';
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
      <section style={{display:'flex', justifyContent:'center', fontSize:'26px'}}>
        <h4>JINY LOG</h4>
      </section>
      {/* end title */}
    </div>
  );
}

export default App;
