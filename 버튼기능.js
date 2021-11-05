/* eslint-disable */
import React, { useEffect } from 'react'

function 버튼기능() {
  const [글제목, 글제목변경] = useState(['남자코트 추천', '강남우동 맛집'])
  const posts = '강남우동 맛집'
  const [따봉, 따봉변경] = useState(0)

  // state에 저장해놓는 이유 ?
  // state는 변경될 경우, 새로고침 없이도 자동으로HTML이 재랜더링이 된다. 스무스하게 변경!
  // web app을 만드는 가장 중요한 법칙
  // 그냥 변수는 경되어도 자동 렌더링이 일어나지 않아서 새로고침을 해줘야 한다.

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]}{' '}
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

export default 버튼기능
