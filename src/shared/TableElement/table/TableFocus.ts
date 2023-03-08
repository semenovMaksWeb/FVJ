import { TypeNull } from "@/shared/interface/TypeNull";

export class TableFocus {
    private activeRow: TypeNull<HTMLElement> = null;
    private activeCol: TypeNull<HTMLElement> = null;;

    get activeColGet() {
        return this.activeCol;
    }

    get activeRowGet() {
        return this.activeRow;
    }
    /**
    *  сделать активную колонку 
    */
    activeColSet(val: HTMLElement) {
        if (!val.classList.contains("active")) {
            val.classList.add("active");
            this.activeCol?.classList.remove("active");
            this.activeCol = val;
        }
    }

    /**
    *  сделать активную строку 
    */
    activeRowSet(val: HTMLElement) {
        if (!val.classList.contains("active")) {
            val.classList.add("active");
            this.activeRow?.classList.remove("active");
            this.activeRow = val;
        }
    }
}