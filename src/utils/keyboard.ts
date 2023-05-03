export const enum KEYBOARD_KEYS {
  ARROW_DOWN = 'ArrowDown',
  ARROW_UP = 'ArrowUp',
}

export const getArrowKey = (key: string) => {
  switch (key) {
    case KEYBOARD_KEYS.ARROW_DOWN:
      return KEYBOARD_KEYS.ARROW_DOWN;

    case KEYBOARD_KEYS.ARROW_UP:
      return KEYBOARD_KEYS.ARROW_UP;

    default:
      return null;
  }
};

export default {};
