$(function(){       //Получаем id ссылки
    $('.modal').click(function(){
        var element_id = this.id;
        var element_close = this.id;
        //получение id для закрытия модального окна
        element_close = '#close_' + element_close; 
        //получение id для открытия модального окна
        element_id = '#modal_' + element_id;
        console.log(element_close);
        console.log(element_id);
        //Открываеи и закрываем модальное окно
        $(function(){
            $(element_id).css('display', 'block');    
        });
        $(element_close).click(function(){
            $(element_id).css('display', 'none');
        });
        return false;
    });
});