import { ResumeSchema } from '../../gen/schema';
import { Section } from '../components';

type Props = { skills: Required<ResumeSchema>['skills'] };

export function Skills(props: Props) {
  return (
    <Section title="Skills">
      <ul class="grid grid-cols-[max-content_auto] items-baseline gap-y-2 gap-x-8">
        {props.skills.map((skill) => (
          <li class="contents">
            {skill.name && (
              <span class="col-start-1 text-sm font-semibold uppercase">{skill.name}</span>
            )}
            {(skill.keywords ?? []).length > 0 && (
              <span>{(skill.keywords ?? []).join(', ')}</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
