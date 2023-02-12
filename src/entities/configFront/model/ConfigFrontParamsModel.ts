import { ConfigFrontParamsDataEnum } from "@/entities/configFront/enums/ConfigFrontParamsDataEnum";

export interface ConfigFrontParamsModel {
    type: ConfigFrontParamsDataEnum; 
    key?: string[]; // ключи до значения
    id?: string; // id dom элемента
}