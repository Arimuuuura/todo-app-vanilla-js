'use strict'
{
    const onClickAdd = () => {

        // 入力されたテキストを取得＆初期化
        const inputText = document.getElementById('add-text').value;
        document.getElementById('add-text').value = "";

        // リストに追加するため必要な要素を生成
        const li = document.createElement("li");
        const div = document.createElement("div");
        const p = document.createElement("p");
        div.className = "list-row";
        p.innerText = inputText;

        // 子要素の生成
        li.appendChild(div);
        div.appendChild(p);
        console.log(li);

        // 未完了リストに追加
        document.getElementById("incomplete-list").appendChild(li);

    }

    document.getElementById("add-button").addEventListener("click", () => onClickAdd());
}
