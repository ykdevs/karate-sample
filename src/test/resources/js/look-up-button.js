/**
 * 表示名に対応するボタンを選択する
 *
 * 例）
 *  lookUpButton('ボタン名', 'button', 0)
 *
 * @param buttonName ボタンの表示名
 * @param tag        取得するタグ
 * @param num        ボタンの出現回数
 */
function fn(buttonName, tag, num) {
    if (num == null) {
        num = 0;
    }
    let locates = locateAll(tag, function(x){ return x.script('_.textContent').contains(buttonName) });
    let targets = [];
    for(let i = 0; i < locates.length; i++) {
        if (locates[i].script('_.textContent').trim() === buttonName) {
            targets.push(locates[i]);
        }
    }
    return targets[num];
}