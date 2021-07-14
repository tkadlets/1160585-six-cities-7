import React, {useState} from 'react';

function CommentSendForm () {
  const [commentValue, setCommentValue] = useState('');
  const ratingStars = [
    {id: 1, title: 'terribly'},
    {id: 2, title: 'badly'},
    {id: 3, title: 'not bad'},
    {id: 4, title: 'good'},
    {id: 5, title: 'perfect'},
  ];

  return (
    <form className="reviews__form form">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((item) =>(
          <div key={item.id}>
            <input className="form__rating-input visually-hidden" name="rating" defaultValue={item.id} id={`${item.id}-stars`} type="radio" />
            <label htmlFor={`${item.id}-stars`}  className="reviews__rating-label form__rating-label" title={item.title}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </div>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={commentValue} onChange={(evt) => setCommentValue(evt.target.value)}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CommentSendForm;
