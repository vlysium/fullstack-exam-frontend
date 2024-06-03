import { HTMLInputTypeAttribute, useId } from "react";

interface Props {
  children: string
  name: string
  type: HTMLInputTypeAttribute
}

const InputGroup = ({ children, name, type }: Props) => {
  const identifier = useId();

  return (
    <div>
      <label htmlFor={identifier}>{children}</label>
      <input name={name} id={identifier} type={type} />
    </div>
  )
}

export default InputGroup;