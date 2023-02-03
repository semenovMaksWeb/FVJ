import { ObjectAny } from "@shared/model/ObjectAny";
import { StoreServiceReturn } from "@shared/store/StoreServiceReturn";

export function StoreService(): StoreServiceReturn {

    const store: ObjectAny = {};
    /**
     * @description storeKeyCheck - проверить наличия ключа в store
     * @param key - string
     * @returns boolean
     */
    const storeKeyCheck = (key: string): boolean => {
        if (store[key] == undefined) {
            console.error(`В хранилище нет ключа ${key}`);
            return false;
        }
        return true;
    }

    /**
     * @description storeKeyGet - возвращает объект по ключу
     * @param key - string
     * @returns возвращает объект данных any
     */
    const storeKeyGet = (key: string): any => {
        if (storeKeyCheck(key)) {
            return store[key];
        }
    }

     /**
     * @description storeKeyUpdate - сохранить объект по ключу
     * @param key - string
     * @param value - any
     */
    const storeKeyUpdate = (key: string, value: any) => {
        store[key] = value;
    }

     /**
     * @description storeLinkUpdate - сохранить объект по ссылке
     * @param link - any
     * @param key - string
     * @param value - any
     */
    const storeLinkUpdate = (link: any, key: string, value: any) => {
        link[key] = value;
    }

    return {
        storeKeyGet,
        storeKeyUpdate,
        storeLinkUpdate
    }
}