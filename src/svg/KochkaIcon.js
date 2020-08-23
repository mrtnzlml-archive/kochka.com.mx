// @flow strict

import * as React from 'react';

import SVGIcon from './SVGIcon';

type Props = {|
  +color?: string,
|};

export default function KochkaIcon(props: Props): React.Node {
  const { color = '#fff' } = props;
  return (
    <SVGIcon viewBox="0 0 376 402" color={color} size={150}>
      <path d="M372.947 205.72l-.162-9.875L369.948 7.49l-5.673-.08-171.272-3.4-9.76-.243L.378.122 7.753 395.37l5.673.08 362.52 5.9-3-195.64zm-17.344-9.875l-.162 9.875-2.594 172.734-333.585 5.423L25.908 25.7l332.37-6.637-2.675 176.78zM149.035 38.493c3.096-.875 6.146.734 8.754 2.215 1.667.946 3.26 2.015 4.847 3.1l.177.12 14.694 10.494 24.073 16.836 23.312 16.64c7.668 5.654 15.242 11.442 22.626 17.464 7.226 5.893 14.223 12.073 20.976 18.503 6.578 6.264 12.92 12.775 19.033 19.494s12 13.65 17.666 20.754l5.372 6.87a371.17 371.17 0 0 1 23.784 35.146c1.913 3.2 3.76 6.44 5.543 9.714 1.404 2.646 2.834 5.287 3.978 8.06.252.634.54 1.3.48 1.993-.684-.234-1.13-.835-1.606-1.34-1.987-2.295-3.772-4.752-5.575-7.2l-24.9-35.087c-5.54-7.578-11.26-15.083-17.428-22.162a270.8 270.8 0 0 0-18.888-19.594c-6.893-6.466-14.148-12.545-21.517-18.455l-8.412-6.623L222.93 97.98l-23.8-17.513c-3.645-2.74-7.394-5.33-11.068-8.037l-15.49-11.114c-1.414-.963-2.838-1.913-4.336-2.74a3.05 3.05 0 0 0-1.36-.387c.03.828.557 1.5.955 2.186 1.427 2.222 2.974 4.363 4.426 6.57 4.047 6.072 7.728 12.467 10.008 19.432 1.75 5.32 2.9 10.998 2.143 16.607a15.58 15.58 0 0 1-6.815 10.839c-.57.364-1.1.774-1.698 1.1-.84.387-1.546 1.05-2.47 1.245-.58.302-1.16.614-1.8.794-.18.055-.355.114-.528.174a16.6 16.6 0 0 0-.526.174c-.18.057-.356.115-.532.178l-.534.174a7.02 7.02 0 0 0-.534.2l-.33.048c-.38.238-.806.45-1.27.394-.824.4-1.746.577-2.646.72a12.13 12.13 0 0 1-2.66.536c-.278.13-.585.146-.883.172-1.434.295-2.893.4-4.33.677-.776-.04-1.5.268-2.292.183-.57.204-1.173.215-1.77.2-.608.2-1.244.202-1.874.14-.445.28-1 .188-1.496.28-7.234.694-14.496 1.703-21.412 4.02a91.02 91.02 0 0 0-8.773 3.43 113.51 113.51 0 0 0-4.257 2.023c-5.905 2.954-11.562 6.44-16.915 10.305a126.84 126.84 0 0 0-7.587 5.926c-2.47 2.086-4.765 4.372-7.196 6.503a148.59 148.59 0 0 0-13.526 14.847c-2.088 2.623-4.068 5.333-5.85 8.175-1.8 2.898-3.354 5.976-4.26 9.274-.776 2.83-1.078 5.807-.693 8.723.567 4.635 2.093 9.082 2.86 13.682.863 4.886.824 9.997-.665 14.76-1.305 4.3-3.277 8.366-5.435 12.298-1.97 3.605-4.146 7.093-6.317 10.58-1.515 2.467-3.104 4.902-4.36 7.514-.54 1.263-1.2 2.607-.938 4.02a1.54 1.54 0 0 0 1.09.911c1.333.34 2.708.076 4.056-.01 2.708-.265 5.42-.792 8.15-.586 1.212.098 2.56.556 3.137 1.723.626 1.337.278 2.868-.094 4.23-.808 2.598-2.16 4.978-3.437 7.365-1.9 3.474-3.958 6.873-5.77 10.4-.75 1.488-1.47 3.005-1.946 4.607-.456 1.582-.6 3.33.053 4.882.713 1.696 2.005 3.053 3.3 4.312 2.517 2.326 5.307 4.333 8.164 6.216 6.136 3.987 12.613 7.448 19.3 10.4 7.32 3.156 15.033 5.678 23.025 6.246 8.754.682 17.514-1.087 25.8-3.86 3.53-1.145 6.954-2.582 10.394-3.967l-12.028-15.36c-.6-.904-1.404-1.737-1.648-2.822.718.073 1.282.563 1.854.957 2.143 1.614 4.118 3.442 6.048 5.305a162.59 162.59 0 0 1 9.621 10.19c.08.1 2.147-1 2.365-1.104l2.4-1.172c3.248-1.608 6.476-3.27 9.6-5.1 1.577-.93 3.317-1.773 4.78-2.873-.1.057-1.292-.895-1.438-.996l-1.506-1.027-3.03-2.028-6.04-3.95-6.065-3.93c-2.242-1.452-4.6-2.884-6.744-4.505-.63-.476-1.464-.974-1.8-1.715 1.377.162 2.607.874 3.873 1.398a230.07 230.07 0 0 1 12.751 6.449c4.22 2.3 8.38 4.73 12.5 7.225.378.23.76.458 1.105.738 2.684-1.556 5.163-3.45 7.845-5.012.397-.242.83-.432 1.306-.423-.1.712-.592 1.26-1 1.826-1.152 1.476-2.43 2.852-3.756 4.175-.44.455-.932.865-1.304 1.385.183-.254 4.714 3.046 5.008 3.247 2.22 1.518 4.384 3.117 6.56 4.7 3.22 2.34 6.42 4.732 9.496 7.26 3.65 2.998 7.272 6.024 10.783 9.185 3.457 3.112 6.83 6.322 10.15 9.58 3.383 3.32 6.703 6.705 9.956 10.153 3.24 3.434 6.46 6.888 9.566 10.445l4.064 4.763 1.883 2.307.93 1.2.48.63c.084.1.433.444.433.575.53.817 1.273 1.572 1.44 2.566-1.08-.396-1.9-1.263-2.783-1.957-5.016-4.365-9.8-8.995-14.655-13.527l-29.385-26.872c-8.738-7.56-17.8-14.753-27.213-21.45a83.35 83.35 0 0 1-19.106 11.913c8.703 10.606 16.043 22.26 22.686 34.25 2.73 5.005 5.426 10.043 7.7 15.28.38.966.854 1.922 1 2.964-.106.245-.344-.07-.463-.14-.895-.96-1.62-2.064-2.377-3.13-3.733-5.466-7.3-11.05-10.933-16.575-6.938-10.528-14.037-20.96-21.75-30.935-7.005 2.78-14.3 4.76-21.697 6.223-4.708.9-9.463 1.593-14.247 1.918-7.778.55-15.806.098-23.137-2.77-3.683-1.43-7.076-3.53-10.153-6-2.563-1.978-4.818-4.335-7.47-6.202-2.233-1.6-4.9-2.34-7.383-3.43-3.338-1.398-6.45-3.342-9.16-5.742-2.7-2.314-5.075-4.997-7.313-7.764-2.088-2.632-4.017-5.395-5.693-8.3-1.652-2.865-3.134-5.9-3.708-9.192-.386-2.08-.15-4.24.546-6.226 1.083-3.016 2.96-5.642 4.65-8.334 3.8-5.766 6.845-12.018 9.378-18.44 1.684-4.264 3.125-8.627 4.226-13.078 1.12-4.493 1.77-9.1 1.983-13.723.376-6.52.106-13.083.966-19.573.83-6.668 2.845-13.2 5.952-19.168 3.027-5.422 6.713-10.355 11.053-14.793 2.386-2.44 4.923-4.73 7.54-6.917 10.64-8.85 22.3-16.323 33.738-24.085 4.83-3.328 9.744-6.612 13.967-10.712.932-.973 1.83-1.978 2.666-3.035l-.294-.005.305-.03c3.378-4.413 4.844-9.9 5.853-15.287-1.326-.874-2.53-1.923-3.903-2.728l-9.078-5.382c-6.235-3.464-12.654-6.6-19.074-9.73-4.887-2.376-9.767-4.77-14.793-6.84-1.592-.656-5.22-2.328-6.06.122-.583 1.708-.36 3.543-.314 5.314.15 1.357.35 2.7.558 4.06a81.44 81.44 0 0 0 1.185 5.57c.245 1 .423 1.996.693 2.98 1.83 6.668 4.622 13.06 7.9 19.14a170.24 170.24 0 0 0 4.524 7.911l.54.894c.57.996 1.235 1.946 1.7 2.994l-.034.346c.014-.134-.715-.753-.828-.88-.306-.345-.593-.706-.9-1.06-.612-.73-1.125-1.568-1.664-2.362-1.17-1.72-2.472-3.418-3.5-5.224L88.86 109.1l-2.496-4.74c-.83-1.614-1.735-3.218-2.48-4.874-.112-.25-.214-.504-.333-.75l-1.16-2.44-2.275-4.902c-1.5-3.28-2.924-6.587-4.254-9.937l-.06-.15-1.24-3.2c-.42-1.108-.8-2.228-1.175-3.352-.626-2.122-1.358-4.292-1.18-6.537.053-.97.63-1.94 1.57-2.28 1.318-.5 2.824-.37 4.182-.124a69.27 69.27 0 0 1 9.844 2.547c1.606.545 3.17 1.25 4.772 1.774 1.715.56 3.42 1.164 5.113 1.8l.306.114c3.353 1.253 6.655 2.566 9.963 3.94L128 84.57l8.837 3.82 2.992-24.297c.417-3.18 1.045-6.334 1.462-9.5.234-1.784.666-3.535 1.132-5.27.445-1.657.828-3.32 1.52-4.892.793-1.805 1.75-3.645 3.323-4.882.514-.404 1.134-.862 1.77-1.044l.001-.001zm-45.36 152.487l6.247.022a110.77 110.77 0 0 1 10.364.896l5.224.824 2.648.518 1.266.272c.264.058 1.02.377 1.263.287-2.1.78-4.723 1.36-6.225 3.177-1.44 1.753-2.242 3.9-3.405 5.837-1.806 3.18-4.616 5.644-7.622 7.652-2.513 1.662-5.217 3.056-8.076 4.015-2.2.717-4.568 1.202-6.895.902-1.725-.204-3.362-.987-4.617-2.186-1.634-1.5-2.792-3.415-3.94-5.3-1.794-2.94-3.628-5.873-5.88-8.485-.608-.77-1.306-1.488-1.74-2.38-1.323-2.84 4.533-3.914 6.3-4.28a87.47 87.47 0 0 1 15.095-1.784h0zm33.306 78.193c.596-.375 1.313-.087 1.957-.02 4.64.892 9.204 2.267 13.67 3.798s8.838 3.3 13.126 5.266c2.936 1.346 5.873 2.75 8.688 4.338a157.66 157.66 0 0 1 11.884 7.136c3.965 2.625 7.816 5.428 11.6 8.318l6.102 4.808c5.35 4.372 10.635 8.844 15.53 13.73.794.9 1.808 1.668 2.256 2.804-1.037-.178-1.854-.9-2.74-1.426-5.594-3.758-11.002-7.787-16.495-11.7-11.482-8.2-23.023-16.394-35.48-23.06-4.17-2.232-8.408-4.335-12.73-6.25l-6.66-2.86c-2.187-.9-4.45-1.7-6.594-2.696-.528-.245-1.073-.456-1.594-.717-.874-.424-1.78-.826-2.512-1.48h0z" />
    </SVGIcon>
  );
}
