import classnames from 'classnames'

const ListItem = ({
  children,
  inline,
  block,
  selected
}) => {

  const classes = classnames('px-8 py-4', {
    'block': block,
    'inline': inline,
    'bg-slate-100 font-bold': selected
  })

  return (
    <li className={classes}>{children}</li>
  )
}

export default ListItem
