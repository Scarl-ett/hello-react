// import './App.css';

// function App() {
// const name = '리액트';
// return (
//   <div>
//     {name === '리액트' ? (
//       <h1>리액트입니다.</h1>
//     ) : (
//       <h2>리액트가 아닙니다.</h2>
//     )}
//   </div>
// )

// return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>

// return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>

// const number = 0;

// return number && <div>내용</div>

// const name = undefined;
// return name || '값이 undefined입니다.';

// return <div>{name || '리액트'}</div>

// const name = '리액트';
// const style = {
//   backgroundColor : 'black',
//   color : 'aqua',
//   fontSize : '48px',
//   fontWeight : 'bold',
//   padding : 16
// };

// return <div style={style}>{name}</div>

// return (
//   <div
//     style={{
//       backgroundColor : 'black',
//       color : 'aqua',
//       fontSize : '48px',
//       fontWeight : 'bold',
//       padding : 16
//     }}
//   >
//     {name}
//   </div>
// );
// return <div className="react">{name}</div>

// return (
//   <>
//     <div className="react">{name}</div>
//     <input/>
//   </>
// );

// return (
//   <>
//     {/* 주석은 이렇게 작성합니다. */}
//     <div className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
//     >
//       {name}
//     </div>
//     // 하지만 이런 주석이나
//     /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
//     <input/>
//   </>
// );

// return (
//   <div>
//     <div className="react">{
//       name
//     }</div>
//     <h1>들여쓰기가 이상한</h1>
//     <h2>코드</h2>
//     <p>입니다.</p>
//   </div>
// )
// }

// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }

// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';

// const App = () => {
//   // return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent >;
//   // return <Counter />
//   // return <Say />
//   // return <EventPractice />
// };

import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import LifeCycleSample from './LifeCycleSample';
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
// import IterationSample from './IterationSample';

// 랜덤 색상 생성
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: '#000000'
  }

  handelClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      // <ValidationSample />
      // <div>
      //   <ScrollBox ref={(ref) => this.scrollBox = ref} />
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      // </div>
      // <IterationSample />

      <div>
        <button onClick={this.handelClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
