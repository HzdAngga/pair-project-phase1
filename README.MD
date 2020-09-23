IMPORTANT :
-appnya udh ditest dan bisa jalan ya... tp klo ga percaya boleh di test run dulu hehe XD
tinggal bikin database, table, modelnya aja

-udh dibikin git ignorenya juga

PACKAGE YG SUDAH TERINSTALL :
express
pg
igdb-api
sequelize & -clinya
nodemon
ejs
bcrypt(tapi bkn yg js)



FLOW APLIKASINYA :
game center, web yg menampilkan game game bagus yg bisa dijadikan referensi utk dimainkan


1.  root '/' => halaman utama menampilkan link utk ke list game, login, register, dan welcome message

2.  root '/game' => menampilkan list game beserta gambar tanpa ada video trailer dengan ada aksi di setiap tabelnya utk disubscribe
(aksi subscribe itu akan menyebabkan halaman user/:id nanti bertambah di list gamenya sesuai dengan game yg disubscribe)
(di halaman ini, hanya user yg sudah register dan login yg bisa subscribe)

3. root /user/:id => menampilkan halaman user yg login (terdapat fullname user, dan email yg terdaftar dengan list game yg disubscribe(bisa update user => ganti nama atau ganti email gitu) dan bisa delete game yg disubscribe). Disini dan hanya di halaman ini user bisa melihat trailer dari gamenya itu.

4. halaman login dan register menggunakan sistem session