// Считываем сферы из файла spheres.txt
fetch('spheres.txt')
  .then(response => response.text())
  .then(data => {
    const spheres = data.split('\n').map(sphere => sphere.trim()).filter(sphere => sphere !== '');

    // Функция для обработки нажатия кнопки
    const sphereButton = document.getElementById('sphereButton');
    const sphereOutput = document.getElementById('sphereOutput');
    const associationInstruction = document.getElementById('associationInstruction');

    sphereButton.addEventListener('click', () => {
      // Выбираем случайную сферу
      const randomSphere = spheres[Math.floor(Math.random() * spheres.length)];

      // Показываем сферу
      sphereOutput.textContent = randomSphere;
      sphereOutput.style.display = 'block';

      // Показываем инструкцию
      associationInstruction.textContent = 'Придумай 10 ассоциаций на эту сферу.';
      associationInstruction.style.display = 'block';

      // Меняем цвет кнопки на 20 секунд
      sphereButton.style.backgroundColor = '#e69138'; // Приглушенный лососевый

      // Через 20 секунд скрываем сферу и инструкцию, возвращаем цвет кнопки
      setTimeout(() => {
        sphereOutput.style.display = 'none';
        associationInstruction.style.display = 'none';
        sphereButton.style.backgroundColor = '#6aa84f'; // Приглушенный салатовый
      }, 20000);
    });
  })
  .catch(error => console.error('Ошибка при загрузке файла spheres.txt:', error));