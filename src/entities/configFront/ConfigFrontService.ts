import { Dom, Model } from "@shared/index"

import { ConfigFrontModel } from "@entities/configFront/model/ConfigFrontModel"
import { ConfigFrontElementModel } from "@entities/configFront/model/ConfigFrontElementModel";
import { ConfigFrontElementAttrModel } from "@entities/configFront/model/ConfigFrontElementAttrModel";
import { ConfigFrontElementEvent } from "@entities/configFront/model/ConfigFrontElementEvent";

export class ConfigFrontService {
    private config: any;
    private domService = Dom.DomService();

    constructor(config: ConfigFrontModel) {
        this.config = config
    }

    /**
    * создает новый элемент по ключу с конфига
    * @param type тэг создаваемого элемента
    * @returns новый Element
    */
    private createElement(type: string): Element {
        if (!type) {
            throw new Error("Ошибка не валидно указан type у элемента");
        }
        return this.domService.domElementCreate(type);
    }

    /**
    * добавить элементу атрибуты
    * @param attrs массив атрибутов у элемента
    * @param element элемент к которому нужно добавить атрибуты
    * @returns void
    */
    private createAttr(
        element: Element,
        attrs: Model.DymanicNull<ConfigFrontElementAttrModel[]>
    ): void {

        if (!Array.isArray(attrs)) {
            throw new Error("Ошибка не валидно указан attr у элемента");
        }

        if (!attrs) {
            return;
        }

        attrs.map((attr: any) => {

            if (!attr.key || !attr.value) {
                throw new Error(`Ошибка не валидно заполнен attr - ${attr} у элемента`);
            }

            this.domService.elementAttrSave(element, attr.key, attr.value);
        })
    }

    private createEvent(element: Element, event: Model.DymanicNull<ConfigFrontElementEvent>) {
        if (!event) {
            return;
        }
        for (const name in event) {
            for (const callback of event[name]) {
                if (!callback.name) {
                    throw ("Ошибка не указано имя функции");
                }
                element.addEventListener(name,
                    /**
                    * #TODO использовать shared callback 
                    * тестовый функционал
                    */
                    () => {
                        console.log(1);
                    }
                    /**
                    * #TODO использовать shared callback 
                    * тестовый функционал
                    */
                );
            }
        }
    }


    /**
    * создание потомков 
    * @param element элемент куда нужно сохранить
    * @param children конфиг потомков
    */
    private createChildren(
        element: Element,
        children: Model.DymanicNull<ConfigFrontElementModel[]>
    ) {

        if (children && !Array.isArray(children)) {
            throw new Error("Ошибка не валидно указан children");
        }

        if (children != null) {
            for (const e of children) {
                this.generatorElement(e, element);
            }
        }
    }

    private generatorInnterText(element: Element, innerText?: string,) {
        if (!innerText) {
            return;
        }
        this.domService.elementSaveInnerHTML(element, innerText);
    }

    /**
    * обработка элемента
    * @param configFrontElementModel 
    * @param parent 
    */
    private generatorElement(configFrontElementModel: ConfigFrontElementModel, parent: Element) {
        const element = this.createElement(configFrontElementModel.type);
        this.createElement(configFrontElementModel.type);
        this.createAttr(element, configFrontElementModel.attr);
        this.createChildren(element, configFrontElementModel.children);
        this.generatorInnterText(element, configFrontElementModel.innerHtml);
        this.createEvent(element, configFrontElementModel.event);
        this.domService.domElementAppend(parent, element);
    }

    /**
    * создает body по конфигу
    * @param body конфиг body
    */
    private createBody(body: ConfigFrontElementModel[]): void {
        if (!body || !Array.isArray(body)) {
            throw new Error("Ошибка не валидно указан body");
        }

        body.map((e: ConfigFrontElementModel) => {
            this.generatorElement(e, document.body);
        });
    }

    /**
    * сгенерировать страницу по конфигу 
    */
    public create(): void {
        this.createBody(this.config.body);
    }
}