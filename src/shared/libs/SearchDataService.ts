import { DomService } from "@shared/dom/DomService";

export function SearchDataService() {
    /**
    * searchDataDom получить данные с dom
    * @param id id элемента
    */
    const searchDataDom = (id: string) => {
        const domService = DomService();
        const element = domService.domElementGetId(id);
        console.log(element);
    }


    return {
        searchDataDom,
    }
}