import React from 'react';

import ScrollFade from '@/components/elements/scroll-fade';
import Wrapper from '@/components/elements/wrapper';

export default function Hero() {
  return (
    <section>
      <Wrapper>
        <ScrollFade>
          <h1>
            Multi-disciplinary frontend
            <br />
            developer experienced in
            <br />
            building beautiful user
            <br />
            experiences.
          </h1>
        </ScrollFade>
      </Wrapper>
    </section>
  );
}
