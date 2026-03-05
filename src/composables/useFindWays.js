import { useMoveCalculate } from "./useMoveCalculate";
import { useCanMove } from "./useCanMove";
import { useEditWay } from "@/composables/useEditWay";
import { useOnTable } from "@/composables/useOnTable";

export function useFindWays(cx, cy, figureType, table, editWay = useEditWay) {
   


    let ways = [
      {
        position: "topLeft",
        cx: cx - 1,
        cy: cy - 1,
      },
      {
        position: "topRight",
        cx: cx + 1,
        cy: cy - 1,
      },
      {
        position: "bottomLeft",
        cx: cx- 1,
        cy: cy + 1,
      },
      {
        position: "bottomRight",
        cx: cx + 1,
        cy: cy + 1,
      },
    ]
    // фильтруем только валидные координаты
  ways = ways.filter(useOnTable);

  // вычисляем доступные ходы
  ways = useMoveCalculate(ways, table, figureType, editWay);

  // оставляем только свободные клетки
  ways = ways.filter((way) => useCanMove(way, table));
 

  

  return ways;
  }