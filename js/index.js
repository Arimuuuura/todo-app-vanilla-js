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
            // 押されたボタンのテキストを取得
            const completeTarget = completeButton.parentNode;
            const completeText = completeTarget.firstElementChild.innerText;

            // リストの初期化
            completeTarget.textContent = null;

            // 完了済みリストに追加する要素を生成
            p.innerText = completeText;
            const backButton = document.createElement("button");
            backButton.innerText = "戻す";
            li.appendChild(completeTarget);
            completeTarget.appendChild(p);
            completeTarget.appendChild(backButton);
            document.getElementById("complete-list").appendChild(li);
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

        // 未完了リストに追加
        document.getElementById("incomplete-list").appendChild(li);

    }

    document.getElementById("add-button").addEventListener("click", () => onClickAdd());
}
