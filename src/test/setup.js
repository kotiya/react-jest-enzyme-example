/**
 * @file Tests setup.
 */

import '@babel/polyfill';
import { configure } from '@testing-library/react';

configure({ 
  testIdAttribute: 'data-testid',
  // other configuration options
});
