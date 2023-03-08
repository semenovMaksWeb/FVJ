import { IStyle, StyleMap } from "@shared/styleMap/import";

export class BaseElement {
    /**
    * создаваемый dom-element 
    */
    private elem: HTMLElement;

    /**
    * первичный ключ элемента
    */
    private readonly id: number;

    /**
    * style для создаваемого dom-element 
    */
    private readonly style: StyleMap;

    constructor(
        id: number,
        tag: string,
        parent: HTMLElement,
        className: string,
        style: IStyle
    ) {
        if (!id) {
            throw ("Не указан обязательный ключ");
        }
        // сохранение уникального ключа
        this.id = id;

        /**
        * если parent(dom-element) не существует
        */
        if (!parent) {
            throw ("Parent не существует");
        }

        /** создаем dom-element */
        this.elem = document.createElement(tag);

        /**
        * если классов не существует
        */
        if (className) {
            this.elem.classList.add(className);
        }

        // создаем экземпляр класса для обработки style
        this.style = new StyleMap(style, this.elem.style);

        // сохранить id element
        this.elem.setAttribute("id", this.id.toString());
        
        // добавление элемента в верстку
        parent.append(this.elem);

    }

    /**
    * вернуть объект style
    */
    get styleGet() {
        return this.style;
    }

    /**
    * вернуть dom-element
    */
    get elemGet() {
        return this.elem;
    }

    /**
    * вернуть id dom-element
    */
    get idGet() {
        return this.id;
    }
}