
import { useOnTable } from "@/composables/useOnTable";

export function useMoveCalculate(ways, table, figureType, editWay) {
    //доступные направления для каждого цвета шашек
    const availableWays = {
      1: ["topLeft", "topRight"],
      2: ["bottomLeft", "bottomRight"],
    };

    //отфильтрованный массив разрешённых перемещений
    const availableArr = [];

    ways.forEach((way) => {
      const { cx, cy, position } = way;

       // Проверка выхода за пределы доски
    if (!useOnTable(way)) return;
    
      const tableCell = table[cy][cx];
      const isAllowed = availableWays[figureType].includes(position);

       //ячейка пуста, но неверное направление
      if (tableCell === 0 && !isAllowed) return;
      //ячейка пуста, но верное направление
      else if (tableCell === 0 && isAllowed) {
        return availableArr.push(way);
      }
      //ячейка не пуста и там фигура противоположного цвета
      else if (tableCell && tableCell !== figureType) {
        return availableArr.push(editWay(way));
      }
    });

    return availableArr;
  }