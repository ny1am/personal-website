import { ResumeSchema } from '../../gen/schema';
import { DateRange, Section } from '../components';

type Props = { work: Required<ResumeSchema>['work'] };

export function Work(props: Props) {
  return (
    <Section title="Experience">
      {props.work.map((item) => (
        <div class="mb-12 break-inside-avoid">
          <div>
            {item.position && <span class="font-bold">{item.position}</span>}
            {item.name && <span class="italic before:content-['_at_']">{item.name}</span>}
          </div>
          <DateRange {...item} />
          {item.summary && <p class="mt-2 mb-3">{item.summary}</p>}
          {!!item.highlights?.length && (
            <ul class="ml-6 list-inside list-disc">
              {item.highlights.map((highlight) => (
                <li>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </Section>
  );
}
