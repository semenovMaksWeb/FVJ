import { BaseElement } from "@/shared/baseElement/import";
import { IStyle } from "@shared/StyleMap/import";
import { IAttribute } from "@shared/AttributeMap/import";
import { TypeNull } from "@shared/interface/TypeNull";
import { ITableElementData } from "@/shared/TableElement/table/ITableElementData";
import { TdElement } from "../td/TdElement";
import { TableFocus } from "../table/TableFocus";

export class TrElement extends BaseElement {
    private static readonly Tag = "tr";
    private readonly tableFocus: TableFocus;
    constructor(
        id: string,
        parent: HTMLElement,
        className: TypeNull<string>,
        style: TypeNull<IStyle>,
        attribute: TypeNull<IAttribute>,
        data: ITableElementData,
        index: number,
        tableFocus: TableFocus
    ) {
        // добавление параметров
        if (attribute == null) {
            attribute = { "data-index": index.toString() }
        } else {
            attribute["data-index"] = index.toString();
        }

        // добавление класса
        if (className == null) {
            className = "tr";
        } else {
            className += " tr";
        }

        super(id, TrElement.Tag, parent, className, style, attribute, null);

        this.tableFocus = tableFocus;

        // сделать 1 строку в таблице активной
        if (index == 1) {
            this.tableFocus.activeRowSet(this.elemGet);
        }

        // обработка активности строк
        this.elemGet.addEventListener("click", () => {
            this.tableFocus.activeRowSet(this.elemGet);
        });

        // отрисовка колонок
        let index_col = 0;
        for (const key in data) {
            index_col++;
            const col = new TdElement(
                `${this.idGet}_row-${index}_col-${key}`,
                this.elemGet,
                null,
                null,
                null,
                index_col,
                data[key],
                this.tableFocus
            );
            
            // сделать 1 ячейку в таблице активной
            if (index == 1 && index_col == 1) {
                this.tableFocus.activeColSet(col.elemGet);
            }
        }
    }
}