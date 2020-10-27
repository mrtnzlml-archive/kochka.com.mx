// @flow

import * as React from 'react';
import * as sx from '@adeira/sx';

type Props = {|
  +name: string,
  +onChange: (event: SyntheticInputEvent<>) => void,
  +type: 'email' | 'text',
  +value: Fbt,
  +id?: string,
  +placeholder?: FbtWithoutString,
  +tabIndex?: number,
|};

export default function Input(props: Props): React.Node {
  // eslint-disable-next-line react/forbid-elements
  return <input className={styles('input')} {...props} />;
}

const styles = sx.create({
  input: {
    paddingLeft: '.75rem',
    paddingRight: '.75rem',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    borderRadius: '.25rem',
  },
});
