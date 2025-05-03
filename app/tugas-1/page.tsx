import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ToggleTheme from "@/components/theme-toggle-2";

export default function DiskSchedulingAssignment() {
  const algorithms = [
    { name: "FCFS", totalMovement: 14742 },
    { name: "SSTF", totalMovement: 5757 },
    { name: "SCAN", totalMovement: 5450 },
    { name: "C-SCAN", totalMovement: 6666 },
    { name: "LOOK", totalMovement: 4870 },
    { name: "C-LOOK", totalMovement: 5566 },
  ];

  const tracks = [1500, 1100, 1750, 1900, 200, 850, 60, 1300, 1400, 600, 600, 1500, 1000, 30, 1900, 2002, 700, 1300, 55, 2025, 259, 700, 1500, 200];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2 text-foreground">Tugas 1 – Algoritma Penjadwalan Disk</h1>
          <p className="text-muted-foreground">Sistem Operasi</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium">Jumlah track: 2050</p>
                <p className="font-medium">Posisi awal head: 1234</p>
              </div>

              <div>
                <p className="font-medium mb-2">Daftar track:</p>
                <div className="bg-muted p-3 rounded-md overflow-x-auto">
                  <p className="whitespace-normal break-words">{tracks.join(", ")}</p>
                </div>
              </div>

              <div>
                <p className="font-medium mb-2">Nilai pengganti:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>[x1] = 20 × 10 = 200</li>
                  <li>[x2] = 6 × 100 = 600</li>
                  <li>[x3] = 2002</li>
                  <li>[x4] = 259 (tiga digit terakhir dari NIM 259)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hasil Perhitungan Total Perpindahan Head</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Algoritma</TableHead>
                    <TableHead className="text-right">Total Lintasan (Track)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {algorithms.map((algorithm) => (
                    <TableRow key={algorithm.name}>
                      <TableCell className="font-medium">{algorithm.name}</TableCell>
                      <TableCell className="text-right">{algorithm.totalMovement.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Grafik Lintasan Head</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-auto rounded-md overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <Image src="/grafik.png" alt="Grafik Lintasan Head untuk algoritma penjadwalan disk" fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2">Grafik dibuat dengan Mathplotlib</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Penjelasan Singkat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Setiap algoritma menghasilkan total lintasan yang berbeda. Algoritma SSTF dan LOOK cenderung lebih efisien karena meminimalkan perpindahan head. FCFS paling tidak efisien karena mengikuti urutan asli tanpa mempertimbangkan
                jarak antar track.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <ToggleTheme />
    </div>
  );
}
