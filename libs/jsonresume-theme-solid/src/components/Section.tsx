import { JSXElement } from 'solid-js';

type Props = { title?: string; children: JSXElement };

export function Section(props: Props) {
  return (
    <section class="my-10 first-of-type:mt-0">
      {props.title && <h2 class="mb-3 text-2xl uppercase text-red-700">{props.title}</h2>}
      {props.children}
    </section>
  );
}
