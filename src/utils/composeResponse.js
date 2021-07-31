import { contexts } from './constants.js';

export default (message) => {
  let isPositiveContext;
  contexts.positive.map((p) => {
    if (message.toLowerCase().includes(p.toLowerCase())) {
      isPositiveContext = true;
    }
  });
  contexts.negative.map((n) => {
    if (message.toLowerCase().includes(n.toLowerCase())) {
      isPositiveContext = false;
    }
  });
  switch (isPositiveContext) {
    case true:
      return 'Welcome to StationFive.';
    case false:
      return 'Thank you, see you around.';
    case undefined:
      return `Sorry, I don't understand.`;
  }
};
