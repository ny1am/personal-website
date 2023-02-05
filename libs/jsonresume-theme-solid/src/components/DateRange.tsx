import { formatDate } from '../utils';

type Props = { startDate?: string; endDate?: string; class?: string };

export function DateRange(props: Props) {
  if (!props.startDate) return null;

  const formattedStartDate = formatDate(props.startDate);
  const formattedEndDate = props.endDate ? formatDate(props.endDate) : 'Present';

  return (
    <div class={`text-sm text-gray-500 dark:text-gray-400  ${props.class || ''}`}>
      <span class="whitespace-nowrap">{formattedStartDate}</span>
      <span class="whitespace-pre before:content-['_–_']">{formattedEndDate}</span>
    </div>
  );
}
