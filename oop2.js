function khoaHoc(ten, hocphi){
    this.Ten = ten;
    this.Hocphi = hocphi;
}

khoaHoc.prototype.mota = function() {
    console.log('hello ' + this.Ten + ' ' + this.Hocphi);
}

var nodejs = new khoaHoc('dang hoc lap trinh nodejs', 800000);

nodejs.mota();
