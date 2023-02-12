import { Model, Callback } from "@/shared";
import { ConfigFrontParamsModel } from "@entities/configFront/model/ConfigFrontParamsModel";

export interface ConfigFrontElementCallback {
    name: Callback.CallbackEnum;
    save: Model.DymanicNull<ConfigFrontParamsModel>;
    params: Model.DymanicNull<
        Model.DymanicObject<ConfigFrontParamsModel>
    >
}