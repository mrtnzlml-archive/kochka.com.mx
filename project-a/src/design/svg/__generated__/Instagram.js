// @flow strict

import * as React from 'react';

import SVGIcon from '../SVGIcon';

type Props = {|
  +color?: string,
|};

export default function Facebook(props: Props): React.Node {
  const { color = '#fff' } = props;
  return (
    <SVGIcon viewBox="0 0 504 504" color={color} size={25}>
      <defs>
        <path id="a" d="M0 .159h503.841V503.94H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill={color}
          d="M251.921.159c-68.418 0-76.997.29-103.867 1.516-26.814 1.223-45.127 5.482-61.151 11.71-16.566 6.437-30.615 15.051-44.621 29.056-14.005 14.006-22.619 28.055-29.056 44.621-6.228 16.024-10.487 34.337-11.71 61.151C.29 175.083 0 183.662 0 252.08c0 68.417.29 76.996 1.516 103.866 1.223 26.814 5.482 45.127 11.71 61.151 6.437 16.566 15.051 30.615 29.056 44.621 14.006 14.005 28.055 22.619 44.621 29.057 16.024 6.227 34.337 10.486 61.151 11.709 26.87 1.226 35.449 1.516 103.867 1.516 68.417 0 76.996-.29 103.866-1.516 26.814-1.223 45.127-5.482 61.151-11.709 16.566-6.438 30.615-15.052 44.621-29.057 14.005-14.006 22.619-28.055 29.057-44.621 6.227-16.024 10.486-34.337 11.709-61.151 1.226-26.87 1.516-35.449 1.516-103.866 0-68.418-.29-76.997-1.516-103.867-1.223-26.814-5.482-45.127-11.709-61.151-6.438-16.566-15.052-30.615-29.057-44.621-14.006-14.005-28.055-22.619-44.621-29.056-16.024-6.228-34.337-10.487-61.151-11.71C328.917.449 320.338.159 251.921.159zm0 45.391c67.265 0 75.233.257 101.797 1.469 24.562 1.12 37.901 5.224 46.778 8.674 11.759 4.57 20.151 10.029 28.966 18.845 8.816 8.815 14.275 17.207 18.845 28.966 3.45 8.877 7.554 22.216 8.674 46.778 1.212 26.564 1.469 34.532 1.469 101.798 0 67.265-.257 75.233-1.469 101.797-1.12 24.562-5.224 37.901-8.674 46.778-4.57 11.759-10.029 20.151-18.845 28.966-8.815 8.816-17.207 14.275-28.966 18.845-8.877 3.45-22.216 7.554-46.778 8.674-26.56 1.212-34.527 1.469-101.797 1.469-67.271 0-75.237-.257-101.798-1.469-24.562-1.12-37.901-5.224-46.778-8.674-11.759-4.57-20.151-10.029-28.966-18.845-8.815-8.815-14.275-17.207-18.845-28.966-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.797 0-67.266.257-75.234 1.469-101.798 1.12-24.562 5.224-37.901 8.674-46.778 4.57-11.759 10.029-20.151 18.845-28.966 8.815-8.816 17.207-14.275 28.966-18.845 8.877-3.45 22.216-7.554 46.778-8.674 26.564-1.212 34.532-1.469 101.798-1.469z"
          mask="url(#b)"
        />
        <path
          fill={color}
          d="M251.921 336.053c-46.378 0-83.974-37.596-83.974-83.973 0-46.378 37.596-83.974 83.974-83.974 46.377 0 83.973 37.596 83.973 83.974 0 46.377-37.596 83.973-83.973 83.973zm0-213.338c-71.447 0-129.365 57.918-129.365 129.365 0 71.446 57.918 129.364 129.365 129.364 71.446 0 129.364-57.918 129.364-129.364 0-71.447-57.918-129.365-129.364-129.365zM416.627 117.604c0 16.696-13.535 30.23-30.231 30.23-16.695 0-30.23-13.534-30.23-30.23 0-16.696 13.535-30.231 30.23-30.231 16.696 0 30.231 13.535 30.231 30.231"
        />
      </g>
    </SVGIcon>
  );
}
