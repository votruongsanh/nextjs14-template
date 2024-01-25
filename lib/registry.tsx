'use client';

import { theme } from '@/styles/theme';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';

export function StyledAntdRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <AntdRegistry>{children}</AntdRegistry>
    </StyleSheetManager>
  );
}

export function ThemeClient({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
