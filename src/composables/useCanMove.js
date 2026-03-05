 import {useOnTable} from "@/composables/useOnTable";

 export function useCanMove(way, table) {
    const { cx, cy } = way;

    //в пределах поля и ячейка пуста
    return useOnTable(way) && table[cy][cx] === 0;
  }