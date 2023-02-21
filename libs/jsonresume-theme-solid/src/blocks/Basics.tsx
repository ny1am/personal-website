import { ResumeSchema } from '../../gen/schema';

type Props = { basics: Required<ResumeSchema>['basics'] };

export function Basics(props: Props) {
  const basics = props.basics;
  const urls = [
    basics.email && { url: `mailto:${basics.email}`, text: basics.email },
    basics.url && { url: basics.url, text: basics.url },
  ].filter(Boolean);

  return (
    <section>
      <header>
        <h1 class="text-3xl font-bold">{basics.name}</h1>
        {urls.length > 0 && (
          <div class="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {urls.map(({ url, text }) => (
              <a class="text-sky-500" href={url}>
                {text}
              </a>
            ))}
          </div>
        )}
      </header>
      {basics.summary && <p class="mt-3">{basics.summary}</p>}
    </section>
  );
}
