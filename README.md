# redsoft

https://vvaleri.github.io/redsoft

**Тестовое задание на позицию frontend-разработчика в Redsoft**
-------------------------
(файл с заданием https://docs.google.com/document/d/1Vamqwl3MaXDFOMcEBTVsvoZhADblO-CcBVqVKs3Pij0/edit#)

> использована конфигурация CRA https://github.com/facebook/create-react-app/tree/master/packages/react-scripts плюс react-app-polyfill для ie11 

> файл scss и другие исходники в папке src

> очистить localstorage можно нажав кнопку "найти" рядом со строкой поиска



***
--*текст задания*--

Необходимо сверстать макет страницы интернет-магазина: https://www.figma.com/file/p5xYvZV5Vy9cZvWzkL7uk5/Redsoft-test?node-id=0%3A1

Технические требования:

- Для соискателей, желающих показать свои знания современных библиотек/фреймворков (vue/react/angular): мы в компании используем vue.js. Вы можете показать свои знания библиотеки, выполнив задание с использованием базового шаблона приложения из vue-cli. Использование других библиотек и инструментов нежелательно

- Верстка должна быть выполнена по методологии БЭМ

- Верстка должна максимально соответствовать предоставленному макету и ui-киту. Желательно PixelPerfect. Адаптив делать не нужно.

- Результат должен корректно отображаться во всех популярных браузерах, включая IE 11 версии при разрешении экрана 1200px и выше

- При работе над заданием обязательно использование средств автоматизации (webpack или gulp). Конфигурацию мы не предоставляем. Конфигурация должна корректно работать на 12 версии Node.js

- Обязательно использование scss при выполнении тестового задания (именно scss, не sass)

- Запрещено использовать css-фреймворки (bootstrap, foundation и т.д.)

- Кнопка “купить” должна реализовывать следующий функционал:

1. по ее нажатию должен отправляться ajax запрос методом get по адресу https://jsonplaceholder.typicode.com/posts/1 или https://reqres.in/api/products/3

2. На время выполнения запроса вместо надписи “купить” должен появляться лоадер. Внешний вид лоадера необходимо продумать самостоятельно

3. После удачного запроса внешний вид кнопки должен менять состояние: “в корзине”

4. После перезагрузки страницы состояния товаров (в корзине он или нет) должно сохраняться

5. Для запросов к серверу использовать fetch или axios. Не забудьте про поддержку IE11

