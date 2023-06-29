function fn(tag, targetDate) {
    let date = targetDate.split('-');
    let root = tag.parent.parent;
    tag.click();
    root.locate('.day__month_btn').click();
    root.locate('.month__year_btn').click();
    let year = root.locate('.year')
    for (i = 0; i < 10; i++ ) {
        if (year.text == parseInt(date[0])) {
            year.click();
            break;
        }
        year = year.nextSibling;
    }
    let month = root.locate('.month')
    for (i = 0; i < 12; i++ ) {
        if (month.text == parseInt(date[1]) + "月") {
            month.click();
            break;
        }
        month = month.nextSibling;
    }
    let day = root.locate('.day')
    for (i = 0; i < 36; i++ ) {
        if (day.text == parseInt(date[2])) {
            day.click();
            break;
        }
        day = day.nextSibling;
    }
}
