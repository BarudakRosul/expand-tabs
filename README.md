<div align="center">
  <img src="./image/logo.svg" alt="Expand Tabs Logo" width="155"/>
  <h1>Expand Tabs</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/expand-tabs/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Laporkan Bug</a> · <a href="https://github.com/BarudakRosul/expand-tabs/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Ajukan Fitur</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/expand-tabs/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/expand-tabs/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/expand-tabs"><img src="https://img.shields.io/npm/v/%40barudakrosul%2expand-tabs" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/expand-tabs" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/expand-tabs"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fexpand-tabs" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/expand-tabs/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/expand-tabs?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/expand-tabs/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/expand-tabs?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/expand-tabs/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/expand-tabs" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Fitur](#fitur)
3. [Instalasi](#instalasi)
4. [Penggunaan](#penggunaan)
5. [Berkontribusi](#berkontribusi)
6. [Lisensi](#lisensi)
7. [Penghargaan](#penghargaan)
8. [Donasi](#donasi)
9. [Catatan Perubahan](#catatan-perubahan)

## Pendahuluan

Expand Tabs adalah sebuah ekstensi JavaScript yang mengubah tab karakter (`\t`) dalam string menjadi spasi dengan panjang tertentu. Ini dibuat semirip mungkin dengan `expandtabs()` di Python.

## Fitur

Expand Tabs menawarkan fitur-fitur berikut:

- Mengganti karakter tab dalam string dengan sejumlah spasi.
- Memungkinkan pengaturan ukuran tab sesuai kebutuhan.
- Dapat di integrasikan ke dalam kode TypeScript.

## Instalasi

Untuk menginstal Expand Tabs secara lokal, ikuti langkah instalasi ini:

```shell
npm install @barudakrosul/expand-tabs
```

## Penggunaan

Untuk memulai menggunakan Expand Tabs, import modulnya terlebuh dahulu:

**1\. CommonJS**
```javascript
require("@barudakrosul/expand-tabs");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import "@barudakrosul/expand-tabs";
```

**3\. TypeScript**
```typescript
import "@barudakrosul/expand-tabs";
```

Contoh penggunaan:

```javascript
let text = "Name\tAge\tLocation\nAlice\t30\tWonderland";
console.log(text.expandTabs());

// Result:
// Name    Age     Location
// Alice   30      Wonderland
```

```javascript
let text = "Name\tAge\tLocation\nAlice\t30\tWonderland";
console.log(text.expandTabs(12));

// Result:
// Name        Age         Location
// Alice       30          Wonderland
```

## Berkontribusi

Kontribusi pada Expand Tabs sangat dihargai! Baik melaporkan bug, menyarankan fitur baru, atau berkontribusi pada perbaikan kode.

## Lisensi

Expand Tabs dilisensikan di bawah Lisensi Apache-2.0 - lihat berkas [LICENSE](/LICENSE) untuk detailnya.

## Penghargaan

Expand Tabs menghargai dukungan dan kontribusi dari individu dan proyek sumber terbuka berikut:

- [@FajarKim](https://github.com/FajarKim) - Pengembang utama dan pencipta aplikasi.
- Komunitas sumber terbuka - Untuk kontribusi berharga pada alat dan perpustakaan yang digunakan dalam proyek ini.

## Donasi

Kami sangat menghargai dukungan Anda untuk terus mengembangkan proyek ini. Jika Anda merasa proyek ini bermanfaat, Anda dapat mendukung kami dengan donasi:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Setiap donasi, berapapun jumlahnya, sangat berarti bagi kami. Terima kasih atas dukungan Anda! ❤️

## Catatan Perubahan

Terus ikuti perubahan dan pembaruan terbaru Expand Tabs dengan mengacu ke [Catatan Perubahan](https://github.com/BarudakRosul/expand-tabs/releases).

Terima kasih telah memilih Expand Tabs! Kami bertujuan untuk memberikan solusi yang mudah untuk menggantikan tab dalam string dengan spasi sesuai kebutuhan.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)