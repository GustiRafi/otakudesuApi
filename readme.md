# Otakudesu Api by GustiRafi

final resource : [otakudesuapibygustirafi.wonderfullyogyakarta.com](http://otakudesuapibygustirafi.wonderfullyogyakarta.com/anime)

## Deskripsi

API OtakuDesu adalah sebuah API yang digunakan untuk mendapatkan informasi anime dari situs OtakuDesu. API ini menyediakan berbagai fitur, seperti mendapatkan daftar anime, detail anime, stream video, dan lainnya.




## Endpoint


### 1. Mendapatkan Daftar Anime

URL Endpoint: `/anime`

Metode: GET

Deskripsi: Mengambil daftar anime dari OtakuDesu.

Contoh resuest:

    GET /anime

Contoh Respons:
   

     {
          "title": "Judul Anime 1",
          "imageUrl": "https://example.com/anime1.jpg",
          "id": 1,
          "eps": "12",
          "rate": "8.5"
        },
        {
          "title": "Judul Anime 2",
          "imageUrl": "https://example.com/anime2.jpg",
          "id": 2,
          "eps": "24",
          "rate": "9.0"
        }
        // ...
    }


### 2. Mendapatkan Detail Anime

URL Endpoint:`/anime/slug`

Metode: GET

Deskripsi: Mendapatkan detail anime berdasarkan ID.

Contoh request:

    GET /anime/one-piece

Contoh response :

        {
        "title": "Judul Anime",
        "imageUrl": "https://example.com/anime.jpg",
        "id": 1,
        "eps": "12",
        "rate": "8.5",
        "synopsis": "Sinopsis anime...",
        -   "epslist": [
            
            -   {
                
                -   "id": 1,
                -   "title": "Episode 4",
                -   "episode": "tms-episode-4-sub-indo"
                
                }
         ]
    }

### 3. Mendapatkan Stream Video

URL Endpoint: `/stream/judul`

Metode: GET

Deskripsi: Mendapatkan link stream video anime berdasarkan ID.

Contoh request:

    GET stream/one-piece-episode-1

Contoh response :

 

        [
    
    -   {
        
        -   "title": "The Marginal Service Episode 3 Subtitle Indonesia",
        -   "frame": ["https://desustream.me/updesu/?id=RURYUnlSV1ZRcDJYa3lXVmZsdlRzQT09"](https://desustream.me/updesu/?id=RURYUnlSV1ZRcDJYa3lXVmZsdlRzQT09),
        -   "epslist": [
            
            -   {
                
                -   "id": 1,
                -   "title": "Episode 4",
                -   "episode": "tms-episode-4-sub-indo"
                
                },
            -   {
                
                -   "id": 2,
                -   "title": "Episode 3",
                -   "episode": "tms-episode-3-sub-indo"
                
                },
            -   {
                
                -   "id": 3,
                -   "title": "Episode 2",
                -   "episode": "tms-episode-2-sub-indo"
                
                },
            -   {
                
                -   "id": 4,
                -   "title": "Episode 1",
                -   "episode": "tms-episode-1-sub-indo"
                
                }
            
            ]
        
        }
    
    ]

### 3. Mendapatkan Daftar Genre

URL Endpoint:`/genre`

Metode: GET

Deskripsi: Mendapatkan daftar genre anime

Contoh request:

    GET genre/

Contoh response :

    [
    
      {
        
          "id": 1,
          "title": "Action",
          "slug": "action"
        
        }
     ]


### 3. Mendapatkan Anime berdasarkan Genre

URL Endpoint:`/genre/nama-genre`

Metode: GET

Deskripsi: Mendapatkan daftar genre anime

Contoh request:

    GET genre/comedy

Contoh response :

    [
      {
        
          "id": 1,
         "title": "name",
        "imageUrl": imageurl,
          "rate": "6.30",
          "eps": "12 Eps",
         "slug": "nama-anime"
        
        }
     ]

### 3. Mendapatkan Anime berdasarkan keyword

URL Endpoint:`/search/nama`

Metode: GET

Deskripsi: Mendapatkan daftar genre anime

Contoh request:

    GET search/one

Contoh response :

    [
      {
        
          "id": 1,
         "title": "name",
        "imageUrl": imageurl,
          "rate": "6.30",
          "eps": "12 Eps",
         "slug": "nama-anime"
        
        }
     ]


## Lisensi

API OtakuDesu dilisensikan di bawah [MIT License](https://opensource.org/licenses/MIT). Silakan merujuk ke file [LICENSE](https://chat.openai.com/c/LICENSE) untuk informasi lebih lanjut.



## Kontak

Jika Anda memiliki pertanyaan, saran, atau laporan masalah terkait API ini, silakan hubungi kami melalui email di [gustirafi49@gmail.com](mailto:gustirafi49@gmail.com).

Terima kasih  :)