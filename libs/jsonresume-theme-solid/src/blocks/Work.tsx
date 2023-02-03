import { For } from 'solid-js';

import { ResumeSchema } from '../../gen/schema';
import { formatDate } from '../utils';

type Props = { work: Required<ResumeSchema>['work'] };

export function Work(props: Props) {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <For each={props.work}>
        {(item) => (
          <div class="item">
            {/* <header>{item.name && <h3 class="name">{item.name}</h3>}</header> */}
            {item.position && <span class="position">{item.position}</span>}
            {item.startDate && <span class="startDate">{formatDate(item.startDate)}</span>}
            <span class="endDate">
              {item.endDate ? ` - ${formatDate(item.endDate)}` : '- Present'}
            </span>
            {item.summary && (
              <div class="summary">
                <p>{item.summary}</p>
              </div>
            )}
            {(item.highlights ?? []).length > 0 && (
              <ul class="highlights">
                <For each={item.highlights}>{(highlight) => <li>{highlight}</li>}</For>
              </ul>
            )}
          </div>
        )}
      </For>
    </section>
  );
}
