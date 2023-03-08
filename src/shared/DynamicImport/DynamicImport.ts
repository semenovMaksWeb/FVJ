/**
* @singleton - создавать 1 экземпляр
*/

import { DynamicImportTypeEnums } from "./DynamicImportTypeEnums";
import { IDynamicImport } from "./IDynamicImport";
import { IDynamicImportMap } from "./IDynamicImportMap";

export class DynamicImport {
    /**
    * Список подключаемых элементов
    */
    private dynamicImportMap: IDynamicImportMap = new Map();

    /**
    * Импорт файла в head
    * @param dynamicImport - новый подключаемый элемент
    */
    public import(dynamicImport: IDynamicImport): void {

        // проверка что файл не был импортирован
        if (this.checkImport(dynamicImport.src)) {
            return;
        }

        switch (dynamicImport.type) {
            case DynamicImportTypeEnums.css:
                this.importCss(dynamicImport);
                break;
        }
    }

    /**
    * 
    * @param name src до файла
    * @returns возвращает boolean true - файл был импортирован, false - не был
    */
    private checkImport(name: string): boolean {
        return !!this.dynamicImportMap.get(name)?.valueOf();
    }

    /**
    * импорт css file в head
    * @param dynamicImport - новый подключаемый элемент
    */
    private importCss(dynamicImport: IDynamicImport): void {
        const css = document.createElement("link");
        css.setAttribute("href", dynamicImport.src);
        css.setAttribute("data-name", dynamicImport.src);
        css.setAttribute("rel", "stylesheet");
        this.dynamicImportMap.set(dynamicImport.src, true);
        document.head.append(css);
    }

    /**
    * импорт css file в head
    * @param dynamicImport - новый подключаемый элемент
    */
    public deleteImport(name: string): void {
        this.dynamicImportMap.delete(name);
        const element = document.querySelector(`[data-name='${name}']`);
        if (element) {
            document.head.removeChild(element);
        }
    }

}