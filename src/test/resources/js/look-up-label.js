/**
 * ラベルに対応するタグを選択する
 *
 * 例）
 *  lookUpLabel('ラベル名', 'select')
 *
 * @param labelName ラベル名
 * @param tag       取得するタグ
 * @param num       ラベルの出現回数
 * @param num2      ラベル表内のタグの出現回数
 */
function fn(labelName, tag, num, num2) {
    if (num == null) {
        num = 0;
    }
    if (num2 == null) {
        num2 = 0;
    }
    let locates = locateAll('label', function(x){ return x.script('_.textContent').contains(labelName) });
    let targets = [];
    for(let i = 0; i < locates.length; i++) {
        if (locates[i].script('_.textContent').trim() === labelName) {
            targets.push(locates[i]);
        }
    }
    return targets[num].parent.nextSibling.locateAll(tag)[num2];
}