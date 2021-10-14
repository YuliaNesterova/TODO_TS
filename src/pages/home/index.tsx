import React from 'react';
import { IAction, RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@mihanizm56/redux-core-modules';
import { AppLayout } from '@/_layouts/app-layout';
import { Page } from './page';
import { storeInjectConfig } from './store-inject-config';

const pageNode = 'home';

const action: IAction = async ({ fromState, toState }) => {
  return {
    title: 'Home',
    content: (
      <ReduxStoreLoader
        fromState={fromState}
        storeInjectConfig={storeInjectConfig}
        toState={toState}
      >
        <AppLayout>
          <RouteNode nodeName={pageNode}>
            {({ route, content }) => {
              if (route.name === pageNode) {
                return <Page />;
              }

              return content;
            }}
          </RouteNode>
        </AppLayout>
      </ReduxStoreLoader>
    ),
  };
};

export default action;
