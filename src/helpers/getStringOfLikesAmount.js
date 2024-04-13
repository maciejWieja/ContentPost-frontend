export const getStringOfLikesAmount = (amount = 0) => {
  amount = String(amount);

  if (amount > 99999) return '>99k';
  if (amount > 9999) return `${amount.slice(0, 2)}k`;
  if (amount > 999) return `${amount[0]}k`;
  return amount;
};
