// soal 1
        // let n = prompt("masukkan data n: ");
        // for(let i = 1;i <= n;i++){
        //     alert(i);
        // }

        // soal 2
        // let a = prompt("masukkan data awal: ");
        // let b = prompt("masukkan data akhir: ");

        // while(a <= b) {
        //     alert(a);
        //     a++;
        // }

        // soal 3
        // let a = prompt("masukkan data awal: ");
        // let b = prompt("masukkan data akhir: ");

        // for( let i = a; i <= b; i++) {
        //     if(i % 2 !== 0) {
        //         alert(i);
        //     }
        // }

        // soal 4
        // let a = prompt("masukkan data awal: ");
        // let b = prompt("masukkan data akhir: ");

        // for( let i = a; i <= b; i++) {
        //     if(i % 5 == 0) {
        //         alert(i);
        //     }
        // }

        // soal 5
        // let a = prompt("masukkan data awal: ");
        // let b = prompt("masukkan data akhir: ");

        // let hasil = "0";
        // for( let i = a; i <= b; i++) {
        //     // kalo tanpa ! jadi genap
        //     if(i % 2 !== 0) {
        //         hasil++;
        //     }
        // }
        // alert(hasil);

        // soal 6
        let a = prompt("masukkan data awal: ");
        let b = prompt("masukkan data akhir: ");

        let hasil = '';
        for( let i = a; i <= b; i++) {
            // kalo tanpa ! jadi genap
            if(i % 2 !== 0) {
                hasil += i;
            }
        }
        alert(hasil);