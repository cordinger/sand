import "./styles.css";

const onClickAdd = () => {
  //テキストボックス内取得、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //liタグ生成
  const li = document.createElement("li");
  li.className = "list-row";

  //liタグ
  const div = document.createElement("div");
  li.innerText = inputText;

  //liタグの子要素に各要素を設定
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
