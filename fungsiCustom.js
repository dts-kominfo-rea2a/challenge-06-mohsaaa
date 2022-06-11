// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  fs.readFile(file1, "utf-8",
    // Fungsi Callback
    (err, valSatu) => {
      const dataSatu = JSON.parse(valSatu);
      const messageSatu = kataKedua(dataSatu.message);

      fs.readFile(file2, "utf-8",
        // Fungsi Callback
        (err, valDua) => {
          const dataDua = JSON.parse(valDua);
          const messageDua = kataKedua(dataDua[0].message);

          fs.readFile(file3, "utf-8",
            // Fungsi Callback
            (err, valTiga) => {
              const dataTiga = JSON.parse(valTiga);
              const messageTiga = kataKedua(dataTiga[0].data.message);

              fnCallback(err, [messageSatu, messageDua, messageTiga]);
            });
        });
    });
};

const kataKedua = (kata) => {
  const kataAkhir = kata.split(" ").reverse();

  return kataAkhir[0];
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
