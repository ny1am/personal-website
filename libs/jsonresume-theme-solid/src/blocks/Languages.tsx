import { ResumeSchema } from '../../gen/schema';
import { Section } from '../components';

type Props = { languages: Required<ResumeSchema>['languages'] };

export function Languages(props: Props) {
  return (
    <Section title="Languages">
      <ul class="grid grid-cols-[max-content_auto] items-baseline gap-y-2 gap-x-8">
        {props.languages.map((language) => (
          <li class="contents">
            {language.language && (
              <span class="col-start-1 text-sm font-semibold uppercase">
                {language.language}
              </span>
            )}
            {language.fluency && <span>{language.fluency}</span>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
