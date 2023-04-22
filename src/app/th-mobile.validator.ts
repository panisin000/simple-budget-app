import { AbstractControl, ValidationErrors } from "@angular/forms";

export function thMobile(control: AbstractControl<string>): null | { thMobile: boolean } {
    const prefix = control.value.slice(0, 2);
    console.log("prefix", prefix);
    if ((prefix === "08" || prefix === "09") && control.value.length === 10) {
        return null;
    }

    return { thMobile: true };
}