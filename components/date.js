import { format, parseISO } from "date-fns";

export default function Date({dateString}) {
    const parseDate = parseISO(dateString);
    return <time dateTime={dateString}>{format(parseDate, 'LLLL d, yyyy')}</time>

}