/**
 * 本日から何日（月／年）前後の日付を返す
 *
 * num:base:point
 *
 * num 差分（過去はマイナス）
 * base 基準値（D 日付/M 月/Y 年）
 * point 返す日（F 1日/L 月末/0 そのままの日/1-31 該当日付）
 *
 * 例）
 *  今月初日： 0:M:F
 *  明日   ： 1:D:0
 *  今月末日： 0:M:L
 *  先月末日： -1:M:L
 *  １年後の月末： 12:M:L
 *  来月の15日： 1:M:15
 *
 * @param target     ターゲット(num:base:point)
 * @returns {string} 日付（YYYY-MM-DD形式）
 */
function fn(target) {
    let targets = target.split(":");
    let num = Number(targets[0]);
    let base = targets[1];
    let point = targets[2];

    let dt = new Date();

    switch (base) {
        case "Y":
            dt.setFullYear(dt.getFullYear() + num);
            break;
        case "M":
            dt.setMonth(dt.getMonth() + num);
            break;
        case "D":
            dt.setDate(dt.getDate() + num);
            break;
        default:
            break;
    }

    switch (point) {
        case "F":
            dt.setDate(1);
            break;
        case "L":
            dt.setMonth(dt.getMonth() + 1);
            dt.setDate(0);
            break;
        case "0":
            break;
        default:
            dt.setDate(Number(point));
            break;
    }

    let year = dt.getFullYear();
    let month = dt.getMonth();
    let date = dt.getDate();

    let m = ("00" + (month+1)).slice(-2);
    let d = ("00" + (date)).slice(-2);
    return year  + "-" + m + "-" + d;
}