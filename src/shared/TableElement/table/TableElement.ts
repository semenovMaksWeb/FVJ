import { BaseElement } from "@shared/baseElement/import";
import { IStyle } from "@shared/StyleMap/import";
import { IAttribute } from "@shared/AttributeMap/import";
import { TypeNull } from "@shared/interface/TypeNull";
import { ITableData } from "@/shared/TableElement/table/ITableElementData";
import { TrElement } from "../tr/TrElement";
import { TableFocus } from "./TableFocus";

export class TableElement extends BaseElement {
    private static readonly Tag = "table";
    /**
    * данных таблицы  
    */
    private data: ITableData;

    /**
    * класс работы фокуса в таблице
    */
    private readonly tableFocus: TableFocus = new TableFocus()
    constructor(
        id: string,
        parent: HTMLElement,
        className: TypeNull<string>,
        style: TypeNull<IStyle>,
        attribute: TypeNull<IAttribute>,
        data: ITableData,
    ) {
        super(id, TableElement.Tag, parent, className, style, attribute, null);
        this.data = data;
        this.generatorTable();
    }

    /**
     * Генерация таблицы даннымиы
     */
    private generatorTable() {
        for (const [index, elem] of this.data.entries()) {
            const row = new TrElement(
                `${this.idGet}_row-${index + 1}`,
                this.elemGet,
                null,
                null,
                null,
                elem,
                index + 1,
                this.tableFocus
            );
        }
    }
}