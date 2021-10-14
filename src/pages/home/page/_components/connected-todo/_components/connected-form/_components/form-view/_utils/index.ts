export const onlyLetters = value =>
  value && value.match(/[^a-zA-Zа-яА-ЯёË\s-]/gi)
    ? 'Можно ввести только буквы'
    : undefined;
export const minLetters = value =>
  value && value.length < 10 ? 'Минимум 10 символов' : undefined;
export const maxLetters = value =>
  value && value.length > 20 ? 'Максимум 20 символов' : undefined;

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
