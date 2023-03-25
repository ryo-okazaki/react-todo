import { useState } from 'react'
import './App.css'

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(['ああああ', 'いいいい']);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          { incompleteTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          }) }
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>うううう</li>
            <button>戻す</button>
          </div>
          <div className="list-row">
            <li>いいいい</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
}
