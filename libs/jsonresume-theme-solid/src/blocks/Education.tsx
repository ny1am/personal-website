import { ResumeSchema } from '../../gen/schema';
import { DateRange, Section } from '../components';

type Props = { education: Required<ResumeSchema>['education'] };

export function Education(props: Props) {
  return (
    <Section title="Education">
      {props.education.map((item) => (
        <div class="mb-6 break-inside-avoid">
          <header>{item.institution && <h3 class="font-bold">{item.institution}</h3>}</header>
          <DateRange {...item} />
          <div class="qualification">
            {item.studyType && <span class="studyType">{item.studyType}</span>}
            {item.area && <span class="area"> - {item.area}</span>}
          </div>
        </div>
      ))}
    </Section>
  );
}
