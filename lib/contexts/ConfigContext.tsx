"use client";
import { createContext, useContext } from "react";
import { IAnkhCmsThemePalette, type IAnkhCmsConfig, type IAnkhCmsTheme, type TStyle } from 'ankh-types';
import { useIndexedDb } from "ankh-hooks";

const THEME_ID = 1337;

const nav = {
  ui: 'AnkhUiNav',
  p: {
    _ui: { id: 1 },
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
      {
        name: 'ankh-fonts',
        icon: 'Settings'
      }
    ],
  },
};
const header = { ui: 'AnkhUiHtml', p: { _ui: { id: 2 }, tagName: 'header' }, uis: [{ ...nav }] };
const styles: TStyle[] = [];
const theme: IAnkhCmsTheme = {
  palettes: [
    {
      name: "BC Visions",
      active: true,
      colors: [
        { h: 285, s: 79, l: 24 },
        { h: 32, s: 22, l: 53 },
        { h: 37, s: 71, l: 89 },
        { h: 300, s: 14, l: 4 },
        { h: 0, s: 0, l: 98 }
      ]
    },
    {
      name: "Earth Max",
      colors: [
        { h: 0, s: 41, l: 77 },
        { h: 120, s: 41, l: 77 },
        { h: 240, s: 41, l: 77 },
      ]
    },
    {
      name: "Fluorescent Min",
      colors: [
        { h: 50, s: 63, l: 82 },
        { h: 170, s: 63, l: 82 },
        { h: 290, s: 63, l: 82 }
      ]
    },
    {
      name: "Jewel Max",
      colors: [
        { h: 50, s: 83, l: 76 },
        { h: 170, s: 83, l: 76 },
        { h: 290, s: 83, l: 76 }
      ]
    },
    {
      name: "Neutral Min",
      colors: [
        { h: 50, s: 1, l: 70 },
        { h: 170, s: 1, l: 70 },
        { h: 290, s: 1, l: 70 }
      ]
    },
    {
      name: "Pastell Max",
      colors: [
        { h: 50, s: 21, l: 96 },
        { h: 170, s: 21, l: 96 },
        { h: 290, s: 21, l: 96 }
      ]
    },
    {
      name: "Shade Max",
      colors: [
        { h: 50, s: 0, l: 100 },
        { h: 170, s: 0, l: 100 },
        { h: 290, s: 0, l: 100 }
      ]
    },
  ]
};

export function useActivePalette() {
  return new Promise<IAnkhCmsThemePalette>(async (resolve, reject) => {
    const { db, api } = useIndexedDb<any>({ dbName: "ankh-cms", storeName: "ui-config" });
    const interval = setInterval(async () => {
      if (!db) return;
      /** @todo Handle timeout, first meditate about if 'db' cannot be obtained for a reason? */
      clearInterval(interval);
      try {
        const { palettes = [] } = (await api.get(THEME_ID)) || {};
        const storedPalette = palettes.filter((palette: IAnkhCmsThemePalette) => palette.active)[0];
        const activePalette = storedPalette || (theme.palettes.filter((palette) => palette.active))[0];
        resolve(activePalette);
      } catch (error: any) {
        reject(error);
      }
    }, 100);
  });
}

export function getConfig() {
  const config: IAnkhCmsConfig = {
    theme,
    styles: [...styles],
    apiKeys: {
      googleFonts: 'AIzaSyDbhn2zATglH-mwe_LhHcHFsk_fDhQFHc8'
    },
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
            p: { _ui: { id: 3 }, tagName: 'main' },
            uis: [
              {
                ui: 'AnkhUiHtml', p: { _ui: { id: 3 } }, uis: [
                  { ui: 'AnkhUiHeading', p: { _ui: { id: 4 }, level: 'h1', text: 'Theme' } },
                  { ui: 'AnkhUiHeading', p: { level: 'h2', text: 'Colors' } },
                  { ui: 'AnkhUiColorPalettes', p: { _ui: { id: 5 } } }
                ],
              }]
          },
        ],
      },
      {
        name: 'ankh-fonts',
        uis: [
          { ...header },
          {
            ui: 'AnkhUiHtml',
            p: { _ui: { id: 61514 }, tagName: 'main' },
            uis: [
              {
                ui: 'AnkhUiList',
                p: {
                  endpoint: {
                    method: 'GET',
                    url: 'https://webfonts.googleapis.com/v1/webfonts?capability=WOFF2&key=AIzaSyDbhn2zATglH-mwe_LhHcHFsk_fDhQFHc8'
                  }
                }
              },
              {
                ui: 'AnkhUiPagination',
                p: {}
              }
            ]
          }
        ]
      },
      {
        name: 'home',
        uis: [
          { ...header },
          {
            ui: 'AnkhUiHtml',
            p: { _ui: { id: 6 }, tagName: 'main' },
            uis: [
              {
                ui: 'AnkhUiImage',
                p: {
                  _ui: { id: 7 },
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
            p: { _ui: { id: 7 }, tagName: 'main' },
            uis: [
              {
                ui: 'AnkhUiGrid',
                p: { _ui: { id: 8 }, columns: 4 },
                uis: [
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 9 }, text: '1' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 10 }, text: '2' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 11 }, text: '3' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 12 }, text: '4' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 13 }, text: '5' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 14 }, text: '6' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 15 }, text: '7' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 16 }, text: '8' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 17 }, text: '9' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 18 }, text: '10' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 19 }, text: '11' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 20 }, text: '12' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 21 }, text: '13' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 22 }, text: '14' } },
                  { ui: 'AnkhUiHtml', p: { _ui: { id: 23 }, text: '15' } },
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