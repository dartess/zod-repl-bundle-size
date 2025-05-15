import * as z from 'zod/v4-mini';

const result = z.string().safeParse('');
console.log(result);

document.querySelector("#root")!.innerHTML = `
<div class="content">
  <h1>Vanilla Rspack</h1>
  <p>Start building amazing things with Rspack.</p>
</div>
`;
