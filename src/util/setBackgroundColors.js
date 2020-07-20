export const setBackgroundColors = (id) => {
  const time = new Date().getHours();
  const isDay = time > 6 && time < 20 ? true : false;

  /** Clear Sky */
  if (id === 800 && isDay) {
    return ['#4ebbed', '#7ac7eb'];
  }
  if (id === 800 && !isDay) {
    return ['#112754', '#23365c'];
  }
  /** */

  if (id > 800 && isDay) {
    return ['#f5db73', '#7ac7eb'];
  }
  if (id > 800 && !isDay) {
    return ['#0f2e6b', '#4d5c7a', '#7ac7eb'];
  }

  if (id >= 200 && id < 800) {
    return ['#2f476e', '#212936'];
  }
};
