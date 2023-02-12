import { callback } from "@shared/callback/importCallback"

export class CallbackService {

    public start(name: string) {
        if (!callback[name]) {
            throw (`Ошибка функция с именем ${name} не реализована`);
        }
        return callback[name];
    }
}