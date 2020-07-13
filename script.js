'use strict';

(function () {
  const popupNewPlace = document.querySelector('.popup-new-place');
  const formNew = document.forms.new;
  const formAbout = document.forms.about;
  const placesList = document.querySelector('.places-list');
  const popupImg = document.querySelector('.popup-image');

  const popupPerson = document.querySelector('.popup-person');
  const editProfile = document.querySelector('.user-info__button-size-s');

  const addPersonData = document.querySelector('.popup__button-add-person-data');

  const userInfoContainer = document.querySelector('.user-info')
  const nameTitle = document.querySelector('.user-info__name');
  const aboutPopup = document.querySelector('.user-info__job');
  const openPopupNewPlace = document.querySelector('.user-info__button')


  const namePerson = formAbout.namePerson;
  const aboutPerson = formAbout.aboutPerson;

  const config = {
    baseUrl: 'https://praktikum.tk/cohort11',
    headers: {
      authorization: '6e56edd5-b9e6-415a-9bc5-cf8c6bf91db3',
      'Content-Type': 'application/json'
    }
  }
  const api = new Api(config);

  const popup = new Popup(popupNewPlace);

  const classPopupImage = new PopupImage(popupImg);


  const card = new Card(classPopupImage);

  const cardList = new CardList(placesList, card);

  const newPlacePopup = new PopupNewPlace(popupNewPlace, card, cardList);


  const newFormValidator = new FormValidator(formNew);
  const formAboutValidator = new FormValidator(formAbout);

  const userInfo = new UserInfo(nameTitle, aboutPopup, userInfoContainer, api);
  const editProfileClass = new PopupPerson(popupPerson, namePerson, aboutPerson, userInfo, api);

  api.getInitCards()
    .then((res) => {
      cardList.render(res)
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });

  api.getUserInfo()
    .then((res) => {
      userInfo.setUserInfo(res)
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });

  newFormValidator.setEventListeners()
  formAboutValidator.setEventListeners()


  openPopupNewPlace.addEventListener('click', () => newPlacePopup.open())
  editProfile.addEventListener('click', () => editProfileClass.open())


}())

// Здравствуйте!

// ## Итог

// - класс Api реализован согласно поставленной задаче
// - информация о пользователе  (имя, подпись и аватар) подгружаются с сервера (GET запрос)
// - имя и о себе можно отредактировать (отправляется PATCH запрос, новые данные)
// - карточки подгружаются с сервера (GET запрос)
// - обязательный функционал работает без багов
// - корректная работа с асинхронным кодом
// - DOM изменяется только после того, как запрос успешно выполнен
// - ошибки сервера обрабатываются

// Работа принята

// ## Можно лучше

// Большое количество параметров лучше передвать в метод или в конструктор используя деструктуризацию.

// Например в коде:
// ~~~
// const newClass = new Class({ windowOne, userForm, popupObj })
// ~~~
// А внутри класса:
// ~~~
// constructor ({ userForm, popupObj, windowOne }) {...}
// ~~~
// И тогда порядок переменных будет неважен, это удобно

