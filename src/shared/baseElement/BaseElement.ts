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
    private readonly id: string;

    /**
    * style для создаваемого dom-element 
    */
    private readonly style: StyleMap;

    /**
    * attribute для создаваемого dom-element 
    */
    private readonly attribute: AttributeMap;

    constructor(
        id: string,
        tag: string,
        parent: HTMLElement,
        className: TypeNull<string>,
        style: TypeNull<IStyle>,
        attribute: TypeNull<IAttribute>,
        text: TypeNull<string>
    ) {
        if (!id) {
            throw ("Не указан обязательный ключ");
        }

        // сохранение уникального ключа
        this.id = id;


        //если parent(dom-element) не существует
        if (!parent) {
            throw ("Parent не существует");
        }

        // создаем dom-element
        this.elem = document.createElement(tag);

        // создаем экземпляр классов
        this.style = new StyleMap(this.elem.style, style);
        this.attribute = new AttributeMap(this.elem, attribute);

        // обработка текста
        if (text) {
            this.elem.innerHTML = text;
        }


        // если классов не существует
        if (className) {
            this.elem.classList.add(className);
        }

        // сохранить id element
        this.elem.setAttribute("id", this.id);

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