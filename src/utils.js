const formatDate = (date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

const reverseDate = (date, separator = "-") =>
  date ? date.split("-").reverse().join(separator) : date;

export { formatDate, reverseDate };
