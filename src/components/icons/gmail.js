import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={32}
    height={32}
    {...props}
  >
    <path d="M6 7.031c-.309 0-.598.059-.875.145L8.039 9.03h15.922l2.914-1.855A2.933 2.933 0 0 0 26 7.03Zm-1.887.688A2.978 2.978 0 0 0 3 10.03v13c0 1.653 1.348 3 3 3h20c1.652 0 3-1.347 3-3v-13c0-.933-.438-1.761-1.113-2.312L16 15.28ZM6 12.445l10 6.367 10-6.367v11.586H6Z" />
  </svg>
)

export default SvgComponent
