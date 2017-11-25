module.exports = {
    returnJsonObj : (obj) => {
      return JSON.stringify(obj)
    },
    mailerOptions : (obj) => {
    return {
        from: '"Pizza Mozzarella" <info@mozzarella174.ru', // sender address
        to: 'wwt1983@yandex.ru', // list of receivers
        subject: 'Заказ с сайта', // Subject line
        //text: 'Заказ: тел: ' + obj.phone + '\n имя: ' + obj.name + '\n адресс: ' + obj.address + '\n стоимость: ' + obj.price + '\n позиции ' + obj.info, // plain text body
        html: '<strong>Заказ </strong>' +
        '<br/> Тел: ' + obj.phone +
        '<br/> Имя: ' + obj.name +
        '<br/> Адрес: ' + obj.address +
        '<br/> Общая стоимость: заказа: ' + obj.price + ' руб. <br/>' +
        '<br/> Позиции ' + JSON.stringify(obj.info) + ']'// html body
    };
    },
    mailerOptionsForClient : (email) => {
        return {
            from: '"Pizza Mozzarella" <info@mozzarella174.ru', // sender address
            to: email, // list of receivers
            subject: 'Заказ с сайта пиццерии-траттории Моццарелла', // Subject line
            html: 'Спасибо, Ваш заказ принят к обработке.<br/><image src="/upload/mozzarella_logo.png" />'
        };
    },
}
