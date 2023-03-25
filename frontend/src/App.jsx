import { useState } from 'react'
import './App.css'

export const App = () => {
  const [todoText, setTodoText] = useState('');

  const [incompleteTodos, setIncompleteTodos] = useState(['ああああ', 'いいいい']);

  const [completeTodos, setCompleteTodos] = useState(['うううう'])

  const onChangeToDoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;

    const newTodos = [...incompleteTodos, todoText]; // 配列のコピー
    setIncompleteTodos(newTodos);

    setTodoText("");
  }

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeToDoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          { incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            //   Reactの裏側で動いている仮想DOMは変更前と変更後を抽出して、差分のみ実際のDOMに反映するもの
            //   ループでレンダリングされた場合、何個目の要素なのかを正確に目印を置く必要がある
            );
          }) }
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>うううう</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
