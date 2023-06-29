/**
 * Radioをチェックする
 *
 * 例）
 *  clickRadio('ラベル名', 'label', value)
 *
 * @param labelName ラベル名
 * @param tag       チェックボックスの要素のタグ
 * @param value     チェックする対象の選択肢配列
 * @param num       ロケータの出現回数
 */
function fn(labelName, tag, value, num) {
    if (num == null) {
        num = 0;
    }
    let locates = locateAll('label', function(x){ return x.script('_.textContent').contains(labelName) });
    let elements = locates[num].parent.nextSibling.locateAll(tag);
    for( let i = 0; i < elements.length; i++) {
        if (elements[i].script('_.innerText').trim() === value) {
            elements[i].parent.locate('input[type=radio]').click();
        }
    }
}
