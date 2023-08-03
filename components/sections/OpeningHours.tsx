import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const openHours: {
  day: string;
  open: string[];
}[] = [
  {
    day: "Montag",
    open: ["Ruhetag"],
  },
  {
    day: "Dienstag",
    open: ["10-14 Uhr", "17-22 Uhr"],
  },
  {
    day: "Mittwoch",
    open: ["10-14 Uhr", "17-22 Uhr"],
  },
  {
    day: "Donnerstag",
    open: ["10-14 Uhr", "17-22 Uhr"],
  },
  {
    day: "Freitag",
    open: ["10-14 Uhr", "18-23 Uhr"],
  },
  {
    day: "Samstag",
    open: ["10-14 Uhr", "18-23 Uhr"],
  },
  {
    day: "Sonntag",
    open: ["9-13 Uhr", "17-22 Uhr"],
  },
  {
    day: "Feiertage",
    open: ["10-14 Uhr", "17-22 Uhr"],
  },
];

export function OpeningHours() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tag</TableHead>
          <TableHead>Offen</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {openHours.map((hours) => (
          <TableRow key={hours.day}>
            <TableCell className="font-medium">{hours.day}</TableCell>

            <TableCell>
              {hours.open.map((hour) => (
                <p key={hours.day + "." + hour}>{hour}</p>
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
