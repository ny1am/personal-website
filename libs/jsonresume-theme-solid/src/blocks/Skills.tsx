import { For } from 'solid-js';

import { ResumeSchema } from '../../gen/schema';

type Props = { skills: Required<ResumeSchema>['skills'] };

export function Skills(props: Props) {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <For each={props.skills}>
        {(skill) => (
          <div class="item">
            {skill.name && <div class="name">{skill.name}</div>}
            {(skill.keywords ?? []).length > 0 && (
              <div class="keywords">{(skill.keywords ?? []).join(', ')}</div>
            )}
          </div>
        )}
      </For>
    </section>
  );
}
