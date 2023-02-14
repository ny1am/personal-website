import { ResumeSchema } from '../../gen/schema';
import { Section } from '../components';

type Props = { skills: Required<ResumeSchema>['skills'] };

export function Skills(props: Props) {
  return (
    <Section title="Skills">
      <ul class="print:grid print:grid-cols-[max-content_auto] print:items-baseline print:gap-x-8 print:gap-y-2 sm:grid sm:grid-cols-[max-content_auto] sm:items-baseline sm:gap-y-2 sm:gap-x-8">
        {props.skills.map((skill) => (
          <li class="mt-4 first:mt-0 print:contents sm:contents">
            {skill.name && (
              <div class="col-start-1 text-sm font-semibold uppercase dark:text-gray-500">
                {skill.name}
              </div>
            )}
            {(skill.keywords ?? []).length > 0 && (
              <div>{(skill.keywords ?? []).join(', ')}</div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
