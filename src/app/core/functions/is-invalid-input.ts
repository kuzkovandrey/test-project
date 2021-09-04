import {FormGroup} from "@angular/forms";

export function isInvalidInput(form: FormGroup, inputControlName: string): boolean {

  const isTouched = form?.get(inputControlName)?.touched
  const isInvalid = form?.get(inputControlName)?.invalid

  return !!(isTouched && isInvalid)
}
