export const formatString = (unformattedString) => {
  if (unformattedString.length > 2) {
    return unformattedString
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');
  }
  return unformattedString.toUpperCase();
};
