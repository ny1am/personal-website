import { For } from 'solid-js';

import { ResumeSchema } from '../../gen/schema';

type Props = { languages: Required<ResumeSchema>['languages'] };

export function Languages(props: Props) {
  return (
    <section id="languages">
      <h2>Languages</h2>
      <For each={props.languages}>
        {(language) => (
          <div class="item">
            {language.language && <div class="language">{language.language}</div>}
            {language.fluency && (
              <div class="fluency">
                <em>{language.fluency}</em>
              </div>
            )}
          </div>
        )}
      </For>
    </section>
  );
}
