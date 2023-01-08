import DOMPurify from "dompurify";

export const sanitize = (content: any) => {
  return process.browser ? DOMPurify.sanitize(content) : content;
};

export const getCurrentDate = () => {
  var today = new Date();
  return [today.getFullYear(), today.getUTCMonth() + 1, today.getUTCDate()];
};

export const formatDate = (date: any) => {
  const monthNames = [
    "Stycznia",
    "Lutego",
    "Marca",
    "Kwietnia",
    "Maja",
    "Czerwca",
    "Lipca",
    "Sierpnia",
    "Września",
    "Października",
    "Listopada",
    "Grudnia",
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
