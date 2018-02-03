module.exports = {
    returnJsonObj: (obj) => {
        return JSON.stringify(obj)
    },
    mailerOptions: (obj) => {
        var txt = '';
        for (let i = 0; i < obj.info.length; i++) {
            txt += 'Позиция ' + (i + 1) + ': ' + obj.info[i].name + '; число: ' + obj.info[i].count + '<br/>';
        }
        
        return {
            from: '"Pizza Mozzarella" <info@mozzarella174.ru>', // sender address
            to: 'wwt1983@yandex.ru, dariko2@yandex.ru, sv83a@ya.ru, info@mozzarella174.ru', // list of receivers
            subject: 'Заказ с сайта', // Subject line
            //text: 'Заказ: тел: ' + obj.phone + '\n имя: ' + obj.name + '\n адресс: ' + obj.address + '\n стоимость: ' + obj.price + '\n позиции ' + obj.info, // plain text body
            html: '<strong>Заказ </strong>' +
                '<br/> Тел: ' + obj.phone +
                '<br/> Имя: ' + obj.name +
                '<br/> Адрес: ' + obj.address +
                '<br/> Комментарий: '   + obj.msg +
                '<br/> Общая стоимость: заказа: ' + obj.price + ' руб. <br/>' +
                '<br/>  ' + txt // html body
        };
    },
    mailerOptionsForClient: (email) => {
        return {
            from: '"Pizza Mozzarella" <info@mozzarella174.ru>', // sender address
            to: email, // list of receivers
            subject: 'Заказ с сайта пиццерии-траттории Моццарелла', // Subject line
            html: 'Спасибо, Ваш заказ принят к обработке.<br/><image src="/upload/mozzarella_logo.png" />'
        };
    }
}
