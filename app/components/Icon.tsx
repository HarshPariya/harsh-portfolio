import clsx from "clsx"

interface Props extends React.SVGProps<SVGSVGElement> {
  name: string
}

export const Icon: React.FC<Props> = ({ name, className, ...rest }) => {
  return (
    <svg
      {...rest}
      className={clsx("text-slate-100", className)}
      fill="currentColor"
    >
      <use xlinkHref={`/custom-icons.svg#${name}`} />
    </svg>
  )
}
