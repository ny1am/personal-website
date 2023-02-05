import { ResumeSchema } from '../../gen/schema';

type Props = { basics: Required<ResumeSchema>['basics'] };

export function Basics(props: Props) {
  const basics = props.basics;
  return (
    <section>
      <header>
        <h1 class="text-3xl font-bold">{basics.name}</h1>
        <div class="mt-3 flex flex-wrap gap-x-4 gap-y-1 [&>a]:text-sky-600 ">
          {basics.email && <a href={`mailto:${basics.email}`}>{basics.email}</a>}
          {basics.url && <a href={basics.url}>{basics.url}</a>}
        </div>
      </header>
      {basics.summary && <p class="mt-3">{basics.summary}</p>}
    </section>
  );
}
