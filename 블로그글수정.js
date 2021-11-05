import React from 'react'

// deep카피를 통해서 버튼을 누르면 제목으로 설정한 array가 변경되는 것을 복습.

function 블로그글수정() {
  const [title, setTitle] = useState([
    '짜장면먹자',
    '짬뽕어때',
    '꿀꿀하니 꿀물',
  ])
  function handleTitleChange() {
    let newArray = [...title] //deep copy
    // let newArray = title 이라는 뜻은 값 복사가 아닌, 값 공유가 된다.
    newArray[0] = '아무것도 먹고 싶지 않다'
    setTitle(newArray)
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={handleTitleChange}>글제목 변경하기</button>
      <div className="list">
        <h3>
          {title[0]}{' '}
          <span
            onClick={() => {
              따봉변경(따봉 + 1)
            }}
          >
            👍🏻 {따봉}
          </span>
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  )
}

export default 블로그글수정
