import { Model } from "@/shared";
import { ConfigFrontElementAttrModel } from "@entities/configFront/model/ConfigFrontElementAttrModel";

export interface ConfigFrontElementModel {
    type: string;
    innerHtml?: string;
    attr:  Model.DymanicNull<ConfigFrontElementAttrModel[]>;
    children: Model.DymanicNull<ConfigFrontElementModel[]>;
}