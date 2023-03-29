import { FunctionComponent } from "react"

type InputCheckboxProps = {
  id: string | number
  checked?: boolean
  onClick: (newValue: boolean) => void
  disabled?: boolean
}

export type InputCheckboxComponent = FunctionComponent<InputCheckboxProps>
