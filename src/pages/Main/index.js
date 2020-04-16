/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

import {
    Container,
    Form,
    ListArtists,
    Info,
    Albuns,
    Musics,
    Area,
} from './styles';

import api from '../../services/api';

function Main() {
    const [search, setSearch] = useState('');
    const [artist, setArtist] = useState([]);
    const [id, setId] = useState(1);

    const url = 'https://www.vagalume.com.br';

    useEffect(() => {}, [artist]);

    async function handleSearchArtist(e) {
        e.preventDefault();

        const searchOk = search.trim().toLowerCase().split(' ').join('-');
        console.log(searchOk);

        try {
            const response = await api.get(`${searchOk}/index.js`);

            setArtist([
                ...artist,
                {
                    id,
                    photo: response.data.artist.pic_medium,
                    name: response.data.artist.desc,
                    genre: response.data.artist.genre[0].name,
                    albums: response.data.artist.albums.item,
                    toplyrics: response.data.artist.toplyrics.item,
                },
            ]);

            // eslint-disable-next-line no-plusplus
            setId(id + 1);
        } catch (error) {
            alert('Artist does not exists');
        }

        setSearch('');
    }

    return (
        <Container>
            <Form onSubmit={handleSearchArtist}>
                <div>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Nome do artista"
                    />
                    <input type="text" placeholder="Nome da música" />
                    <button type="submit">
                        {' '}
                        <FaSearch /> Buscar{' '}
                    </button>
                </div>
            </Form>

            {artist.length === 0 ? (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <strong
                        style={{
                            fontSize: '36px',
                            fontStyle: 'italic',
                            color: '#156acc',
                        }}
                    >
                        {' '}
                        Waiting for search...{' '}
                    </strong>
                </div>
            ) : (
                <ListArtists>
                    {artist.map((artist) => (
                        <li key={artist.id}>
                            <img
                                src={`${url}${artist.photo}`}
                                alt={artist.name}
                            />
                            <Info>
                                <strong> {artist.name} </strong>
                                <small> {artist.genre} </small>
                                <Area>
                                    <Albuns>
                                        <strong> All albums: </strong>
                                        <ol>
                                            {artist.albums.map((album) => (
                                                <li key={album.id}>
                                                    <i>
                                                        {album.desc} -{' '}
                                                        <small>
                                                            {album.year}
                                                        </small>
                                                    </i>
                                                </li>
                                            ))}
                                        </ol>
                                    </Albuns>
                                    <Musics>
                                        <strong> Most played songs: </strong>
                                        <ol>
                                            {artist.toplyrics.map((music) => (
                                                <li key={music.id}>
                                                    <i> {music.desc} </i>
                                                </li>
                                            ))}
                                        </ol>
                                    </Musics>
                                </Area>
                            </Info>
                        </li>
                    ))}
                </ListArtists>
            )}
        </Container>
    );
}

export default Main;
