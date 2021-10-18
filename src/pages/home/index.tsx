import React from 'react';
import { IAction, RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { AppLayout } from '@/_layouts/app-layout';
import { storeInjectConfig } from '@/pages/home/store-inject-config';
import { TODO_PAGE_TRANSLATIONS } from '@/pages/home/_constants/translations';
import { Page } from './page';

const pageNode = 'home';

const action: IAction = async ({ fromState, toState }) => {
  return {
    title: i18next.t(TODO_PAGE_TRANSLATIONS.title),
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
