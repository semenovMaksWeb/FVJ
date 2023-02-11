import { Model } from "@/shared/index";
import { ConfigFrontElementModel } from "@entities/configFront/model/ConfigFrontElementModel";

export interface ConfigFrontModel {
    head: Model.DymanicNull<ConfigFrontElementModel[]>;
    body: Model.DymanicNull<ConfigFrontElementModel[]>;
    file_link: Model.DymanicNull<string>;
}