import { generate } from "./api-handler.ts";

// Testing script
// This will be removed at ship

const base64 =
  "PHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNjA2IDYzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2EpIj4KPHBhdGggZD0ibTI5MiAwYzc3LjQ0MyAwIDE1MS43MiAyNy44MiAyMDYuNDggNzcuMzQgNTQuNzYxIDQ5LjUyIDg1LjUyNSAxMTYuNjggODUuNTI1IDE4Ni43MnYyNTMuOTRjMCAzOC42Ni0zMS4zNCA3MC03MCA3MGgtNDQ0Yy0zOC42NiAwLTcwLTMxLjM0LTcwLTcwdi0yNTMuOTRjMC03MC4wMzIgMzAuNzY0LTEzNy4yIDg1LjUyNS0xODYuNzIgNTQuNzYtNDkuNTIgMTI5LjAzLTc3LjM0IDIwNi40OC03Ny4zNHoiIGZpbGw9IiM4RDgzRkYiLz4KPHBhdGggZD0ibTI5MiA3Yzc1LjgwMSAwIDE0OC4zNyAyNy4yMzcgMjAxLjc4IDc1LjUzMiA1My4zODMgNDguMjc0IDgzLjIyIDExMy41OSA4My4yMiAxODEuNTJ2MjUzLjk0YzAgMzQuNzk0LTI4LjIwNiA2My02MyA2M2gtNDQ0Yy0zNC43OTQgMC02My0yOC4yMDYtNjMtNjN2LTI1My45NGMwLTY3LjkzNSAyOS44MzctMTMzLjI1IDgzLjIyLTE4MS41MiA1My40MDYtNDguMjk1IDEyNS45OC03NS41MzIgMjAxLjc4LTc1LjUzMnoiIHN0cm9rZT0iIzE5MTU0QSIgc3Ryb2tlLXdpZHRoPSIxNCIvPgo8L2c+Cjx0ZXh0IGZpbGw9IiMxOTE1NEEiIGZvbnQtZmFtaWx5PSJSb2JvdG8gRmxleCIgZm9udC1zaXplPSIzMjUiIGZvbnQtd2VpZ2h0PSI4MDAiIGxldHRlci1zcGFjaW5nPSIwZW0iIHN0eWxlPSJ3aGl0ZS1zcGFjZTpwcmUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbiB4PSIxMzAuNDUyIiB5PSIzMjcuNTg0Ij57IX1zdGFyc3shfTwvdHNwYW4+PC90ZXh0Pgo8dGV4dCBmaWxsPSIjMTkxNTRBIiBmb250LWZhbWlseT0iUm9ib3RvIEZsZXgiIGZvbnQtc2l6ZT0iNzIiIGZvbnQtd2VpZ2h0PSI4MDAiIGxldHRlci1zcGFjaW5nPSIwZW0iIHN0eWxlPSJ3aGl0ZS1zcGFjZTpwcmUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbiB4PSIxNDcuMTk5IiB5PSI0MzMuNjA5Ij5TdGFycyBvbgo8L3RzcGFuPjx0c3BhbiB4PSIxNzYuNzMiIHk9IjUxNy42MDkiPkdpdGh1YjwvdHNwYW4+PC90ZXh0Pgo8ZGVmcz4KPGZpbHRlciBpZD0iYSIgeD0iMCIgeT0iMCIgd2lkdGg9IjYwNiIgaGVpZ2h0PSI2MzMiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9ImhhcmRBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHg9IjIyIiBkeT0iNDUiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjA5ODAzOTIgMCAwIDAgMCAwLjA4MjM1MjkgMCAwIDAgMCAwLjI5MDE5NiAwIDAgMCAxIDAiLz4KPGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzcyMTJfMzk0Ii8+CjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd183MjEyXzM5NCIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4=";

console.log(generate(base64, [{ key: "stars", replace: "10" }]));

// const svg = `
//   <svg fill="none" viewBox="0 0 606 633" xmlns="http://www.w3.org/2000/svg">
//   <g filter="url(#a)">
//   <path d="m292 0c77.443 0 151.72 27.82 206.48 77.34 54.761 49.52 85.525 116.68 85.525 186.72v253.94c0 38.66-31.34 70-70 70h-444c-38.66 0-70-31.34-70-70v-253.94c0-70.032 30.764-137.2 85.525-186.72 54.76-49.52 129.03-77.34 206.48-77.34z" fill="#8D83FF"/>
//   <path d="m292 7c75.801 0 148.37 27.237 201.78 75.532 53.383 48.274 83.22 113.59 83.22 181.52v253.94c0 34.794-28.206 63-63 63h-444c-34.794 0-63-28.206-63-63v-253.94c0-67.935 29.837-133.25 83.22-181.52 53.406-48.295 125.98-75.532 201.78-75.532z" stroke="#19154A" stroke-width="14"/>
//   </g>
//   <text fill="#19154A" font-family="Roboto Flex" font-size="325" font-weight="800" letter-spacing="0em" style="white-space:pre" xml:space="preserve"><tspan x="130.452" y="327.584">{!}stars{!}</tspan></text>
//   <text fill="#19154A" font-family="Roboto Flex" font-size="72" font-weight="800" letter-spacing="0em" style="white-space:pre" xml:space="preserve"><tspan x="147.199" y="433.609">Stars on
//   </tspan><tspan x="176.73" y="517.609">Github</tspan></text>
//   <defs>
//   <filter id="a" x="0" y="0" width="606" height="633" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
//   <feFlood flood-opacity="0" result="BackgroundImageFix"/>
//   <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
//   <feOffset dx="22" dy="45"/>
//   <feComposite in2="hardAlpha" operator="out"/>
//   <feColorMatrix values="0 0 0 0 0.0980392 0 0 0 0 0.0823529 0 0 0 0 0.290196 0 0 0 1 0"/>
//   <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7212_394"/>
//   <feBlend in="SourceGraphic" in2="effect1_dropShadow_7212_394" result="shape"/>
//   </filter>
//   </defs>
//   </svg>
// `;
//
// const keys = [{ key: "stars", replace: "10" }];
//
// const result = createBadge(svg, keys);
// console.log(result);
