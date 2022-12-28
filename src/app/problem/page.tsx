"use client"

import { Table } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { useRouter } from 'next/navigation';

const elements = [
  { position: 1, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 2, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 3, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 4, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 5, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

export default function Page() {
  useDocumentTitle("問題");

  const router = useRouter()

  const ths = (
    <tr>
      <th>Element position</th>
      <th>Element name</th>
      <th>Symbol</th>
      <th>Atomic mass</th>
    </tr>
  );

  const rows = elements.map((element) => (
    <tr
      key={element.name}
      onClick={() => router.push(`/problem/${element.position}`)}
      className="cursor-pointer"
    >
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <Table captionSide="bottom" striped highlightOnHover>
      <caption>Some elements from periodic table</caption>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
      <tfoot>{ths}</tfoot>
    </Table>
  );
}
