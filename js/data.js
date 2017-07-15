var app = angular.module("myApp", []);
app.controller("room4Rent", function($scope) {
    var motelRooms = [];

    motelRooms.push({
        title:"Cho thu� ph�ng tr? s? 80 N�i Th�nh",
        acreage:"35",
        area:"H?i Ch�u",
        piece:"2.2",
        dateUp:new Date('7/24/2016'),
        imgUrl:"images/phongtro.png"
    });
    motelRooms.push({title:"Cho thu� ph�ng tr? ki?t 11/9 ???ng ?? Quang",
        acreage:"25",
        area:"Thanh Kh�",
        piece:"1.5",
        dateUp:new Date('7/23/2016'),
        imgUrl:"images/phongtro.png"
    });
    motelRooms.push({
        title:"Cho thu� ph�ng tr? ??y ?? ti?n nghi: tivi, t? l?nh, ?i?u h�a, qu?t",
        acreage:"40",
        area:"S?n Tr�",
        piece:"3.5",
        dateUp:new Date('7/23/2016'),
        imgUrl:"images/phongtro.png"
    });
    motelRooms.push({
        title:"Cho gia ?�nh thu� ph�ng tr? t?i s? nh� 80 N�i Th�nh!",
        acreage:"20",
        area:"H?i Ch�u",
        piece:"2.2",
        dateUp:new Date('7/22/2016'),
        imgUrl:"images/phongtro.png"
    });

    $scope.motelRooms = motelRooms;
});


app.controller("house4Rent", function($scope) {
    var housesRent = [];
    housesRent.push({
        title:"Nh� ki?t Ho�ng Di?u 3PN c� n?i th?t c? b?n ch? 5 tri?u",
        acreage:"140",
        area:"H?i Ch�u",
        piece:"5",
        dateUp:new Date('7/25/2016'),
        imgUrl:"images/phongtro.png"
    });
    housesRent.push({
        title:"Nh� 3 t?ng tuy?t ??p g?n bi?n Ph?m V?n ??ng",
        acreage:"100",
        area:"S?n Tr�",
        piece:"15",
        dateUp:new Date('7/25/2016'),
        imgUrl:"images/phongtro.png"
    });
    housesRent.push({
        title:"Nh� 3 t?ng ???ng Ph?m Nh? T?ng gi� ch? 8 tri?u",
        acreage:"40",
        area:"Thanh Kh�",
        piece:"8",
        dateUp:new Date('7/24/2016'),
        imgUrl:"images/phongtro.png"
    });

    $scope.housesRent = housesRent;
});


app.controller("apartment4Rent", function($scope) {
    var apartmentsRent = [];
    apartmentsRent.push({
        title:"T�I C� 2 C?N H? HAGL 3 PN, N?I TH?T M?I 100% C?N CHO THU� G?P, NH?N NH� NGAY. LH 9350.00.869",
        acreage:"110",
        area:"Thanh Kh�",
        piece:"12",
        dateUp:new Date('7/25/2016'),
        imgUrl:"images/phongtro.png"
    });
    apartmentsRent.push({
        title:"Cho thu� CHCC ng?n v� d�i ng�y ??y ?? ti?n nghi, 2,3PN, ? 4-6 ng??i v?n r? h?n kh�ch s?n cao c?p",
        acreage:"110",
        area:"Thanh Kh�",
        piece:"17",
        dateUp:new Date('7/23/2016'),
        imgUrl:"images/phongtro.png"
    });
    apartmentsRent.push({
        title:"C?n H? Ho�ng Anh Gia Lai 3 Ph�ng Ng?",
        acreage:"117",
        area:"Ng? H�nh S?n",
        piece:"11",
        dateUp:new Date('7/24/2016'),
        imgUrl:"images/phongtro.png"
    });

    $scope.apartmentsRent = apartmentsRent;
});


app.controller("room4Mates", function($scope) {
    var roomMates = [];
    roomMates.push({
        title:"C?n 1 nam ? gh�p h?m 149 Tr?n Thi L�",
        acreage:"50",
        area:"Ng? H�nh S?n",
        piece:"3",
        dateUp:new Date('7/24/2016'),
        imgUrl:"images/phongtro.png"
    });
    roomMates.push({
        title:"T�m 1 n? ? gh�p nh� nguy�n c?n L� ?�nh L�",
        acreage:"70",
        area:"H?i Ch�u",
        piece:"1.5",
        dateUp:new Date('7/25/2016'),
        imgUrl:"images/phongtro.png"
    });
    roomMates.push({
        title:"T�m nam ? gh�p ???ng Nguy?n V?n Tho?i",
        acreage:"20",
        area:"S?n Tr�",
        piece:"0.9",
        dateUp:new Date('7/24/2016'),
        imgUrl:"images/phongtro.png"
    });

    $scope.roomMates = roomMates;
});

app.controller("myNews", function($scope) {
    var news = [];
    news.push({
        title:"C?n h? chung c? ??p h�t h?n nh? ban c�ng tr?ng ??y hoa",
        describe:"T?n d?ng kho?ng kh�ng gian nh? h?p ? ban c�ng, r?t nhi?u gia ?�nh s?ng ? nh?ng c?n h? chung c? ?� v� c�ng kh�o l�o t?o n�n nh?ng khu v??n ng�t h??ng hoa tr�n ban c�ng nh?.",
        imgUrl:"images/news.png"
    });
    news.push({
        title:"Kh� nh? t�m mua nh� 1 t? ??ng",
        describe:"S? t?t gi?m m?nh c?a ph�n kh�c c?n h? b�nh d�n tr�n th? tr??ng c?ng l� ?i?u d? hi?u khi m� l??ng d? �n ???c ch�o b�n ?ang ng�y c�ng �t ?i.",
        imgUrl:"images/news.png"
    });
    news.push({
        title:"Nh� ph? x�y s?n gi� r? ngo?i � S�i G�n h�t kh�ch",
        describe:"V?i di?n t�ch si�u h?n h?p, ch? kho?ng 3m2 nh?ng nh?ng ban c�ng n�y v?n tr? th�nh g�c ??c s�ch, th? gi�n hay th?m ch� l� b�n ?n ngo�i tr?i si�u ??p.",
        imgUrl:"images/news.png"
    });
    news.push({
        title:"Trang tr� ban c�ng 3m2 ??p b?t ng?",
        describe:"T?n d?ng kho?ng kh�ng gian nh? h?p ? ban c�ng, r?t nhi?u gia ?�nh s?ng ? nh?ng c?n h? chung c? ?� v� c�ng kh�o l�o t?o n�n nh?ng khu v??n ng�t h??ng hoa tr�n ban c�ng nh?.",
        imgUrl:"images/news.png"
    });
    news.push({
        title:"Thi?t k? nh� ??p trong kho?ng 300 tri?u",
        describe:"Nh? gi?i ph�p thi?t k? ki?n tr�c v� n?i th?t th�ng minh, d� di?n t�ch kh� nh? nh?ng ng�i nh� v?n ??p v� mang phong c�ch kh�c hi?n ??i",
        imgUrl:"images/news.png"
    });

    $scope.news = news;
});