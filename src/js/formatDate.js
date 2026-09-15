export default function formatDate(date) {
    if (!date) return "";
  
    const [year, month, day] = date.split("-");
    const monthName = new Date(year, month - 1, day).toLocaleDateString("en-US", {
      month: "long",
    });
  
    return `${day} ${monthName} ${year}`;
  }