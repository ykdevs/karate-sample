/**
 * 配列から対象のリストだけ抽出する
 *
 * 例）
 *  getListByKey(key, "", "対象")
 *
 * @param  list      元の配列
 * @param  key       検索するキー
 * @param  value     検索する値
 * @return result    対象の配列
 */
function fn(list, key, value) {
    let result = []
    for (let i = 0; i < list.length; i++) {
        if (list[i][key] === value) {
            result.push(list[i]);
        }
    }
    return result;
}