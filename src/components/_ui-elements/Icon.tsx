interface Props {
  name: string;
  className?: string;
}

const Icon = ({ name, className }: Props) => {
  return (
    <i data-icon={name} className={className} role="img" />
  )
}

export default Icon;