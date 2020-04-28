// css state based on screen width
const maxSize = 812;

const showFlex = (size) => (size < maxSize ? 'none' : 'flex');

const showBlock = (size) => (size < maxSize ? 'none' : 'block');

/* toggle display
* if display is less than maxsize and
* is none -> change to flex
* else if it's flex -> change to none
*/

const toggleFlex = (size, display) => {
  if (size < maxSize) {
    return display === 'none' ? 'flex' : 'none';
  }
  return 'flex';
};


export {
  maxSize, showFlex, showBlock, toggleFlex,
};
