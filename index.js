const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const app = express();
const port = 3000;


// route
app.get('/', async (req, res) => {
    res.json({
        author: 'GustiRafi',
        source: 'https://otakudesu.lol',
        endpoint: {
            'get anime terbaru': '/anime',
            'get complete anime': '/complete-anime',
            'get all genre': '/genre',
            'get anime by genre': '/genre/slug',
            'get detail anime': '/anime/slug',
            'stream anime': '/stream/eps',
            'search': '/search/nama',
        }
    });
});

app.get('/anime', async (req, res) => {
    const animeList = await getAnimeList();
    res.json(animeList);
});

app.get('/complete-anime', async (req, res) => {
    const completeList = await getCompleteAnimeList();
    res.json(completeList);
});

app.get('/genre', async (req, res) => {
    const genreList = await getGenre();
    res.json(genreList);
});

app.get('/genre/:slug', async (req, res) => {
    const getbygenre = await getAnimeByGenre(req.params.slug);
    res.json(getbygenre);
});

app.get('/anime/:slug', async (req, res) => {
    const getbyid = await getAnimeById(req.params.slug);
    res.json(getbyid);
});

app.get('/stream/:eps', async (req, res) => {
    const stream = await getAnimeStream(req.params.eps);
    res.json(stream);
});

app.get('/search/:name', async (req, res) => {
    const cari = await search(req.params.name);
    res.json(cari);
});


// fetch url
async function fetchURL(url) {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    return $;

}

//get data
async function getAnimeList() {
    const $ = await fetchURL("https://otakudesu.lol");

    const animeList = [];
    $('.venz').first().find('.detpost').each((i, el) => {
        const title = $(el).find('.jdlflm').text();
        const imageUrl = $(el).find('img').attr('src');
        const id = i + 1;
        const updatedDay = $(el).find('.epztipe').text();
        const eps = $(el).find('.epz').text();
        const updatedDate = $(el).find('.newnime').text();
        let slug = $(el).find('a').attr("href").split("/")[4];
        const anime = {
            id,
            title,
            imageUrl,
            updatedDay,
            eps,
            updatedDate,
            slug,
        };
        animeList.push(anime);
    });

    return animeList;
}

async function getCompleteAnimeList() {
    const $ = await fetchURL("https://otakudesu.lol/complete-anime/");

    const CompleteanimeList = [];
    $('.venz').first().find('.detpost').each((i, el) => {
        const title = $(el).find('.jdlflm').text();
        const imageUrl = $(el).find('img').attr('src');
        const id = i + 1;
        const rate = $(el).find('.epztipe').text();
        const eps = $(el).find('.epz').text();
        let slug = $(el).find('a').attr("href").split("/")[4];
        const Completeanime = {
            id,
            title,
            imageUrl,
            rate,
            eps,
            slug,
        };
        CompleteanimeList.push(Completeanime);
    });

    return CompleteanimeList;
}

async function getGenre() {
    const $ = await fetchURL("https://otakudesu.lol/genre-list");

    const genreList = [];
    $('.genres li a').each((i, el) => {
        const title = $(el).text();
        const id = i + 1;
        let slug = $(el).attr("href").split("/")[2];
        const genre = {
            id,
            title,
            slug,
        };
        genreList.push(genre);
    });

    return genreList;
}

async function getAnimeByGenre(slug) {
    const $ = await fetchURL("https://otakudesu.lol/genres/" + slug);

    const animeByGenreList = [];
    $('.col-anime-con').each((i, el) => {
        const title = $(el).find('.col-anime-title').text();
        const imageUrl = $(el).find('img').attr('src');
        const id = i + 1;
        const eps = $(el).find('.col-anime-eps').text();
        const rate = $(el).find('.col-anime-rating').text();
        const studio = $(el).find('.col-anime-studio').text();
        const date = $(el).find('.col-anime-date').text();
        let slug = $(el).find('a').attr("href").split("/")[4];
        const bygenrelist = {
            id,
            title,
            imageUrl,
            rate,
            eps,
            slug,
        };
        animeByGenreList.push(bygenrelist);
    });

    return animeByGenreList;
}

async function getAnimeById(slug) {
    const $ = await fetchURL("https://otakudesu.lol/anime/" + slug);
    const animeByIdList = [];

    const title = $('.jdlrx').text();
    const sinopsis = $('.sinopc').text();
    const imageUrl = $('.fotoanime img').attr('src');
    const jpn = $('.venser').find('.infozingle p:nth-child(2)').text();
    const skor = $('.venser').find('.infozingle p:nth-child(3)').text();
    const status = $('.venser').find('.infozingle p:nth-child(6)').text();
    const genre = $('.venser').find('.infozingle p:nth-child(11)').text();
    const epslist = [];
    $('.episodelist ul li').each((i, el) => {
        const id = i + 1;
        const title = $(el).find('a').text();
        const numbers = title.match(/\d+/g);
        const episode = $(el).find('a').attr("href").split("/")[4];
        if (numbers) {
            const extractedNumber = numbers[0];
            epslist.push({
                id: id,
                title: title,
                episode: episode,
                epsNumber: extractedNumber,
            });
        }
    });
    const byidlist = {
        title,
        imageUrl,
        skor,
        jpn,
        status,
        genre,
        sinopsis,
        epslist,
    }

    animeByIdList.push(byidlist);

    return animeByIdList;
}


async function getAnimeStream(eps) {
    const $ = await fetchURL("https://otakudesu.lol/episode/" + eps);
    const stream = [];

    const title = $('.posttl').text();
    const frame = $('.responsive-embed-stream iframe').attr('src');
    const epslist = [];
    $('.keyingpost li').each((i, el) => {
        const id = i + 1;
        const title = $(el).find('a').text();
        const numbers = title.match(/\d+/g);
        const episode = $(el).find('a').attr("href").split("/")[4];
        if (numbers) {
            const extractedNumber = numbers[0];
            epslist.push({
                id: id,
                title: title,
                episode: episode,
                epsNumber: extractedNumber,
            });
        }
    });
    const arr = {
        title,
        frame,
        epslist,
    }

    stream.push(arr);

    return stream;
}


async function search(name) {
    const $ = await fetchURL("https://otakudesu.lol/?s=" + name + "&post_type=anime");
    const result = [];
    $('.chivsrc li').each((i, el) => {
        const title = $(el).find('h2').text();
        const imageUrl = $(el).find('img').attr('src');
        const id = i + 1;
        const genre = $(el).find('.set').first().text();
        const status = $(el).find('div:nth-child(4)').text()
        const rate = $(el).find('div:nth-child(5)').text()
        let slug = $(el).find('a').attr("href").split("/")[4];
        const resultlist = {
            id,
            title,
            genre,
            status,
            rate,
            slug,
        };
        result.push(resultlist);
    });

    return result;
}


app.listen(port, () => {
    console.log(`Running http://localhost:${port}`);
});