"use client";
import { createContext, useContext } from "react";
import type { IAnkhCmsConfig, IAnkhCmsTheme, TStyle } from 'ankh-types';

export function getConfig() {
  const nav = {
    ui: 'AnkhUiNav',
    p: {
      _ui: { id: 'navnavanav' },
      items: [
        {
          name: 'home',
          icon: 'House',
        },
        {
          name: 'about',
          icon: 'Factory',
        },
        {
          name: 'ankh-theming',
          icon: 'Settings',
        },
      ],
    },
  };
  const header = { ui: 'AnkhUiHtml', p: { _ui: { id: 'headi' }, tagName: 'header' }, uis: [{ ...nav }] };
  const styles: TStyle[] = [];
  const theme: IAnkhCmsTheme = {
    palettes: [
      {
        // @todo name
        active: true,
        colors: [
          { h: 0, s: 41, l: 77 },
          { h: 120, s: 41, l: 77 },
          { h: 240, s: 41, l: 77 },
        ]
      },
      {
        colors: [
          { h: 50, s: 21, l: 96 },
          { h: 170, s: 21, l: 96 },
          { h: 290, s: 21, l: 96 }
        ]
      }
    ]
  };
  const config: IAnkhCmsConfig = {
    theme,
    styles: [...styles],
    public: [
      {
        name: 'images',
        files: ['./logo.png'],
      },
    ],
    pages: [
      {
        name: 'ankh-theming',
        uis: [
          { ...header },
          {
            ui: 'AnkhUiHtml',
            p: { _ui: { id: 'ui-01' }, tagName: 'main' },
            uis: [
              {
                ui: 'AnkhUiHtml', p: { _ui: { id: 'ui-02' } }, uis: [
                  { ui: 'AnkhUiHeading', p: { _ui: { id: 'ui-03' }, level: 'h1', text: 'Theme' } },
                  { ui: 'AnkhUiHeading', p: { level: 'h2', text: 'Colors' } },
                  { ui: 'AnkhUiColorPalettes', p: { _ui: { id: 'ui-04' } } }
                ],
              }]
          },
        ],
      },
      {
        name: 'home',
        uis: [
          { ...header },
          {
            ui: 'AnkhUiHtml',
            p: { _ui: { id: 'ui-05' }, tagName: 'main' },
            uis: [
              {
                ui: 'AnkhUiImage',
                p: {
                  _ui: { id: 'ui-06' },
                  alt: 'Logo',
                  src: '/images/logo.png',
                  width: 625,
                  height: 125,
                },
              },
            ],
          },
        ],
      },
      {
        name: 'about',
        uis: [
          { ...header },
          {
            ui: 'AnkhUiHtml',
            p: { _ui: 'ui-07', tagName: 'main' },
            uis: [
              {
                ui: 'AnkhUiGrid',
                p: { _ui: { id: 'gridfattherofabout-10' }, columns: 4 },
                uis: [
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-01' }, text: '1' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-02' }, text: '2' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-03' }, text: '3' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-04' }, text: '4' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-05' }, text: '5' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-06' }, text: '6' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-07' }, text: '7' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-08' }, text: '8' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-09' }, text: '9' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-10' }, text: '10' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-11' }, text: '11' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-12' }, text: '12' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-13' }, text: '13' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-14' }, text: '14' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 'gridi-15' }, text: '15' } },
                ],
              }
            ],
          },
        ],
      }
    ],
  };
  return config;
}

export const AnkhCmsConfigContext = createContext<IAnkhCmsConfig>(getConfig());

export function useAnkhCmsConfig() {
  return useContext(AnkhCmsConfigContext);
}