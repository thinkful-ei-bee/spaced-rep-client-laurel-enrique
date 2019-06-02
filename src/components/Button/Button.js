import React from 'react'
import cx from 'classnames'
import './Button.css'

const Button = React.forwardRef(({ className, ...props }, ref) => {
  console.log(props)
  return (
    <button className={cx('Button', className)} ref={ref} {...props} />
  )
})

export default Button
