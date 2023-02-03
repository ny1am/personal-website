import { ResumeSchema } from '../../gen/schema';

type Props = { basics: Required<ResumeSchema>['basics'] };

export function Basics(props: Props) {
  const basics = props.basics;
  return (
    <section class="heading">
      <header>
        <h1>{basics.name}</h1>
        <div class="contact">
          {basics.email && (
            <span class="detail">
              <a href={`mailto:${basics.email}`}>{basics.email}</a>
            </span>
          )}
          {basics.phone && <span class="detail">{basics.phone}</span>}
          {basics.url && (
            <span class="detail">
              <a href={basics.url}>{basics.url}</a>
            </span>
          )}
        </div>
      </header>
      {basics.summary && <p>{basics.summary}</p>}
    </section>
  );
}
