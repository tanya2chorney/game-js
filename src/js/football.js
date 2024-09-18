document.addEventListener('DOMContentLoaded', function () {
  const field = document.getElementById('field');
  const ball = document.getElementById('ball');

  field.addEventListener('click', function (event) {
    const fieldRect = field.getBoundingClientRect();
    const ballRadius = ball.offsetWidth / 2;

    let clickX = event.clientX - fieldRect.left;
    let clickY = event.clientY - fieldRect.top;

    clickX = Math.max(
      ballRadius,
      Math.min(clickX, field.offsetWidth - ballRadius)
    );
    clickY = Math.max(
      ballRadius,
      Math.min(clickY, field.offsetHeight - ballRadius)
    );

    ball.style.transform = `translate(${clickX - ballRadius}px, ${
      clickY - ballRadius
    }px)`;
  });
});
