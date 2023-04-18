> **Эта информация может быть устаревшей.**  
> **Актуальная информация в [README.md](README.md).**

<h1 align="center">Чат Рулетное Расширение (Chatruletka Extension)</h1>

<p align="center">
<a href = "https://chrome.google.com/webstore/detail/alchldmijhnnapijdmchpkdeikibjgoi"><img src="https://img.shields.io/chrome-web-store/users/alchldmijhnnapijdmchpkdeikibjgoi?label=chrome%20users"></a>
<a href = "https://chrome.google.com/webstore/detail/alchldmijhnnapijdmchpkdeikibjgoi"><img src="https://img.shields.io/chrome-web-store/rating/alchldmijhnnapijdmchpkdeikibjgoi?label=chrome%20rating"></a>
<a href = "https://t.me/videochatru_extension_ru"><img src="https://img.shields.io/badge/dynamic/json?label=News%20RU&amp;query=result&amp;suffix=%20Subscribers&amp;logo=telegram&amp;url=https%3A%2F%2Fapi.telegram.org%2Fbot5041993583%3AAAFGRQXy-mstURIBCaoA4IFczRrMeUNrVRc%2FgetChatMemberCount%3Fchat_id%3D%40videochatru_extension_ru"></a>
<a href = "https://t.me/videochatru_chat_ru"><img src="https://img.shields.io/badge/dynamic/json?label=Chat%20RU&amp;query=result&amp;suffix=%20Members&amp;logo=telegram&amp;url=https%3A%2F%2Fapi.telegram.org%2Fbot5041993583%3AAAFGRQXy-mstURIBCaoA4IFczRrMeUNrVRc%2FgetChatMemberCount%3Fchat_id%3D%40videochatru_chat_ru"></a>
<img src="https://img.shields.io/github/license/qrlk/videochatru-extension " >
<img src="https://img.shields.io/date/1632816617?label=released " >

</p>

**Это расширение для Chrome, которое расширяет функционал сайта [Чат Рулетки](https://videochatru.com).**

**Его можно установить
из [интернет-магазина Chrome](https://chrome.google.com/webstore/detail/alchldmijhnnapijdmchpkdeikibjgoi).**

<img src="https://cdn.discordapp.com/attachments/612424362946985987/891630030294229042/unknown.png">

[<sup>больше скринов</sup>](screens.md#russian)

### Расширение для Чат Рулетки умеет:

* Определять местоположение собеседника по его IP-адресу.
* Определять текущее время в часовом поясе собеседника.
* Определять пол собеседника по его лицу и пропускать автоматически мужчин/женщин.
* Режим зеркала. Это
  полезно, [если у вас нет физической камеры](https://github.com/qrlk/videochatru-extension/wiki/No-Physical-Cam%20(Russian)).
* Показывать местоположение собеседника на карте.
* Делать скрин камеры собеседника или вашей.
* Скрывать водяной знак / баннер видеочата.
* Открывать версию рулетки без мусора (по клику на иконку расширения).
* Помочь вам советом, если вы случайно попали в бан.
* Удобные сочетания клавиш.

## Пожалуйста, обратите внимание

* Это расширение предназначено для реальных пользователей, которые приходят в чат пообщаться без враждебных намерений.
* Существует **[videochatru-mitm](https://github.com/qrlk/videochatru-mitm/blob/main/README_RU.md)**, созданный для нужд
  Ютуберов.
* Все Пул Реквесты с функционалом, которой может нанести вред пользователям платформы, например, обойти запрет на
  виртуальные камеры, чтобы пугать людей скримерами, будут отклонены.

## Что такое Чат Рулетка?

**Под "Чат Рулеткой" я подразумеваю глобальную платформу, состоящую из мобильных приложений и множества веб-сайтов,
разделяющих одну и ту же базу пользователей.**

Цель "платформы" - позволить пользователям находить случайного собеседника одним нажатием кнопки.

Связь между пользователями устанавливается напрямую через webrtc, в то время как сервис берет на себя функции арбитра и
зарабатывает деньги с помощью платных разбанов.

**Мобильная часть "платформы" включает в себя:**

* [**Чат Рулетка**](https://play.google.com/store/apps/details?id=com.chat.ruletka) (10 млн+ пользователей)
* [**Ome.tv**](https://play.google.com/store/apps/details?id=omegle.tv) (50 млн+ пользователей)
* [**Мини-чат**](https://apps.apple.com/ua/app/minichat-video-chat-texting/id1506912979 )

**Веб-часть "платформы" включает ~30 сайтов:**

* **https://ome.tv**
* **https://videochatru.com**
* **https://chatruletka.com**
* **https://ruletka.chat**
* **https://chatrulez.ru**
* **https://chatalternative.com**
* **https://chat-de.com**
* **https://chat-pt.com**
* **https://videochatnl.com**
* **https://ruletaespanol.com**
* **https://videochatpl.com**
* **https://videochatuk.com**
* **https://chat-brasil.com**
* Менее популярные инстансы с аналогичным дизайном.

## Участие в разработке

Если у вас есть желание внести свой вклад, [вот небольшая инструкция](CONTRIBUTING.md).

### Некоторые идеи:

* Статистика использования: время, проведенное в разговорах, количество автоматических пропусков и так далее.
* При необходимости добавьте собеседников в постоянный/временный черный список по IP.
* Интеграция API распознавания лиц, таких сервисов, как findclone.ru.
* Кнопка для очистки файлов cookie в окошке бана.
* Обход фингерпринтинга.
