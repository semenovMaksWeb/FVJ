import { ConfigBackIfs } from "./ConfigBackIfs";

export interface ConfigBackModel {
    key: string[];
    type: string;
    ifs: ConfigBackIfs[] | null;
}