import { Libs } from "@/shared";
import { ConfigBackModel } from "@entities/configBack/model/ConfigBackModel";

export function ConfigBackService() {
    const config: ConfigBackModel[] = [];

    /**
    * дефолтное значение при создание новой команды в конфиге
   */
    const DEFAUT_CONFIG_COMMAND = {
        key: [],
        type: null,
        ifs: null
    }

    /**
    * дефолтное значение при создания условия с данными
    */
    const DEFAUT_CONFIG_IFS_DATA = {
        data: { type: null }
    }
    /**
    * дефолтное значение при создания условия с данными
    */
    const DEFAUT_CONFIG_IFS_OPERATOR = {
        operator: "=="
    }

    /**
    * Добавить новую команду в конфиге
    */
    const addCommand = () => {
        Libs.Array.push(DEFAUT_CONFIG_COMMAND, config);
    }

    /**
    * Удалить команду в конфиге
    */
    const deleteCommand = (index: number) => {
        Libs.Array.splice(index, config);
    }

    /**
    * Добавить 1 элемент key в command
    */
    const addKey = (key: String[], value:string) => {
        Libs.Array.push(value, key);
    }

    /**
    * Удалить 1 элемент key в command
    */
    const deleteKey = (key: String[], index: number) => {
        Libs.Array.splice(index, key);
    }


    /**
    * Добавить условие в конфиге
    */
    const addIfs = (configBackModel: ConfigBackModel, type: string) => {
        if (configBackModel.ifs === null) {
            configBackModel.ifs = [];
        }

        if (type == "data") {
            Libs.Array.push(DEFAUT_CONFIG_IFS_DATA, configBackModel.ifs);
            configBackModel.ifs
        }

        if (type == "operator") {
            Libs.Array.push(DEFAUT_CONFIG_IFS_OPERATOR, configBackModel.ifs);
            configBackModel.ifs
        }

    }

    /**
    * Удалить условие в конфиге
    */
    const deleteIfs = (configBackModel: ConfigBackModel, index: number) => {
        if (configBackModel.ifs === null) {
            return;
        }
        Libs.Array.splice(index, configBackModel.ifs);
    }

    return {
        addCommand,
        deleteCommand,

        addIfs,
        deleteIfs,
        
        addKey,
        deleteKey
    }
}