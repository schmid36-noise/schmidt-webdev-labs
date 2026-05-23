// Add your code here

const calculateAge = function (givenDate) {
  const birthday = new Date(givenDate);

  const today = new Date();

  if (isNaN(birthday.getTime())) {
    return "Error: Invalid date format";
  }

  age = today.getFullYear() - birthday.getFullYear();
  monthDiff = today.getMonth() - birthday.getMonth();
  dayDiff = today.getDate() - birthday.getDate();

  if (monthDiff < 0 || (monthDiff == 0 && dayDiff < 0)) age--;

  if (age < 0) return `Error: Birth date cannot be in the future`;

  if (age > 100) return `Are you sure you are more than ${age} years old?`;

  return `You are ${age} years old`;
};

console.log(calculateAge("2000-07-01"));
// You are 25 years old
console.log(calculateAge("1988-05-18"));
// You are 38 years old
console.log(calculateAge("2190-01-01"));
// Error: Birth date cannot be in the future
console.log(calculateAge("1800-01-01"));
// Are you sure you are more than 125 years old?
console.log(calculateAge("invalid-date"));
// Error: Invalid date format

// Note: These calculations were done on May 18, 2026.
