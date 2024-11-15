import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { RaikouProvider } from '@raikou/system';
import { emotionTransform, RaikouEmotionProvider } from "@raikou/emotion";


import '@raikou/system/styles.css';
import '@stylefusion/react/styles.css';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <RaikouProvider stylesTransform={emotionTransform}>
        <RaikouEmotionProvider>
          <Outlet />
        </RaikouEmotionProvider>
      </RaikouProvider>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
