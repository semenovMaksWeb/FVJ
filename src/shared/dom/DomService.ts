
export function DomService() {
    /**
    *  @description domElementGet - возвращает элемент с document по select
    *  @param select - string
    *  @returns NodeListOf<Element>
    */
    function domElementGet(select: string): NodeListOf<Element> {
        return document.querySelectorAll(select);
    }

    /**
    *  @description domElementCreate - создает и возвращает element 
    *  @param tag - string
    *  @returns Element
    */
    function domElementCreate(tag: string): Element {
        return document.createElement(tag);
    }

    /**
    *  @description domElementAppend - добавить к родителя потомки через append
    *  @param parent - parent Element
    *  @param children - Element
    */
    function domElementAppend(parent: Element, children: Element): void {
        parent.append(children);
    }

    /**
    *  @description elementAddClass - добавить класс элементу
    *  @param element - Element
    *  @param className - string
    */
    function elementAddClass(element: Element, className: string): void {
        element.classList.add(className);
    }

    /**
    *  @description elementDeleteClass - удалить класс элементу
    *  @param element - Element
    *  @param className - string
    */
    function elementDeleteClass(element: Element, className: string): void {
        element.classList.remove(className);
    }

    /**
    *  @description elementContainsClass - проверить наличия класса у элемента
    *  @param element - Element
    *  @param className - string
    */
    function elementContainsClass(element: Element, className: string): boolean {
        return element.classList.contains(className);
    }

    /**
    *  @description elementAttrGet - получить атрибут у элемента
    *  @param element - Element
    *  @param name - string
    *  @returns string | null
    */
    function elementAttrGet(element: Element, name: string): string | null {
        return element.getAttribute(name);
    }

    /**
    *  @description elementAttrSave - сохранить атрибут у элемента
    *  @param element - Element
    *  @param value - string
    */
    function elementAttrSave(element: Element, name: string, value: string): void {
        element.setAttribute(name, value);
    }

    /**
    *  @description elementAttrSave - сохранить атрибут у элемента
    *  @param element - Element
    *  @param name - string
    */
    function elementAttrRemove(element: Element, name: string): void {
        element.removeAttribute(name);
    }

    /**
    *  @description elementSaveInnerText - сохранить текст у элемента
    *  @param element - Element
    *  @param value - string
    */
    function elementSaveInnerHTML(element: Element, value: string): void {
        element.innerHTML = value;
    }

    return {

        domElementGet,
        domElementCreate,
        domElementAppend,

        elementAddClass,
        elementDeleteClass,
        elementContainsClass,

        elementAttrGet,
        elementAttrRemove,
        elementAttrSave,

        elementSaveInnerHTML
    }
}

