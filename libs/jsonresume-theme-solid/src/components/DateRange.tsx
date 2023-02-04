import { formatDate } from '../utils';

type Props = { startDate?: string; endDate?: string };

export function DateRange(props: Props) {
  return (
    <div class="text-gray-500">
      {props.startDate && formatDate(props.startDate)}
      {props.endDate ? ` - ${formatDate(props.endDate)}` : '- Present'}
    </div>
  );
}
