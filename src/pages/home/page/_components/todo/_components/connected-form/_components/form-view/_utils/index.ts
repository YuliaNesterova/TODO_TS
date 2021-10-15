import {
  composeValidators,
  PatternValidator,
  SimpleValidator,
} from '@wildberries/validators';

const simpleValidator = new SimpleValidator();
const patternValidator = new PatternValidator();

export const fieldValidations = composeValidators([
  patternValidator.customPatternValidate({
    pattern: /^[a-zA-Zа-яА-я\s\-/]+$/gi,
    errorTextValue: 'Можно ввести только буквы',
  }),
  simpleValidator.minLenghtValidate(10, 'Минимум 10 символов'),
  simpleValidator.maxLenghtValidate(20, 'Максимум 20 символов'),
]);
