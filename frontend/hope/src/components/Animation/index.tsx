/* eslint-disable no-await-in-loop */
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Animation: React.FC = () => {
  const props = useSpring({
    from: {
      left: '0%',
      top: '0%',
      width: '0%',
      height: '0%',
      background: 'lightgreen',
    },
    to: async (next: any) => {
      while (1) {
        await next({
          left: '0%',
          top: '0%',
          width: '100%',
          height: '100%',
          background: 'lightblue',
        });
        await next({ height: '50%', background: 'lightgreen' });
        await next({
          width: '50%',
          left: '50%',
          background: '#9ef06e',
        });
        await next({ top: '0%', height: '100%', background: 'lightblue' });
        await next({ top: '50%', height: '50%', background: '#5bf5e3' });
        await next({ width: '100%', left: '0%', background: '#9ef06e' });
        await next({ width: '50%', background: '#5bf5e3' });
        await next({ top: '0%', height: '100%', background: 'lightskyblue' });
        await next({ width: '100%', background: '#9ef06e' });
      }
    },
  });

  return (
    <>
      <animated.div className="script-box" style={props} />
    </>
  );
};
export default Animation;
