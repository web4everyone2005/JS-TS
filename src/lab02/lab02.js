

console.log("Lab 02.");

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const tinhTrungBinh = (toan, van, anh) => {
    return (toan + van + anh) / 3;
}

const xepLoai = (diemTrungBinh) => {
    if(diemTrungBinh > 9) {
        return "Xuat sac";
    }else if(diemTrungBinh >= 8 && diemTrungBinh < 9) {
        return "Gioi";
    }else if(diemTrungBinh >= 6.5 && diemTrungBinh < 8) {
        return "Kha";
    }else{
        return "Trung binh";
    }
}

console.log("Diem trung binh: " + tinhTrungBinh(diemToan, diemVan, diemAnh));
console.log(`Xep loai: ${xepLoai(tinhTrungBinh(diemToan, diemVan, diemAnh))}`);