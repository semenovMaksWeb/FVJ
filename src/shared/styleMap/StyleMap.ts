import { IStyle, IStyleMap } from "./IStyleMap";

/**
 * @class обработка стилей style
 */
export class StyleMap {
    /**
    * Map style от back
    */

    private style: IStyleMap;
    /**
    *  element-dom style
    */
    private readonly styleElement: CSSStyleDeclaration;

    constructor(style: IStyle, styleElement: CSSStyleDeclaration) {
        this.style = new Map(Object.entries(style));
        this.styleElement = styleElement;
        for (const [key, value] of this.style.entries()) {
            console.log(key, value);
            this.set(key, value);
        }
    }

    /**
    * Добавить или обновить стиль
    * @param key - ключ стиля
    * @param value - значения стиля
    */
    set(key: string, value: string) {
        this.style.set(key, value);
        this.styleElement.setProperty(key, value);
    }

    /**
    * Удалить стиль по ключу
    * @param key - ключ стиля
    */
    delete(key: string) {
        this.style.delete(key);
        this.styleElement.removeProperty(key);
    }

    /**
     * вернуть стили 
     * @test
     * @returns объект стили
     */
    get() {
        return this.style;
    }
}