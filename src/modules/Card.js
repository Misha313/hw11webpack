export class Card {
  constructor(classPopupImage) {
    this.classPopupImage = classPopupImage;
  }

  create(name, url) {
    const markup = `
  <div class="place-card">
    <div class="place-card__image">
      <button class="place-card__delete-icon"></button>
    </div>
    <div class="place-card__description">
      <h3 class="place-card__name"></h3>
      <button class="place-card__like-icon"></button>
    </div>
  </div>
  `;

    const element = document.createElement('div');

    element.insertAdjacentHTML('afterbegin', markup);

    const newCard = element.firstElementChild;
    newCard.querySelector('.place-card__name').textContent = name;
    newCard.querySelector('.place-card__image').style.backgroundImage = `url(${url})`;
    this.card = newCard;
    this.imageCard = this.card.querySelector('.place-card__image');
    this.likeIcon = this.card.querySelector('.place-card__like-icon');
    this.deleteIcon = this.card.querySelector('.place-card__delete-icon');
    this.setEventListeners()
    return this.card;
  }

  like(evt) {
    evt.target.classList.toggle('place-card__like-icon_liked');
  }

  remove = (evt) => {
    this.removeEventListeners()
    evt.target.closest('.place-card').remove();
  }


  removeEventListeners() {
    this.imageCard.removeEventListener('click', this.classPopupImage.open);
    this.likeIcon.removeEventListener('click', this.like);
    this.deleteIcon.removeEventListener('click', this.remove);
  }


  setEventListeners() {
    this.imageCard.addEventListener('click', this.classPopupImage.open);
    this.likeIcon.addEventListener('click', this.like);
    this.deleteIcon.addEventListener('click', this.remove);

  }
}

