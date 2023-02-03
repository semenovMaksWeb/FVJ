 
import { ObjectAny } from "@shared/model";
import { FilterDataTableModel } from "./model/FilterDataTableModel";

export function GetDataTableService() {
    
    /**
     * @description filterDataValues - проверка данных на точное сходства с указанными фильтрами 
     * @param filter объект фильтрации данных
     * @param row объект строки данных
     * @returns void
     */
    const filterDataValues = (filter: FilterDataTableModel, row:ObjectAny) => {
        /** нет условие на проверку значения */
        if(!filter.values){
            return;
        }
        /** условие на проверку значения не валидное */
        if (!filter.values.filter( (e:any) => e == row[filter.key]).length) {
            row._tec.visible = false;
        }
    }

    /**
     * filterData - функционал полной фильтрации данных
     * @param data массив данных
     * @param filter массив фильтров 
     */
    const filterData = (data: ObjectAny[], filter: FilterDataTableModel[]) => {
        /** прогон данных */
        data.map((row: ObjectAny) => {
            /** видимость строк reset */
            row._tec.visible = true;
            /** анализ фильтров */
            filter.map((f: FilterDataTableModel) => {
                filterDataValues(f, row);  
            })

        });
    }

    return {
        filterData
    }
}
 