import { ConfigFrontParamsDataEnum } from "@/entities/configFront/enums/ConfigFrontParamsDataEnum";

export interface ConfigFrontParamsModel {
    type: ConfigFrontParamsDataEnum;
    key: string[]; // куда сохранить в объект
    id?: string; // id dom элемента
    link?: string[]; // ключи до значения
}