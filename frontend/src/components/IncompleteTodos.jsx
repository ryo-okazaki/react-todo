import React from "react";

export const IncompleteTodos = (props) => {
  const {todos, onClickComplete, onClickDelete} = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        { todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
              {/*  関数に引数を渡したい場合、アロー関数にする必要がある*/}
            </div>
            //   Reactの裏側で動いている仮想DOMは変更前と変更後を抽出して、差分のみ実際のDOMに反映するもの
            //   ループでレンダリングされた場合、何個目の要素なのかを正確に目印を置く必要がある
          );
        }) }
      </ul>
    </div>
  );
}