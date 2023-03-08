import { BaseElement } from "@/shared/baseElement/import";
import { IStyle } from "@shared/StyleMap/import";
import { IAttribute } from "@shared/AttributeMap/import";
import { TypeNull } from "@shared/interface/TypeNull";
import { TableFocus } from "../table/TableFocus";

export class TdElement extends BaseElement {
    private static readonly Tag = "td";
    private readonly tableFocus: TableFocus;

    constructor(
        id: string,
        parent: HTMLElement,
        className: TypeNull<string>,
        style: TypeNull<IStyle>,
        attribute: TypeNull<IAttribute>,
        index: number,
        text: string,
        tableFocus: TableFocus
    ) {
        // добавление параметров
        if (attribute == null) {
            attribute = { "data-col": index.toString() }
        } else {
            attribute["data-col"] = index.toString();
        }

        // добавление класса
        if (className == null) {
            className = "td";
        } else {
            className += " td";
        }

        super(id, TdElement.Tag, parent, className, style, attribute, text);
        this.tableFocus = tableFocus;

        // обработка активности колонок
        this.elemGet.addEventListener("click", () => {
            this.tableFocus.activeColSet(this.elemGet);
        });
    }
}