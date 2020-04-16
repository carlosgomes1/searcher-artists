import React from 'react';
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

function Main() {
    return (
        <Container>
            <Form>
                <div>
                    <input type="text" placeholder="Nome do artista" />
                    <input type="text" placeholder="Nome da música" />
                    <button type="button">
                        {' '}
                        <FaSearch /> Buscar{' '}
                    </button>
                </div>
            </Form>

            <ListArtists>
                <li>
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
                                    Test album here - <small> 2020 </small>{' '}
                                </i>
                                <i>
                                    {' '}
                                    Test album here - <small> 2020 </small>{' '}
                                </i>
                                <i>
                                    {' '}
                                    Test album here - <small> 2020 </small>
                                </i>
                                <i>
                                    {' '}
                                    Test album here - <small> 2020 </small>
                                </i>
                                <i>
                                    {' '}
                                    Test album here - <small> 2020 </small>
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
            </ListArtists>
        </Container>
    );
}

export default Main;
