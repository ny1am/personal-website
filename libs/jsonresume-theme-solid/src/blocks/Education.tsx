import { For } from 'solid-js';

import { ResumeSchema } from '../../gen/schema';
import { formatDate } from '../utils';

type Props = { education: Required<ResumeSchema>['education'] };

export function Education(props: Props) {
  return (
    <section id="education">
      <h2>Education</h2>
      <For each={props.education}>
        {(item) => (
          <div class="item">
            <header>{item.institution && <h3 class="name">{item.institution}</h3>}</header>
            <div class="dates">
              {item.startDate && <span class="startDate">{formatDate(item.startDate)}</span>}
              <span class="endDate">
                {item.endDate ? ` - ${formatDate(item.endDate)}` : '- Present'}
              </span>
            </div>
            <div class="qualification">
              {item.studyType && <span class="studyType">{item.studyType}</span>}
              {item.area && <span class="area"> - {item.area}</span>}
            </div>
          </div>
        )}
      </For>
    </section>
  );
}
