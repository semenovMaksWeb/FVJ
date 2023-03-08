import { IStyle, StyleMap } from "@/shared/StyleMap/import";
import { AttributeMap, IAttribute } from "@/shared/AttributeMap/import";
import { TypeNull } from "@/shared//interface/TypeNull";

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

    /**
    * attribute для создаваемого dom-element 
    */
    private readonly attribute: AttributeMap;

    constructor(
        id: number,
        tag: string,
        parent: HTMLElement,
        className: TypeNull<string>,
        style: TypeNull<IStyle>,
        attribute: TypeNull<IAttribute>
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
        // создаем экземпляр класса для обработки style
        this.style = new StyleMap(this.elem.style, style);
        this.attribute = new AttributeMap(this.elem, attribute);

        /**
        * если классов не существует
        */
        if (className) {
            this.elem.classList.add(className);
        }

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
    
    /**
    * вернуть attribute dom-element
    */
    get attributeGet() {
        return this.attribute;
    }
}