### О проекте

**"Интернет-магазин товаров для дома и сада"** _(Garden Products)_

### Дизайн-макет

Используется
[макет в Figma](https://www.figma.com/file/SDNWLzCWkh9ZXdCpWEaByv/project-frontend?type=design&node-id=280-1136&mode=design&t=NJTGdloftvn8I6Vz-0)
с мобильной адаптацией.

### Техническое задание

[TЗ](https://docs.google.com/document/d/1RU3XZ0tYzUHOfF7ijKEsZjT7f086xNL8-OiYQt-cKFk/edit?tab=t.0)

### Задеплоенная реализация

[Link]()

### Описание проекта

Веб-приложение для интернет-магазина товаров для дома и сада. Сайт предоставляет
пользователю удобный интерфейс для просмотра товаров, их категоризации,
добавления в корзину и оформления заказа.

### Используемые Технологии

- React + Vite
- Redux / Redux Toolkit
- React Router
- React DOM
- React Hook Form
- Sass

#### Авторы проекта

Описание вклада в проект:  
_Элла Кадряева_  
[Linkedin](https://www.linkedin.com/in/ella-kadriaieva-79a197259/)  
ella.kadriaieva@gmail.com

1. Верстка: header, hero-section, страниц продуктов по категориям, фильтры.
2. Реализована тема светлая/темная. Создание контекста для отображения модальных
   окон.
3. Работа с Redux Toolkit AsyncThunk для получения данных с backend.
4. Teamlead.

---

_Ирина Данилко_  
 [Linkedin](https://www.linkedin.com/feed/)  
irinadanilkor@gmail.com

1. Верстка: созданы и стилизованы компоненты - карточка продукта Sale Card,
   Sale-section главной страницы, страница продукта ProductDetails, модальное
   окно "1 day discount".
2. Реализованы функции добавление рандомных товаров со скидкой на главной
   странице, вычисление товара дня.
3. Работа с Redux Toolkit AsyncThunk для получения данных с backend.
4. Участие в фиксировании ошибок и отладки кода с командой.

---

_Михаил Губко_  
[Linkedin](https://www.linkedin.com/in/michael-hubko/)  
mixelios@gmail.com

1. Верстка: Созданы и стилизованы компоненты: страница корзины, компоненты
   карточек товаров в корзине и компонент BreadCrumbs. система глобальных стилей
   и использование возможностей SASS.
2. Роутинг: Реализован роутинг в приложении (App).
3. Получение данных: Реализованы функции FetchClient для получения данных с
   бекенда.
4. Работа с Redux: Разработан и внедрен cartSlice с использованием Redux
   Toolkit.
5. Консультации и отладка: Оказаны консультации по верстке, участие в
   фиксировании ошибок и отладке кода.

---

_Юрий Бугир_  
[Linkedin](https://www.linkedin.com/in/yurii-buhir-b83b87291/)  
say.to.yurii@gmail.com

1.  Верстка: созданы и стилизованы три ключевых компонента (Discount,
    CategoryCard, Form), отвечающие за отображение скидок, карточек категорий и
    пользовательских форм соответственно.
2.  Реализована логика: • Discount.jsx: управление и расчёт скидок,
    оптимизированный рендер UI. • CategoryCard.jsx: вывод карточек с контентом
    (изображения, описания), SCSS-модули для гибкой стилизации. • Form.jsx:
    формы ввода данных, валидирование, оптимизированная работа со стейтом
    (hooks, React Hook Form).
3.  Работа с состоянием: используется современный подход React — функциональные
    компоненты, хуки, подключение Redux Toolkit для глобального стейта.
4.  Участие в фиксировании ошибок и отладки кода с командой.

---

_Алексей Белых_  
[Linkedin](https://www.linkedin.com/in/oleksii-bielykh-81266aa8)    
a.bielykh@gmail.com    

1. Созданы и стилизованы компоненты: футер, скелетон.
2. Реализованы функции фильтрации по цене, по наличию скидки, от большей цены к
   меньшей и наоборот.
3. Разработана логика обновления состояния в Redux для более эффективного
   управления данными, внедрен likesSlice с использованием Redux Toolkit.
