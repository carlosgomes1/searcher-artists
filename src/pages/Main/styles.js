import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    width: 65%;
    margin: 40px auto;
    border-radius: 4px;
    min-height: 80px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 10px;

        input {
            flex: 1;
            height: 30px;
            margin-right: 10px;
            padding: 10px 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            height: 30px;
            width: 80px;

            background: #156acc;
            color: #fff;
            font-weight: bold;
            border: 1px solid #ccc;
            border-radius: 4px;

            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: space-around;

            &:hover {
                opacity: 0.7;
                transition: 0.3s;
            }
        }
    }
`;

export const ListArtists = styled.ul`
    display: flex;
    flex-direction: column;

    padding: 10px;

    list-style: none;

    li + li {
        margin-top: 10px;
    }

    li {
        display: flex;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        align-items: flex-start;

        img {
            width: 120px;
            background: #e9e9e9;
            border-radius: 50%;
        }
    }
`;

export const Info = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    margin-left: 20px;

    strong {
        font-size: 22px;
    }

    small {
        font-size: 12px;
        font-style: italic;
        color: #aaa;
    }
`;

export const Area = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    margin-top: 10px;
    border-top: 1px solid #ccc;
`;

export const Albuns = styled.div`
    display: flex;
    flex-direction: column;

    padding: 10px 0;

    strong {
        font-size: 18px;
        margin-bottom: 10px;
    }

    ol {
        li {
            border: 0;
            padding: 0 3px 0 0;

            i {
                font-size: 16px;
                font-style: italic;
                color: #333;
                margin-top: 6px;
            }
        }
    }
`;
export const Musics = styled.div`
    display: flex;
    flex-direction: column;

    padding: 10px 0;

    strong {
        font-size: 18px;
        margin-bottom: 10px;
    }

    ol {
        li {
            border: 0;
            padding: 0 3px 0 0;

            i {
                font-size: 16px;
                font-style: italic;
                color: #333;
                margin-top: 1px;
            }
        }
    }
`;
