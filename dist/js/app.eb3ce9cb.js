(function () {
  "use strict";
  var t = {
      1752: function (t, e, l) {
        var a = l(9242),
          s = l(3396),
          n = l(7139);
        function i(t, e, l, a, i, o) {
          const c = (0, s.up)("router-view"),
            r = (0, s.up)("quick-view"),
            p = (0, s.up)("v-icon"),
            d = (0, s.up)("v-snackbar"),
            u = (0, s.up)("app-layout");
          return (
            (0, s.wg)(),
            (0, s.j4)(u, null, {
              default: (0, s.w5)(() => [
                (0, s.Wm)(c),
                (0, s.Wm)(r),
                (0, s.Wm)(
                  d,
                  {
                    modelValue: i.bar,
                    "onUpdate:modelValue": e[1] || (e[1] = (t) => (i.bar = t)),
                    location: "left bottom",
                    color: "green",
                    "max-width": "350",
                    timeout: "3000",
                  },
                  {
                    actions: (0, s.w5)(() => [
                      (0, s.Wm)(
                        p,
                        { onClick: e[0] || (e[0] = (t) => (i.bar = !1)) },
                        {
                          default: (0, s.w5)(() => [(0, s.Uk)("mdi-close")]),
                          _: 1,
                        }
                      ),
                    ]),
                    default: (0, s.w5)(() => [
                      (0, s.Uk)(
                        '"' +
                          (0, n.zw)(t.itemTitle) +
                          '" added successfully to you cart ',
                        1
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"]
                ),
              ]),
              _: 1,
            })
          );
        }
        const o = { class: "layout" };
        function c(t, e, l, a, n, i) {
          const c = (0, s.up)("CartDrawer"),
            r = (0, s.up)("v-main"),
            p = (0, s.up)("AppNav"),
            d = (0, s.up)("Fixed-nav"),
            u = (0, s.up)("AppFooter"),
            m = (0, s.up)("v-layout");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", o, [
              (0, s.Wm)(
                m,
                { class: "position-relative" },
                {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(c),
                    (0, s.Wm)(
                      r,
                      { style: { "padding-top": "155px" } },
                      {
                        default: (0, s.w5)(() => [
                          (0, s.WI)(t.$slots, "default"),
                        ]),
                        _: 3,
                      }
                    ),
                    (0, s.Wm)(p),
                    (0, s.Wm)(d),
                    (0, s.Wm)(u),
                  ]),
                  _: 3,
                }
              ),
            ])
          );
        }
        l(560);
        var r =
          "data:image/webp;base64,UklGRvAGAABXRUJQVlA4WAoAAAA4AAAAswAAJAAASUNDUKgBAAAAAAGobGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAF9jcHJ0AAABTAAAAAx3dHB0AAABWAAAABRyWFlaAAABbAAAABRnWFlaAAABgAAAABRiWFlaAAABlAAAABRyVFJDAAABDAAAAEBnVFJDAAABDAAAAEBiVFJDAAABDAAAAEBkZXNjAAAAAAAAAAVjMmNpAAAAAAAAAAAAAAAAY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD//3RleHQAAAAAQ0MwAFhZWiAAAAAAAAD21gABAAAAANMtWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPQUxQSFcDAAABkByBbt1G4IEXHnlWAyogM2hBPbCHDMtAHTqmCdaR3WUrnLGAR1C293eKCAmOJCmS5LlM5wmdXX1PoJVgFQkavEtsfMX2HOV9qCjI4F2IOkt5DkXDyOBt3muO53BqMjJ4F1izP4ehgQbvgmjSU8hmnJHB29Cf2Rk244wM3oXk7Ew8RGRfp5pxRgbvwu7qjFk/bb7ZuLZLp3LQNE1EBsZPHkPTr1ofcsVGxEpgp8Dn1RltnuvD7yzKdtn4eFiyUheRpmnKKFhOz5KPZYDo+0UwEsjATKqN01xebMWOrVulQEHGAGOxbnxGGd6IFs+S3/vEcEfbWbABBZyTcd2sGHSS1JBEogXjbOju106G7FjyxVVW1jAyMIIeR/bIwNdRacl4NcTC0xUGjAsXawC284YN2NsCWU240/OMB1uqGgNENuoJOoDtHKBBANcJs8DuWZ12cAMIH9aH1o2RrEg3gvKIGi1tssKmJwIjHaJJnwgZMK56BRLRDkW4ioIvRcOiMSyNZFSFYEbPhCm/jmAzOgmTd9ADZNDwcGdraMWaSk80BSexbjxOdD4IJgmzk4YvElW8h+3AxAM0BBgkqzohWLGDFMjNtu9cN+7RcYEUzeGjEw1f2JwzIQPGpYdjIa6Zxmpl3bh49hBrxIdQ9nF6DpNA/JgkVdClhw8puDv7uvEOqQPfAdxLjH2UBHqADLqv9EwZN4998zk3dgw5pGkI/6RZ/QX85GGXH47gOkzGgUsfbJ6oXfCWteHurBv3G57nGKywabVt4Jx3aJAxYCzwAx/akBHP57qxQDbD4mFyNuMpqwA5J2QAYJjTEHxb8R7jeN2YHZ0cJ8YIVoddC7D0KYA7JzAAdM4bOLUcUIyAW53M57rxNgFu/IXD5GbtmNuYTpEQMHAvjx2I6Zb65nPZeAQHkyLa3DPeEI6/HEDOk+zr2pHwmGxIfCddN24ESa5DuxHEetuUGkByGzag5KFPH/i6az7XjQvhqIg2PUxOXjqkbSvPczvK1O4VJIYPCZP5XDfmCaECKhhUfW6b+bEZ+VaMUQeyHWunai65ELtte7ffQX1kSI/Lxj3SLHIRsxNu+F+UnFUFb/GL5Igbjf+Hxsd44fgOL8vnK/P1soSvV+aTXpbvV+bDDQEAVlA4IAABAADQBwCdASq0ACUAPjEYikOiIaEU6LwoIAMEtIQ4AE+DvRskAAjsUDadVQX+PJraWEpf82pflq8kz2JNQRHtLieD89o0wySH4AD9up///9GAF/lYf//QoP/9CEP//oLQHYyzuwY/95eL/2HX/47gBA0KyapBuE8Zv4Lv/cvF/7Dr/8eQu/9yU7//47R/wvSnvw1f5Np9Y/7/4Iny3aKYlf/+G7v3ms6gsr9VjwxL+DZeuiVe+HMFoEFChRjpdiXcQBnpJcf/obmCXINXB3u7JJ7IxAvDu28rN+Wqb74Rwx8X+73kZ/E7H/LZ9P0Nx4ylzY3O7NdMrr/UxQJ+l8rTAAAARVhJRroAAABFeGlmAABJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAAC8ZAQDoAwAALxkBAOgDAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAAtAAAAAOgBAABAAAAJQAAAAAAAAA=";
        const p = (t) => (
            (0, s.dD)("data-v-213c4778"), (t = t()), (0, s.Cn)(), t
          ),
          d = { class: "footer" },
          u = p(() =>
            (0, s._)(
              "span",
              { class: "pt-1" },
              [
                (0, s._)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    viewBox: "0 0 384 512",
                  },
                  [
                    (0, s._)("path", {
                      d: "M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z",
                    }),
                  ]
                ),
              ],
              -1
            )
          ),
          m = p(() =>
            (0, s._)(
              "span",
              { class: "pt-1" },
              [
                (0, s._)(
                  "svg",
                  {
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "fas",
                    "data-icon": "phone-alt",
                    role: "img",
                    viewBox: "0 0 512 512",
                    width: "12",
                    class: "svg-inline--fa fa-phone-alt fa-w-16 fa-7x",
                  },
                  [
                    (0, s._)("path", {
                      fill: "currentColor",
                      d: "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z",
                      class: "",
                    }),
                  ]
                ),
              ],
              -1
            )
          ),
          w = p(() =>
            (0, s._)(
              "span",
              { class: "pt-1" },
              [
                (0, s._)(
                  "svg",
                  {
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "fas",
                    "data-icon": "envelope",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    width: "12",
                    class: "svg-inline--fa fa-envelope fa-w-16 fa-7x",
                  },
                  [
                    (0, s._)("path", {
                      fill: "currentColor",
                      d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
                      class: "",
                    }),
                  ]
                ),
              ],
              -1
            )
          ),
          h = p(() =>
            (0, s._)(
              "div",
              { class: "social d-flex", style: { gap: "15px" } },
              [
                (0, s._)(
                  "span",
                  {
                    class: "facebook d-flex align-center justify-center",
                    style: {
                      width: "35px",
                      height: "35px",
                      "background-color": "#454545",
                      "border-radius": "6px",
                    },
                  },
                  [
                    (0, s._)(
                      "svg",
                      {
                        "aria-hidden": "true",
                        focusable: "false",
                        role: "presentation",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 320 512",
                        width: "14",
                        class: "icon icon-facebook",
                        fill: "#FFF",
                      },
                      [
                        (0, s._)("path", {
                          d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
                        }),
                      ]
                    ),
                  ]
                ),
                (0, s._)(
                  "span",
                  {
                    class: "twitter d-flex align-center justify-center",
                    style: {
                      width: "35px",
                      height: "35px",
                      "background-color": "#454545",
                      "border-radius": "6px",
                    },
                  },
                  [
                    (0, s._)(
                      "svg",
                      {
                        "aria-hidden": "true",
                        focusable: "false",
                        role: "presentation",
                        class: "icon icon-twitter",
                        viewBox: "0 0 18 15",
                        width: "14",
                        fill: "#FFF",
                      },
                      [
                        (0, s._)("path", {
                          d: "M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z",
                        }),
                      ]
                    ),
                  ]
                ),
                (0, s._)(
                  "span",
                  {
                    class: "instagram d-flex align-center justify-center",
                    style: {
                      width: "35px",
                      height: "35px",
                      "background-color": "#454545",
                      "border-radius": "6px",
                    },
                  },
                  [
                    (0, s._)(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 512 512",
                        "xml:space": "preserve",
                        "aria-hidden": "true",
                        focusable: "false",
                        role: "presentation",
                        class: "icon icon-instagram",
                        width: "14",
                        fill: "#FFF",
                      },
                      [
                        (0, s._)("g", null, [
                          (0, s._)("path", {
                            d: "M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M256,152   c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M437,0H75C33.6,0,0,33.6,0,75v362   c0,41.4,33.6,75,75,75h362c41.4,0,75-33.6,75-75V75C512,33.6,478.4,0,437,0z M256,392c-74.399,0-135-60.601-135-135   c0-74.401,60.601-135,135-135s135,60.599,135,135C391,331.399,330.399,392,256,392z M421,122c-16.5,0-30-13.5-30-30s13.5-30,30-30   s30,13.5,30,30S437.5,122,421,122z M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z    M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M256,152c-57.9,0-105,47.1-105,105   s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z",
                          }),
                        ]),
                      ]
                    ),
                  ]
                ),
                (0, s._)(
                  "span",
                  {
                    class: "pinterest d-flex align-center justify-center",
                    style: {
                      width: "35px",
                      height: "35px",
                      "background-color": "#454545",
                      "border-radius": "6px",
                    },
                  },
                  [
                    (0, s._)(
                      "svg",
                      {
                        "aria-hidden": "true",
                        focusable: "false",
                        role: "presentation",
                        class: "icon icon-pinterest",
                        viewBox: "0 0 17 18",
                        width: "14",
                        fill: "#FFF",
                      },
                      [
                        (0, s._)("path", {
                          d: "M8.48.58a8.42 8.42 0 015.9 2.45 8.42 8.42 0 011.33 10.08 8.28 8.28 0 01-7.23 4.16 8.5 8.5 0 01-2.37-.32c.42-.68.7-1.29.85-1.8l.59-2.29c.14.28.41.52.8.73.4.2.8.31 1.24.31.87 0 1.65-.25 2.34-.75a4.87 4.87 0 001.6-2.05 7.3 7.3 0 00.56-2.93c0-1.3-.5-2.41-1.49-3.36a5.27 5.27 0 00-3.8-1.43c-.93 0-1.8.16-2.58.48A5.23 5.23 0 002.85 8.6c0 .75.14 1.41.43 1.98.28.56.7.96 1.27 1.2.1.04.19.04.26 0 .07-.03.12-.1.15-.2l.18-.68c.05-.15.02-.3-.11-.45a2.35 2.35 0 01-.57-1.63A3.96 3.96 0 018.6 4.8c1.09 0 1.94.3 2.54.89.61.6.92 1.37.92 2.32 0 .8-.11 1.54-.33 2.21a3.97 3.97 0 01-.93 1.62c-.4.4-.87.6-1.4.6-.43 0-.78-.15-1.06-.47-.27-.32-.36-.7-.26-1.13a111.14 111.14 0 01.47-1.6l.18-.73c.06-.26.09-.47.09-.65 0-.36-.1-.66-.28-.89-.2-.23-.47-.35-.83-.35-.45 0-.83.2-1.13.62-.3.41-.46.93-.46 1.56a4.1 4.1 0 00.18 1.15l.06.15c-.6 2.58-.95 4.1-1.08 4.54-.12.55-.16 1.2-.13 1.94a8.4 8.4 0 01-5-7.65c0-2.3.81-4.28 2.44-5.9A8.04 8.04 0 018.48.57z",
                        }),
                      ]
                    ),
                  ]
                ),
                (0, s._)(
                  "span",
                  {
                    class: "pinterest d-flex align-center justify-center",
                    style: {
                      width: "35px",
                      height: "35px",
                      "background-color": "#454545",
                      "border-radius": "6px",
                    },
                  },
                  [
                    (0, s._)(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "icon icon-snapchat",
                        viewBox: "0 0 50 50",
                        width: "14",
                        fill: "#FFF",
                      },
                      [
                        (0, s._)("path", {
                          d: "M 46.773438 35.078125 C 40.96875 34.121094 38.316406 28.109375 38.230469 27.914063 C 38.21875 27.878906 38.191406 27.816406 38.175781 27.78125 C 38 27.429688 37.824219 26.933594 37.972656 26.582031 C 38.226563 25.980469 39.433594 25.597656 40.15625 25.367188 C 40.410156 25.285156 40.652344 25.210938 40.839844 25.136719 C 42.59375 24.441406 43.46875 23.535156 43.449219 22.433594 C 43.433594 21.546875 42.753906 20.734375 41.753906 20.382813 C 41.40625 20.234375 41.007813 20.160156 40.605469 20.160156 C 40.332031 20.160156 39.917969 20.199219 39.519531 20.382813 C 38.851563 20.695313 38.265625 20.863281 37.847656 20.882813 C 37.757813 20.878906 37.679688 20.871094 37.613281 20.859375 L 37.65625 20.171875 C 37.851563 17.0625 38.097656 13.1875 37.046875 10.832031 C 33.945313 3.890625 27.375 3.351563 25.433594 3.351563 L 24.550781 3.359375 C 22.613281 3.359375 16.054688 3.898438 12.960938 10.835938 C 11.910156 13.191406 12.152344 17.0625 12.351563 20.175781 L 12.359375 20.292969 C 12.371094 20.484375 12.382813 20.675781 12.394531 20.859375 C 11.960938 20.9375 11.113281 20.792969 10.234375 20.382813 C 9.039063 19.824219 6.886719 20.5625 6.589844 22.125 C 6.457031 22.816406 6.617188 24.128906 9.164063 25.132813 C 9.355469 25.210938 9.59375 25.285156 9.851563 25.367188 C 10.570313 25.597656 11.777344 25.976563 12.03125 26.582031 C 12.179688 26.933594 12.003906 27.429688 11.796875 27.855469 C 11.6875 28.109375 9.050781 34.121094 3.234375 35.078125 C 2.492188 35.199219 1.964844 35.855469 2.003906 36.613281 C 2.015625 36.8125 2.066406 37.011719 2.148438 37.207031 C 2.675781 38.445313 4.59375 39.296875 8.171875 39.878906 C 8.234375 40.089844 8.304688 40.402344 8.34375 40.574219 C 8.417969 40.929688 8.5 41.289063 8.609375 41.664063 C 8.714844 42.019531 9.078125 42.84375 10.210938 42.84375 C 10.554688 42.84375 10.929688 42.769531 11.332031 42.691406 C 11.925781 42.574219 12.667969 42.429688 13.621094 42.429688 C 14.152344 42.429688 14.699219 42.476563 15.25 42.566406 C 16.265625 42.734375 17.183594 43.386719 18.25 44.136719 C 19.914063 45.316406 21.800781 46.648438 24.726563 46.648438 C 24.804688 46.648438 24.882813 46.644531 24.957031 46.640625 C 25.0625 46.644531 25.171875 46.648438 25.28125 46.648438 C 28.207031 46.648438 30.09375 45.3125 31.761719 44.136719 C 32.777344 43.414063 33.738281 42.738281 34.757813 42.566406 C 35.308594 42.476563 35.855469 42.429688 36.386719 42.429688 C 37.304688 42.429688 38.03125 42.546875 38.679688 42.675781 C 39.140625 42.765625 39.507813 42.808594 39.847656 42.808594 C 40.605469 42.808594 41.1875 42.375 41.398438 41.648438 C 41.507813 41.28125 41.585938 40.925781 41.664063 40.566406 C 41.695313 40.433594 41.769531 40.097656 41.835938 39.875 C 45.414063 39.292969 47.332031 38.441406 47.855469 37.214844 C 47.941406 37.019531 47.988281 36.816406 48.003906 36.605469 C 48.042969 35.859375 47.515625 35.203125 46.773438 35.078125 Z",
                        }),
                      ]
                    ),
                  ]
                ),
              ],
              -1
            )
          ),
          g = p(() =>
            (0, s._)(
              "div",
              { class: "img-parent text-center mt-12 mb-8" },
              [
                (0, s._)("img", {
                  src: "https://new-ella-demo.myshopify.com/cdn/shop/files/trust_551fa8e0-5f24-4fbc-bf22-74c01b859a01.png?v=1639984732",
                  alt: "",
                }),
              ],
              -1
            )
          ),
          f = p(() =>
            (0, s._)(
              "a",
              { href: "https://karimgamal97.github.io/Karim_Gamal_Portfolio/" },
              "Kariim",
              -1
            )
          ),
          A = {
            class: "master-cards d-flex justify-end",
            style: { gap: "10px" },
          },
          v = ["innerHTML"];
        function y(t, e, l, a, i, o) {
          const c = (0, s.up)("v-card-title"),
            p = (0, s.up)("router-link"),
            y = (0, s.up)("v-card-text"),
            x = (0, s.up)("v-card"),
            b = (0, s.up)("v-col"),
            k = (0, s.up)("v-row"),
            W = (0, s.up)("v-container"),
            z = (0, s.up)("v-footer");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", d, [
              (0, s.Wm)(
                z,
                {
                  app: !0,
                  absolute: "",
                  style: { "background-color": "#f5f5f5" },
                  class: "pt-12",
                },
                {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(
                      W,
                      { fluid: "", class: "px-0" },
                      {
                        default: (0, s.w5)(() => [
                          (0, s.Wm)(k, null, {
                            default: (0, s.w5)(() => [
                              (0, s.Wm)(
                                b,
                                { cols: "3" },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Wm)(
                                      x,
                                      { elevation: "0", color: "transparent" },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Wm)(
                                            c,
                                            { class: "mb-3" },
                                            {
                                              default: (0, s.w5)(() => [
                                                (0, s.Uk)("Shop"),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          ((0, s.wg)(!0),
                                          (0, s.iD)(
                                            s.HY,
                                            null,
                                            (0, s.Ko)(
                                              t.categories,
                                              (t) => (
                                                (0, s.wg)(),
                                                (0, s.j4)(
                                                  y,
                                                  { key: t.title },
                                                  {
                                                    default: (0, s.w5)(() => [
                                                      (0, s.Wm)(
                                                        p,
                                                        {
                                                          to: {
                                                            name: "products_category",
                                                            params: {
                                                              category: t.route,
                                                              title: t.title,
                                                            },
                                                          },
                                                          style: {
                                                            color: "#333",
                                                            "text-decoration":
                                                              "none",
                                                          },
                                                        },
                                                        {
                                                          default: (0, s.w5)(
                                                            () => [
                                                              (0, s.Uk)(
                                                                (0, n.zw)(
                                                                  t.title
                                                                ),
                                                                1
                                                              ),
                                                            ]
                                                          ),
                                                          _: 2,
                                                        },
                                                        1032,
                                                        ["to"]
                                                      ),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                              (0, s.Wm)(
                                b,
                                { cols: "3" },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Wm)(
                                      x,
                                      { elevation: "0", color: "transparent" },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Wm)(
                                            c,
                                            { class: "mb-3" },
                                            {
                                              default: (0, s.w5)(() => [
                                                (0, s.Uk)("Further Info."),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("About"),
                                            ]),
                                            _: 1,
                                          }),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Customer Services"),
                                            ]),
                                            _: 1,
                                          }),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Reward Program"),
                                            ]),
                                            _: 1,
                                          }),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Shipping & Returns"),
                                            ]),
                                            _: 1,
                                          }),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Privacy Policy"),
                                            ]),
                                            _: 1,
                                          }),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Terms &Conditions"),
                                            ]),
                                            _: 1,
                                          }),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Blog"),
                                            ]),
                                            _: 1,
                                          }),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                              (0, s.Wm)(
                                b,
                                { cols: "3" },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Wm)(
                                      x,
                                      { elevation: "0", color: "transparent" },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Wm)(
                                            c,
                                            { class: "mb-3" },
                                            {
                                              default: (0, s.w5)(() => [
                                                (0, s.Uk)("Customer Service"),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Search Terms"),
                                            ]),
                                            _: 1,
                                          }),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Advanced Search"),
                                            ]),
                                            _: 1,
                                          }),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Orders & Returns"),
                                            ]),
                                            _: 1,
                                          }),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Contact Us"),
                                            ]),
                                            _: 1,
                                          }),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Theme Faq's"),
                                            ]),
                                            _: 1,
                                          }),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Consultant"),
                                            ]),
                                            _: 1,
                                          }),
                                          (0, s.Wm)(y, null, {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Store Location"),
                                            ]),
                                            _: 1,
                                          }),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                              (0, s.Wm)(
                                b,
                                { cols: "3", class: "pt-5" },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Wm)(
                                      x,
                                      { elevation: "0", color: "transparent" },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s._)("img", {
                                            src: r,
                                            class: "w-50",
                                            alt: "",
                                            onClick:
                                              e[0] ||
                                              (e[0] = (e) =>
                                                t.$router.push({
                                                  name: "home",
                                                })),
                                            style: { cursor: "pointer" },
                                          }),
                                          (0, s.Wm)(
                                            y,
                                            {
                                              class: "d-flex",
                                              style: { gap: "10px" },
                                            },
                                            {
                                              default: (0, s.w5)(() => [
                                                u,
                                                (0, s.Uk)(
                                                  " 685 Market Street San Francisco, CA 94105, US"
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, s.Wm)(
                                            y,
                                            {
                                              class: "d-flex",
                                              style: { gap: "10px" },
                                            },
                                            {
                                              default: (0, s.w5)(() => [
                                                m,
                                                (0, s.Uk)(
                                                  " Call us:(090) 123-EllA"
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, s.Wm)(
                                            y,
                                            {
                                              class: "d-flex",
                                              style: { gap: "10px" },
                                            },
                                            {
                                              default: (0, s.w5)(() => [
                                                w,
                                                (0, s.Uk)(
                                                  " Email: example@domain.com"
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    h,
                                  ]),
                                  _: 1,
                                }
                              ),
                              (0, s.Wm)(
                                b,
                                { cols: "12" },
                                { default: (0, s.w5)(() => [g]), _: 1 }
                              ),
                            ]),
                            _: 1,
                          }),
                          (0, s.Wm)(
                            k,
                            {
                              class: "pt-7",
                              style: { "background-color": "#fff" },
                            },
                            {
                              default: (0, s.w5)(() => [
                                (0, s.Wm)(
                                  b,
                                  { cols: "6" },
                                  {
                                    default: (0, s.w5)(() => [
                                      (0, s._)("p", null, [
                                        (0, s.Uk)(
                                          " © " +
                                            (0, n.zw)(
                                              new Date().getFullYear()
                                            ) +
                                            " Ella Demo All Rights Reserved. Powered by ",
                                          1
                                        ),
                                        f,
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, s.Wm)(
                                  b,
                                  { cols: "6" },
                                  {
                                    default: (0, s.w5)(() => [
                                      (0, s._)("div", A, [
                                        ((0, s.wg)(!0),
                                        (0, s.iD)(
                                          s.HY,
                                          null,
                                          (0, s.Ko)(
                                            i.svgs,
                                            (t, e) => (
                                              (0, s.wg)(),
                                              (0, s.iD)(
                                                "span",
                                                { key: e, innerHTML: t },
                                                null,
                                                8,
                                                v
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
        var x = l(1020),
          b = l(1076);
        const k = (0, x.Q_)("productsModule", {
          state: () => ({
            flashDeals: [],
            newProducts: [],
            mobilePhones: [],
            fragrances: [],
            skincare: [],
            categoryProducts: [],
            singleProduct: "",
            categories: [
              { title: "Smart Phones", route: "smartphones" },
              { title: "Fragrances", route: "fragrances" },
              { title: "Laptops", route: "laptops" },
              { title: "Furniture", route: "furniture" },
              { title: "Sunglasses", route: "sunglasses" },
              { title: "Mens-Watches", route: "mens-watches" },
              { title: "Womens-Jewellery", route: "womens-jewellery" },
            ],
          }),
          actions: {
            async getProducts() {
              await b.Z.get("https://dummyjson.com/products")
                .then((t) => {
                  (this.newProducts = t.data.products.filter(
                    (t) => "laptops" === t.category
                  )),
                    (this.fragrances = t.data.products.filter(
                      (t) => "fragrances" === t.category
                    )),
                    (this.skincare = t.data.products.filter(
                      (t) => "skincare" === t.category
                    )),
                    (this.flashDeals = t.data.products.slice(0, 8)),
                    (this.mobilePhones = t.data.products.filter(
                      (t) => "smartphones" === t.category
                    ));
                })
                .catch((t) => console.log(t));
            },
            async getProductsByCategory(t) {
              await b.Z.get(
                `https://dummyjson.com/products/category/${t}`
              ).then((t) => (this.categoryProducts = t.data));
            },
            async getSingleProduct(t) {
              await b.Z.get(`https://dummyjson.com/products/${t}`).then(
                (t) => (this.singleProduct = t.data)
              );
            },
          },
        });
        var W = {
            data() {
              return {
                svgs: [
                  '<svg width="48" height="34" class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img"  aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>',
                  '<svg width="48" height="34" class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img"  aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>',
                  '   <svg\n          class="icon icon--full-color"\n          version="1.1"\n          xmlns="http://www.w3.org/2000/svg"\n          role="img"\n          x="0"\n          y="0"\n          width="48" height="34"\n          viewBox="0 0 165.521 105.965"\n          xml:space="preserve"\n          aria-labelledby="pi-apple_pay"\n        >\n          <title id="pi-apple_pay">Apple Pay</title>\n          <path\n            fill="#000"\n            d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"\n          ></path>\n          <path\n            fill="#FFF"\n            d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"\n          ></path>\n          <g>\n            <g>\n              <path\n                fill="#000"\n                d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858"\n              ></path>\n              <path\n                fill="#000"\n                d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048"\n              ></path>\n            </g>\n            <g>\n              <path\n                fill="#000"\n                d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z"\n              ></path>\n              <path\n                fill="#000"\n                d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z"\n              ></path>\n              <path\n                fill="#000"\n                d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"\n              ></path>\n            </g>\n          </g>\n        </svg>',
                  '<svg width="48" height="34" class="icon icon--full-color" viewBox="0 0 38 24"  role="img" aria-labelledby="pi-discover" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="pi-discover">Discover</title><path fill="#000" opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"></path><path d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z" fill="#231F20"></path><path d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint0_linear)"></path><path opacity=".65" d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint1_linear)"></path><path d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z" fill="#231F20"></path><path d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z" fill="#231F20"></path><path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z" fill="#F48120"></path><defs><linearGradient id="pi-paint0_linear" x1="21.657" y1="12.275" x2="19.632" y2="9.104" gradientUnits="userSpaceOnUse"><stop stop-color="#F89F20"></stop><stop offset=".25" stop-color="#F79A20"></stop><stop offset=".533" stop-color="#F68D20"></stop><stop offset=".62" stop-color="#F58720"></stop><stop offset=".723" stop-color="#F48120"></stop><stop offset="1" stop-color="#F37521"></stop></linearGradient><linearGradient id="pi-paint1_linear" x1="21.338" y1="12.232" x2="18.378" y2="6.446" gradientUnits="userSpaceOnUse"><stop stop-color="#F58720"></stop><stop offset=".359" stop-color="#E16F27"></stop><stop offset=".703" stop-color="#D4602C"></stop><stop offset=".982" stop-color="#D05B2E"></stop></linearGradient></defs></svg>',
                  '<svg width="48" height="34" class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg"  role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path></svg>',
                ],
              };
            },
            computed: { ...(0, x.rn)(k, ["categories"]) },
          },
          z = l(89);
        const C = (0, z.Z)(W, [
          ["render", y],
          ["__scopeId", "data-v-213c4778"],
        ]);
        var _ = C,
          M =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAlCAYAAADr98PUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZjAzNDAwZGQtMTY0MC00OGU2LTk5YzQtMGRlOGIxM2E4YjI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVERTU1QUE0RjlCRjExRUNCQkExOEFGODg0MkRCQjIxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVERTU1QUEzRjlCRjExRUNCQkExOEFGODg0MkRCQjIxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjlmNWZmZGQtMGQzYS1jYjQ5LThmMDQtMWE2MzRjMjFhNmU0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MmIzYWNhYWEtMTZiNy0yMzQzLTk0NTItODZmNWQ0YWQxZjYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ON+/fgAABqpJREFUeNrsXLGO4zYQlR0BqZVP0BVBaqVLqkBbprQ/wf4E+xO8n7D6hFV91THdXbeqgxTLT4jqFDmHXIwOXEacGVKUrLvlAMJioRE1Qz4O3wwpb7IF5Xq9nhy3xGaz6Xz1kqxLPn8sd+pPOXJLbn+V7RI25AuC+aD+XBy3G3UdffSSrA7MGsiPrkCkrkUAvV3Q5wq5JwP0kqxLsHFbbFXdrtDhVXRMEm8p1xCIVgFoxYtFgF6SdUn9ZiK04sWYs8JXL8nXRTlUQrgYoPNbO5voxjeREOpxK2IHIkg0DxYuWjVBmjUDOiWEKSF0yQkAbXP1cEArGqAb2IHRlUX+JRisr0Zx3D7AYRGgN2ZfDc8PkaIHu1plVwO6F8c7tO0tRIWTgw++RAZ1v4BO3lltCbgapddbkaaGZ2rDvqHf7pW+ZEYr1M8hcildp59DPRjxs1M6Z8PuakSvBVs4CeEOIrgte7ufmLhBI/6GAPLYDHGJNu48gMdoR3f8365nlP4PPnpW29q+C8M2PeB6kD447mu77wGsLhvuoZ0HZHkd3nWnBwvaeyQSJi1HbBkF8EXxU72H8lO3sQc/62w+eUdNZGXn1eWDV4Q2NjcKDwO17oN6NrNAzc1+2VkygP/Ro8OrzF30N+lMTbRx4r5LDcYZ3lkynnlQ+p2dPHlMCF8/K6KdJ8+x95WeAeY6hMJsR8D8wIhC6OBAdOcsRyJAL4PJ5hs9CsaEKQPLUmO6XDCbfDFbyM+KmBRzgpnLqytHxUSwAQ1LOEYxGljSGo/BqZmJHkuPYaN3tFArigwALSWlp349QjOi+mlExTq7rYhAQJMTITeAUiM8TfPjO+sAUYtwNZ0wHGMnhEA1TozZ3xoDV3t0LrUUS2i7B7CVzMETEPUOSPQrLKpxSz8zz7YKxMZ+BEttIKAFG9BE0rG3T7npXTvNl12DA+ArEGflUBUBikLqEYD4ktyZiZxq+9HKyEdnPVQRCmp1GjJzpa//fyaeeZXsaZ5McNyM66eVGOlEL5afGBgzqMoIw6cnZILcuSoZsAL5rnAV8VyTA6B2iFFd4JZzRUSwkIQQW4KFBWYTiDtG+xTlOZuDA1WMDnmusSsXumSmnsmYgHb66cjyY/g56B05u3uwkrhwIxEwH5hVmzFahu4m5wZFwKLth4CXSw+gksBXNlAT5DwxQcHabhk10zGA2QNJ+gk121v5qX3cc+rinnRyan7BzRE6DqDLEAN0ogUg5AC6mhhZJHLwH836DToTMjhOmxwRbrKfSORE/TQmZEVMXJ8d2dCd3WoGQL/0y5Y4EDS1LFMjgBccYBh6mJ1tYDQIqoMbkdR3AkwF9OJ+TgB0x63oxKyc5HPNFm50jhTF+8DOkwBOKir2nu12EwAwp58VMxBNBjRRLz4TE/PgoHCSonh5RhfiQz6daajEhjkQglEFcQ4EVFo4R1JDom0ZAAyUojAqEB2SnHH8rCkOyh1gsLUM4M8ZtnWNVDHOnDyGitCto3JAirVbiPErjl5oEnEgeH7nYcOk5ZZJUWbx0wBqyCRckge7bJTcpJw6bVc4wOosphucd8kz0JUdFaAUeWFGXl9wYuUq1zmFGB8v/M9P+NI6hp8iAvA4CWrIRGFPthwccXX2TgHj3jwWSp1wU/d/hqhWUZERKAGpx5ATbPJ00Jl1Rm8bdwxwurhgbIrCrSycoI4d3c8s7nlzvQHyPNLmkVFFmQxoSczCJwWWxlja0ENEGoQen1KxgEHsSg4RwbdQLyeAM2RVIZ/Rk4fYeJnLz5AIzYng5UgfSIQ/B52wexWA4GA7BeoLXBQH23uCxAdMsX/XQcwJTg+KIq2odQs/ZcDGUcgEoIAZdMLulS6jjMIRPQh3zE2K0E+u7iMOsnnCLmQZriNSlG5OP43JEpM/D4mmz+STc9ONL4CGKK2jq+8s1Qbqg0t76/Or6Akh8Gnuryb1xmoxxQbhKFcVc0V0AMrSfoby56MHqDumjrAur2CbG4BpFU8V2fj3crbzLz/thBxacg14a0RGH73BxkbZqJ0+ZePb9fqZBq4CBnzsHQ3DBuGIKAWxUnlF0LFn4NvFpfzss0CaAzRlD9x3+F27OrRvoD49aYXaYDft5G5tP/Ri2SfHJsG3IFayJD3PW7wp2RDVgyRJvirZpi5IkgCdJMlKJX/Lzl8/vdM5xG/qeq+u7xMc5k0F1PWHun7f/PL8T4rQ8/n/I5UcJ4kG6L90HEmUYz75Tl0/pX5YDNB/quvfBOj5ZAMROgF6AYYHEfrznC/5T4ABAOUIJOsbBhN3AAAAAElFTkSuQmCC";
        const D = { class: "fixed-nav" },
          U = {
            class: "links d-flex text-white justify-space-between",
            style: { "list-style": "none" },
          },
          V = (0, s._)(
            "svg",
            { "data-icon": "search", viewBox: "0 0 512 512", width: "25px" },
            [
              (0, s._)("path", {
                fill: "#FFF",
                d: "M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z",
              }),
            ],
            -1
          ),
          H = {
            viewBox: "0 0 1024 1024",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "28px", fill: "#fff" },
          },
          j = (0, s._)(
            "path",
            {
              class: "path1",
              d: "M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z",
            },
            null,
            -1
          ),
          B = (0, s._)(
            "path",
            {
              class: "path2",
              d: "M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z",
            },
            null,
            -1
          ),
          S = (0, s._)(
            "path",
            {
              class: "path3",
              d: "M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z",
            },
            null,
            -1
          ),
          F = [j, B, S];
        function E(t, e, l, a, i, o) {
          const c = (0, s.up)("v-col"),
            r = (0, s.up)("router-link"),
            p = (0, s.up)("v-badge"),
            d = (0, s.up)("v-row"),
            u = (0, s.up)("v-container"),
            m = (0, s.up)("v-app-bar");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", D, [
              (0, s.Wm)(
                m,
                { color: "#161880" },
                {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(
                      u,
                      { fluid: "" },
                      {
                        default: (0, s.w5)(() => [
                          (0, s.Wm)(d, null, {
                            default: (0, s.w5)(() => [
                              (0, s.Wm)(
                                c,
                                { cols: "2" },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s._)("img", {
                                      class: "w-50",
                                      src: M,
                                      alt: "",
                                      onClick:
                                        e[0] ||
                                        (e[0] = (e) =>
                                          t.$router.push({ name: "home" })),
                                      style: { cursor: "pointer" },
                                    }),
                                  ]),
                                  _: 1,
                                }
                              ),
                              (0, s.Wm)(
                                c,
                                { cols: "8" },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s._)("ul", U, [
                                      ((0, s.wg)(!0),
                                      (0, s.iD)(
                                        s.HY,
                                        null,
                                        (0, s.Ko)(
                                          t.categories,
                                          (t) => (
                                            (0, s.wg)(),
                                            (0, s.iD)("li", { key: t.title }, [
                                              (0, s.Wm)(
                                                r,
                                                {
                                                  to: {
                                                    name: "products_category",
                                                    params: {
                                                      category: t.route,
                                                      title: t.title,
                                                    },
                                                  },
                                                  style: {
                                                    color: "#fff",
                                                    "text-decoration": "none",
                                                  },
                                                },
                                                {
                                                  default: (0, s.w5)(() => [
                                                    (0, s.Uk)(
                                                      (0, n.zw)(t.title),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["to"]
                                              ),
                                            ])
                                          )
                                        ),
                                        128
                                      )),
                                    ]),
                                  ]),
                                  _: 1,
                                }
                              ),
                              (0, s.Wm)(
                                c,
                                {
                                  cols: "2",
                                  class: "d-flex justify-end align-center",
                                  style: { gap: "20px" },
                                },
                                {
                                  default: (0, s.w5)(() => [
                                    V,
                                    (0, s._)(
                                      "div",
                                      {
                                        class:
                                          "wishlists d-flex flex-column align-center",
                                        style: { cursor: "pointer" },
                                        onClick:
                                          e[1] ||
                                          (e[1] = (...t) =>
                                            o.openCart && o.openCart(...t)),
                                      },
                                      [
                                        t.cartItems.length
                                          ? ((0, s.wg)(),
                                            (0, s.j4)(
                                              p,
                                              {
                                                key: 0,
                                                location: "right top",
                                                content: t.cartItems.length,
                                                "offset-x": "-9",
                                                "offset-y": "6",
                                                color: "#0A6CDC",
                                              },
                                              null,
                                              8,
                                              ["content"]
                                            ))
                                          : (0, s.kq)("", !0),
                                        ((0, s.wg)(), (0, s.iD)("svg", H, F)),
                                      ]
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
        const I = (0, x.Q_)("cartStore", {
          state: () => ({ cartItems: [] }),
          actions: {
            addItem(t) {
              let e = !1;
              for (let l = 0; l < this.cartItems.length; l++)
                if (this.cartItems[l].id == t.id) {
                  (this.cartItems[l].quantity += t.quantity), (e = !0);
                  break;
                }
              e || this.cartItems.push(JSON.parse(JSON.stringify(t))),
                localStorage.setItem(
                  "cart-items",
                  JSON.stringify(this.cartItems)
                ),
                console.log(this.cartItems);
            },
            getCartItems() {
              localStorage.getItem("cart-items") &&
                (this.cartItems = JSON.parse(
                  localStorage.getItem("cart-items")
                )),
                console.log(this.cartItems);
            },
            deleteItem(t) {
              for (let e = 0; e < this.cartItems.length; e++)
                if (this.cartItems[e].id == t) {
                  this.cartItems.splice(e, 1);
                  break;
                }
              localStorage.setItem(
                "cart-items",
                JSON.stringify(this.cartItems)
              );
            },
          },
        });
        var Z = {
          inject: ["Emitter"],
          methods: {
            openCart() {
              this.Emitter.emit("openCart");
            },
          },
          computed: {
            ...(0, x.rn)(k, ["categories"]),
            ...(0, x.rn)(I, ["cartItems"]),
          },
          data() {
            return {};
          },
        };
        const L = (0, z.Z)(Z, [["render", E]]);
        var P = L;
        const Q = { class: "nav-bar" },
          R = { class: "position-relative", style: { width: "90%" } },
          G = (0, s._)(
            "input",
            {
              type: "search",
              name: "navsearch",
              id: "navsearch",
              placeholder: "Search the store",
              style: {
                width: "100%",
                "border-radius": "30px",
                outline: "none",
                "caret-color": "#555",
              },
              class: "py-3 px-5 bg-white",
            },
            null,
            -1
          ),
          N = {
            "data-icon": "search",
            viewBox: "0 0 512 512",
            width: "25px",
            style: {
              position: "absolute",
              right: "15px",
              top: "50%",
              transform: "translateY(-50%)",
            },
          },
          T = (0, s._)(
            "path",
            {
              d: "M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z",
            },
            null,
            -1
          ),
          Y = [T],
          q = {
            class:
              "parent text-white d-flex justify-space-between align-center",
          },
          O = (0, s._)(
            "div",
            { class: "available" },
            [
              (0, s._)("span", null, "Available 24/7"),
              (0, s._)("br"),
              (0, s._)("strong", null, "+20123456789"),
            ],
            -1
          ),
          J = { class: "wishlists d-flex flex-column align-center" },
          K = {
            viewBox: "0 0 512 512",
            class: "icon icon-wishlist",
            style: { width: "28px", fill: "#f6b924" },
          },
          X = (0, s._)(
            "g",
            null,
            [
              (0, s._)("g", null, [
                (0, s._)("path", {
                  d: "M474.644,74.27C449.391,45.616,414.358,29.836,376,29.836c-53.948,0-88.103,32.22-107.255,59.25\n        c-4.969,7.014-9.196,14.047-12.745,20.665c-3.549-6.618-7.775-13.651-12.745-20.665c-19.152-27.03-53.307-59.25-107.255-59.25\n        c-38.358,0-73.391,15.781-98.645,44.435C13.267,101.605,0,138.213,0,177.351c0,42.603,16.633,82.228,52.345,124.7\n        c31.917,37.96,77.834,77.088,131.005,122.397c19.813,16.884,40.302,34.344,62.115,53.429l0.655,0.574\n        c2.828,2.476,6.354,3.713,9.88,3.713s7.052-1.238,9.88-3.713l0.655-0.574c21.813-19.085,42.302-36.544,62.118-53.431\n        c53.168-45.306,99.085-84.434,131.002-122.395C495.367,259.578,512,219.954,512,177.351\n        C512,138.213,498.733,101.605,474.644,74.27z M309.193,401.614c-17.08,14.554-34.658,29.533-53.193,45.646\n        c-18.534-16.111-36.113-31.091-53.196-45.648C98.745,312.939,30,254.358,30,177.351c0-31.83,10.605-61.394,29.862-83.245\n        C79.34,72.007,106.379,59.836,136,59.836c41.129,0,67.716,25.338,82.776,46.594c13.509,19.064,20.558,38.282,22.962,45.659\n        c2.011,6.175,7.768,10.354,14.262,10.354c6.494,0,12.251-4.179,14.262-10.354c2.404-7.377,9.453-26.595,22.962-45.66\n        c15.06-21.255,41.647-46.593,82.776-46.593c29.621,0,56.66,12.171,76.137,34.27C471.395,115.957,482,145.521,482,177.351\n        C482,254.358,413.255,312.939,309.193,401.614z",
                }),
              ]),
            ],
            -1
          ),
          $ = [X],
          tt = (0, s._)("span", { class: "mt-1" }, "Wish Lists", -1),
          et = { class: "wishlists d-flex flex-column align-center" },
          lt = {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            class: "icon icon-account",
            viewBox: "0 0 1024 1024",
            width: "100%",
            height: "100%",
            style: { width: "28px", fill: "#f6b924" },
          },
          at = (0, s._)("title", null, "user", -1),
          st = (0, s._)(
            "path",
            {
              class: "path1",
              d: "M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z",
            },
            null,
            -1
          ),
          nt = (0, s._)(
            "path",
            {
              class: "path2",
              d: "M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z",
            },
            null,
            -1
          ),
          it = [at, st, nt],
          ot = (0, s._)("span", { class: "mt-1" }, "Sign In ", -1),
          ct = {
            viewBox: "0 0 1024 1024",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "32px", fill: "#f6b924" },
          },
          rt = (0, s._)(
            "path",
            {
              class: "path1",
              d: "M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z",
            },
            null,
            -1
          ),
          pt = (0, s._)(
            "path",
            {
              class: "path2",
              d: "M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z",
            },
            null,
            -1
          ),
          dt = (0, s._)(
            "path",
            {
              class: "path3",
              d: "M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z",
            },
            null,
            -1
          ),
          ut = [rt, pt, dt],
          mt = (0, s._)("span", null, "Cart", -1),
          wt = {
            class: "links d-flex text-white justify-space-between",
            style: { "list-style": "none" },
          },
          ht = { class: "help d-flex align-center", style: { gap: "5px" } },
          gt = {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "user-headset",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512",
            class: "svg-inline--fa fa-user-headset fa-w-14 fa-3x",
            style: { width: "20px" },
          },
          ft = (0, s._)(
            "path",
            {
              fill: "#0a6cdc",
              d: "M320 352h-23.1a174.08 174.08 0 0 1-145.8 0H128A128 128 0 0 0 0 480a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32 128 128 0 0 0-128-128zM48 224a16 16 0 0 0 16-16v-16c0-88.22 71.78-160 160-160s160 71.78 160 160v16a80.09 80.09 0 0 1-80 80h-32a32 32 0 0 0-32-32h-32a32 32 0 0 0 0 64h96a112.14 112.14 0 0 0 112-112v-16C416 86.13 329.87 0 224 0S32 86.13 32 192v16a16 16 0 0 0 16 16zm160 0h32a64 64 0 0 1 55.41 32H304a48.05 48.05 0 0 0 48-48v-16a128 128 0 0 0-256 0c0 40.42 19.1 76 48.35 99.47-.06-1.17-.35-2.28-.35-3.47a64.07 64.07 0 0 1 64-64z",
              class: "",
            },
            null,
            -1
          ),
          At = [ft],
          vt = (0, s._)("span", null, "Help", -1),
          yt = {
            class: "lang d-flex align-center",
            style: { gap: "5px", cursor: "pointer" },
            id: "language-btn",
          },
          xt = ["innerHTML"],
          bt = ["innerHTML"];
        function kt(t, e, l, a, i, o) {
          const c = (0, s.up)("v-col"),
            r = (0, s.up)("v-badge"),
            p = (0, s.up)("v-row"),
            d = (0, s.up)("router-link"),
            u = (0, s.up)("v-icon"),
            m = (0, s.up)("v-list-item-title"),
            w = (0, s.up)("v-list-item"),
            h = (0, s.up)("v-list"),
            g = (0, s.up)("v-menu"),
            f = (0, s.up)("v-container"),
            A = (0, s.up)("v-app-bar");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", Q, [
              (0, s.Wm)(
                A,
                {
                  color: "#161880",
                  class: "pt-3",
                  height: "fit-content",
                  absolute: "",
                },
                {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(
                      f,
                      { fluid: "" },
                      {
                        default: (0, s.w5)(() => [
                          (0, s.Wm)(p, null, {
                            default: (0, s.w5)(() => [
                              (0, s.Wm)(
                                c,
                                { cols: "3" },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s._)("img", {
                                      src: M,
                                      alt: "",
                                      onClick:
                                        e[0] ||
                                        (e[0] = (e) =>
                                          t.$router.push({ name: "home" })),
                                      style: { cursor: "pointer" },
                                    }),
                                  ]),
                                  _: 1,
                                }
                              ),
                              (0, s.Wm)(
                                c,
                                { cols: "5" },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s._)("div", R, [
                                      G,
                                      ((0, s.wg)(), (0, s.iD)("svg", N, Y)),
                                    ]),
                                  ]),
                                  _: 1,
                                }
                              ),
                              (0, s.Wm)(
                                c,
                                { cols: "4", class: "ps-5" },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s._)("div", q, [
                                      O,
                                      (0, s._)("div", J, [
                                        ((0, s.wg)(), (0, s.iD)("svg", K, $)),
                                        tt,
                                      ]),
                                      (0, s._)("div", et, [
                                        ((0, s.wg)(), (0, s.iD)("svg", lt, it)),
                                        ot,
                                      ]),
                                      (0, s._)(
                                        "div",
                                        {
                                          class:
                                            "wishlists d-flex flex-column align-center",
                                          style: { cursor: "pointer" },
                                          onClick:
                                            e[1] ||
                                            (e[1] = (...t) =>
                                              o.openCart && o.openCart(...t)),
                                        },
                                        [
                                          t.cartItems.length
                                            ? ((0, s.wg)(),
                                              (0, s.j4)(
                                                r,
                                                {
                                                  key: 0,
                                                  location: "right top",
                                                  content: t.cartItems.length,
                                                  "offset-x": "-9",
                                                  "offset-y": "6",
                                                  color: "#0A6CDC",
                                                },
                                                null,
                                                8,
                                                ["content"]
                                              ))
                                            : (0, s.kq)("", !0),
                                          ((0, s.wg)(),
                                          (0, s.iD)("svg", ct, ut)),
                                          mt,
                                        ]
                                      ),
                                    ]),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }),
                          (0, s.Wm)(
                            p,
                            { class: "mt-4" },
                            {
                              default: (0, s.w5)(() => [
                                (0, s.Wm)(
                                  c,
                                  { cols: "8" },
                                  {
                                    default: (0, s.w5)(() => [
                                      (0, s._)("ul", wt, [
                                        ((0, s.wg)(!0),
                                        (0, s.iD)(
                                          s.HY,
                                          null,
                                          (0, s.Ko)(
                                            t.categories,
                                            (t) => (
                                              (0, s.wg)(),
                                              (0, s.iD)(
                                                "li",
                                                { key: t.title },
                                                [
                                                  (0, s.Wm)(
                                                    d,
                                                    {
                                                      to: {
                                                        name: "products_category",
                                                        params: {
                                                          category: t.route,
                                                          title: t.title,
                                                        },
                                                      },
                                                      style: {
                                                        color: "#fff",
                                                        "text-decoration":
                                                          "none",
                                                      },
                                                    },
                                                    {
                                                      default: (0, s.w5)(() => [
                                                        (0, s.Uk)(
                                                          (0, n.zw)(t.title),
                                                          1
                                                        ),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1032,
                                                    ["to"]
                                                  ),
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, s.Wm)(
                                  c,
                                  {
                                    cols: "4",
                                    class: "d-flex justify-end",
                                    style: { gap: "35px" },
                                  },
                                  {
                                    default: (0, s.w5)(() => [
                                      (0, s._)("div", ht, [
                                        ((0, s.wg)(), (0, s.iD)("svg", gt, At)),
                                        vt,
                                      ]),
                                      (0, s._)("div", yt, [
                                        (0, s._)(
                                          "span",
                                          { innerHTML: i.selectedLang[0].icon },
                                          null,
                                          8,
                                          xt
                                        ),
                                        (0, s._)(
                                          "span",
                                          null,
                                          (0, n.zw)(i.selectedLang[0].lang) +
                                            " / " +
                                            (0, n.zw)(
                                              i.selectedLang[0].currency
                                            ),
                                          1
                                        ),
                                        (0, s.Wm)(u, null, {
                                          default: (0, s.w5)(() => [
                                            (0, s.Uk)("mdi-chevron-down"),
                                          ]),
                                          _: 1,
                                        }),
                                        (0, s.Wm)(
                                          g,
                                          { activator: "#language-btn" },
                                          {
                                            default: (0, s.w5)(() => [
                                              (0, s.Wm)(
                                                h,
                                                {
                                                  selected: i.selectedLang,
                                                  "onUpdate:selected":
                                                    e[2] ||
                                                    (e[2] = (t) =>
                                                      (i.selectedLang = t)),
                                                },
                                                {
                                                  default: (0, s.w5)(() => [
                                                    ((0, s.wg)(!0),
                                                    (0, s.iD)(
                                                      s.HY,
                                                      null,
                                                      (0, s.Ko)(
                                                        i.langs,
                                                        (t) => (
                                                          (0, s.wg)(),
                                                          (0, s.j4)(
                                                            w,
                                                            {
                                                              key: t.lang,
                                                              value: t,
                                                            },
                                                            {
                                                              default: (0,
                                                              s.w5)(() => [
                                                                (0, s.Wm)(
                                                                  m,
                                                                  {
                                                                    class:
                                                                      "d-flex align-center",
                                                                    style: {
                                                                      gap: "10px",
                                                                    },
                                                                  },
                                                                  {
                                                                    default: (0,
                                                                    s.w5)(
                                                                      () => [
                                                                        (0,
                                                                        s._)(
                                                                          "span",
                                                                          {
                                                                            innerHTML:
                                                                              t.icon,
                                                                          },
                                                                          null,
                                                                          8,
                                                                          bt
                                                                        ),
                                                                        (0,
                                                                        s.Uk)(
                                                                          " " +
                                                                            (0,
                                                                            n.zw)(
                                                                              t.lang
                                                                            ) +
                                                                            " / " +
                                                                            (0,
                                                                            n.zw)(
                                                                              t.currency
                                                                            ),
                                                                          1
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1024
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["value"]
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                  ]),
                                                  _: 1,
                                                },
                                                8,
                                                ["selected"]
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
        var Wt = {
          inject: ["Emitter"],
          methods: {
            openCart() {
              this.Emitter.emit("openCart");
            },
          },
          computed: {
            ...(0, x.rn)(k, ["categories"]),
            ...(0, x.rn)(I, ["cartItems"]),
          },
          data() {
            return {
              selectedLang: [
                {
                  icon: '   <svg\n                        xmlns="http://www.w3.org/2000/svg"\n                        version="1.1"\n                        x="0px"\n                        y="0px"\n                        viewBox="0 0 512 512"\n                        style="enable-background: new 0 0 512 512; width: 20px"\n                        xmlns:xlink="http://www.w3.org/1999/xlink"\n                        xml:space="preserve"\n                      >\n                        <circle\n                          style="fill: #f0f0f0"\n                          cx="256"\n                          cy="256"\n                          r="256"\n                        ></circle>\n                        <g>\n                          <path\n                            style="fill: #0052b4"\n                            d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"\n                          ></path>\n                        </g>\n                        <g>\n                          <path\n                            style="fill: #d80027"\n                            d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"\n                          ></path>\n                          <path\n                            style="fill: #d80027"\n                            d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z"\n                          ></path>\n                          <path\n                            style="fill: #d80027"\n                            d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z"\n                          ></path>\n                          <path\n                            style="fill: #d80027"\n                            d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z"\n                          ></path>\n                          <path\n                            style="fill: #d80027"\n                            d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z"\n                          ></path>\n                        </g>\n                      </svg>',
                  lang: "EN",
                  currency: "USD",
                },
              ],
              langs: [
                {
                  icon: '   <svg\n                        xmlns="http://www.w3.org/2000/svg"\n                        version="1.1"\n                        x="0px"\n                        y="0px"\n                        viewBox="0 0 512 512"\n                        style="enable-background: new 0 0 512 512; width: 20px"\n                        xmlns:xlink="http://www.w3.org/1999/xlink"\n                        xml:space="preserve"\n                      >\n                        <circle\n                          style="fill: #f0f0f0"\n                          cx="256"\n                          cy="256"\n                          r="256"\n                        ></circle>\n                        <g>\n                          <path\n                            style="fill: #0052b4"\n                            d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"\n                          ></path>\n                          <path\n                            style="fill: #0052b4"\n                            d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"\n                          ></path>\n                        </g>\n                        <g>\n                          <path\n                            style="fill: #d80027"\n                            d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"\n                          ></path>\n                          <path\n                            style="fill: #d80027"\n                            d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z"\n                          ></path>\n                          <path\n                            style="fill: #d80027"\n                            d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z"\n                          ></path>\n                          <path\n                            style="fill: #d80027"\n                            d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z"\n                          ></path>\n                          <path\n                            style="fill: #d80027"\n                            d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z"\n                          ></path>\n                        </g>\n                      </svg>',
                  lang: "EN",
                  currency: "USD",
                },
                {
                  icon: ' <svg\n                        xmlns="http://www.w3.org/2000/svg"\n                        version="1.1"\n                        x="0px"\n                        y="0px"\n                        viewBox="0 0 512 512"\n                        style="enable-background: new 0 0 512 512; width: 20px"\n                        xmlns:xlink="http://www.w3.org/1999/xlink"\n                        xml:space="preserve"\n                      >\n                        <path\n                          style="fill: #ffda44"\n                          d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957L256,322.783  L15.923,345.043z"\n                        ></path>\n                        <path\n                          d="M256,0C145.929,0,52.094,69.472,15.923,166.957L256,189.217l240.077-22.261C459.906,69.472,366.071,0,256,0z"\n                        ></path>\n                        <path\n                          style="fill: #d80027"\n                          d="M15.923,166.957C5.633,194.69,0,224.686,0,256s5.633,61.31,15.923,89.043h480.155  C506.368,317.31,512,287.314,512,256s-5.632-61.31-15.923-89.043H15.923z"\n                        ></path>\n                      </svg>',
                  lang: "DE",
                  currency: "EURO",
                },
              ],
            };
          },
        };
        const zt = (0, z.Z)(Wt, [["render", kt]]);
        var Ct = zt;
        const _t = { class: "drawer" },
          Mt = { key: 2, class: "bar-parent mt-3 position-relative mr-2" },
          Dt = (0, s._)(
            "g",
            { id: "Layer_2", "data-name": "Layer 2" },
            [
              (0, s._)("g", { id: "Layer_1-2", "data-name": "Layer 1" }, [
                (0, s._)("path", {
                  class: "truck-body",
                  d: "M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z",
                }),
                (0, s._)("path", {
                  class: "truck-body",
                  d: "M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z",
                }),
                (0, s._)("path", {
                  class: "wheel",
                  fill: "#FFF",
                  d: "M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z",
                }),
                (0, s._)("path", {
                  class: "wheel",
                  fill: "#FFF",
                  d: "M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z",
                }),
              ]),
            ],
            -1
          ),
          Ut = [Dt],
          Vt = (0, s._)(
            "span",
            { style: { color: "red" } },
            "Free Shipping",
            -1
          ),
          Ht = ["src"],
          jt = {
            class: "item-footer d-flex justify-space-between align-center",
          },
          Bt = {
            class: "counter px-1 mt-3",
            style: {
              "border-radius": "30px",
              width: "fit-content",
              border: "1px solid #333",
            },
          },
          St = ["onUpdate:modelValue"];
        function Ft(t, e, l, i, o, c) {
          const r = (0, s.up)("v-icon"),
            p = (0, s.up)("v-card-title"),
            d = (0, s.up)("v-card-text"),
            u = (0, s.up)("v-progress-linear"),
            m = (0, s.up)("v-btn"),
            w = (0, s.up)("v-card-actions"),
            h = (0, s.up)("v-card"),
            g = (0, s.up)("v-col"),
            f = (0, s.up)("v-row"),
            A = (0, s.up)("v-container"),
            v = (0, s.up)("v-navigation-drawer");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", _t, [
              (0, s.Wm)(
                v,
                {
                  modelValue: o.drawer,
                  "onUpdate:modelValue": e[2] || (e[2] = (t) => (o.drawer = t)),
                  temporary: "",
                  location: "right",
                  width: "370",
                  class: "pr-1 cart-drawer",
                },
                {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(
                      h,
                      { class: "px-0", elevation: "0" },
                      {
                        default: (0, s.w5)(() => [
                          (0, s.Wm)(
                            p,
                            {
                              class:
                                "pl-0 pr-2 d-flex justify-space-between align-center w-100",
                              style: {
                                "font-size": "16px",
                                "font-weight": "bold",
                              },
                            },
                            {
                              default: (0, s.w5)(() => [
                                (0, s.Uk)(" Shopping Cart "),
                                (0, s.Wm)(
                                  r,
                                  {
                                    onClick:
                                      e[0] || (e[0] = (t) => (o.drawer = !1)),
                                  },
                                  {
                                    default: (0, s.w5)(() => [
                                      (0, s.Uk)("mdi-close"),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          (0, s.Wm)(
                            d,
                            { class: "px-0 py-0", style: { color: "#6f6f6f" } },
                            {
                              default: (0, s.w5)(() => [
                                (0, s.Uk)(
                                  (0, n.zw)(t.cartItems.length) + " Items",
                                  1
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          t.cartItems.length
                            ? (0, s.kq)("", !0)
                            : ((0, s.wg)(),
                              (0, s.j4)(
                                d,
                                {
                                  key: 0,
                                  class: "px-0",
                                  style: { color: "#6f6f6f" },
                                },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Uk)(
                                      "Free Shipping for All Orders over $10000,00"
                                    ),
                                  ]),
                                  _: 1,
                                }
                              )),
                          t.cartItems.length
                            ? (0, s.kq)("", !0)
                            : ((0, s.wg)(),
                              (0, s.j4)(
                                d,
                                {
                                  key: 1,
                                  class: "px-0 text-center",
                                  style: { color: "#6f6f6f" },
                                },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Uk)("Your Cart is Empty"),
                                  ]),
                                  _: 1,
                                }
                              )),
                          t.cartItems.length
                            ? ((0, s.wg)(),
                              (0, s.iD)("div", Mt, [
                                ((0, s.wg)(),
                                (0, s.iD)(
                                  "svg",
                                  {
                                    class: "icon-shipping-truck",
                                    viewBox: "0 0 40.55 24",
                                    width: "30",
                                    fill: "#F44336",
                                    style: (0, n.j5)(
                                      `position: absolute;\n              bottom: 100%;\n              z-index: 1;\n              left: calc(${
                                        parseInt(
                                          (c.calcTotalPrice / 1e4) * 100
                                        ) <= 100
                                          ? parseInt(
                                              (c.calcTotalPrice / 1e4) * 100
                                            )
                                          : 100
                                      }% - 30px);\n              transition: all 0.3s ease-in-out;`
                                    ),
                                  },
                                  Ut,
                                  4
                                )),
                                (0, s.Wm)(
                                  u,
                                  {
                                    color: "red",
                                    height: "10",
                                    "model-value":
                                      parseInt(
                                        (c.calcTotalPrice / 1e4) * 100
                                      ) <= 100
                                        ? parseInt(
                                            (c.calcTotalPrice / 1e4) * 100
                                          )
                                        : 100,
                                    striped: "true",
                                  },
                                  null,
                                  8,
                                  ["model-value"]
                                ),
                                t.cartItems.length &&
                                1e4 - c.calcTotalPrice <= 0
                                  ? ((0, s.wg)(),
                                    (0, s.j4)(
                                      d,
                                      {
                                        key: 0,
                                        class: "px-0 pt-2",
                                        style: { color: "#6f6f6f" },
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Uk)("Your order now with "),
                                          Vt,
                                        ]),
                                        _: 1,
                                      }
                                    ))
                                  : (0, s.kq)("", !0),
                                t.cartItems.length && 1e4 - c.calcTotalPrice > 0
                                  ? ((0, s.wg)(),
                                    (0, s.j4)(
                                      d,
                                      {
                                        key: 1,
                                        class: "px-0 pt-2",
                                        style: { color: "#6f6f6f" },
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Uk)(
                                            "Only $" +
                                              (0, n.zw)(
                                                1e4 - c.calcTotalPrice
                                              ) +
                                              " away from Free Shipping",
                                            1
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ))
                                  : (0, s.kq)("", !0),
                              ]))
                            : (0, s.kq)("", !0),
                          t.cartItems.length
                            ? (0, s.kq)("", !0)
                            : ((0, s.wg)(),
                              (0, s.j4)(
                                w,
                                { key: 3 },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Wm)(
                                      m,
                                      {
                                        style: {
                                          "text-transform": "none",
                                          "border-radius": "30px",
                                          border: "1px solid #333",
                                        },
                                        class: "w-100",
                                        variant: "outlined",
                                        density: "compact",
                                        height: "45",
                                        onClick:
                                          e[1] ||
                                          (e[1] = (t) => (o.drawer = !1)),
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Uk)("Continue Shopping"),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                }
                              )),
                        ]),
                        _: 1,
                      }
                    ),
                    t.cartItems.length
                      ? ((0, s.wg)(),
                        (0, s.j4)(
                          h,
                          {
                            key: 0,
                            class: "p-0 mt-5 items-card",
                            elevation: "0",
                            "max-height": "320",
                            style: { "overflow-y": "auto" },
                          },
                          {
                            default: (0, s.w5)(() => [
                              (0, s.Wm)(
                                A,
                                { class: "px-1" },
                                {
                                  default: (0, s.w5)(() => [
                                    ((0, s.wg)(!0),
                                    (0, s.iD)(
                                      s.HY,
                                      null,
                                      (0, s.Ko)(
                                        t.cartItems,
                                        (e) => (
                                          (0, s.wg)(),
                                          (0, s.j4)(
                                            f,
                                            {
                                              key: e.id,
                                              class: "align-center mb-1",
                                            },
                                            {
                                              default: (0, s.w5)(() => [
                                                (0, s.Wm)(
                                                  g,
                                                  { cols: "5" },
                                                  {
                                                    default: (0, s.w5)(() => [
                                                      (0, s._)(
                                                        "img",
                                                        {
                                                          src: e.thumbnail,
                                                          class: "w-100",
                                                          alt: "",
                                                        },
                                                        null,
                                                        8,
                                                        Ht
                                                      ),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024
                                                ),
                                                (0, s.Wm)(
                                                  g,
                                                  { cols: "7" },
                                                  {
                                                    default: (0, s.w5)(() => [
                                                      (0, s.Wm)(
                                                        p,
                                                        {
                                                          class: "px-0",
                                                          style: {
                                                            "white-space":
                                                              "pre-wrap",
                                                            "font-size": "14px",
                                                            "line-height":
                                                              "1.2",
                                                          },
                                                        },
                                                        {
                                                          default: (0, s.w5)(
                                                            () => [
                                                              (0, s.Uk)(
                                                                (0, n.zw)(
                                                                  e.title
                                                                ) +
                                                                  " Sample - " +
                                                                  (0, n.zw)(
                                                                    e.category
                                                                  ),
                                                                1
                                                              ),
                                                            ]
                                                          ),
                                                          _: 2,
                                                        },
                                                        1024
                                                      ),
                                                      (0, s.Wm)(
                                                        d,
                                                        {
                                                          class: "px-0 pb-0",
                                                          style: {
                                                            color: "#6f6f6f",
                                                          },
                                                        },
                                                        {
                                                          default: (0, s.w5)(
                                                            () => [
                                                              (0, s.Uk)(
                                                                " Category: " +
                                                                  (0, n.zw)(
                                                                    e.category
                                                                  ),
                                                                1
                                                              ),
                                                            ]
                                                          ),
                                                          _: 2,
                                                        },
                                                        1024
                                                      ),
                                                      (0, s.Wm)(
                                                        d,
                                                        {
                                                          class:
                                                            "px-0 pt-2 font-weight-bold",
                                                        },
                                                        {
                                                          default: (0, s.w5)(
                                                            () => [
                                                              (0, s.Uk)(
                                                                " $" +
                                                                  (0, n.zw)(
                                                                    Math.ceil(
                                                                      e.price -
                                                                        e.price *
                                                                          (e.discountPercentage /
                                                                            100)
                                                                    ) *
                                                                      e.quantity
                                                                  ),
                                                                1
                                                              ),
                                                            ]
                                                          ),
                                                          _: 2,
                                                        },
                                                        1024
                                                      ),
                                                      (0, s._)("div", jt, [
                                                        (0, s._)("div", Bt, [
                                                          (0, s.Wm)(
                                                            r,
                                                            {
                                                              onClick: (t) =>
                                                                e.quantity >
                                                                  1 &&
                                                                e.quantity--,
                                                              size: "18",
                                                            },
                                                            {
                                                              default: (0,
                                                              s.w5)(() => [
                                                                (0, s.Uk)(
                                                                  "mdi-minus"
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"]
                                                          ),
                                                          (0, s.wy)(
                                                            (0, s._)(
                                                              "input",
                                                              {
                                                                type: "number",
                                                                class:
                                                                  "py-2 text-center",
                                                                style: {
                                                                  border:
                                                                    "none",
                                                                  outline:
                                                                    "none",
                                                                  width: "30px",
                                                                  "font-size":
                                                                    "12px",
                                                                },
                                                                "onUpdate:modelValue":
                                                                  (t) =>
                                                                    (e.quantity =
                                                                      t),
                                                                min: "1",
                                                              },
                                                              null,
                                                              8,
                                                              St
                                                            ),
                                                            [[a.nr, e.quantity]]
                                                          ),
                                                          (0, s.Wm)(
                                                            r,
                                                            {
                                                              onClick: (t) =>
                                                                e.quantity++,
                                                              size: "18",
                                                            },
                                                            {
                                                              default: (0,
                                                              s.w5)(() => [
                                                                (0, s.Uk)(
                                                                  "mdi-plus"
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"]
                                                          ),
                                                        ]),
                                                        (0, s.Wm)(
                                                          r,
                                                          {
                                                            size: "22",
                                                            onClick: (l) =>
                                                              t.deleteItem(
                                                                e.id
                                                              ),
                                                          },
                                                          {
                                                            default: (0, s.w5)(
                                                              () => [
                                                                (0, s.Uk)(
                                                                  "mdi-close"
                                                                ),
                                                              ]
                                                            ),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          ["onClick"]
                                                        ),
                                                      ]),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ))
                      : (0, s.kq)("", !0),
                    t.cartItems.length
                      ? ((0, s.wg)(),
                        (0, s.j4)(
                          h,
                          { key: 1, class: "p-0 mt-5", elevation: "0" },
                          {
                            default: (0, s.w5)(() => [
                              (0, s.Wm)(
                                w,
                                {
                                  class:
                                    "flex-column justify-center align-center",
                                  style: { gap: "15px" },
                                },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Wm)(
                                      m,
                                      {
                                        style: {
                                          "text-transform": "none",
                                          "border-radius": "30px",
                                          "border-color": "#eee",
                                        },
                                        variant: "elevated",
                                        density: "compact",
                                        height: "40",
                                        elevation: "0",
                                        class: "w-100",
                                        color: "blue",
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Uk)("Check Out"),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    (0, s.Wm)(
                                      m,
                                      {
                                        style: {
                                          "text-transform": "none",
                                          "border-radius": "30px",
                                          "border-color": "#eee",
                                        },
                                        variant: "outlined",
                                        density: "compact",
                                        height: "40",
                                        class: "w-100 mx-0",
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Uk)("View Cart"),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ))
                      : (0, s.kq)("", !0),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"]
              ),
            ])
          );
        }
        var Et = {
          inject: ["Emitter"],
          data() {
            return { drawer: !0 };
          },
          computed: {
            ...(0, x.rn)(I, ["cartItems"]),
            calcTotalPrice() {
              let t = 0;
              return (
                this.cartItems.forEach((e) => {
                  t +=
                    Math.ceil(
                      e.price - e.price * (e.discountPercentage / 100)
                    ) * e.quantity;
                }),
                t
              );
            },
          },
          methods: { ...(0, x.nv)(I, ["getCartItems", "deleteItem"]) },
          mounted() {
            this.Emitter.on("openCart", () => {
              this.drawer = !0;
            }),
              this.getCartItems();
          },
        };
        const It = (0, z.Z)(Et, [["render", Ft]]);
        var Zt = It,
          Lt = {
            components: {
              AppFooter: _,
              FixedNav: P,
              AppNav: Ct,
              CartDrawer: Zt,
            },
          };
        const Pt = (0, z.Z)(Lt, [["render", c]]);
        var Qt = Pt;
        const Rt = { class: "quick-view mt-10" },
          Gt = ["src"],
          Nt = ["src"],
          Tt = {
            class: "rating-parent d-flex align-center",
            style: { gap: "10px" },
          },
          Yt = { class: "mt-1" },
          qt = {
            style: {
              color: "#e10600",
              "font-weight": "900",
              "font-size": "16px",
            },
          },
          Ot = {
            class: "counter px-1 mt-3",
            style: {
              "border-radius": "30px",
              width: "fit-content",
              border: "1px solid #333",
            },
          };
        function Jt(t, e, l, i, o, c) {
          const r = (0, s.up)("v-icon"),
            p = (0, s.up)("v-skelton-loader"),
            d = (0, s.up)("v-tab"),
            u = (0, s.up)("v-tabs"),
            m = (0, s.up)("v-col"),
            w = (0, s.up)("v-card-title"),
            h = (0, s.up)("v-rating"),
            g = (0, s.up)("v-card-text"),
            f = (0, s.up)("v-btn"),
            A = (0, s.up)("v-card-actions"),
            v = (0, s.up)("v-card"),
            y = (0, s.up)("v-row"),
            x = (0, s.up)("v-container"),
            b = (0, s.up)("v-dialog");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", Rt, [
              (0, s.Wm)(
                b,
                {
                  modelValue: o.dialog,
                  "onUpdate:modelValue": e[7] || (e[7] = (t) => (o.dialog = t)),
                  "max-width": "900",
                  "max-height": "500",
                },
                {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(
                      r,
                      {
                        style: {
                          position: "absolute",
                          right: "-20px",
                          top: "-20px",
                          "background-color": "#333",
                          color: "#ccc",
                          cursor: "pointer",
                          "font-size": "18px",
                          padding: "13px",
                          "z-index": "10",
                        },
                        onClick: e[0] || (e[0] = (t) => (o.dialog = !1)),
                      },
                      {
                        default: (0, s.w5)(() => [(0, s.Uk)("mdi-close")]),
                        _: 1,
                      }
                    ),
                    (0, s.Wm)(
                      v,
                      { elevation: "0", class: "content_card" },
                      {
                        default: (0, s.w5)(() => [
                          (0, s.Wm)(
                            x,
                            {
                              fluid: "",
                              style: { "background-color": "#fff" },
                              class: "pt-10 px-10",
                            },
                            {
                              default: (0, s.w5)(() => [
                                (0, s.Wm)(y, null, {
                                  default: (0, s.w5)(() => [
                                    (0, s.Wm)(
                                      m,
                                      { cols: "7" },
                                      {
                                        default: (0, s.w5)(() => [
                                          o.loading
                                            ? (0, s.kq)("", !0)
                                            : ((0, s.wg)(),
                                              (0, s.iD)(
                                                "img",
                                                {
                                                  key: 0,
                                                  src: o.tab
                                                    ? o.tab
                                                    : o.product.thumbnail,
                                                  class: "w-100",
                                                  alt: "",
                                                  height: "350",
                                                },
                                                null,
                                                8,
                                                Gt
                                              )),
                                          o.loading
                                            ? ((0, s.wg)(),
                                              (0, s.j4)(p, {
                                                key: 1,
                                                type: "image,image,image",
                                              }))
                                            : (0, s.kq)("", !0),
                                          (0, s.Wm)(
                                            u,
                                            {
                                              "center-active": "",
                                              height: "180",
                                              modelValue: o.tab,
                                              "onUpdate:modelValue":
                                                e[1] ||
                                                (e[1] = (t) => (o.tab = t)),
                                              class: "mt-10",
                                            },
                                            {
                                              default: (0, s.w5)(() => [
                                                ((0, s.wg)(!0),
                                                (0, s.iD)(
                                                  s.HY,
                                                  null,
                                                  (0, s.Ko)(
                                                    o.product.images,
                                                    (t, e) => (
                                                      (0, s.wg)(),
                                                      (0, s.j4)(
                                                        d,
                                                        {
                                                          key: e,
                                                          class: "mx-10",
                                                          value: t,
                                                        },
                                                        {
                                                          default: (0, s.w5)(
                                                            () => [
                                                              (0, s._)(
                                                                "img",
                                                                {
                                                                  src: t,
                                                                  alt: "",
                                                                  width: "100",
                                                                  height: "100",
                                                                },
                                                                null,
                                                                8,
                                                                Nt
                                                              ),
                                                            ]
                                                          ),
                                                          _: 2,
                                                        },
                                                        1032,
                                                        ["value"]
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                              ]),
                                              _: 1,
                                            },
                                            8,
                                            ["modelValue"]
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    (0, s.Wm)(
                                      m,
                                      { cols: "5", class: "pt-0 pl-6" },
                                      {
                                        default: (0, s.w5)(() => [
                                          o.loading
                                            ? ((0, s.wg)(),
                                              (0, s.j4)(p, {
                                                key: 0,
                                                type: "article,article,article",
                                              }))
                                            : (0, s.kq)("", !0),
                                          o.loading
                                            ? (0, s.kq)("", !0)
                                            : ((0, s.wg)(),
                                              (0, s.j4)(
                                                v,
                                                { key: 1, elevation: "0" },
                                                {
                                                  default: (0, s.w5)(() => [
                                                    (0, s.Wm)(
                                                      w,
                                                      {
                                                        class: "px-0",
                                                        style: {
                                                          "font-size": "20px",
                                                          "font-weight": "bold",
                                                          "white-space":
                                                            "pre-wrap",
                                                        },
                                                      },
                                                      {
                                                        default: (0, s.w5)(
                                                          () => [
                                                            (0, s.Uk)(
                                                              " (" +
                                                                (0, n.zw)(
                                                                  o.product
                                                                    .title
                                                                ) +
                                                                ") Sample - " +
                                                                (0, n.zw)(
                                                                  o.product
                                                                    .category
                                                                ) +
                                                                " For Sale ",
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                        _: 1,
                                                      }
                                                    ),
                                                    (0, s._)("div", Tt, [
                                                      (0, s.Wm)(
                                                        h,
                                                        {
                                                          modelValue:
                                                            o.product.rating,
                                                          "onUpdate:modelValue":
                                                            e[2] ||
                                                            (e[2] = (t) =>
                                                              (o.product.rating =
                                                                t)),
                                                          "half-increments":
                                                            "true",
                                                          readonly: "true",
                                                          color: "#FFC50F",
                                                          size: "small",
                                                          density: "compact",
                                                        },
                                                        null,
                                                        8,
                                                        ["modelValue"]
                                                      ),
                                                      (0, s._)(
                                                        "span",
                                                        Yt,
                                                        "Stock : " +
                                                          (0, n.zw)(
                                                            o.product.stock
                                                          ),
                                                        1
                                                      ),
                                                    ]),
                                                    (0, s.Wm)(
                                                      g,
                                                      { class: "px-0" },
                                                      {
                                                        default: (0, s.w5)(
                                                          () => [
                                                            (0, s.Uk)(
                                                              (0, n.zw)(
                                                                o.product
                                                                  .description
                                                              ),
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                        _: 1,
                                                      }
                                                    ),
                                                    (0, s.Wm)(
                                                      g,
                                                      { class: "px-0 pt-0" },
                                                      {
                                                        default: (0, s.w5)(
                                                          () => [
                                                            (0, s.Uk)(
                                                              " Brand : " +
                                                                (0, n.zw)(
                                                                  o.product
                                                                    .brand
                                                                ),
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                        _: 1,
                                                      }
                                                    ),
                                                    (0, s.Wm)(
                                                      g,
                                                      { class: "px-0 pt-0" },
                                                      {
                                                        default: (0, s.w5)(
                                                          () => [
                                                            (0, s.Uk)(
                                                              " Availability : " +
                                                                (0, n.zw)(
                                                                  o.product
                                                                    .stock > 0
                                                                    ? "In Stock"
                                                                    : "Out of Stock"
                                                                ),
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                        _: 1,
                                                      }
                                                    ),
                                                    (0, s.Wm)(
                                                      g,
                                                      { class: "pl-0 pt-0" },
                                                      {
                                                        default: (0, s.w5)(
                                                          () => [
                                                            (0, s._)(
                                                              "del",
                                                              null,
                                                              "$" +
                                                                (0, n.zw)(
                                                                  o.product
                                                                    .price
                                                                ),
                                                              1
                                                            ),
                                                            (0, s.Uk)(" From "),
                                                            (0, s._)(
                                                              "span",
                                                              qt,
                                                              "$" +
                                                                (0, n.zw)(
                                                                  Math.ceil(
                                                                    o.product
                                                                      .price -
                                                                      o.product
                                                                        .price *
                                                                        (o
                                                                          .product
                                                                          .discountPercentage /
                                                                          100)
                                                                  )
                                                                ),
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                        _: 1,
                                                      }
                                                    ),
                                                    (0, s.Wm)(
                                                      g,
                                                      { class: "pl-0 pt-0" },
                                                      {
                                                        default: (0, s.w5)(
                                                          () => [
                                                            (0, s.Uk)(
                                                              " Quantity "
                                                            ),
                                                            (0, s._)(
                                                              "div",
                                                              Ot,
                                                              [
                                                                (0, s.Wm)(
                                                                  r,
                                                                  {
                                                                    onClick:
                                                                      e[3] ||
                                                                      (e[3] = (
                                                                        t
                                                                      ) =>
                                                                        o.quantity >
                                                                          1 &&
                                                                        o.quantity--),
                                                                    size: "22",
                                                                  },
                                                                  {
                                                                    default: (0,
                                                                    s.w5)(
                                                                      () => [
                                                                        (0,
                                                                        s.Uk)(
                                                                          "mdi-minus"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 1,
                                                                  }
                                                                ),
                                                                (0, s.wy)(
                                                                  (0, s._)(
                                                                    "input",
                                                                    {
                                                                      type: "number",
                                                                      class:
                                                                        "py-2 text-center",
                                                                      style: {
                                                                        border:
                                                                          "none",
                                                                        outline:
                                                                          "none",
                                                                        width:
                                                                          "80px",
                                                                        "font-size":
                                                                          "14px",
                                                                      },
                                                                      "onUpdate:modelValue":
                                                                        e[4] ||
                                                                        (e[4] =
                                                                          (t) =>
                                                                            (o.quantity =
                                                                              t)),
                                                                      min: "1",
                                                                    },
                                                                    null,
                                                                    512
                                                                  ),
                                                                  [
                                                                    [
                                                                      a.nr,
                                                                      o.quantity,
                                                                    ],
                                                                  ]
                                                                ),
                                                                (0, s.Wm)(
                                                                  r,
                                                                  {
                                                                    onClick:
                                                                      e[5] ||
                                                                      (e[5] = (
                                                                        t
                                                                      ) =>
                                                                        o.quantity++),
                                                                    size: "22",
                                                                  },
                                                                  {
                                                                    default: (0,
                                                                    s.w5)(
                                                                      () => [
                                                                        (0,
                                                                        s.Uk)(
                                                                          "mdi-plus"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 1,
                                                                  }
                                                                ),
                                                              ]
                                                            ),
                                                            (0, s.Wm)(
                                                              g,
                                                              { class: "pl-0" },
                                                              {
                                                                default: (0,
                                                                s.w5)(() => [
                                                                  (0, s.Uk)(
                                                                    " Subtotal: $" +
                                                                      (0, n.zw)(
                                                                        Math.ceil(
                                                                          o
                                                                            .product
                                                                            .price -
                                                                            o
                                                                              .product
                                                                              .price *
                                                                              (o
                                                                                .product
                                                                                .discountPercentage /
                                                                                100)
                                                                        ) *
                                                                          o.quantity
                                                                      ),
                                                                    1
                                                                  ),
                                                                ]),
                                                                _: 1,
                                                              }
                                                            ),
                                                            (0, s.Wm)(
                                                              A,
                                                              {
                                                                class:
                                                                  "mt-2 w-100 px-0",
                                                              },
                                                              {
                                                                default: (0,
                                                                s.w5)(() => [
                                                                  (0, s.Wm)(
                                                                    f,
                                                                    {
                                                                      variant:
                                                                        "outlined",
                                                                      style: {
                                                                        "text-transform":
                                                                          "none",
                                                                        "border-radius":
                                                                          "30px",
                                                                        "background-color":
                                                                          "#333",
                                                                        color:
                                                                          "#fff",
                                                                      },
                                                                      class:
                                                                        "w-75",
                                                                      density:
                                                                        "compact",
                                                                      height:
                                                                        "50",
                                                                      onClick:
                                                                        e[6] ||
                                                                        (e[6] =
                                                                          (t) =>
                                                                            c.addToCart(
                                                                              o.product
                                                                            )),
                                                                      loading:
                                                                        o.btnLoading,
                                                                    },
                                                                    {
                                                                      default:
                                                                        (0,
                                                                        s.w5)(
                                                                          () => [
                                                                            (0,
                                                                            s.Uk)(
                                                                              "Add to Cart"
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      _: 1,
                                                                    },
                                                                    8,
                                                                    ["loading"]
                                                                  ),
                                                                ]),
                                                                _: 1,
                                                              }
                                                            ),
                                                          ]
                                                        ),
                                                        _: 1,
                                                      }
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }
                                              )),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"]
              ),
            ])
          );
        }
        var Kt = l(2744),
          Xt = {
            inject: ["Emitter"],
            data() {
              return {
                dialog: !1,
                loading: !1,
                quantity: 1,
                tab: "",
                product: "",
                btnLoading: !1,
                components: { VSkeletonLoader: Kt.Ih },
              };
            },
            methods: {
              ...(0, x.nv)(I, ["addItem"]),
              addToCart(t) {
                (t.quantity = this.quantity),
                  (this.btnLoading = !0),
                  setTimeout(() => {
                    (this.btnLoading = !1),
                      this.addItem(t),
                      this.Emitter.emit("openCart"),
                      this.Emitter.emit("showMsg", t.title),
                      (this.dialog = !1);
                  }, 1e3);
              },
            },
            mounted() {
              this.Emitter.on("openQuickView", (t) => {
                (this.loading = !0),
                  (this.product = t),
                  (this.dialog = !0),
                  setTimeout(() => {
                    this.loading = !1;
                  }, 1e3);
              });
            },
          };
        const $t = (0, z.Z)(Xt, [["render", Jt]]);
        var te = $t,
          ee = {
            inject: ["Emitter"],
            components: { AppLayout: Qt, QuickView: te },
            data() {
              return { bar: !1 };
            },
            mounted() {
              this.Emitter.on("showMsg", (t) => {
                (this.itemTitle = t), (this.bar = !0);
              });
            },
          };
        const le = (0, z.Z)(ee, [["render", i]]);
        var ae = le,
          se = l(2483),
          ne = l.p + "img/band-left-cover.0f5e42a0.webp",
          ie = l.p + "img/band-right-cover.eb471e34.webp",
          oe = l.p + "img/tv-banner.fd369ad6.webp";
        const ce = { class: "home" },
          re = (0, s._)(
            "img",
            { src: ne, class: "w-100 pr-5", alt: "" },
            null,
            -1
          ),
          pe = (0, s._)(
            "img",
            { src: ie, class: "w-100 pl-5", alt: "" },
            null,
            -1
          ),
          de = (0, s._)("img", { src: oe, class: "w-100", alt: "" }, null, -1);
        function ue(t, e, l, a, n, i) {
          const o = (0, s.up)("upper-banner"),
            c = (0, s.up)("the-features"),
            r = (0, s.up)("top-offers"),
            p = (0, s.up)("products-component"),
            d = (0, s.up)("top-categories"),
            u = (0, s.up)("new-products"),
            m = (0, s.up)("quality-features"),
            w = (0, s.up)("v-col"),
            h = (0, s.up)("v-row"),
            g = (0, s.up)("v-container"),
            f = (0, s.up)("why-shop");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", ce, [
              (0, s.Wm)(o),
              (0, s.Wm)(c),
              (0, s.Wm)(r),
              (0, s.Wm)(
                p,
                {
                  products: t.flashDeals,
                  title: "Flash Deals",
                  titleColor: "red",
                },
                null,
                8,
                ["products"]
              ),
              (0, s.Wm)(d),
              (0, s.Wm)(u, { products: t.newProducts }, null, 8, ["products"]),
              (0, s.Wm)(m),
              (0, s.Wm)(
                p,
                {
                  products: t.mobilePhones,
                  title: "Top Mobile Phones",
                  titleColor: "red",
                },
                null,
                8,
                ["products"]
              ),
              (0, s.Wm)(
                g,
                { fluid: "" },
                {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(h, null, {
                      default: (0, s.w5)(() => [
                        (0, s.Wm)(
                          w,
                          { cols: "6" },
                          { default: (0, s.w5)(() => [re]), _: 1 }
                        ),
                        (0, s.Wm)(
                          w,
                          { cols: "6" },
                          { default: (0, s.w5)(() => [pe]), _: 1 }
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }
              ),
              (0, s.Wm)(
                p,
                {
                  products: t.fragrances,
                  title: "Top Fragrances",
                  titleColor: "red",
                },
                null,
                8,
                ["products"]
              ),
              (0, s.Wm)(
                g,
                { fluid: "" },
                {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(h, null, {
                      default: (0, s.w5)(() => [
                        (0, s.Wm)(
                          w,
                          { cols: "12" },
                          { default: (0, s.w5)(() => [de]), _: 1 }
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }
              ),
              (0, s.Wm)(
                p,
                {
                  products: t.skincare,
                  title: "Top groceries",
                  titleColor: "red",
                },
                null,
                8,
                ["products"]
              ),
              (0, s.Wm)(f),
            ])
          );
        }
        const me = { class: "banner" },
          we = { class: "parent" },
          he = { class: "content" },
          ge = (0, s._)(
            "h3",
            null,
            [
              (0, s._)("span", null, "Huge Savings"),
              (0, s.Uk)(" on UHD Televisions"),
            ],
            -1
          ),
          fe = (0, s._)(
            "p",
            { class: "hint" },
            "Sale up 70% off on selected items *",
            -1
          );
        function Ae(t, e, l, a, n, i) {
          const o = (0, s.up)("v-btn"),
            c = (0, s.up)("v-col"),
            r = (0, s.up)("v-row"),
            p = (0, s.up)("v-container");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", me, [
              (0, s._)("div", we, [
                (0, s.Wm)(p, null, {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(r, null, {
                      default: (0, s.w5)(() => [
                        (0, s.Wm)(
                          c,
                          { cols: "6" },
                          {
                            default: (0, s.w5)(() => [
                              (0, s._)("div", he, [
                                ge,
                                fe,
                                (0, s.Wm)(
                                  o,
                                  {
                                    density: "compact",
                                    height: "45",
                                    width: "170",
                                    variant: "outlined",
                                    class: "shop-btn",
                                  },
                                  {
                                    default: (0, s.w5)(() => [
                                      (0, s.Uk)("Shop Now"),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
              ]),
            ])
          );
        }
        var ve = {};
        const ye = (0, z.Z)(ve, [["render", Ae]]);
        var xe = ye;
        const be = (t) => (
            (0, s.dD)("data-v-53feac9c"), (t = t()), (0, s.Cn)(), t
          ),
          ke = { class: "features" },
          We = { class: "parent d-flex align-center justify-center" },
          ze = {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "shipping-fast",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 640 512",
            class: "svg-inline--fa fa-shipping-fast fa-w-20 fa-3x mr-5",
            style: { width: "40px" },
          },
          Ce = be(() =>
            (0, s._)(
              "path",
              {
                fill: "currentColor",
                d: "M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z",
                class: "",
              },
              null,
              -1
            )
          ),
          _e = [Ce],
          Me = be(() => (0, s._)("span", null, "Free Shipping & Returns ", -1)),
          De = { class: "parent d-flex align-center justify-center second" },
          Ue = {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "award",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512",
            class: "svg-inline--fa fa-award fa-w-12 fa-3x mr-5",
            style: { width: "30px" },
          },
          Ve = be(() =>
            (0, s._)(
              "path",
              {
                fill: "currentColor",
                d: "M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z",
                class: "",
              },
              null,
              -1
            )
          ),
          He = [Ve],
          je = be(() => (0, s._)("span", null, "Lowest Price Guarantee ", -1)),
          Be = { class: "parent d-flex align-center justify-center" },
          Se = {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "trophy-alt",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 576 512",
            class: "svg-inline--fa fa-trophy-alt fa-w-18 fa-3x mr-5",
            style: { width: "40px" },
          },
          Fe = be(() =>
            (0, s._)(
              "path",
              {
                fill: "currentColor",
                d: "M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 66.5 77.9 131.7 171.9 142.4C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6C498.4 275.6 576 210.3 576 144V88c0-13.3-10.7-24-24-24zM64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-47.5-16.4-77-49.9-77-70.2zm448 0c0 20.2-29.4 53.8-77 70.2 7-25 11.8-53.6 12.8-86.2H512v16zm-127.3 4.7l-39.6 38.6 9.4 54.6c1.7 9.8-8.7 17.2-17.4 12.6l-49-25.8-49 25.8c-8.8 4.6-19.1-2.9-17.4-12.6l9.4-54.6-39.6-38.6c-7.1-6.9-3.2-19 6.7-20.5l54.8-8 24.5-49.6c4.4-8.9 17.1-8.9 21.5 0l24.5 49.6 54.8 8c9.6 1.5 13.5 13.6 6.4 20.5z",
                class: "",
              },
              null,
              -1
            )
          ),
          Ee = [Fe],
          Ie = be(() => (0, s._)("span", null, "Longest Warranties Offer", -1));
        function Ze(t, e, l, a, n, i) {
          const o = (0, s.up)("v-col"),
            c = (0, s.up)("v-row"),
            r = (0, s.up)("v-container");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", ke, [
              (0, s.Wm)(r, null, {
                default: (0, s.w5)(() => [
                  (0, s.Wm)(c, null, {
                    default: (0, s.w5)(() => [
                      (0, s.Wm)(o, null, {
                        default: (0, s.w5)(() => [
                          (0, s._)("div", We, [
                            ((0, s.wg)(), (0, s.iD)("svg", ze, _e)),
                            Me,
                          ]),
                        ]),
                        _: 1,
                      }),
                      (0, s.Wm)(o, null, {
                        default: (0, s.w5)(() => [
                          (0, s._)("div", De, [
                            ((0, s.wg)(), (0, s.iD)("svg", Ue, He)),
                            je,
                          ]),
                        ]),
                        _: 1,
                      }),
                      (0, s.Wm)(o, null, {
                        default: (0, s.w5)(() => [
                          (0, s._)("div", Be, [
                            ((0, s.wg)(), (0, s.iD)("svg", Se, Ee)),
                            Ie,
                          ]),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }),
            ])
          );
        }
        var Le = {};
        const Pe = (0, z.Z)(Le, [
          ["render", Ze],
          ["__scopeId", "data-v-53feac9c"],
        ]);
        var Qe = Pe,
          Re = l.p + "img/playstations.4d0f61f7.webp",
          Ge = l.p + "img/headset.32bef95b.webp",
          Ne = l.p + "img/chairs.75a398b5.webp",
          Te = l.p + "img/iphones.70f70e6c.webp",
          Ye = l.p + "img/laptops.6291e06e.webp";
        const qe = {
            class: "top-offers py-9",
            style: { "background-color": "#f5f5f5" },
          },
          Oe = (0, s._)(
            "div",
            { class: "parent" },
            [
              (0, s._)("img", {
                src: Re,
                style: { width: "100%", height: "100%" },
                alt: "",
              }),
            ],
            -1
          ),
          Je = (0, s._)(
            "div",
            { class: "parent" },
            [
              (0, s._)("img", {
                src: Ge,
                style: { width: "100%", height: "100%" },
                alt: "",
              }),
            ],
            -1
          ),
          Ke = (0, s._)(
            "div",
            { class: "parent" },
            [
              (0, s._)("img", {
                src: Ne,
                style: { width: "100%", height: "100%" },
                alt: "",
              }),
            ],
            -1
          ),
          Xe = (0, s._)(
            "div",
            { class: "parent" },
            [
              (0, s._)("img", {
                src: Te,
                style: { width: "100%", height: "100%" },
                alt: "",
              }),
            ],
            -1
          ),
          $e = (0, s._)(
            "div",
            { class: "parent" },
            [
              (0, s._)("img", {
                src: Ye,
                style: { width: "100%", height: "100%" },
                alt: "",
              }),
            ],
            -1
          );
        function tl(t, e, l, a, n, i) {
          const o = (0, s.up)("v-col"),
            c = (0, s.up)("v-row"),
            r = (0, s.up)("v-container");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", qe, [
              (0, s.Wm)(
                r,
                { fluid: "" },
                {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(c, null, {
                      default: (0, s.w5)(() => [
                        (0, s.Wm)(
                          o,
                          {
                            cols: "4",
                            class: "py-0 pr-6",
                            style: { height: "260px" },
                          },
                          { default: (0, s.w5)(() => [Oe]), _: 1 }
                        ),
                        (0, s.Wm)(
                          o,
                          {
                            cols: "4",
                            class: "py-0 pr-6",
                            style: { height: "260px" },
                          },
                          { default: (0, s.w5)(() => [Je]), _: 1 }
                        ),
                        (0, s.Wm)(
                          o,
                          {
                            cols: "4",
                            class: "py-0 pr-6",
                            style: { height: "260px" },
                          },
                          { default: (0, s.w5)(() => [Ke]), _: 1 }
                        ),
                      ]),
                      _: 1,
                    }),
                    (0, s.Wm)(
                      c,
                      { class: "mt-9" },
                      {
                        default: (0, s.w5)(() => [
                          (0, s.Wm)(
                            o,
                            { cols: "6", class: "mt-5 pr-6 py-0" },
                            { default: (0, s.w5)(() => [Xe]), _: 1 }
                          ),
                          (0, s.Wm)(
                            o,
                            { cols: "6", class: "mt-5 pr-6 py-0" },
                            { default: (0, s.w5)(() => [$e]), _: 1 }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
        var el = {};
        const ll = (0, z.Z)(el, [["render", tl]]);
        var al = ll;
        const sl = { class: "products-swiper pt-16 pb-5" },
          nl = {
            class: "title mb-10 px-5 d-flex align-center justify-space-between",
          },
          il = (0, s._)(
            "a",
            { href: "#", class: "text-black", style: { "font-size": "14px" } },
            "Shop All",
            -1
          ),
          ol = {
            class: "img-parent",
            style: {
              height: "200px",
              overflow: "hidden",
              position: "relative",
            },
          },
          cl = ["src"],
          rl = {
            style: {
              color: "#e10600",
              "font-weight": "900",
              "font-size": "16px",
            },
          },
          pl = ["src"],
          dl = { class: "mt-5" },
          ul = (0, s._)("div", { class: "swiper-prev" }, null, -1),
          ml = (0, s._)("div", { class: "swiper-next" }, null, -1),
          wl = (0, s._)("div", { class: "swiper-pagination" }, null, -1);
        function hl(t, e, l, a, i, o) {
          const c = (0, s.up)("v-skeleton-loader"),
            r = (0, s.up)("v-col"),
            p = (0, s.up)("v-row"),
            d = (0, s.up)("v-container"),
            u = (0, s.up)("v-btn"),
            m = (0, s.up)("v-hover"),
            w = (0, s.up)("v-card-text"),
            h = (0, s.up)("v-rating"),
            g = (0, s.up)("v-btn-toggle"),
            f = (0, s.up)("v-card"),
            A = (0, s.up)("swiper-slide"),
            v = (0, s.up)("Swiper");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", sl, [
              (0, s._)("div", nl, [
                (0, s._)(
                  "h2",
                  {
                    style: {
                      "font-weight": "bold",
                      "font-size": "30px",
                      "letter-spacing": "-0.02em",
                    },
                    class: (0, n.C_)([`text-${l.titleColor}`]),
                  },
                  (0, n.zw)(l.title),
                  3
                ),
                il,
              ]),
              l.products.length
                ? (0, s.kq)("", !0)
                : ((0, s.wg)(),
                  (0, s.j4)(
                    d,
                    { key: 0, fluid: "" },
                    {
                      default: (0, s.w5)(() => [
                        (0, s.Wm)(p, null, {
                          default: (0, s.w5)(() => [
                            (0, s.Wm)(
                              r,
                              { cols: "12", class: "pt-15" },
                              {
                                default: (0, s.w5)(() => [
                                  (0, s.Wm)(p, null, {
                                    default: (0, s.w5)(() => [
                                      ((0, s.wg)(),
                                      (0, s.iD)(
                                        s.HY,
                                        null,
                                        (0, s.Ko)(4, (t) =>
                                          (0, s.Wm)(
                                            r,
                                            { cols: "3", key: t },
                                            {
                                              default: (0, s.w5)(() => [
                                                (0, s.Wm)(c, {
                                                  type: "image,article,button",
                                                }),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          )
                                        ),
                                        64
                                      )),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }
                  )),
              (0, s.Wm)(
                v,
                {
                  pagination: { el: ".swiper-pagination", clickable: !0 },
                  modules: a.modules,
                  "slides-per-view": 4,
                  "space-between": 35,
                  class: "pb-10 px-5",
                  navigation: {
                    prevIcon: ".swiper-prev",
                    nextIcon: " .swiper-next",
                  },
                  autoplay: { delay: 3e3 },
                },
                {
                  default: (0, s.w5)(() => [
                    ((0, s.wg)(!0),
                    (0, s.iD)(
                      s.HY,
                      null,
                      (0, s.Ko)(
                        l.products,
                        (e) => (
                          (0, s.wg)(),
                          (0, s.j4)(
                            A,
                            { key: e.id },
                            {
                              default: (0, s.w5)(() => [
                                (0, s.Wm)(
                                  f,
                                  { elevation: "0", class: "pb-5" },
                                  {
                                    default: (0, s.w5)(() => [
                                      (0, s.Wm)(
                                        m,
                                        null,
                                        {
                                          default: (0, s.w5)(
                                            ({ isHovering: t, props: l }) => [
                                              (0, s._)("div", ol, [
                                                (0, s._)(
                                                  "img",
                                                  (0, s.dG)(
                                                    {
                                                      src: i.showenItem[e.title]
                                                        ? i.showenItem[e.title]
                                                        : e.thumbnail,
                                                      class: "w-100",
                                                      style: `height: 100%; transition: 0.5s all ease-in-out; scale:${
                                                        t ? 1.05 : 1
                                                      }; cursor: pointer;`,
                                                      alt: "",
                                                    },
                                                    l
                                                  ),
                                                  null,
                                                  16,
                                                  cl
                                                ),
                                                (0, s.Wm)(
                                                  u,
                                                  {
                                                    density: "compact",
                                                    width: "60",
                                                    height: "30",
                                                    variant: "outlined",
                                                    class: "quick-view-btn",
                                                    style: {
                                                      "background-color":
                                                        "#fff",
                                                      "text-transform": "none",
                                                      position: "absolute",
                                                      left: "50%",
                                                      top: "50%",
                                                      transform:
                                                        "translate(-50%, -50%)",
                                                      "border-radius": "30px",
                                                      "font-size": "12px",
                                                      transition:
                                                        "all 0.2s ease-in-out",
                                                      opacity: "0",
                                                    },
                                                    onClick: (t) =>
                                                      o.openQuickView(e),
                                                  },
                                                  {
                                                    default: (0, s.w5)(() => [
                                                      (0, s.Uk)(" Quick View "),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  ["onClick"]
                                                ),
                                              ]),
                                            ]
                                          ),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                      (0, s.Wm)(
                                        w,
                                        { class: "pl-0 pb-1" },
                                        {
                                          default: (0, s.w5)(() => [
                                            (0, s.Uk)(
                                              " (" +
                                                (0, n.zw)(e.title) +
                                                ") " +
                                                (0, n.zw)(
                                                  `(${e.title}) ${e.description}`
                                                    .length <= 50
                                                    ? `(${e.title}) ${e.description}`
                                                    : `(${e.title}) ${e.description}`.substring(
                                                        0,
                                                        50
                                                      ) + " ..."
                                                ),
                                              1
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                      (0, s.Wm)(
                                        h,
                                        {
                                          modelValue: e.rating,
                                          "onUpdate:modelValue": (t) =>
                                            (e.rating = t),
                                          "half-increments": "true",
                                          readonly: "true",
                                          color: "#FFC50F",
                                          size: "small",
                                          density: "compact",
                                        },
                                        null,
                                        8,
                                        ["modelValue", "onUpdate:modelValue"]
                                      ),
                                      (0, s.Wm)(
                                        w,
                                        { class: "pl-0 pt-0" },
                                        {
                                          default: (0, s.w5)(() => [
                                            (0, s._)(
                                              "del",
                                              null,
                                              "$" + (0, n.zw)(e.price),
                                              1
                                            ),
                                            (0, s.Uk)(" From "),
                                            (0, s._)(
                                              "span",
                                              rl,
                                              "$" +
                                                (0, n.zw)(
                                                  Math.ceil(
                                                    e.price -
                                                      e.price *
                                                        (e.discountPercentage /
                                                          100)
                                                  )
                                                ),
                                              1
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                      (0, s.Wm)(
                                        g,
                                        {
                                          modelValue: i.showenItem[e.title],
                                          "onUpdate:modelValue": (t) =>
                                            (i.showenItem[e.title] = t),
                                        },
                                        {
                                          default: (0, s.w5)(() => [
                                            ((0, s.wg)(!0),
                                            (0, s.iD)(
                                              s.HY,
                                              null,
                                              (0, s.Ko)(
                                                e.images,
                                                (t, e) => (
                                                  (0, s.wg)(),
                                                  (0, s.j4)(
                                                    u,
                                                    {
                                                      value: t,
                                                      key: e,
                                                      size: "x-small",
                                                      rounded: "xl",
                                                      ripple: !1,
                                                    },
                                                    {
                                                      default: (0, s.w5)(() => [
                                                        (0, s._)(
                                                          "img",
                                                          {
                                                            src: t,
                                                            alt: "",
                                                            width: "30px",
                                                            height: "30px",
                                                            style: {
                                                              "border-radius":
                                                                "50%",
                                                              border:
                                                                "1px solid #6e6e6e",
                                                            },
                                                          },
                                                          null,
                                                          8,
                                                          pl
                                                        ),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1032,
                                                    ["value"]
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["modelValue", "onUpdate:modelValue"]
                                      ),
                                      (0, s._)("div", dl, [
                                        (0, s.Wm)(
                                          u,
                                          {
                                            density: "compact",
                                            class: "py-2 px-12",
                                            style: {
                                              "text-transform": "none",
                                              "border-radius": "30px",
                                            },
                                            variant: "outlined",
                                            onClick: (l) =>
                                              t.$router.push({
                                                name: "product_details",
                                                params: { productId: e.id },
                                              }),
                                          },
                                          {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)("Choose Options"),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["onClick"]
                                        ),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ),
                              ]),
                              _: 2,
                            },
                            1024
                          )
                        )
                      ),
                      128
                    )),
                    ul,
                    ml,
                    wl,
                  ]),
                  _: 1,
                },
                8,
                ["pagination", "modules", "navigation"]
              ),
            ])
          );
        }
        var gl = l(957),
          fl = l(5890),
          Al = {
            inject: ["Emitter"],
            props: {
              products: { type: Array },
              title: { type: String },
              titleColor: { type: String },
            },
            setup() {
              return { modules: [fl.tl, fl.W_, fl.pt] };
            },
            components: {
              Swiper: gl.tq,
              SwiperSlide: gl.o5,
              VSkeletonLoader: Kt.Ih,
            },
            data() {
              return { showenItem: {} };
            },
            methods: {
              openQuickView(t) {
                this.Emitter.emit("openQuickView", t);
              },
            },
          };
        const vl = (0, z.Z)(Al, [["render", hl]]);
        var yl = vl,
          xl = l.p + "img/cyber-banner.360a22bf.webp";
        const bl = { class: "top-cat" },
          kl = (0, s._)(
            "div",
            { class: "cyber-banner" },
            [(0, s._)("img", { src: xl, class: "w-100", alt: "" })],
            -1
          ),
          Wl = { class: "categories pt-10" },
          zl = (0, s._)(
            "div",
            { class: "title d-flex justify-center align-center px-5 mb-5" },
            [
              (0, s._)(
                "h3",
                {
                  class: "text-center flex-grow-1",
                  style: { "font-weight": "bold", "font-size": "20px" },
                },
                " Top Categories "
              ),
              (0, s._)("a", { href: "#", class: "text-black" }, "Shop All"),
            ],
            -1
          ),
          Cl = {
            class: "img-parent",
            style: {
              overflow: "hidden",
              width: "100%",
              height: "175px",
              "border-radius": "50%",
            },
          },
          _l = ["src"];
        function Ml(t, e, l, a, i, o) {
          const c = (0, s.up)("v-hover"),
            r = (0, s.up)("v-card-text"),
            p = (0, s.up)("v-card"),
            d = (0, s.up)("v-col"),
            u = (0, s.up)("v-row"),
            m = (0, s.up)("v-container");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", bl, [
              kl,
              (0, s._)("div", Wl, [
                zl,
                (0, s.Wm)(m, null, {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(u, null, {
                      default: (0, s.w5)(() => [
                        ((0, s.wg)(!0),
                        (0, s.iD)(
                          s.HY,
                          null,
                          (0, s.Ko)(
                            i.categories,
                            (t) => (
                              (0, s.wg)(),
                              (0, s.j4)(
                                d,
                                { cols: "2", key: t.title },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Wm)(
                                      p,
                                      {
                                        class: "text-center py-3 px-1",
                                        elevation: "0",
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Wm)(
                                            c,
                                            null,
                                            {
                                              default: (0, s.w5)(
                                                ({
                                                  isHovering: e,
                                                  props: l,
                                                }) => [
                                                  (0, s._)("div", Cl, [
                                                    (0, s._)(
                                                      "img",
                                                      (0, s.dG)(
                                                        {
                                                          src: t.image,
                                                          alt: "",
                                                        },
                                                        l,
                                                        {
                                                          style: `cursor: pointer;height:100%;width:100%;transition: all 0.5s ease-in-out;scale: ${
                                                            e ? 1.05 : 1
                                                          };`,
                                                        }
                                                      ),
                                                      null,
                                                      16,
                                                      _l
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                          (0, s.Wm)(
                                            r,
                                            null,
                                            {
                                              default: (0, s.w5)(() => [
                                                (0, s.Uk)(
                                                  (0, n.zw)(t.title),
                                                  1
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1024
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
              ]),
            ])
          );
        }
        var Dl = {
          data() {
            return {
              categories: [
                {
                  title: "Mobile Phones",
                  image:
                    "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
                },
                {
                  title: "Labtops",
                  image:
                    "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
                },
                {
                  title: "TVs",
                  image:
                    "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
                },
                {
                  title: "PCs",
                  image:
                    "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
                },
                {
                  title: "Audio & Video",
                  image:
                    "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
                },
                {
                  title: "Gaming",
                  image:
                    "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
                },
                {
                  title: "Home Appliances",
                  image:
                    "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
                },
                {
                  title: "Kitchen",
                  image:
                    "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
                },
                {
                  title: "Cameras",
                  image:
                    "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
                },
                {
                  title: "Consumables",
                  image:
                    "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
                },
                {
                  title: "Smart Homes",
                  image:
                    "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
                },
                {
                  title: "Accessories",
                  image:
                    "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
                },
              ],
            };
          },
        };
        const Ul = (0, z.Z)(Dl, [["render", Ml]]);
        var Vl = Ul,
          Hl = l.p + "img/vr-banner.9042bf27.webp";
        const jl = { class: "new-products pt-12" },
          Bl = (0, s._)(
            "div",
            { class: "title px-5 d-flex align-center justify-space-between" },
            [
              (0, s._)(
                "h2",
                {
                  style: {
                    "font-weight": "bold",
                    color: "#333",
                    "font-size": "30px",
                    "letter-spacing": "-0.02em",
                  },
                },
                " New Products "
              ),
              (0, s._)(
                "a",
                {
                  href: "#",
                  class: "text-black",
                  style: { "font-size": "14px" },
                },
                "Shop All"
              ),
            ],
            -1
          ),
          Sl = {
            class: "img-parent position-relative",
            style: { height: "180px", overflow: "hidden" },
          },
          Fl = ["src"],
          El = {
            style: {
              color: "#e10600",
              "font-weight": "900",
              "font-size": "16px",
            },
          },
          Il = ["src"],
          Zl = { class: "mt-5" },
          Ll = (0, s._)("div", { class: "swiper-prev" }, null, -1),
          Pl = (0, s._)("div", { class: "swiper-next" }, null, -1),
          Ql = (0, s._)("div", { class: "swiper-pagination" }, null, -1),
          Rl = (0, s._)("img", { src: Hl, class: "w-100", alt: "" }, null, -1);
        function Gl(t, e, l, a, i, o) {
          const c = (0, s.up)("v-skeleton-loader"),
            r = (0, s.up)("v-col"),
            p = (0, s.up)("v-row"),
            d = (0, s.up)("v-btn"),
            u = (0, s.up)("v-hover"),
            m = (0, s.up)("v-card-text"),
            w = (0, s.up)("v-rating"),
            h = (0, s.up)("v-btn-toggle"),
            g = (0, s.up)("v-card"),
            f = (0, s.up)("swiper-slide"),
            A = (0, s.up)("Swiper"),
            v = (0, s.up)("v-container");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", jl, [
              Bl,
              (0, s.Wm)(
                v,
                { fluid: "" },
                {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(p, null, {
                      default: (0, s.w5)(() => [
                        l.products.length
                          ? (0, s.kq)("", !0)
                          : ((0, s.wg)(),
                            (0, s.j4)(
                              r,
                              { key: 0, cols: "7", class: "pt-15" },
                              {
                                default: (0, s.w5)(() => [
                                  (0, s.Wm)(p, null, {
                                    default: (0, s.w5)(() => [
                                      ((0, s.wg)(),
                                      (0, s.iD)(
                                        s.HY,
                                        null,
                                        (0, s.Ko)(3, (t) =>
                                          (0, s.Wm)(
                                            r,
                                            { cols: "4", key: t },
                                            {
                                              default: (0, s.w5)(() => [
                                                (0, s.Wm)(c, {
                                                  type: "image,article,button",
                                                }),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          )
                                        ),
                                        64
                                      )),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }
                            )),
                        (0, s.Wm)(
                          r,
                          { cols: "7", class: "pt-15" },
                          {
                            default: (0, s.w5)(() => [
                              (0, s.Wm)(
                                A,
                                {
                                  pagination: {
                                    el: ".swiper-pagination",
                                    clickable: !0,
                                  },
                                  modules: a.modules,
                                  "slides-per-view": 3,
                                  "space-between": 20,
                                  class: "pb-9 px-5",
                                  autoplay: { delay: 3e3 },
                                },
                                {
                                  default: (0, s.w5)(() => [
                                    ((0, s.wg)(!0),
                                    (0, s.iD)(
                                      s.HY,
                                      null,
                                      (0, s.Ko)(
                                        l.products,
                                        (e) => (
                                          (0, s.wg)(),
                                          (0, s.j4)(
                                            f,
                                            { key: e.id },
                                            {
                                              default: (0, s.w5)(() => [
                                                (0, s.Wm)(
                                                  g,
                                                  {
                                                    elevation: "0",
                                                    class: "pb-5",
                                                  },
                                                  {
                                                    default: (0, s.w5)(() => [
                                                      (0, s.Wm)(
                                                        u,
                                                        null,
                                                        {
                                                          default: (0, s.w5)(
                                                            ({
                                                              isHovering: t,
                                                              props: l,
                                                            }) => [
                                                              (0, s._)(
                                                                "div",
                                                                Sl,
                                                                [
                                                                  (0, s._)(
                                                                    "img",
                                                                    (0, s.dG)(
                                                                      {
                                                                        src: i
                                                                          .showenItem[
                                                                          e
                                                                            .title
                                                                        ]
                                                                          ? i
                                                                              .showenItem[
                                                                              e
                                                                                .title
                                                                            ]
                                                                          : e.thumbnail,
                                                                        class:
                                                                          "w-100",
                                                                        style: `height: 100%; transition: 0.5s all ease-in-out; scale:${
                                                                          t
                                                                            ? 1.05
                                                                            : 1
                                                                        }; cursor: pointer;`,
                                                                        alt: "",
                                                                      },
                                                                      l
                                                                    ),
                                                                    null,
                                                                    16,
                                                                    Fl
                                                                  ),
                                                                  (0, s.Wm)(
                                                                    d,
                                                                    {
                                                                      density:
                                                                        "compact",
                                                                      width:
                                                                        "90",
                                                                      height:
                                                                        "30",
                                                                      variant:
                                                                        "outlined",
                                                                      class:
                                                                        "quick-view-btn",
                                                                      style: {
                                                                        "background-color":
                                                                          "#fff",
                                                                        "text-transform":
                                                                          "none",
                                                                        position:
                                                                          "absolute",
                                                                        left: "50%",
                                                                        top: "50%",
                                                                        transform:
                                                                          "translate(-50%, -50%)",
                                                                        "border-radius":
                                                                          "30px",
                                                                        "font-size":
                                                                          "12px",
                                                                        transition:
                                                                          "all 0.2s ease-in-out",
                                                                        opacity:
                                                                          "0",
                                                                      },
                                                                      onClick: (
                                                                        t
                                                                      ) =>
                                                                        o.openQuickView(
                                                                          e
                                                                        ),
                                                                    },
                                                                    {
                                                                      default:
                                                                        (0,
                                                                        s.w5)(
                                                                          () => [
                                                                            (0,
                                                                            s.Uk)(
                                                                              " Quick View "
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      _: 2,
                                                                    },
                                                                    1032,
                                                                    ["onClick"]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                          _: 2,
                                                        },
                                                        1024
                                                      ),
                                                      (0, s.Wm)(
                                                        m,
                                                        { class: "pl-0 pb-1" },
                                                        {
                                                          default: (0, s.w5)(
                                                            () => [
                                                              (0, s.Wm)(
                                                                m,
                                                                {
                                                                  class:
                                                                    "pl-0 pb-1",
                                                                },
                                                                {
                                                                  default: (0,
                                                                  s.w5)(() => [
                                                                    (0, s.Uk)(
                                                                      " (" +
                                                                        (0,
                                                                        n.zw)(
                                                                          e.title
                                                                        ) +
                                                                        ") " +
                                                                        (0,
                                                                        n.zw)(
                                                                          `(${e.title}) ${e.description}`
                                                                            .length <=
                                                                            20
                                                                            ? `(${e.title}) ${e.description}`
                                                                            : `(${e.title}) ${e.description}`.substring(
                                                                                0,
                                                                                20
                                                                              ) +
                                                                                " ..."
                                                                        ),
                                                                      1
                                                                    ),
                                                                  ]),
                                                                  _: 2,
                                                                },
                                                                1024
                                                              ),
                                                            ]
                                                          ),
                                                          _: 2,
                                                        },
                                                        1024
                                                      ),
                                                      (0, s.Wm)(
                                                        w,
                                                        {
                                                          modelValue: e.rating,
                                                          "onUpdate:modelValue":
                                                            (t) =>
                                                              (e.rating = t),
                                                          "half-increments":
                                                            "true",
                                                          readonly: "true",
                                                          color: "#FFC50F",
                                                          size: "small",
                                                          density: "compact",
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                          "modelValue",
                                                          "onUpdate:modelValue",
                                                        ]
                                                      ),
                                                      (0, s.Wm)(
                                                        m,
                                                        { class: "pl-0 pt-0" },
                                                        {
                                                          default: (0, s.w5)(
                                                            () => [
                                                              (0, s._)(
                                                                "del",
                                                                null,
                                                                "$" +
                                                                  (0, n.zw)(
                                                                    e.price
                                                                  ),
                                                                1
                                                              ),
                                                              (0, s.Uk)(
                                                                " From "
                                                              ),
                                                              (0, s._)(
                                                                "span",
                                                                El,
                                                                "$" +
                                                                  (0, n.zw)(
                                                                    Math.ceil(
                                                                      e.price -
                                                                        e.price *
                                                                          (e.discountPercentage /
                                                                            100)
                                                                    )
                                                                  ),
                                                                1
                                                              ),
                                                            ]
                                                          ),
                                                          _: 2,
                                                        },
                                                        1024
                                                      ),
                                                      (0, s.Wm)(
                                                        h,
                                                        {
                                                          modelValue:
                                                            i.showenItem[
                                                              e.title
                                                            ],
                                                          "onUpdate:modelValue":
                                                            (t) =>
                                                              (i.showenItem[
                                                                e.title
                                                              ] = t),
                                                        },
                                                        {
                                                          default: (0, s.w5)(
                                                            () => [
                                                              ((0, s.wg)(!0),
                                                              (0, s.iD)(
                                                                s.HY,
                                                                null,
                                                                (0, s.Ko)(
                                                                  e.images,
                                                                  (t, e) => (
                                                                    (0, s.wg)(),
                                                                    (0, s.j4)(
                                                                      d,
                                                                      {
                                                                        value:
                                                                          t,
                                                                        key: e,
                                                                        size: "x-small",
                                                                        rounded:
                                                                          "xl",
                                                                        ripple:
                                                                          !1,
                                                                      },
                                                                      {
                                                                        default:
                                                                          (0,
                                                                          s.w5)(
                                                                            () => [
                                                                              (0,
                                                                              s._)(
                                                                                "img",
                                                                                {
                                                                                  src: t,
                                                                                  alt: "",
                                                                                  width:
                                                                                    "30px",
                                                                                  height:
                                                                                    "30px",
                                                                                  style:
                                                                                    {
                                                                                      "border-radius":
                                                                                        "50%",
                                                                                      border:
                                                                                        "1px solid #6e6e6e",
                                                                                    },
                                                                                },
                                                                                null,
                                                                                8,
                                                                                Il
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        _: 2,
                                                                      },
                                                                      1032,
                                                                      ["value"]
                                                                    )
                                                                  )
                                                                ),
                                                                128
                                                              )),
                                                            ]
                                                          ),
                                                          _: 2,
                                                        },
                                                        1032,
                                                        [
                                                          "modelValue",
                                                          "onUpdate:modelValue",
                                                        ]
                                                      ),
                                                      (0, s._)("div", Zl, [
                                                        (0, s.Wm)(
                                                          d,
                                                          {
                                                            density: "compact",
                                                            class: "py-2 px-12",
                                                            style: {
                                                              "text-transform":
                                                                "none",
                                                              "border-radius":
                                                                "30px",
                                                            },
                                                            variant: "outlined",
                                                            onClick: (l) =>
                                                              t.$router.push({
                                                                name: "product_details",
                                                                params: {
                                                                  productId:
                                                                    e.id,
                                                                },
                                                              }),
                                                          },
                                                          {
                                                            default: (0, s.w5)(
                                                              () => [
                                                                (0, s.Uk)(
                                                                  "Choose Options"
                                                                ),
                                                              ]
                                                            ),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          ["onClick"]
                                                        ),
                                                      ]),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                    Ll,
                                    Pl,
                                    Ql,
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["pagination", "modules"]
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        (0, s.Wm)(
                          r,
                          { cols: "5" },
                          { default: (0, s.w5)(() => [Rl]), _: 1 }
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
        var Nl = {
          inject: ["Emitter"],
          methods: {
            openQuickView(t) {
              this.Emitter.emit("openQuickView", t);
            },
          },
          props: { products: { type: Array } },
          setup() {
            return { modules: [fl.tl, fl.pt] };
          },
          components: {
            Swiper: gl.tq,
            SwiperSlide: gl.o5,
            VSkeletonLoader: Kt.Ih,
          },
          data() {
            return { showenItem: {} };
          },
        };
        const Tl = (0, z.Z)(Nl, [["render", Gl]]);
        var Yl = Tl;
        const ql = {
            class: "quality-features py-13",
            style: { "background-color": "#f5f5f5" },
          },
          Ol = ["innerHTML"];
        function Jl(t, e, l, a, i, o) {
          const c = (0, s.up)("v-card-title"),
            r = (0, s.up)("v-card-text"),
            p = (0, s.up)("v-card-item"),
            d = (0, s.up)("v-card"),
            u = (0, s.up)("v-hover"),
            m = (0, s.up)("v-col"),
            w = (0, s.up)("v-row"),
            h = (0, s.up)("v-container");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", ql, [
              (0, s.Wm)(
                h,
                { fluid: "" },
                {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(w, null, {
                      default: (0, s.w5)(() => [
                        ((0, s.wg)(!0),
                        (0, s.iD)(
                          s.HY,
                          null,
                          (0, s.Ko)(
                            i.cards,
                            (t) => (
                              (0, s.wg)(),
                              (0, s.j4)(
                                m,
                                {
                                  class: "px-2",
                                  key: t.title,
                                  sm: "12",
                                  md: "4",
                                  lg: "3",
                                },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Wm)(
                                      u,
                                      null,
                                      {
                                        default: (0, s.w5)(
                                          ({ isHovering: e, props: l }) => [
                                            (0, s.Wm)(
                                              d,
                                              (0, s.dG)(l, {
                                                class: "text-center px-2",
                                                height: "300",
                                                elevation: e ? 2 : 0,
                                              }),
                                              {
                                                default: (0, s.w5)(() => [
                                                  (0, s.Wm)(
                                                    p,
                                                    {
                                                      style: {
                                                        margin: "50px auto",
                                                      },
                                                    },
                                                    {
                                                      default: (0, s.w5)(() => [
                                                        (0, s._)(
                                                          "span",
                                                          { innerHTML: t.svg },
                                                          null,
                                                          8,
                                                          Ol
                                                        ),
                                                        (0, s.Wm)(
                                                          c,
                                                          {
                                                            style: {
                                                              "font-weight":
                                                                "700",
                                                              "text-transform":
                                                                "uppercase",
                                                              "font-size":
                                                                "16px",
                                                            },
                                                          },
                                                          {
                                                            default: (0, s.w5)(
                                                              () => [
                                                                (0, s.Uk)(
                                                                  (0, n.zw)(
                                                                    t.title
                                                                  ),
                                                                  1
                                                                ),
                                                              ]
                                                            ),
                                                            _: 2,
                                                          },
                                                          1024
                                                        ),
                                                        (0, s.Wm)(
                                                          r,
                                                          null,
                                                          {
                                                            default: (0, s.w5)(
                                                              () => [
                                                                (0, s.Uk)(
                                                                  (0, n.zw)(
                                                                    t.desc
                                                                  ),
                                                                  1
                                                                ),
                                                              ]
                                                            ),
                                                            _: 2,
                                                          },
                                                          1024
                                                        ),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1040,
                                              ["elevation"]
                                            ),
                                          ]
                                        ),
                                        _: 2,
                                      },
                                      1024
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1024
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
        var Kl = {
          data() {
            return {
              cards: [
                {
                  svg: '<svg aria-hidden="true" style="width:60px" focusable="false" data-prefix="fas" data-icon="star-half-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 512" class="svg-inline--fa fa-star-half-alt fa-w-17 fa-3x"><defs>           <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%">                           <stop offset="0%" stop-color="#6423d1">                              </stop>              <stop offset="100%" stop-color="#a215e1">                              </stop>          </linearGradient>       </defs><path fill="url(\'#logo-gradient\')" d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z" class=""></path></svg>',
                  title: "Quality and Saving",
                  desc: "Comprehensive quality control and affordable prices",
                },
                {
                  svg: '<svg aria-hidden="true" style="width:60px" focusable="false" data-prefix="fas" data-icon="warehouse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-warehouse fa-w-20 fa-3x"><defs><linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stop-color="#6423d1">                              </stop><stop offset="100%" stop-color="#a215e1">                           </stop></linearGradient></defs><path fill="url(\'#logo-gradient\')" d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z" class=""></path></svg>',
                  title: "Global Warehouse",
                  desc: "27 Overseas Warehouses",
                },
                {
                  svg: '<svg aria-hidden="true" style="width:60px" focusable="false" data-prefix="fas" data-icon="shipping-fast" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-shipping-fast fa-w-20 fa-3x"><defs><linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stop-color="#6423d1">                              </stop><stop offset="100%" stop-color="#a215e1">                           </stop></linearGradient></defs><path fill="url(\'#logo-gradient\')" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" class=""></path></svg>',
                  title: "Fast Shipping",
                  desc: "Fast and convenient door to door delivery",
                },
                {
                  svg: '<svg aria-hidden="true" style="width:60px" focusable="false" data-prefix="fas" data-icon="shield-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-shield-alt fa-w-16 fa-3x"><defs><linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stop-color="#6423d1">                              </stop><stop offset="100%" stop-color="#a215e1">                           </stop></linearGradient></defs><path fill="url(\'#logo-gradient\')" d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z" class=""></path></svg>',
                  title: "Payment Security",
                  desc: "More than 10 different secure payment methods",
                },
                {
                  svg: '<svg aria-hidden="true" style="width:60px" focusable="false" data-prefix="fas" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-question-circle fa-w-16 fa-3x"><defs><linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stop-color="#6423d1">                              </stop><stop offset="100%" stop-color="#a215e1">                           </stop></linearGradient></defs><path fill="url(\'#logo-gradient\')" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z" class=""></path></svg>',
                  title: "Have Questions?",
                  desc: "24/7 customer service - We're here and happy to help",
                },
              ],
            };
          },
        };
        const Xl = (0, z.Z)(Kl, [["render", Jl]]);
        var $l = Xl,
          ta =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABNCAMAAADU1xmCAAAAY3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja40qtyEzjUgADEyMuE1NzCzNLMzMDIDCxNLE0SgQyLAwgwNDAwDgZSBoB2ZZQoUQDFADUm2JmaGbOZWZqbmRuaWwCEuQCABkVFErPDZC1AAABVlBMVEVHcEyzxtazxtazxtazxtY+m+tDpO+avdtrrub/1FpGo+62x9Kzx9azxtbLiQBCpO6zxtayxtazx9ZGpe9CpPDWlAD+zkazx9azxtazx9azx9byvDnKiAHutSUwetU/oPBBo/CzxtZCo+81ht4+nuw3kOLSw47tvT8xh9xWqeovedeyxtY3ftYve9cxgNkuetbwuCrv1IngqCjOwpE0j+FXjM3WnBvPpkbawnj50WrrsCCz//9CpPFCpPBCpO4qetOzxtYre9UuetUsetS0x9ZCpOwpfNNCo/D/0lUvedb/0VBCpPP/0E3+zkcvetb+zED+zUQtetX/1Fr/yjralwH/z0o+nerNigD/12TWlAHSjwA2juGzx9f/1V8ugdjemwIyh9w6lubhngLJhwCswtLlowj/6rL/+ObExrOCstn/3H3/9+ZZquzc0Kb3wDKz8ylHcEyz8v9SETwxAAAAcnRSTlMAkLnvFynnBAd5WjnNDXlzfV73wIl5Mk8tIdsQM3jyqEWm9w8aOP0ySJ3DaItwoNx4oxhc6eCa9ZJGcE////////////////////////////////////////////////////////////////////+5AJCDOd+QAAAGA0lEQVRYw6WY+V/aSBiHwXIt6nqx9dgu3lZb7b3nJwkTEkh1CwpqWg0GqPXq9f//uO+8c2QSopXsSwxh8s4z33fmnTdgKvUjK6ytb24+29xcXyuk/o8VssXFN716ve7VajUP3ntvFovZRMy14ozr+YCo+26Nmss+eM5McW1IVcWc5lI1AUzgQKmr5Yr3V7hachyHs+p1AQtwdc/RnNLq/XSVNEeTHev9WmB90ei7MF7pHvqWVmDgvin69Wqq9epyEM1xVpZ+JGzGUaNU48RYgxsedZy5U152xTEco1epmGYFLSwNxFX4Dbhl6Lqzkr0dVgSW7vTQGXuZTJpBDS9ccQdxDvgXb4NNUPEUZooufkgYBfp8GHr0dOo/EcvKTxgwmO5VAml1z+Acg9MMj82CiTwPInH0WNwExtOvqOZKUeJwuTbEVfqODn1icEsIc00eo0kV+DVDkcYufTEL1NN0sddApqxhs+GblgmHBQYnzxg0j9+jZ9PyWWNk4+ZzzBUcLFN692NofTNgwcEGzOVDtC3MArclXNn4bgzNDbTRixbz2VJh6zjDRg9GMwNn04gzk+kSbj3MRWM9FCduaqvVqloteoaXZfkOM1286/TSt6iLZVEP+t5HIUqsE2ztfAvvV8GzisPqAUlQYavQAWFEpr9l+SytZZoUKNwAadxa6F21PKkHMTq78JAm/ODcZ/lTkNLYjmYMFgI1T2Ac9cKTqloM28O8FluiwKtNtdpsVumLGj33eYQaHuJDvyoduK/L8puJKzKaVw1ZE2kafzEQYvsBhpvHdgmrJjlGEw5N6elyTRynsbOLrGazKeU1GSCHFZIHihQLCke9YrXQ0xVyNE0J1WWsphIwLw60cpZEoM1WUKfrFvi5yNCQxc/wcoOpwKMpQq2VgCZqdNOSZRD/gKbFmVsNFqq5C6fdXVHvZaBQVEUdEsXSysXScrsDJkp0Fp5SuPtmduRGNrEmmVb5phYDq938HoWV1zmD5shSTv96Q+ZXn/P0rmJqlrc/ffq0FZWX24LW4pMQbLswT26+6jlRM5dtYk+Pp9afy/kt76QKhJCRVHZR0/6FF9piNjVCiF1IZQPe9mpqfJp0yHJQQ8ag5wJUgdWdJ+Vy+fk2PiVpI7Tls8XS4sxiqZilH6BtDL+rbG4/e/JsB9sWaKNSL8cfENIZiRT3KZuQuUjbHLHJVKQN5JIH42pLhtgdOx32yoDXZKTnZIeQTLgpbdsDbaMgjjwNt013yIMIDWKYDrc8hX6d0ehDawqUkHBrmkQHzYC09KCKqcEHahoWtjMf8oS+syGf2eiI8x3olI572NPFD80my5Gwi22rX7Lo6pGR+C8iCzxPpPEcCTxEfsgesAIL+fjvSAN5MgVzoubIHKzeVFhqJDdCswB31VmO5sgk0DOhVeqEZzp15wpNk1COhPMjJgtS0ewBeaO35AiVmlZHJtEMHcgTogJoj9n4/MjQcdM/+FKeH+koM1uAwINlGYEVLNy1s2/JE1kR1BxR84NWHfu23FBpUK1IZ1mZ6TlZP4L8gIpIpsfv89NongSJQTfmpMwPOaP08q7ciO7GzuxAjgT5QR0iO/juPBEBBjmSkWs4R5dz8v6/T5dJx74e/RXs9fW3by//fgz218bGxmva9Pj6miiPgXvY2PUHtLOzz1dXV5ft9luwvb3vH6l1jzbG8sPQ8hscBrQvV5dvGWzv3QXSun8O+eP+pUL7cslYe+8ordvtHv0x5D8JfmKss/aHy8vLz1wZpx0d/ZKM1m7TKWsL2PEFVZaEdiZhUtlx4wJhw9MkrC1gx8fHjY8IO0lCE8r2OKzRaFxQViLaQJiNxsFHlJaAFgNjtJMEtFjYQZeyTk6T0FTYMWUBDWFJaDGw/S7CTn8emhbAcDUpC2mnSWiDc7YPdoS094lo4TAPkEZhiWiS1WCo/f3DI4QloSlJK2DJaXuqtH1OO6GsBLRB2CHYyfukNM6SsH1BOz8fnhZODVTGaOcJaAHsQCo7PDxF2NC0h2FlXNp3Bjt/NOz/ol895PbixYvfuP3ziNmr2zr9B7VRGsRQJcRkAAAAAElFTkSuQmCC",
          ea =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABNCAMAAADU1xmCAAAAYHpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjaVcjJDYAwDEXBu6ughBfH+YnLQSwSHVA+Yrkwx7HtPHabHuEWrQ+lBBAZ6TMweBWoCwUH8quZH6VWFXVT696zxp12ARkVFEqn8wB8AAAAe1BMVEVHcEz/wQf/wQf/wQf8vgf/wQf+vwf/wQf/wQf8vgf/wQf/wQfhpwz8vQjfpAz/wQf/wAf/PQDeLADfLQD/PgDwNQD8jgT/rgbYng3/RQDnMAD4OQD/uwf+nAX9gwTpSwHvZQPjOQD/WgL/bQLfnwv1dwTsrwrWnQzztgmMWaAAAAAAD3RSTlMA1vuYGbZGBlkpg3bg5cWeNOA7AAAF30lEQVRYw61YDUPqOgy9ojBAvelGt9F9fzDw///C1yRt1w5EeZeqMNw4TU5O0rR//vzDiP48cbw9FWz3RLDo5Zlg8D9Yi942rysAEACr181bNIO9P8zMHlFA6IF4+AN7ZmsFD1r1jkhklQajXwStjpePXfQpHgpBtBYMhCD0Cvx3ulwuJyE+H8UyJoHxlsE12PGoLz5+L7YtWBgh6mYclJJSqWFsarTsWAn4ulz+/lZI1rMqG1QsYxz8WvTd6VTpe4j6+RuJ7IgnPfJRaRTJWPRWJEnS53qaLyQP4OdIbJkgjSV9q3wwZq/S79sfwVgNjfJgQjAhpv50OZP87sO9syrywUKwo9KBIUR+SJIuZx/uwW1YDbVamCUNWE2B7vRlqWoK+x24HYkfMhnyhcalGuFQkzm1vix0XDJOuN23ZYFma5aE6cFgnButvixxhkZQsn0jlBfyI0OWnHV8gWBJxpY3+jJlizOa/uWbDMBg1tI5aWHZzYwlXfX62hhcZGTs9raf+k4eKEM6N5PGJC2FII7L1AkGbvm6JnEMnvTNKAnMZBuqo2AoHAPVmPUN0/Dp5kqzcam/n0wMJqBN/FHoSKB10bVp+vFcLSRrLJuEqbxZAKb5U6Tn9U11jB73nmUdmCqMISCYFulD/uKR2IyWKYUpI+Mg0aUBs4UcJsTou7oiWNKJzNGOxZJDoR59keHrDEae5odD22ARocgW/MxIN8PVCf9TqTCcksBaV8hFllX8ARWM+YBDVThZUNj3+HgWyzgotQRWgV0awKxbAmWSlHbSDOfa+2gUsOFGQWsrU4nB4GGBbx1p+DLQjYXYQKggAyyYERq5yuYxaY4Rhe6LyKdNz1l7KpMWzPgmZttEZkiTTIyMa/y/R9wGPzduSXHVMZ87BhsLCEijLzR4ZzOjveKDo/+EBcvrqWtb6yt+zZHGhumfEW++zmgrdGhwYJLAkq5rD6T83HYRTmnSoenfAb+98kMKGATyFF/SIB0nbpNIH440T0mKpgoyQYBytoVgrQkBLVc9k2anpQslrtBAaLt5Rgd2KMhPsK0NMGlyXnz4jThd2Oa7eSjStORYTLYjBM76gmuLrphFamgmHkI0K96yQBxyoSQ/hWsIayIt1TgUndTKd5EMRIwyMZKulh/YT5tbeR/wSZYhOYpsDxWCaSo9bq2fc362V2A8Ky4OsPLVC7N644WfNuunW2BxbCrcq59ZejRuReA39tP1qzV+7rspI9TUW40avO9l1ht+oXaV1+XWJGx3D0Lj0IqSJX5q4cBex8/6iMRu5Davoq0Arx8nZOHAXGVVVE+joFoChsGLAmog97p8Vi9kB3ZzbqMkrdAQVnIsXJ75qfXTFXEScOZzZhCxGRFBJSfiKrX00+Wnoc+4aWqHyflqUSxtNowuCIWpQ1ZqLBMLFnQXI1G6WJ2pZZFe8zeBY81UXj+aszKJ3PdbTc3IDhjdEvOVSy0OgJMkF16W7lVbsybjlEupHKq66do+qZfSCIbuavT3rlquiJzBjotayb7FFD9wR+NxFi9asobmum4HyThcHEo/HfuKpbu0zDRlA9mwvtGp8uZKkW7dqDnnDWdhY8F+ChDRNzss3UUXpohTN9r5GRB7aGxbfWd7xB1+oyt0WbLDfUUK8UXrt2Tckn9zkhGx7Ju5VvLux08n6RHXcN2L7u6MBO2MUuoDKZ1Mons9LNmXcebt7m7BeddW2ngGovUCanZtd7eoW86AfDB+Omn4bTo1bTm7eXeDGm25jp1PPfe7nmVyjqVqTAX9YfMcbdHXr+PlOFVzPQurhhxzs/Rvfz4l0I/hkcLZWRZSpsbc1qjdr04wznykAOdT13vppP1UQ1bZHvjll4dcf+kIRSDoMTxdMUur+GFHvzjcOn4JQLDL2XWVrgjT5/Ujp296SbRgc3sPrgleP3aS9yJ2uw+MxLzvmE+83h88FdxwuDZ7IebVgdu4/cMnqdEcezppZMzgpPERP5959rp56kHuM8H+5cD6PzqGB9yVx/TvAAAAAElFTkSuQmCC",
          la =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABNCAMAAADU1xmCAAAAY3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja40qtyEzjUgADEyMuE1NzCzNLMzMDIDCxNLE0SgQyLAwgwNDAwDgZSBoB2ZZQoUQDFADUm2JmaGbOZWZqbmRuaWwCEuQCABkVFErPDZC1AAAA1VBMVEVHcEwNdL87y/QkodwIXqoDbcIaktcHgtgjqOgTkt8Khdg8y/UMaLI8y/U8y/Q8y/QMZ7I7y/QLlN////8LiNsTlOATkt8cn+QXmeIbneMVl+EZm+IRkN4NitwJhdoiqOgeoeUfpOYgpucQj90HY7IOjdwlrOkEabsDbcMEa78Bdc87y/QGZrcJXKYHg9gFgNcKWaICb8YJYazy+f7I5/kNeMPF5Ped0fIPg8+Bxe4IVZlEp+Wq2PQ8y/Uupufj8vvm9Pwim9tlueskmM4vs+TU6fkikcczz5PbAAAAEnRSTlMAhSmtY2ISZGJkvu++mJguvi56bKTtAAAFgUlEQVRYw9WYa1caSRCGYxTRzebs7slwmQuXYQaHAURAxUXFRCT7/3/SdldVd1dfiH7crZnknD6neXzf6qqagU+f/kfx1/mHt57/8c6Gz7PZ7OsHYV/F3s+/3PFl9u4W/od3X365ZbYTWy4+RLuQtFk4BY1ms9lonMCO07PGkTiTF8Wp/MOzE1xYyW5MZUyq+53YsHstq8lqNYGoRVR1JWKuopyX5fr68U0mZbZ+XF7LOGPKpooGO17LWtFqoGEgCsOjLc8daYxW1UirGY50zQ1tt9sZmhHXnBqnSAtom1fKZkDbMkiTZ4raWNoqnjbb6U7RroM0uQO0eYeA0lDbGmnGaVBbDU7fNK32xWlt/4DT5VFtq6o8yL9XK5oHK0tzpmsJOzwe1baazOevh8N9WVUrOlNldK7PFFiCtnwsD4c3AVsCzKdNJzVsn1tHWiHOOlKZuOWjjCUZZbQTok1X8GFVu7VfIBq2loIEi6ptuTzRtN8QJS9JWa1WDMf7iljgdQ2arhXtT4dGPGSt3L5yjGJcr9GnwP3u0lZTyZpqaRMjrZrbh1ASa62kMW2nRVGMRfR6UTT+OxKXvO24l/e9vN2o4TJ5u7jSMRhciWswGI3Enef5UESnE8cdccVpnIropt1ukrSSVltEJv/Psqy4DNAGkjeSF7CA1pERywCWjERGS0QbiFlRZAEayBqAtFGulQ0RlqZESzRMCRO4ozRQxnwqbZa0VkvhQJtPG5C0EbM5RFTHKDM2URrCjmkbiTs3RgVPwlCan7RMRogmVF2NmDKUJmBSnDpMD9aWrGw8dmhwnJi03Cjzcta1fZK2AE0dZ24nraPO04fRCRTjIkwDmyRt8w3igZQ94HJDtD0uvwurso0smmLptAll33H/HUm7o49T0gj+7RVgljZjk7Imff5QNPS54bQWowGuaTmVxYbFoU9A0WR7iowpGrAYTSrrOU5V0rTPTkc5pSPgNO4UaUzbYBBqAu7U0ganyWhylLm0ka4OKg7tFGuDaROwQtHaguXSrshnzup2+wyxx8HR3dOSCu0Jl9sx0FynXkfp5qRmb/GOEncBlYss16lVaWZCpnGwCdTkQFgUylvuz7RAR1mTA09APk8sWnh2p0dnN7ock7Qocp26zR6Y3QnB8EkgabLSfBp21PMdxJ5gW1ht9gTbbyC25PMJlw/g06Pl+QtV0MMwhgl5S0ODkqbqjcaQrjeA2TQxhkaahk5Tot1R0jQNtWla5NJGtjY8ztiitTSNTsCm9TkNmsChaW10nIZWvEcTYZzG+Fg5RsNCs2h9TsPiMDQsjls9uqHSuLaxRev3LRo2QX53K+PHnmjPsLzdUhNscfmA2nr7H7Dc9ECa65TKlh7Fcbij2uqBZ5oApblOeRMcfxuCJhgXBcCQFaKpMaQe7DTUnLch1eqgLTLKFjZtyOZQGhhDbfZyRT57xueiv+C0j4whMzl6PYfWD9CG+y3EC8LSJ1w+IS5TSzU5LKOchtJ0vVHS6CmzoaypeqPXbUvZwqUNOQ1squoln4rGbUYKZtM6ljbMmaLJExAp09roSaCLw6NB/m2a0UYHwGiWz8UiRDPauo42PFDmFGH9vpHGafjWx2hQtoYGtaFpkZe0xc0Np4G4IX18S6X2E5fP1FHPuPxp9+ciQMOyfXmCSLGhkhiXCcKKDJdtshkxnzcujb5HxbF+5Flvt/SSIDlW3SoYp8VWRyVJEKZaKvKT5mrjI62b+JNDN6jTUAHaZcyGWoLfFxP9/tLmAzJQHDcBmjfT2GtChl8J1AuMoQHMd4qvVtaXlbbJmTfT3KRZtHN/piUtC1ZY45Ydp6axXwcvUv97VLvN3vq4Mt7rGtewfre8uHwvmk3570ic//d/yP4XwXVLDePMCicAAAAASUVORK5CYII=",
          aa =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABNCAMAAADU1xmCAAAAYHpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjaVcjJDYAwDEXBu6ughBfH+YnLQSwSHVA+Yrkwx7HtPHabHuEWrQ+lBBAZ6TMweBWoCwUH8quZH6VWFXVT696zxp12ARkVFEqn8wB8AAABoVBMVEVHcEzsN0XuO0juPkvyikP3wj/2wDzxjD//z1PuPkv2wT36xUD8yEfxQ1Dnryf2wDzqMD/oKzr+y03nRz32wkDVmw35xD7nJTXvP0z5xD/9y0zvP0zzuizvQU7kLjzKjwDnJjXzuSrzuCn+zVD6xkP0uzDzTFf0TVnxRVHoKjnqMD7JjgD5xD7xQ1DJjgD0uizJjgDJjgD9zUj////9zE3+zVD8ykn9y0v7yEX+zU7JjgD/z1LrM0H4wjv+zlHytybwQ0/7xkT6xED6xULxRlP+zU/vQU7sNkXtOkf3vzb5wz7mJDT/z1PzuSrpLj3oKTj0TFj0ui31vTP3wDnpLDvzSlb0vDDnJzbvPkzySVXtPUrwRVH8yUjqMD7wtCPSLz3/0FPnO0j1Tlr2vjTVN0PoRFDfQEzUKDbgO0ffa3fssB3jKTjdLTv/3of65ujieobZPEjgow/kM0HaMj/eNkPWQU/YTVrnqhb88PLmiJL++fnaVmTxvcTrn6jWO0jplJ732t3wtbvuqbL1y9DzxcvOlAX/34f91nL+2nv7z1//34gl3DzUAAAAMnRSTlMAEHhNBDovAXkdD1vcCRgIWrmpKCH9it490cgxdmj+Vpuixu1H6Jjs39Dx0PGy6fd/mqkO7Q4AAAb0SURBVFjD3ZjpUxpZFMVBjC2g4EKME9e4JDGTZGaKRRxkRwwgRuiIskgHWURFURGXcYlbJstfPfe+192gyFRj8mXmJmUVX351zl3Oo5DJ/mfV3qv8eRzlQjTa8ROY8tWFhefdLxajHo9iwONxKH4ExjxfgFpcjALNE487HHHmoag+RbeymgUwh1ehVCiaHyCraXV1FVmUFvfEHYDzer3LsZeNC2R4WJQoIzYpbHk51vgwmhFGtEXvwmJ9DW9GHypbiBIW0ARYDGtA3pDXvhdE2WI8ixUnI/B6U1AIewfV1GjPFhazufLBycFOLovCsvnzTCaTf4ew2dnZbuk26QCy5eKFXq+/WN/JgrL8+eX29qdMisKme6WLe0GVHetpFXMxb2oHPv11sp8isNlpeQO7RqQd/KXXnx5f6/Xb56lYHj8RaciafiXdKMKiHpR2vZMrH+n1J/lUBqgX0DaeNt3ZLf3SYTU8uSu9/iyX3bnR69fzok/Kml5ZWZGWAAP0nLK5S7Am0A5A4VkmRXtGYCsTkmgKsAlbG8+d6fWXO7nzbXCaOUWf+1XKVuY7pd3US3rnuXUwVzwB5namCJMFn7MCbX5+/oO0a2WUi4t4Tdmda35D1svE5/4eFC9t/oPUa3hOU8ORK58i66iYucQtKZU4jisV9laIsg9P2iXBmkhowG1mczsnxeP188w66uPWT7e3r4+50iAqg5qQcvrNYmw7vKk8VhnmcMWdUdenXIHA3r9/L2XjGJpBNIG8sVg+c4U+Ud/NDZ7Z2iCFLUna314MoLiQZ6l96hNAxxwKvFnbpLBhSSNllC8JjYZjHvftkuPgSsuFwgHIBBrCOqQe6htHnNiE1E5lQM5RucSBQK5QKMOHtU2ELUl9uZSCMvR5gq0q7fPa4NMF0paWJGsbEHq2DCO4wDHu7XGwyWccBwv4CWgACzyRmG4K8UFJZT4Rn9N7JZzFEZzEUWYNpQUCnVLD8g21GYvtY0QWS3BOgxwN4qOTtU1kBZ5ID195xzKllYvFdQ5vc6WwdvDp8qrIIWxpaVjZyBvYHkPYu9R+qVTiD32wsAZVQFgg0NvQ46zk300+gUhqzG9CkZYFAh0N0eS3YCQc+XOitAa/xzXxsNm7MGQFJuqurqqlRae9p3NyeScPmyZ5JsKU8nrj1KpHDQbDlOHpo3tmNCD6rIbV3VpVq3HGCCyoybZanrIygCqbdRJc12U0GmdmpqYMk/DPYKrldbyaUHTPV5R19HUGhu9rGfPoqQ0KaAYibdIEVctjGKYJYK/6OgFWL7qb1aMWow2UoTZKA1zClLjHL9M0ONwOfzc75XXaNWcBWUCzGQ1821BbImE2m2t4DIP/67a+a26O0EiBU+wb4kAaz2tgL1s/8jSbbea2U5MJWE6n2flLi3TanEBDr1N0ptXazG63WzKv9ePHu05p43gWqHNL5/HaLESaEaQBbZKMgeLAKcBcLn8dnmZoqIW53TebBWnUaWVDEAd9Q5jb5fffx9P8+ifUW02FZgGa0LfamTrRqQvF1fK6CQvqcf+znpbbfbNV+jZJ+1bl1I80q9XaU3U+ImvDbk8mk88YYUMsFqTNCNoqNKdA8/vNX/7+amDHeNbQW561m7QH7VjJfkKzUKd4pgbhTidN7rTVKdIQ93ULyjVOkmuIR33etQehKC3JwEyJU4uRv3rBqMnMpiMRFoFI87ucW1vft7aM1maZ6neBdRgMhUSYPamiU+Cd4oYYqDgYqdvKRkL2EMv3zYWwLROr+0NkRUIERmmgTStMATOEaquIc/ut6UgwmQyxpG/fvm99/2IdF1sfjiAtVIGN4PZaQJq4IVMVminhdPvZcMSe3NgIssAzfDNa2ceUlQyHKS1Y6ZtGuAV0Ku6beFkJUd7G4UbSBysSIbDdYDpNaJEqbSOaqsvCK7VVz5Rur9NlBXlBkHe4u3u4S1gRNu0Lp3kar2yc5mBlpsaZqiQXLsuMbn3hENg9BN7u58Mwy7I+Xht1ag/+pmbu5Bux2tVV0YbiyL6BPLBr30Be2GoFmA9hotNgv7aSIfSykNejkTGq1lG6ISbhsGBDoHtE3kaSBRjiRFow+Ex1K5EslNaqFd+vmjv1U3nJtBVxYFScwohOxtQk+ai6+mHUtJqIU4SZSYYADroXFKQJfRt/dE9ato3dfZmax9oSJjMNX3JZfiKPZfm+IS4iNr86yZ/en6q6noTQN3ILfj+bZok4Ki3cX/vOt3bp6n7h1arbKA2cYsBZUZjQt+rmV975f/8Greuir4yLT0sC9KV9I7qH/e6mVb8WkpywkNbWIntgwTeZli6a5FSc7/XYg38SpERV/2tKA2nqZtkPF+w0mUKP9if9zKtR96hVMkb236x/ANziLQimxYLNAAAAAElFTkSuQmCC";
        const sa = (t) => (
            (0, s.dD)("data-v-0f273be1"), (t = t()), (0, s.Cn)(), t
          ),
          na = { class: "shop-withus py-14" },
          ia = sa(() =>
            (0, s._)(
              "div",
              { class: "title text-center mb-5" },
              [
                (0, s._)("h2", null, [
                  (0, s._)("span", null, "Why Shop"),
                  (0, s.Uk)(" With Us ?"),
                ]),
              ],
              -1
            )
          ),
          oa = sa(() =>
            (0, s._)(
              "div",
              { class: "img-parent" },
              [(0, s._)("img", { src: ta, alt: "" })],
              -1
            )
          ),
          ca = sa(() =>
            (0, s._)("a", { href: "#", class: "text-white" }, "Learn More", -1)
          ),
          ra = sa(() =>
            (0, s._)(
              "div",
              { class: "img-parent" },
              [(0, s._)("img", { src: ea, alt: "" })],
              -1
            )
          ),
          pa = sa(() =>
            (0, s._)("a", { href: "#", class: "text-white" }, "Learn More", -1)
          ),
          da = sa(() =>
            (0, s._)(
              "div",
              { class: "img-parent" },
              [(0, s._)("img", { src: la, alt: "" })],
              -1
            )
          ),
          ua = sa(() =>
            (0, s._)("a", { href: "#", class: "text-white" }, "Learn More", -1)
          ),
          ma = sa(() =>
            (0, s._)(
              "div",
              { class: "img-parent" },
              [(0, s._)("img", { src: aa, alt: "" })],
              -1
            )
          ),
          wa = sa(() =>
            (0, s._)("a", { href: "#", class: "text-white" }, "Learn More", -1)
          );
        function ha(t, e, l, a, n, i) {
          const o = (0, s.up)("v-card-title"),
            c = (0, s.up)("v-card-text"),
            r = (0, s.up)("v-card"),
            p = (0, s.up)("v-col"),
            d = (0, s.up)("v-row"),
            u = (0, s.up)("v-container");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", na, [
              ia,
              (0, s.Wm)(
                u,
                { fluid: "" },
                {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(d, null, {
                      default: (0, s.w5)(() => [
                        (0, s.Wm)(
                          p,
                          { cols: "3" },
                          {
                            default: (0, s.w5)(() => [
                              (0, s.Wm)(
                                r,
                                {
                                  elevation: "0",
                                  class: "text-center text-white",
                                  color: "transparent",
                                },
                                {
                                  default: (0, s.w5)(() => [
                                    oa,
                                    (0, s.Wm)(
                                      o,
                                      {
                                        style: {
                                          "white-space": "pre-wrap",
                                          "line-height": "1.2",
                                          "font-weight": "700",
                                        },
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Uk)(
                                            " First order ships for free "
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    (0, s.Wm)(
                                      c,
                                      {
                                        class: "pb-1",
                                        style: { "font-size": "15px" },
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Uk)(
                                            " Lorem ipsum dolor sit amet "
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    ca,
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        (0, s.Wm)(
                          p,
                          { cols: "3" },
                          {
                            default: (0, s.w5)(() => [
                              (0, s.Wm)(
                                r,
                                {
                                  elevation: "0",
                                  class: "text-center text-white",
                                  color: "transparent",
                                },
                                {
                                  default: (0, s.w5)(() => [
                                    ra,
                                    (0, s.Wm)(
                                      o,
                                      {
                                        style: {
                                          "white-space": "pre-wrap",
                                          "line-height": "1.2",
                                          "font-weight": "700",
                                        },
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Uk)(" Weekly Flash Sales "),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    (0, s.Wm)(
                                      c,
                                      {
                                        class: "pb-1",
                                        style: { "font-size": "15px" },
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Uk)(
                                            " Lorem ipsum dolor sit amet "
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    pa,
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        (0, s.Wm)(
                          p,
                          { cols: "3" },
                          {
                            default: (0, s.w5)(() => [
                              (0, s.Wm)(
                                r,
                                {
                                  elevation: "0",
                                  class: "text-center text-white",
                                  color: "transparent",
                                },
                                {
                                  default: (0, s.w5)(() => [
                                    da,
                                    (0, s.Wm)(
                                      o,
                                      {
                                        style: {
                                          "white-space": "pre-wrap",
                                          "line-height": "1.2",
                                          "font-weight": "700",
                                        },
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Uk)(
                                            " Annual Payment Discount "
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    (0, s.Wm)(
                                      c,
                                      {
                                        class: "pb-1",
                                        style: { "font-size": "15px" },
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Uk)(
                                            " Lorem ipsum dolor sit amet "
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    ua,
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        (0, s.Wm)(
                          p,
                          { cols: "3" },
                          {
                            default: (0, s.w5)(() => [
                              (0, s.Wm)(
                                r,
                                {
                                  elevation: "0",
                                  class: "text-center text-white",
                                  color: "transparent",
                                },
                                {
                                  default: (0, s.w5)(() => [
                                    ma,
                                    (0, s.Wm)(
                                      o,
                                      {
                                        style: {
                                          "white-space": "pre-wrap",
                                          "line-height": "1.2",
                                          "font-weight": "700",
                                        },
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Uk)(
                                            " Cashback Reward Program "
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    (0, s.Wm)(
                                      c,
                                      {
                                        class: "pb-1",
                                        style: { "font-size": "15px" },
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Uk)(
                                            " Lorem ipsum dolor sit amet "
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    wa,
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
        var ga = {};
        const fa = (0, z.Z)(ga, [
          ["render", ha],
          ["__scopeId", "data-v-0f273be1"],
        ]);
        var Aa = fa,
          va = {
            name: "HomeView",
            components: {
              UpperBanner: xe,
              TheFeatures: Qe,
              TopOffers: al,
              ProductsComponent: yl,
              TopCategories: Vl,
              NewProducts: Yl,
              QualityFeatures: $l,
              WhyShop: Aa,
            },
            computed: {
              ...(0, x.rn)(k, [
                "flashDeals",
                "newProducts",
                "mobilePhones",
                "fragrances",
                "skincare",
              ]),
            },
            methods: { ...(0, x.nv)(k, ["getProducts"]) },
            async mounted() {
              await this.getProducts();
            },
          };
        const ya = (0, z.Z)(va, [["render", ue]]);
        var xa = ya;
        const ba = { class: "products-category" },
          ka = { class: "text-center" },
          Wa = {
            class: "img-parent position-relative",
            style: { height: "180px", overflow: "hidden" },
          },
          za = ["src"],
          Ca = {
            style: {
              color: "#e10600",
              "font-weight": "900",
              "font-size": "16px",
            },
          },
          _a = ["src"],
          Ma = { class: "mt-5" };
        function Da(t, e, l, a, i, o) {
          const c = (0, s.up)("v-skeleton-loader"),
            r = (0, s.up)("v-col"),
            p = (0, s.up)("v-row"),
            d = (0, s.up)("v-btn"),
            u = (0, s.up)("v-hover"),
            m = (0, s.up)("v-card-text"),
            w = (0, s.up)("v-rating"),
            h = (0, s.up)("v-btn-toggle"),
            g = (0, s.up)("v-card"),
            f = (0, s.up)("v-lazy"),
            A = (0, s.up)("v-container");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", ba, [
              (0, s._)("h1", ka, (0, n.zw)(t.$route.params.title), 1),
              (0, s.Wm)(A, null, {
                default: (0, s.w5)(() => [
                  (0, s.Wm)(
                    g,
                    { loading: i.loading, "pt-5": "", elevation: "0" },
                    {
                      default: (0, s.w5)(() => [
                        i.loading
                          ? ((0, s.wg)(),
                            (0, s.j4)(
                              p,
                              { key: 0 },
                              {
                                default: (0, s.w5)(() => [
                                  ((0, s.wg)(),
                                  (0, s.iD)(
                                    s.HY,
                                    null,
                                    (0, s.Ko)(4, (t) =>
                                      (0, s.Wm)(
                                        r,
                                        { cols: "3", key: t },
                                        {
                                          default: (0, s.w5)(() => [
                                            (0, s.Wm)(c, {
                                              type: "image,article,button",
                                            }),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      )
                                    ),
                                    64
                                  )),
                                ]),
                                _: 1,
                              }
                            ))
                          : (0, s.kq)("", !0),
                        i.loading
                          ? (0, s.kq)("", !0)
                          : ((0, s.wg)(),
                            (0, s.j4)(
                              p,
                              { key: 1 },
                              {
                                default: (0, s.w5)(() => [
                                  ((0, s.wg)(!0),
                                  (0, s.iD)(
                                    s.HY,
                                    null,
                                    (0, s.Ko)(
                                      t.categoryProducts.products,
                                      (e) => (
                                        (0, s.wg)(),
                                        (0, s.j4)(
                                          r,
                                          {
                                            cols: "3",
                                            key: e.id,
                                            class: "px-5",
                                          },
                                          {
                                            default: (0, s.w5)(() => [
                                              (0, s.Wm)(
                                                f,
                                                null,
                                                {
                                                  default: (0, s.w5)(() => [
                                                    (0, s.Wm)(
                                                      g,
                                                      {
                                                        elevation: "0",
                                                        class: "pb-5",
                                                      },
                                                      {
                                                        default: (0, s.w5)(
                                                          () => [
                                                            (0, s.Wm)(
                                                              u,
                                                              null,
                                                              {
                                                                default: (0,
                                                                s.w5)(
                                                                  ({
                                                                    isHovering:
                                                                      t,
                                                                    props: l,
                                                                  }) => [
                                                                    (0, s._)(
                                                                      "div",
                                                                      Wa,
                                                                      [
                                                                        (0,
                                                                        s._)(
                                                                          "img",
                                                                          (0,
                                                                          s.dG)(
                                                                            {
                                                                              src: i
                                                                                .showenItem[
                                                                                e
                                                                                  .title
                                                                              ]
                                                                                ? i
                                                                                    .showenItem[
                                                                                    e
                                                                                      .title
                                                                                  ]
                                                                                : e.thumbnail,
                                                                              class:
                                                                                "w-100",
                                                                              style: `height: 100%; transition: 0.5s all ease-in-out; scale:${
                                                                                t
                                                                                  ? 1.05
                                                                                  : 1
                                                                              }; cursor: pointer;`,
                                                                              alt: "",
                                                                            },
                                                                            l
                                                                          ),
                                                                          null,
                                                                          16,
                                                                          za
                                                                        ),
                                                                        (0,
                                                                        s.Wm)(
                                                                          d,
                                                                          {
                                                                            density:
                                                                              "compact",
                                                                            width:
                                                                              "90",
                                                                            height:
                                                                              "30",
                                                                            variant:
                                                                              "outlined",
                                                                            class:
                                                                              "quick-view-btn",
                                                                            style:
                                                                              {
                                                                                "background-color":
                                                                                  "#fff",
                                                                                "text-transform":
                                                                                  "none",
                                                                                position:
                                                                                  "absolute",
                                                                                left: "50%",
                                                                                top: "50%",
                                                                                transform:
                                                                                  "translate(-50%, -50%)",
                                                                                "border-radius":
                                                                                  "30px",
                                                                                "font-size":
                                                                                  "12px",
                                                                                transition:
                                                                                  "all 0.2s ease-in-out",
                                                                                opacity:
                                                                                  "0",
                                                                              },
                                                                            onClick:
                                                                              (
                                                                                t
                                                                              ) =>
                                                                                o.openQuickView(
                                                                                  e
                                                                                ),
                                                                          },
                                                                          {
                                                                            default:
                                                                              (0,
                                                                              s.w5)(
                                                                                () => [
                                                                                  (0,
                                                                                  s.Uk)(
                                                                                    " Quick View "
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1032,
                                                                          [
                                                                            "onClick",
                                                                          ]
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]
                                                                ),
                                                                _: 2,
                                                              },
                                                              1024
                                                            ),
                                                            (0, s.Wm)(
                                                              m,
                                                              {
                                                                class:
                                                                  "pl-0 pb-1",
                                                              },
                                                              {
                                                                default: (0,
                                                                s.w5)(() => [
                                                                  (0, s.Uk)(
                                                                    " (" +
                                                                      (0, n.zw)(
                                                                        e.title
                                                                      ) +
                                                                      ") " +
                                                                      (0, n.zw)(
                                                                        e.description +
                                                                          " " +
                                                                          e.title.split(
                                                                            " "
                                                                          )
                                                                            .length <=
                                                                          5
                                                                          ? e.description
                                                                          : e.description
                                                                              .split(
                                                                                " "
                                                                              )
                                                                              .slice(
                                                                                0,
                                                                                5 -
                                                                                  e.title.split(
                                                                                    " "
                                                                                  )
                                                                                    .length
                                                                              )
                                                                              .join(
                                                                                " "
                                                                              ) +
                                                                              " ..."
                                                                      ),
                                                                    1
                                                                  ),
                                                                ]),
                                                                _: 2,
                                                              },
                                                              1024
                                                            ),
                                                            (0, s.Wm)(
                                                              w,
                                                              {
                                                                modelValue:
                                                                  e.rating,
                                                                "onUpdate:modelValue":
                                                                  (t) =>
                                                                    (e.rating =
                                                                      t),
                                                                "half-increments":
                                                                  "true",
                                                                readonly:
                                                                  "true",
                                                                color:
                                                                  "#FFC50F",
                                                                size: "small",
                                                                density:
                                                                  "compact",
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                "modelValue",
                                                                "onUpdate:modelValue",
                                                              ]
                                                            ),
                                                            (0, s.Wm)(
                                                              m,
                                                              {
                                                                class:
                                                                  "pl-0 pt-0",
                                                              },
                                                              {
                                                                default: (0,
                                                                s.w5)(() => [
                                                                  (0, s._)(
                                                                    "del",
                                                                    null,
                                                                    "$" +
                                                                      (0, n.zw)(
                                                                        e.price
                                                                      ),
                                                                    1
                                                                  ),
                                                                  (0, s.Uk)(
                                                                    " From "
                                                                  ),
                                                                  (0, s._)(
                                                                    "span",
                                                                    Ca,
                                                                    "$" +
                                                                      (0, n.zw)(
                                                                        Math.ceil(
                                                                          e.price -
                                                                            e.price *
                                                                              (e.discountPercentage /
                                                                                100)
                                                                        )
                                                                      ),
                                                                    1
                                                                  ),
                                                                ]),
                                                                _: 2,
                                                              },
                                                              1024
                                                            ),
                                                            (0, s.Wm)(
                                                              h,
                                                              {
                                                                modelValue:
                                                                  i.showenItem[
                                                                    e.title
                                                                  ],
                                                                "onUpdate:modelValue":
                                                                  (t) =>
                                                                    (i.showenItem[
                                                                      e.title
                                                                    ] = t),
                                                              },
                                                              {
                                                                default: (0,
                                                                s.w5)(() => [
                                                                  ((0, s.wg)(
                                                                    !0
                                                                  ),
                                                                  (0, s.iD)(
                                                                    s.HY,
                                                                    null,
                                                                    (0, s.Ko)(
                                                                      e.images,
                                                                      (
                                                                        t,
                                                                        e
                                                                      ) => (
                                                                        (0,
                                                                        s.wg)(),
                                                                        (0,
                                                                        s.j4)(
                                                                          d,
                                                                          {
                                                                            value:
                                                                              t,
                                                                            key: e,
                                                                            size: "x-small",
                                                                            rounded:
                                                                              "xl",
                                                                            ripple:
                                                                              !1,
                                                                          },
                                                                          {
                                                                            default:
                                                                              (0,
                                                                              s.w5)(
                                                                                () => [
                                                                                  (0,
                                                                                  s._)(
                                                                                    "img",
                                                                                    {
                                                                                      src: t,
                                                                                      alt: "",
                                                                                      width:
                                                                                        "30px",
                                                                                      height:
                                                                                        "30px",
                                                                                      style:
                                                                                        {
                                                                                          "border-radius":
                                                                                            "50%",
                                                                                          border:
                                                                                            "1px solid #6e6e6e",
                                                                                        },
                                                                                    },
                                                                                    null,
                                                                                    8,
                                                                                    _a
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1032,
                                                                          [
                                                                            "value",
                                                                          ]
                                                                        )
                                                                      )
                                                                    ),
                                                                    128
                                                                  )),
                                                                ]),
                                                                _: 2,
                                                              },
                                                              1032,
                                                              [
                                                                "modelValue",
                                                                "onUpdate:modelValue",
                                                              ]
                                                            ),
                                                            (0, s._)(
                                                              "div",
                                                              Ma,
                                                              [
                                                                (0, s.Wm)(
                                                                  d,
                                                                  {
                                                                    density:
                                                                      "compact",
                                                                    width:
                                                                      "180",
                                                                    height:
                                                                      "40",
                                                                    style: {
                                                                      "text-transform":
                                                                        "none",
                                                                      "border-radius":
                                                                        "30px",
                                                                    },
                                                                    variant:
                                                                      "outlined",
                                                                    onClick: (
                                                                      l
                                                                    ) =>
                                                                      t.$router.push(
                                                                        {
                                                                          name: "product_details",
                                                                          params:
                                                                            {
                                                                              productId:
                                                                                e.id,
                                                                            },
                                                                        }
                                                                      ),
                                                                  },
                                                                  {
                                                                    default: (0,
                                                                    s.w5)(
                                                                      () => [
                                                                        (0,
                                                                        s.Uk)(
                                                                          "Choose Options"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1032,
                                                                  ["onClick"]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                        _: 2,
                                                      },
                                                      1024
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1024
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                                _: 1,
                              }
                            )),
                      ]),
                      _: 1,
                    },
                    8,
                    ["loading"]
                  ),
                ]),
                _: 1,
              }),
            ])
          );
        }
        var Ua = {
          inject: ["Emitter"],
          data() {
            return { showenItem: {}, loading: !1 };
          },
          components: [Kt.Ih],
          methods: {
            ...(0, x.nv)(k, ["getProductsByCategory"]),
            openQuickView(t) {
              this.Emitter.emit("openQuickView", t);
            },
          },
          computed: { ...(0, x.rn)(k, ["categoryProducts"]) },
          watch: {
            async $route() {
              document.documentElement.scrollTo(0, 0),
                (this.loading = !0),
                await this.getProductsByCategory(this.$route.params.category),
                (this.loading = !1);
            },
          },
          async mounted() {
            (this.loading = !0),
              await this.getProductsByCategory(this.$route.params.category),
              (this.loading = !1);
          },
        };
        const Va = (0, z.Z)(Ua, [["render", Da]]);
        var Ha = Va;
        const ja = { class: "product-details" },
          Ba = ["src"],
          Sa = ["src"],
          Fa = {
            class: "rating-parent d-flex align-center",
            style: { gap: "10px" },
          },
          Ea = { class: "mt-1" },
          Ia = {
            style: {
              color: "#e10600",
              "font-weight": "900",
              "font-size": "16px",
            },
          },
          Za = {
            class: "counter px-1 mt-3",
            style: {
              "border-radius": "30px",
              width: "fit-content",
              border: "1px solid #333",
            },
          };
        function La(t, e, l, i, o, c) {
          const r = (0, s.up)("v-skelton-loader"),
            p = (0, s.up)("v-tab"),
            d = (0, s.up)("v-tabs"),
            u = (0, s.up)("v-col"),
            m = (0, s.up)("v-card-title"),
            w = (0, s.up)("v-rating"),
            h = (0, s.up)("v-card-text"),
            g = (0, s.up)("v-icon"),
            f = (0, s.up)("v-btn"),
            A = (0, s.up)("v-card-actions"),
            v = (0, s.up)("v-card"),
            y = (0, s.up)("v-row"),
            x = (0, s.up)("v-container");
          return (
            (0, s.wg)(),
            (0, s.iD)("div", ja, [
              (0, s.Wm)(
                x,
                { fluid: "" },
                {
                  default: (0, s.w5)(() => [
                    (0, s.Wm)(y, null, {
                      default: (0, s.w5)(() => [
                        (0, s.Wm)(
                          u,
                          { cols: "7" },
                          {
                            default: (0, s.w5)(() => [
                              o.loading
                                ? (0, s.kq)("", !0)
                                : ((0, s.wg)(),
                                  (0, s.iD)(
                                    "img",
                                    {
                                      key: 0,
                                      src: o.tab
                                        ? o.tab
                                        : t.singleProduct.thumbnail,
                                      class: "w-100",
                                      alt: "",
                                      height: "500",
                                    },
                                    null,
                                    8,
                                    Ba
                                  )),
                              o.loading
                                ? ((0, s.wg)(),
                                  (0, s.j4)(r, {
                                    key: 1,
                                    type: "image,image,image",
                                  }))
                                : (0, s.kq)("", !0),
                              (0, s.Wm)(
                                d,
                                {
                                  "center-active": "",
                                  height: "180",
                                  modelValue: o.tab,
                                  "onUpdate:modelValue":
                                    e[0] || (e[0] = (t) => (o.tab = t)),
                                  class: "mt-10",
                                },
                                {
                                  default: (0, s.w5)(() => [
                                    ((0, s.wg)(!0),
                                    (0, s.iD)(
                                      s.HY,
                                      null,
                                      (0, s.Ko)(
                                        t.singleProduct.images,
                                        (t, e) => (
                                          (0, s.wg)(),
                                          (0, s.j4)(
                                            p,
                                            {
                                              key: e,
                                              class: "mx-10",
                                              value: t,
                                            },
                                            {
                                              default: (0, s.w5)(() => [
                                                (0, s._)(
                                                  "img",
                                                  {
                                                    src: t,
                                                    alt: "",
                                                    width: "100",
                                                    height: "100",
                                                  },
                                                  null,
                                                  8,
                                                  Sa
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["value"]
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["modelValue"]
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        (0, s.Wm)(
                          u,
                          { cols: "5", class: "pt-0 pl-6" },
                          {
                            default: (0, s.w5)(() => [
                              o.loading
                                ? ((0, s.wg)(),
                                  (0, s.j4)(r, {
                                    key: 0,
                                    type: "article,article,article",
                                  }))
                                : (0, s.kq)("", !0),
                              o.loading
                                ? (0, s.kq)("", !0)
                                : ((0, s.wg)(),
                                  (0, s.j4)(
                                    v,
                                    { key: 1, elevation: "0" },
                                    {
                                      default: (0, s.w5)(() => [
                                        (0, s.Wm)(
                                          m,
                                          {
                                            class: "px-0",
                                            style: {
                                              "font-size": "20px",
                                              "font-weight": "bold",
                                            },
                                          },
                                          {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)(
                                                " (" +
                                                  (0, n.zw)(
                                                    t.singleProduct.title
                                                  ) +
                                                  ") Sample - " +
                                                  (0, n.zw)(
                                                    t.singleProduct.category
                                                  ) +
                                                  " For Sale ",
                                                1
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        (0, s._)("div", Fa, [
                                          (0, s.Wm)(
                                            w,
                                            {
                                              modelValue:
                                                t.singleProduct.rating,
                                              "onUpdate:modelValue":
                                                e[1] ||
                                                (e[1] = (e) =>
                                                  (t.singleProduct.rating = e)),
                                              "half-increments": "true",
                                              readonly: "true",
                                              color: "#FFC50F",
                                              size: "small",
                                              density: "compact",
                                            },
                                            null,
                                            8,
                                            ["modelValue"]
                                          ),
                                          (0, s._)(
                                            "span",
                                            Ea,
                                            "Stock : " +
                                              (0, n.zw)(t.singleProduct.stock),
                                            1
                                          ),
                                        ]),
                                        (0, s.Wm)(
                                          h,
                                          { class: "px-0" },
                                          {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)(
                                                (0, n.zw)(
                                                  t.singleProduct.description
                                                ),
                                                1
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        (0, s.Wm)(
                                          h,
                                          { class: "px-0 pt-0" },
                                          {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)(
                                                " Brand : " +
                                                  (0, n.zw)(
                                                    t.singleProduct.brand
                                                  ),
                                                1
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        (0, s.Wm)(
                                          h,
                                          { class: "px-0 pt-0" },
                                          {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)(
                                                " Availability : " +
                                                  (0, n.zw)(
                                                    t.singleProduct.stock > 0
                                                      ? "In Stock"
                                                      : "Out of Stock"
                                                  ),
                                                1
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        (0, s.Wm)(
                                          h,
                                          { class: "pl-0 pt-0" },
                                          {
                                            default: (0, s.w5)(() => [
                                              (0, s._)(
                                                "del",
                                                null,
                                                "$" +
                                                  (0, n.zw)(
                                                    t.singleProduct.price
                                                  ),
                                                1
                                              ),
                                              (0, s.Uk)(" From "),
                                              (0, s._)(
                                                "span",
                                                Ia,
                                                "$" +
                                                  (0, n.zw)(
                                                    Math.ceil(
                                                      t.singleProduct.price -
                                                        t.singleProduct.price *
                                                          (t.singleProduct
                                                            .discountPercentage /
                                                            100)
                                                    )
                                                  ),
                                                1
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        (0, s.Wm)(
                                          h,
                                          { class: "pl-0 pt-0" },
                                          {
                                            default: (0, s.w5)(() => [
                                              (0, s.Uk)(" Quantity "),
                                              (0, s._)("div", Za, [
                                                (0, s.Wm)(
                                                  g,
                                                  {
                                                    onClick:
                                                      e[2] ||
                                                      (e[2] = (t) =>
                                                        o.quantity > 1 &&
                                                        o.quantity--),
                                                    size: "22",
                                                  },
                                                  {
                                                    default: (0, s.w5)(() => [
                                                      (0, s.Uk)("mdi-minus"),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, s.wy)(
                                                  (0, s._)(
                                                    "input",
                                                    {
                                                      type: "number",
                                                      class: "py-2 text-center",
                                                      style: {
                                                        border: "none",
                                                        outline: "none",
                                                        width: "80px",
                                                        "font-size": "14px",
                                                      },
                                                      "onUpdate:modelValue":
                                                        e[3] ||
                                                        (e[3] = (t) =>
                                                          (o.quantity = t)),
                                                      min: "1",
                                                    },
                                                    null,
                                                    512
                                                  ),
                                                  [[a.nr, o.quantity]]
                                                ),
                                                (0, s.Wm)(
                                                  g,
                                                  {
                                                    onClick:
                                                      e[4] ||
                                                      (e[4] = (t) =>
                                                        o.quantity++),
                                                    size: "22",
                                                  },
                                                  {
                                                    default: (0, s.w5)(() => [
                                                      (0, s.Uk)("mdi-plus"),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                              ]),
                                              (0, s.Wm)(
                                                h,
                                                { class: "pl-0" },
                                                {
                                                  default: (0, s.w5)(() => [
                                                    (0, s.Uk)(
                                                      " Subtotal: $" +
                                                        (0, n.zw)(
                                                          Math.ceil(
                                                            t.SingleProduct
                                                              .price -
                                                              t.SingleProduct
                                                                .price *
                                                                (t.SingleProduct
                                                                  .discountPercentage /
                                                                  100)
                                                          ) * o.quantity
                                                        ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                              (0, s.Wm)(
                                                A,
                                                { class: "mt-7 w-100 px-0" },
                                                {
                                                  default: (0, s.w5)(() => [
                                                    (0, s.Wm)(
                                                      f,
                                                      {
                                                        variant: "outlined",
                                                        style: {
                                                          "text-transform":
                                                            "none",
                                                          "border-radius":
                                                            "30px",
                                                          "background-color":
                                                            "#333",
                                                          color: "#fff",
                                                        },
                                                        class: "w-75",
                                                        density: "compact",
                                                        height: "50",
                                                        onClick:
                                                          e[5] ||
                                                          (e[5] = (e) =>
                                                            c.addToCart(
                                                              t.singleProduct
                                                            )),
                                                        loading: o.btnLoading,
                                                      },
                                                      {
                                                        default: (0, s.w5)(
                                                          () => [
                                                            (0, s.Uk)(
                                                              "Add to Cart"
                                                            ),
                                                          ]
                                                        ),
                                                        _: 1,
                                                      },
                                                      8,
                                                      ["loading"]
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  )),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
        var Pa = {
          inject: ["Emitter"],
          data() {
            return {
              loading: !1,
              quantity: 1,
              tab: "",
              product: {
                id: 1,
                title: "iPhone 9",
                description: "An apple mobile which is nothing like apple",
                price: 549,
                discountPercentage: 12.96,
                rating: 4.69,
                stock: 94,
                brand: "Apple",
                category: "smartphones",
                thumbnail:
                  "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
                images: [
                  "https://cdn.dummyjson.com/product-images/1/1.jpg",
                  "https://cdn.dummyjson.com/product-images/1/2.jpg",
                  "https://cdn.dummyjson.com/product-images/1/3.jpg",
                  "https://cdn.dummyjson.com/product-images/1/4.jpg",
                  "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
                ],
              },
              btnLoading: !1,
              components: { VSkeletonLoader: Kt.Ih },
            };
          },
          computed: { ...(0, x.rn)(k, ["singleProduct"]) },
          methods: {
            ...(0, x.nv)(k, ["getSingleProduct"]),
            ...(0, x.nv)(I, ["addItem"]),
            addToCart(t) {
              (t.quantity = this.quantity),
                (this.btnLoading = !0),
                setTimeout(() => {
                  (this.btnLoading = !1),
                    this.addItem(t),
                    this.Emitter.emit("openCart"),
                    this.Emitter.emit("showMsg", t.title);
                }, 1e3);
            },
          },
          async beforeMount() {
            (this.loading = !0),
              await this.getSingleProduct(this.$route.params.productId),
              (this.loading = !1);
          },
        };
        const Qa = (0, z.Z)(Pa, [["render", La]]);
        var Ra = Qa;
        const Ga = [
            { path: "/", name: "home", component: xa },
            {
              path: "/products/:category/:title",
              name: "products_category",
              component: Ha,
            },
            {
              path: "/products/product-details/:productId",
              name: "product_details",
              component: Ra,
            },
          ],
          Na = (0, se.p7)({
            history: (0, se.PO)("/"),
            routes: Ga,
            scrollBehavior() {
              return { top: 0 };
            },
          });
        var Ta = Na,
          Ya = l(1373),
          qa = (l(9773), l(730)),
          Oa = l(4580),
          Ja = l(8600);
        const Ka = (0, Ya.Z)(),
          Xa = (0, qa.Rd)({ components: Oa, directives: Ja });
        (0, a.ri)(ae)
          .use(Xa)
          .provide("Emitter", Ka)
          .use((0, x.WB)())
          .use(Ta)
          .mount("#app");
      },
    },
    e = {};
  function l(a) {
    var s = e[a];
    if (void 0 !== s) return s.exports;
    var n = (e[a] = { exports: {} });
    return t[a].call(n.exports, n, n.exports, l), n.exports;
  }
  (l.m = t),
    (function () {
      var t = [];
      l.O = function (e, a, s, n) {
        if (!a) {
          var i = 1 / 0;
          for (p = 0; p < t.length; p++) {
            (a = t[p][0]), (s = t[p][1]), (n = t[p][2]);
            for (var o = !0, c = 0; c < a.length; c++)
              (!1 & n || i >= n) &&
              Object.keys(l.O).every(function (t) {
                return l.O[t](a[c]);
              })
                ? a.splice(c--, 1)
                : ((o = !1), n < i && (i = n));
            if (o) {
              t.splice(p--, 1);
              var r = s();
              void 0 !== r && (e = r);
            }
          }
          return e;
        }
        n = n || 0;
        for (var p = t.length; p > 0 && t[p - 1][2] > n; p--) t[p] = t[p - 1];
        t[p] = [a, s, n];
      };
    })(),
    (function () {
      l.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return l.d(e, { a: e }), e;
      };
    })(),
    (function () {
      l.d = function (t, e) {
        for (var a in e)
          l.o(e, a) &&
            !l.o(t, a) &&
            Object.defineProperty(t, a, { enumerable: !0, get: e[a] });
      };
    })(),
    (function () {
      l.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      l.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      l.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      l.p = "/";
    })(),
    (function () {
      var t = { 143: 0 };
      l.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, a) {
          var s,
            n,
            i = a[0],
            o = a[1],
            c = a[2],
            r = 0;
          if (
            i.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (s in o) l.o(o, s) && (l.m[s] = o[s]);
            if (c) var p = c(l);
          }
          for (e && e(a); r < i.length; r++)
            (n = i[r]), l.o(t, n) && t[n] && t[n][0](), (t[n] = 0);
          return l.O(p);
        },
        a = (self["webpackChunkvue_ecommerce"] =
          self["webpackChunkvue_ecommerce"] || []);
      a.forEach(e.bind(null, 0)), (a.push = e.bind(null, a.push.bind(a)));
    })();
  var a = l.O(void 0, [998], function () {
    return l(1752);
  });
  a = l.O(a);
})();
//# sourceMappingURL=app.eb3ce9cb.js.map
