import json from './parser';
import read from './reader';

class GameSavingLoader {
  static async load() {
    try {
      const data = await read(); // Ждем завершения чтения данных
      const value = await json(data); // Ждем завершения преобразования данных в JSON
      const gameSaving = JSON.parse(value); // Преобразуем строку JSON в объект
      return gameSaving; // Возвращаем объект GameSaving
    } catch (error) {
      throw new Error('Failed to load game saving'); // В случае ошибки выбрасываем исключение
    }
  }
}

(async () => {
    try {
      const saving = await GameSavingLoader.load();
      // saving - объект класса GameSaving
      console.log(saving);
    } catch (error) {
      // Обработка ошибки
      console.error(error);
    }
  })();

// Пример использования:
GameSavingLoader.load()
  .then((saving) => {
    // saving - объект класса GameSaving
    console.log(saving);
  })
  .catch((error) => {
    // Обработка ошибки
    console.error(error);
  });
