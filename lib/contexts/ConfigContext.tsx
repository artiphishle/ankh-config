"use client";
import { createContext, useContext } from "react";
import type { IAnkhCmsConfig, IAnkhCmsTheme, TStyle } from 'ankh-types';

export function getConfig() {
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
          { h: 300, s: 14, l: 4 },
          { h: 32, s: 22, l: 53 },
          { h: 0, s: 0, l: 98 },
          { h: 285, s: 79, l: 24 },
          { h: 37, s: 71, l: 89 }
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
        name: "Fluorescent Max",
        colors: [
          { h: 50, s: 100, l: 100 },
          { h: 170, s: 100, l: 100 },
          { h: 290, s: 100, l: 100 }
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
        name: "Neutral Max",
        colors: [
          { h: 50, s: 10, l: 90 },
          { h: 170, s: 10, l: 90 },
          { h: 290, s: 10, l: 90 }
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
      {
        name: "Pastell Max",
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