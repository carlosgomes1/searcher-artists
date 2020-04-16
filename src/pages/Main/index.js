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

    useEffect(() => {
        console.log(artist);
        console.log(artist.length);
    }, [artist]);

    async function handleSearchArtist(e) {
        e.preventDefault();

        const searchOk = search.trim().toLowerCase().replace(' ', '-');

        try {
            const response = await api.get(`${searchOk}/index.js`);

            setArtist([
                ...artist,
                {
                    id,
                    photo: response.data.artist.pic_medium,
                    name: response.data.artist.desc,
                    genre: response.data.artist.genre[0].name,
                    albumns: response.data.artist.albums.item,
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
                        Esperando busca...{' '}
                    </strong>
                </div>
            ) : (
                <ListArtists>
                    {artist.map((artist) => (
                        <li key={artist.id}>
                            <img
                                src="https://i.pinimg.com/originals/66/c0/f3/66c0f3951cf18634e632c383284ab1f7.png"
                                alt="Bob esponja"
                            />
                            <Info>
                                <strong> Bob Esponja </strong>
                                <small> Desenho infantil </small>
                                <Area>
                                    <Albuns>
                                        <strong> Top albuns: </strong>
                                        <i>
                                            {' '}
                                            Test album here -{' '}
                                            <small> 2020 </small>{' '}
                                        </i>
                                        <i>
                                            {' '}
                                            Test album here -{' '}
                                            <small> 2020 </small>{' '}
                                        </i>
                                        <i>
                                            {' '}
                                            Test album here -{' '}
                                            <small> 2020 </small>
                                        </i>
                                        <i>
                                            {' '}
                                            Test album here -{' '}
                                            <small> 2020 </small>
                                        </i>
                                        <i>
                                            {' '}
                                            Test album here -{' '}
                                            <small> 2020 </small>
                                        </i>
                                    </Albuns>
                                    <Musics>
                                        <strong> Músicas mais tocadas: </strong>
                                        <i> Test musics here </i>
                                        <i> Test musics here </i>
                                        <i> Test musics here </i>
                                        <i> Test musics here </i>
                                        <i> Test musics here </i>
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
