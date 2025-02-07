document.addEventListener("DOMContentLoaded", () => {
  const sphereButton = document.getElementById("sphereButton");
  const sphereDisplay = document.getElementById("sphereDisplay");
  const taskMessage = document.getElementById("taskMessage");
  let spheres = [];

  // Загрузка сфер из файла spheres.txt
  fetch("spheres.txt")
    .then((response) => response.text())
    .then((data) => {
      spheres = data.split("\n").filter((sphere) => sphere.trim() !== "");
    })
    .catch((error) => console.error("Ошибка загрузки файла:", error));

  // Функция для получения случайной сферы
  function getRandomSphere() {
    const randomIndex = Math.floor(Math.random() * spheres.length);
    return spheres[randomIndex];
  }

  // Обработчик нажатия на кнопку
  sphereButton.addEventListener("click", () => {
    // Меняем цвет кнопки на лососевый
    sphereButton.style.backgroundColor = "#fa8072";

    // Через 20 секунд возвращаем цвет кнопки на салатовый
    setTimeout(() => {
      sphereButton.style.backgroundColor = "#98fb98";
    }, 20000);

    // Показываем случайную сферу
    const randomSphere = getRandomSphere();
    sphereDisplay.textContent = randomSphere;
    sphereDisplay.style.opacity = 1;

    // Показываем задачу
    taskMessage.textContent = "Придумай 10 ассоциаций на эту сферу.";
    taskMessage.style.opacity = 1;

    // Через 20 секунд скрываем сферу и задачу
    setTimeout(() => {
      sphereDisplay.style.opacity = 0;
      taskMessage.style.opacity = 0;
    }, 20000);
  });
});