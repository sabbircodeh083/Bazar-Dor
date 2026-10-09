"use client";

function DateAndTime() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return <p>{date}</p>;
}

export default DateAndTime;
