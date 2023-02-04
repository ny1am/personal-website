import { ResumeSchema } from '../../gen/schema';
import { DateRange, Section } from '../components';

type Props = { work: Required<ResumeSchema>['work'] };

export function Work(props: Props) {
  return (
    <Section title="Experience">
      {props.work.map((item) => (
        <div class="mb-12 break-inside-avoid">
          <div class="flex items-center gap-x-8">
            {item.position && <span class="font-bold">{item.position}</span>}
            <DateRange {...item} />
          </div>
          {item.name && <div class="text-gray-600">{item.name}</div>}
          {item.summary && <p class="my-3">{item.summary}</p>}
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
