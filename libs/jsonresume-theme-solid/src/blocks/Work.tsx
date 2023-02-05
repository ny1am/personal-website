import { ResumeSchema } from '../../gen/schema';
import { DateRange, Section } from '../components';

type Props = { work: Required<ResumeSchema>['work'] };

export function Work(props: Props) {
  return (
    <Section title="Experience">
      {props.work.map((item) => (
        <div class="mb-12 break-inside-avoid">
          <div class="flex items-start justify-between gap-x-8 print:justify-start sm:justify-start">
            <div>
              {item.position && <span class="font-bold">{item.position}</span>}
              {item.name && <div class="text-gray-600 dark:text-gray-400">{item.name}</div>}
            </div>
            <DateRange
              {...item}
              class="flex max-w-min flex-wrap justify-end print:max-w-none sm:max-w-none"
            />
          </div>
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
