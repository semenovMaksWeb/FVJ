import { TypeNull } from "@shared/interface/TypeNull";
import { IAttribute, IAttributeMap } from "./IAttributeMap";



/**
 * @class обработка attribute элемента
 */
export class AttributeMap {
    private attribute: IAttributeMap;
    private readonly element: HTMLElement;
    /**
    *  element-dom attribute
    */


    constructor(element: HTMLElement, attribute: TypeNull<IAttribute>) {
        this.attribute = new Map();

        if (attribute) {
            this.attribute = new Map(Object.entries(attribute));
        }

        this.element = element;
        for (const [key, value] of this.attribute.entries()) {
            this.set(key, value);
        }
    }

    /**
    * Добавить или обновить attribute
    * @param key - ключ attribute
    * @param value - значения attribute
    */
    set(key: string, value: string) {
        this.attribute.set(key, value);
        this.element.setAttribute(key, value);
    }

    /**
    * Удалить attribute по key
    * @param key - ключ attribute
    */
    delete(key: string) {
        this.attribute.delete(key);
        this.element.removeAttribute(key);
    }

    /**
    * вернуть attribute 
    * @test
    * @returns Map attribute
    */
    get() {
        return this.attribute;
    }
}