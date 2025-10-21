import React,{useRef, useState} from 'react'
import UserLIst2 from './UserLIst2'
import CreateUser from './CreateUser';
export default function App() {

const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  //inputs 상태 : 사용자이름과 이메일을 객체형태 관리
  const { username, email } = inputs;
  const onChange = e => { //input 변화가 있을때 호출
    const { name, value } = e.target; //e.target [name] input의 name속성 따라
    // username 또는 email 키를 동적으로 지정
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  //users : 현재까지 등록된 사용자 객체들의 배열관리 - 초기사용자는 3명
  const [users, setUsers] = useState( [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4); //새로 생성될 Id값을 관리
  const onCreate = () => {
    const user = {
      id : nextId.current, //useRef 값사용 id부여
      username,
      email
    };
    setUsers([...users, user]);
    //기존에 users를 불러오고(복사하고), 새로만든 user를 추가한다.

//초기화
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1; //다음 id 증가
  };

  return (
    <div>
       <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        //함수전달
      />
      <UserLIst2 users={users}/>
    </div>
  )
}

// App(state) -> props(전달) -> CreateUser(input) -> 이벤트발생 -> app의 setState()호출

//사용자입력 -> CreateUser(input)에서  onChange 발새 -> App 의 onChange함수 실행 ->
// App의 state변경(setInputs) -> 새로운 props가 CreateUser로 전달 -> 화면이 최신상태로 반영