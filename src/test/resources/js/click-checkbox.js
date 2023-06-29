/**
 * CheckBoxをチェックする
 *
 * 例）
 *  let targets = ["チェック１", "チェック２"]
 *  clickCheckbox('ラベル名', '.c-modal', 'label', targets)
 *
 * @param labelName ラベル名
 * @param locator   ラベルを含む最上位のロケーター
 * @param tag       チェックボックスの要素のタグ
 * @param targets   チェックする対象の選択肢配列
 * @param num       ロケータの出現回数
 */
function fn(labelName, locator, tag, targets, num) {
    if (num == null) {
        num = 0;
    }
    let locates = locateAll(locator, function(x){ return x.script('_.textContent').contains(labelName) });
    let elements = locates[num].locateAll(tag);
    for( let i = 0; i < elements.length; i++) {
        for (let j = 0; j < targets.length; j++) {
            if (elements[i].script('_.innerText').trim() === targets[j]) {
                elements[i].parent.locate('input[type=checkbox]').click();
            }
        }
    }
}
