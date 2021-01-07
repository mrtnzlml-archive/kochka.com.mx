// @flow

import * as React from 'react';
import sx from '@adeira/sx';
import fbt from 'fbt';

// https://web.dev/headings-and-landmarks/#bypass-repetitive-content-with-skip-links
export default function SkipLink(): React.Node {
  return (
    <a className={styles('skipLink')} href="#main">
      <fbt desc="hidden 'skip link' title which helps blind people to skip directly the main section and avoid the repetitive menu altogether">
        Skip to content
      </fbt>
    </a>
  );
}

const styles = sx.create({
  skipLink: {
    'position': 'absolute',
    'top': -40,
    'left': 0,
    'background': '#000000',
    'color': 'white',
    'padding': 8,
    'zIndex': 100,
    ':focus': {
      top: 0,
    },
  },
});