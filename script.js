const nextXmasDate = (currentTime) => {
  let xmasDate = new Date(currentTime.getFullYear() + "-12-24T22:53:00");
  if (currentTime.getTime() > xmasDate.getTime()) {
    let nextYear = currentTime.getFullYear() + 1;
    xmasDate = new Date(nextYear + "-12-25T00:00:00");
  }
  return xmasDate;
};

document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) to count down to
  let nextXmas = nextXmasDate(new Date()).getTime() / 1000;

  // Set up FlipDown
  let flipdown = new FlipDown(nextXmas)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
     
      alert("C nhắn: T thì không định cưới nên chả care. vậy, đích đến cuối cùng của mqh này là gì? cho vui ư ... T cũng không nghĩ xa thế, tương lai không nói trước được nhưng ít nhất cũng đừng vùi dập nó chứ..");

    });
});
