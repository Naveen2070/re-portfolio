export function calculateDateDifference(startDate: string): string {
  const start = new Date(startDate); // Convert the input string to a Date object
  const now = new Date(); // Get the current date

  let years: number = now.getFullYear() - start.getFullYear();
  let months: number = now.getMonth() - start.getMonth();
  let days: number = now.getDate() - start.getDate();

  // Adjust months and years if the difference in days is negative
  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Last day of the previous month
    days += lastMonth.getDate(); // Adjust the days difference
  }

  // Adjust the years if the difference in months is negative
  if (months < 0) {
    years--;
    months += 12;
  }

  // Calculate total days difference
  const totalDays: number = Math.floor(
    (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );

  return `${years} years ${months} months ${days} days (${totalDays} days total)`;
}
