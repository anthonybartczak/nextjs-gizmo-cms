import DOMPurify from "dompurify";

export const sanitize = (content: any) => {
  return process.browser ? DOMPurify.sanitize(content) : content;
};

export const formatDate = (date: any) => {
  const monthNames = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];
  const newDate = new Date(date);
  return [
    String(newDate.getDate()).padStart(2, "0"),
    monthNames[newDate.getMonth()],
    newDate.getFullYear(),
    newDate.getHours(),
    String(newDate.getMinutes()).padStart(2, "0"),
  ];
};
