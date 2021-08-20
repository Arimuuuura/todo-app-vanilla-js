'use strict'
{
    const onClickAdd = () => {

        // 入力されたテキストを取得＆初期化
        const inputText = document.getElementById('add-text').value;
        document.getElementById('add-text').value = "";

        // リストに追加するため必要な要素を生成
        const li = document.createElement("li");
        const div = document.createElement("div");
        div.className = "list-row";
        const p = document.createElement("p");
        p.innerText = inputText;
        const completeButton = document.createElement("button");
        completeButton.innerText = "完了";
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "削除";

        // 完了ボタンのイベント
        completeButton.addEventListener("click", () => {
            alert("complete");
        })

        // 削除ボタンのイベント
        deleteButton.addEventListener("click", () => {
            alert("delete");
        })

        // 子要素の生成
        li.appendChild(div);
        div.appendChild(p);
        div.appendChild(completeButton);
        div.appendChild(deleteButton);
        console.log(li);

        // 未完了リストに追加
        document.getElementById("incomplete-list").appendChild(li);

    }

    document.getElementById("add-button").addEventListener("click", () => onClickAdd());
}
