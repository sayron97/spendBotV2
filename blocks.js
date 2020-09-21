const Products = require("./models/products");

exports.getBlock = data => {
    let res = []
    switch (data) {
        case 'start':
            res = {
                title: 'Зачем меня призвали??',
                buttons: [
                    [{text: 'Траты', callback_data: 'spends'}],
                    [{text: 'Напоминания', callback_data: 'events'}]
                ]
            }
            break
        case 'spends':
            res = {
                title: 'Меню трат',
                buttons: [
                    [{ text: 'Добавить продукт', callback_data: 'add_new_product'}],
                    [{ text: 'Записать трату', callback_data: 'new_spend'}],
                    [{ text: 'Фото чека', callback_data: 'tab_photo'}],
                    [{ text: 'Вывести статистику', callback_data: 'period'}]
                ]
            }
            break
        case 'events':
            res = {
                title: 'Меню событий',
                buttons: [
                    [{ text: 'Новое напоминание', callback_data: 'new_event'}],
                    [{ text: 'Показать все напоминания', callback_data: 'period'}]
                ]
            }
            break
        case 'period':
            res = {
                title: 'Меню событий',
                buttons: [
                    [{ text: '1', callback_data: 'period_1'}],
                    [{ text: '7', callback_data: 'period_7'}],
                    [{ text: '30', callback_data: 'period_30'}],
                    [{ text: '90', callback_data: 'period_90'}],
                    [{ text: '180', callback_data: 'period_180'}],
                ]
            }
            break
        case 'go_to_main':
            res = {
                title: 'Готово!',
                buttons: [
                    [{ text: 'Вернуться', callback_data: 'start'}],
                ]
            }
            break
        default:
    }
    return res
}
