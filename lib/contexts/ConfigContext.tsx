"use client";
import { createContext, useContext } from "react";
import type { IAnkhCmsConfig, IAnkhCmsTheme, TStyle } from 'ankh-types';

export function getConfig() {
  const nav = {
    ui: 'AnkhUiNav',
    p: {
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
  const header = { ui: 'AnkhUiHtml', p: { tagName: 'header' }, uis: [{ ...nav }] };
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
            p: { tagName: 'main' },
            uis: [
              {
                ui: 'AnkhUiHtml', p: {}, uis: [
                  { ui: 'AnkhUiHeading', p: { level: 'h1', text: 'Theme' } },
                  { ui: 'AnkhUiHeading', p: { level: 'h2', text: 'Colors' } },
                  { ui: 'AnkhUiColorPalettes', p: {} }
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
            p: { tagName: 'main' },
            uis: [
              {
                ui: 'AnkhUiImage',
                p: {
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
            p: { tagName: 'main' },
            uis: [
              {
                ui: 'AnkhUiGrid',
                p: { columns: 4 },
                uis: [
                  { ui: 'AnkhUiHtml', p: { text: '1' } },
                  { ui: 'AnkhUiHtml', p: { text: '2' } },
                  { ui: 'AnkhUiHtml', p: { text: '3' } },
                  { ui: 'AnkhUiHtml', p: { text: '4' } },
                  { ui: 'AnkhUiHtml', p: { text: '5' } },
                  { ui: 'AnkhUiHtml', p: { text: '6' } },
                  { ui: 'AnkhUiHtml', p: { text: '7' } },
                  { ui: 'AnkhUiHtml', p: { text: '8' } },
                  { ui: 'AnkhUiHtml', p: { text: '9' } },
                  { ui: 'AnkhUiHtml', p: { text: '10' } },
                  { ui: 'AnkhUiHtml', p: { text: '11' } },
                  { ui: 'AnkhUiHtml', p: { text: '12' } },
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