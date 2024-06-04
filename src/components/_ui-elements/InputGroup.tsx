import { HTMLInputTypeAttribute, useId } from "react";

interface Props {
  children: string
  name: string
  type: HTMLInputTypeAttribute
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const InputGroup = ({ children, name, type, handleInput, value }: Props) => {
  const identifier = useId();

  return (
    <div>
      <label htmlFor={identifier}>{children}</label>
      <input name={name} id={identifier} type={type} onChange={(event) => handleInput(event)} value={value}/>
    </div>
  )
}

export default InputGroup;