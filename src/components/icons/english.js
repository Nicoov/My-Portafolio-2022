import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32} height={32}
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M5.1 42.4c-5.2 2.9-5 .4-5.1 84.8V206h238V41H122.8c-93.8.1-115.7.3-117.7 1.4zm37.6 19.8c1.2 1.1 2.4 3.1 2.7 4.4.4 1.4 1.4 2.4 2.4 2.4 2 0 5.5 3.4 6.6 6.4 1.2 3.5-1.3 8.7-5 10.2-2.2.9-3.9 2.6-4.8 4.7-1.6 3.8-6.2 6.3-10.1 5.3-3-.8-6.5-4.4-6.5-6.7 0-1.1-1.3-2.2-3.4-2.9-5.6-1.8-7.9-9.3-4.2-13.9.6-.8 2.6-2 4.4-2.8 1.9-.8 3.2-2 3.2-3.1 0-1 1-2.8 2.3-3.9 3.8-3.6 8.5-3.6 12.4-.1zm55.1.1c1.2 1.1 2.2 2.9 2.2 3.9 0 1.1 1.3 2.3 3.3 3.1 1.7.8 3.7 2 4.3 2.8 3.7 4.6 1.4 12.1-4.2 13.9-2.1.7-3.4 1.8-3.4 2.9 0 2.3-3.5 5.9-6.5 6.7-3.9 1-8.5-1.5-10.1-5.3-.9-2.1-2.6-3.8-4.8-4.7-3.7-1.5-6.2-6.7-5-10.2 1.1-3 4.6-6.4 6.6-6.4 1 0 2-1 2.4-2.4 1.7-6.8 9.8-9.1 15.2-4.3zm56.4 2.7c.9 1.8 3.1 3.9 4.7 4.6 7.7 3.2 6.7 14.8-1.5 16.8-1.5.4-2.4 1.4-2.4 2.5 0 2.4-5.4 7.1-8.1 7.1-3.4 0-7.6-2.8-8.8-5.9-.7-1.6-2.6-3.5-4.2-4.2-3.1-1.2-5.9-5.4-5.9-8.8 0-2.7 4.7-8.1 7.1-8.1 1.1 0 2.1-.9 2.5-2.4.7-2.9 4.1-6.2 6.9-6.8 3.5-.8 7.9 1.6 9.7 5.2zm53.3-2.5c1.4 1.3 2.5 3.1 2.5 3.9 0 .9 1.5 2.2 3.4 3 8.2 3.4 7.4 14.5-1.1 17.1-1.3.3-2.3 1.3-2.3 2.1 0 .9-1.4 2.9-3 4.6-2.7 2.6-3.6 3-6.7 2.5-4.2-.7-6.9-2.9-7.7-6.3-.4-1.4-1.6-2.6-3.1-3-3.5-.9-6.5-5-6.5-8.9 0-3.6 4.1-8.5 7-8.5 1.1 0 2-1 2.4-2.5 1.6-6.5 10.4-8.8 15.1-4zM39.8 106.1c1.9.6 3.6 2.3 4.7 4.4.9 2 3 4.1 5 5.1 3.7 1.7 6.1 6.6 4.9 10-1.1 3-4.6 6.4-6.6 6.4-1 0-2 1-2.4 2.4-.9 3.8-5 7-8.9 7-3.9 0-8.2-3.4-8.7-6.8-.2-1.3-1.1-2.2-2.4-2.4-3.4-.5-6.8-4.8-6.8-8.7 0-3.9 3.2-8 7-8.9 1.4-.4 2.4-1.4 2.4-2.4 0-2.6 4.7-6.7 8.1-7.1.3-.1 2 .4 3.7 1zm58 2.1c1.2 1.2 2.2 3 2.2 4s1 2 2.4 2.4c3.8.9 7 5 7 8.9 0 3.9-3.4 8.2-6.8 8.7-1.3.2-2.2 1.1-2.4 2.4-.5 3.4-4.8 6.8-8.7 6.8-3.9 0-8-3.2-8.9-7-.4-1.4-1.4-2.4-2.4-2.4-2 0-5.5-3.4-6.6-6.4-1.2-3.4 1.2-8.3 4.9-10 2-1 4.1-3.1 5.1-5.1 2.6-5.6 9.4-6.7 14.2-2.3zm55 0c1.2 1.2 2.2 3 2.2 4s1 2 2.4 2.4c6.5 1.6 9 10.2 4.5 15-1.2 1.3-3.1 2.4-4.1 2.4-1.1 0-2.3 1.3-3.1 3.2-.8 1.8-2 3.8-2.8 4.4-4.6 3.7-12.1 1.4-13.9-4.2-.7-2.1-1.8-3.4-2.9-3.4-2.3 0-5.9-3.5-6.7-6.5-1-3.9 1.5-8.5 5.3-10.2 2.3-.9 3.8-2.4 4.5-4.4 2-5.8 9.7-7.2 14.6-2.7zm54-.9c.8.6 2.1 2.7 2.9 4.4.8 2.1 2 3.3 3.2 3.3 2.8 0 6.1 4.7 6.1 8.7 0 3.6-3.6 8.3-6.4 8.3-.9 0-2.2 1.6-3.1 3.5-3.2 7.8-13.8 7.8-16.6.1-.9-2.4-1.9-3.6-3.1-3.6-3 0-6.8-4.8-6.8-8.7 0-3.6 3.6-8.3 6.4-8.3.9 0 2.4-1.7 3.5-3.8 1.1-2.1 3-4.3 4.3-5 2.6-1.3 7.4-.8 9.6 1.1zM42.5 153.5c1.4 1.3 2.5 3.1 2.5 3.9 0 .9 1.7 2.4 3.9 3.5 8.1 4.2 7.7 13.3-.6 16.8-2.1.8-3.3 2-3.3 3.2 0 2.8-4.7 6.1-8.7 6.1-3.6 0-8.3-3.6-8.3-6.4 0-.9-1.6-2.2-3.5-3.1-7.8-3.2-7.8-13.8-.1-16.6 2.4-.9 3.6-1.9 3.6-3.1 0-1.1 1.2-3 2.6-4.3 3.6-3.3 8.7-3.3 11.9 0zm54.9 0c1.4 1.3 2.6 3.2 2.6 4.3 0 1.2 1.2 2.2 3.6 3.1 7.7 2.8 7.7 13.4-.1 16.6-1.9.9-3.5 2.2-3.5 3.1 0 2.8-4.7 6.4-8.3 6.4-4 0-8.7-3.3-8.7-6.1 0-1.2-1.2-2.4-3.2-3.2-8.4-3.5-8.8-12.6-.7-16.8 2.2-1.1 3.9-2.6 3.9-3.5 0-.8 1.1-2.6 2.5-3.9 3.2-3.3 8.3-3.3 11.9 0zm55 .1c1.4 1.5 2.6 3.5 2.6 4.4 0 1.1 1 2 2.5 2.4 3.7.9 6.5 4.5 6.5 8.4 0 4.6-1.6 7.1-5.6 8.8-1.9.8-3.4 2.1-3.4 3 0 .8-1.1 2.6-2.5 3.9-4.8 4.9-12.9 2.6-15-4.3-.3-1.2-1.3-2.2-2.1-2.2-.9 0-2.9-1.4-4.6-3-2.6-2.7-3-3.6-2.5-6.7.7-4.1 2.9-6.9 6.1-7.7 1.4-.3 2.9-1.9 3.6-3.6 2.6-6.4 9.7-8 14.4-3.4zm54.5 0c1.7 1.4 3.1 3.4 3.1 4.5 0 1 .6 1.9 1.4 1.9.8 0 2.8 1.2 4.5 2.6 2.5 2 3.1 3.4 3.1 6.4 0 4.2-3.8 9-7.1 9-1.2 0-1.9.7-1.9 1.9 0 3.3-4.8 7.1-9 7.1-3 0-4.4-.6-6.4-3.1-1.4-1.7-2.6-3.7-2.6-4.5 0-.8-.9-1.4-1.9-1.4-2.7 0-7.1-5.6-7.1-8.9 0-3.5 3.2-7.7 6.5-8.5 1.5-.4 2.7-1.6 3.1-3.1.8-3.3 5-6.5 8.5-6.5 1.5 0 4.1 1.2 5.8 2.6zM256 50v9h256v-5c0-2.7-.5-6.1-1.2-7.5-2.6-5.8 4.1-5.5-130.8-5.5H256v9zM256 87v9h256V78H256v9zM256 123.5v9.5h256v-19H256v9.5zM256 160v9h256v-18H256v9zM256 196.5v9.5h256v-19H256v9.5zM0 233v9h512v-18H0v9zM0 270v9h512v-18H0v9zM0 306v9h95.3c81 0 96-.2 100.7-1.5 19.8-5.4 51.7-8.1 75.8-6.5 15.8 1.1 34 3.7 44.2 6.5 4.7 1.3 19.7 1.5 100.8 1.5H512v-18H0v9zM228.5 326.2c-49.9 5.6-91.5 26.8-104.7 53.4-8.8 17.8-5.2 34.8 10.7 51 19.1 19.5 51.1 32.8 92.5 38.5 12.2 1.7 45.8 1.7 58 0 41.4-5.7 73.4-19 92.5-38.5 15.9-16.2 19.5-33.2 10.7-51-13.4-27-55.1-48-106.4-53.5-11.4-1.3-41.9-1.2-53.3.1zm-21.4 28.7 2.9 2.9V387c0 37.7.1 38 14 38s14-.3 14-38v-29.2l3-3c2.7-2.6 3.6-3 6.7-2.5 2 .4 4.6 1.6 5.7 2.7 2 2 2.1 3.1 2.1 35.3v33.2l-2.9 5.3c-5.8 10.4-13.4 14.2-28.6 14.2-15.2 0-22.8-3.8-28.6-14.2l-2.9-5.3-.3-32c-.2-34.4-.1-35.7 4.8-38.2 4-2 6.9-1.5 10.1 1.6zm97 .3c9.9 4.2 13.3 11.9 7.6 17.5-3.4 3.4-8.1 3.6-12.6.4-7-5-15.1-1.6-15.1 6.4 0 5.6 2.8 8.1 10.5 9.4 11.4 1.8 17.3 5.6 22.1 14.3 2.5 4.5 2.9 6.4 2.9 12.8 0 10-3.5 16.7-11.9 22.5-5.7 3.9-6 4-14.4 4-9.5 0-13.3-1.3-19-6.5-2.6-2.3-3.2-3.6-3.2-7 0-8.3 7.4-11.4 15.5-6.5 5.1 3.1 8.5 3.2 11.8.1 3.5-3.2 4.2-6.7 2.3-10.5-2-3.8-3.7-4.7-10.3-5.4-17.2-1.9-28.7-18.6-23.9-34.8 4.6-15.9 21.8-23.5 37.7-16.7zM0 343v9h121l5.8-5.3c3.1-2.8 8.1-6.7 11-8.6 2.8-1.8 5.2-3.5 5.2-3.7 0-.2-32.2-.4-71.5-.4H0v9zM369 334.4c0 .2 2.4 1.9 5.3 3.7 2.8 1.9 7.8 5.8 10.9 8.6l5.8 5.3h121v-18h-71.5c-39.3 0-71.5.2-71.5.4zM0 375.5c0 6.2 1.2 9.5 4.3 11.6 3.1 2 96.5 2.7 97.1.7 1.1-3.9 4.5-14.5 5.1-16.1.7-1.6-2.2-1.7-52.9-1.7H0v5.5zM405.5 371.7c.6 1.6 4 12.2 5.1 16.1.6 2 94 1.3 97.1-.7 3.1-2.1 4.3-5.4 4.3-11.6V370h-53.6c-50.7 0-53.6.1-52.9 1.7z" />
  </svg>
)

export default SvgComponent
